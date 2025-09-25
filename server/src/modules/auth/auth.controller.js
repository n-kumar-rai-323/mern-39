const cloudinarySvc = require("../../services/cloudinary.service");
const brcypt = require("bcryptjs")

class AuthController {
    registerUser = async (req, res, next) => {
        try {
            let payload = req.body;
            payload.image = await cloudinarySvc.uploadFile({
                file: req.file.path,
                dir: "user",
            });

            payload.password = brcypt.hashSync(payload.password, 12)
            res.json({
                data: payload,
                message: "Auth Route",
                status: "Success",
                options: null
            });

        } catch (exception) {
            
            next(exception)
        }
    }
}

const authCtl = new AuthController();
module.exports = authCtl;
