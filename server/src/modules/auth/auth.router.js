const bodyValidator = require("../../middlewares/request-validator.middleware")
const uploader = require("../../middlewares/uploader.middleware")
const authCtl = require("./auth.controller")
const authRouter = require("express").Router()
const auth = require("../../middlewares/auth.middleware")

const {userRegisterDTO,LoginDTO}= require("./auth.validate")



authRouter.post("/register",uploader().single("image"),bodyValidator(userRegisterDTO), authCtl.registerUser)
authRouter.get("/activate/:token", authCtl.activateUser)

authRouter.post("/login",bodyValidator(LoginDTO),authCtl.login)
authRouter.get("/me", auth(), authCtl.getLoggedInUserProfile)
// authRouter.post("/forgot-password", bodyValidator(ForgetPasswordDTO), authCtl.forgotPassword)


module.exports = authRouter