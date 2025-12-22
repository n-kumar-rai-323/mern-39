const { AppConfig } = require("../../config/config")
const { UserStatus } = require("../../config/constants");
const authSvc = require("./auth.service");
const bcrypt = require("bcryptjs");
const jtw = require("jsonwebtoken");

class AuthController {
  registerUser = async (req, res, next) => {
    try {
      // Transform user data (handle image, password, etc.)
      const payload = await authSvc.transformUserData(req);

      // Save user in database
      const userObj = await authSvc.dataStore(payload);
      await authSvc.activationNotification(userObj)
      res.status(201).json({
        data: userObj,
        message: "User registered successfully",
        status: "Success",
        options: null,
      });
    } catch (exception) {
      next(exception);
    }
  };
  activateUser = async (req, res, next) => {
    try {
      const token = req.params.token;
      let userInfo = await authSvc.getSingleRowByfilter({
        activationCode: token,
      })
      if (!userInfo) {
        throw {
          code: 404,
          message: "Invalid Token",
          status: "Fail",
          data: null,
          options: null,
        }
      }

      userInfo = await authSvc.updateOneByFilter({
        _id: userInfo._id
      }, {
        activationCode: null,
        status: UserStatus.ACTIVE
      })

      await authSvc.notifyActivationSuccess(userInfo)
      res.json({
        data: userInfo,
        message: "Account activated successfully",
        status: "Success"
      })
    } catch (exception) {
      next(exception);
    }
  }
  login = async (req, res, next) => {
    try {
      const { email, password } = req.body;
      const userDetails = await authSvc.getSingleRowByfilter({ email: email })
      if (!userDetails) {
        throw {
          code: 422,
          message: "User not registered",
          status: "User not registered",
          data: null,
          options: null,
        }
      }
      if (!bcrypt.compareSync(password, userDetails.password)) {
        throw {
          code: 422,
          message: "Invalid password",
          status: "Fail",
          data: null,
          options: null
        }
      }
      if (userDetails.status !== UserStatus.ACTIVE || userDetails.activationCode !== null) {
        throw {
          code: 403,
          message: "Account is not activated",
          status: "Fail",
          data: null,
          options: null
        }
      }

      let accessToken = jtw.sign({
        sub: userDetails._id,
        type: "Bearer"
      }, AppConfig.jwtSecret, {
        expiresIn: "1hr"
      })

      let refreshToken = jtw.sign({
        sub: userDetails._id,
        type: "Refresh"
      }, AppConfig.jwtSecret, {
        expiresIn: "2hr"
      })

      res.json({
        data: {
          accessToken,
          refreshToken
        },
        message: "Login successful",
        status: "Success"
      })
    } catch (exception) {
      next(exception);
    }
  }
  getLoggedInUserProfile = (req, res, next) => {
    try {
      res.json({
        data: req.loggedInUser,
        message: "User profile fetched successfully",
        status: "Success"
      })
    } catch (exception) {
      next(exception)
    }
  }
  // forgotPassword = async(req,res,next)=>{
  //   try {
  //     const {email}= req.body;
  //     const userDetails = await authSvc.getSingleRowByfilter({ email: email })
  //     if (!userDetails) {
  //       throw {
  //         code: 404,
  //         message: "User not found",
  //         status: "Fail",
  //         data: null,
  //         options: null
  //       }
  //     }
  //     // Generate a password reset token
  //     const resetToken = authSvc.generateResetToken(userDetails._id);
  //     // Send the reset token to the user's email
  //     await emailSvc.sendEmail({
  //       to: email,
  //       subject: "Password Reset",
  //       message: `
  //         <p>You requested a password reset. Click the link below to reset your password:</p>
  //         <a href="${process.env.FRONTEND_URL}/reset-password/${resetToken}">Reset Password</a>
  //       `
  //     });
  //     res.json({
  //       message: "Password reset email sent successfully",
  //       status: "Success"
  //     });
  //   } catch (error) {
  //     next(error);
  //   }
  // }
}
const authCtl = new AuthController();
module.exports = authCtl;
