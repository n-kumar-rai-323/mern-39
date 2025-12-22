const BaseService = require('../../services/base.service');
const UserModel = require("../user/user.model");
const cloudinarySvc = require("../../services/cloudinary.service");
const brcypt = require("bcryptjs");
const { UserStatus } = require("../../config/constants");
const { randomStringGenerator } = require("../../utilities/helplers");
const emailSvg=require("../../services/email.service");

class AuthService extends BaseService{
    transformUserData=async(req)=>{
        try {
            let payload = req.body;
            payload.image = await cloudinarySvc.uploadFile({file: req.file.path,dir: "user",});
            payload.password = brcypt.hashSync(payload.password, 12);
            payload.status = UserStatus.INACTIVE;
            payload.activationCode = randomStringGenerator(100)
            return payload
        } catch (exception) {
            throw exception
        }
    }

    activationNotification = async(user)=>{
        try{
            const response = await emailSvg.sendEmail({
                to: user.email,
                subject: "Account Activation",
                message: `
                    <div style="font-family: Arial, sans-serif; background: #f9f9f9; padding: 24px; border-radius: 8px;">
                        <h1 style="color: #2d8cf0;">Hello ${user.name}</h1>
                        <p style="color: #333;">Please activate your account using the following code:</p>
                        <a href="${process.env.FRONTEND_URL}activate/${user.activationCode}" target="_blank" style="display: inline-block; background: #2d8cf0; color: #fff; padding: 12px 24px; border-radius: 4px; text-decoration: none; font-weight: bold;">
                            Activate Account
                        </a>
                        <p style="margin-top: 16px; color: #333;">Or use the code:</p>
                        <div style="font-size: 20px; font-weight: bold; color: #e67e22; background: #fffbe6; padding: 8px 16px; border-radius: 4px; display: inline-block;">
                            ${user.activationCode}
                        </div>
                    </div>
                `
            });
        }catch(exception){
            throw exception
        }
    }

    notifyActivationSuccess = async(user)=>{
        try{
            return await emailSvg.sendEmail({
                to: user.email,
                subject: "Account Activated Successfully",
                message: `
                    <div style="font-family: Arial, sans-serif; background: #f9f9f9; padding: 24px; border-radius: 8px;">
                        <h1 style="color: #2d8cf0;">Hello ${user.name}</h1>
                        <p style="color: #333;">Your account has been activated successfully!</p>
                    </div>
                `
            });
        }catch(exception){
            throw exception
        }
    }


    getUserPublicProfile=(user)=>{
        return {
            _id: user._id,
            name: user.name,
            email: user.email,
            role: user.role,
            bloodGroup: user.bloodGroup,
            location: user.location,
            image: user.image,
            status: user.status    
        }
    }
}
const authSvc = new AuthService(UserModel)
module.exports = authSvc;