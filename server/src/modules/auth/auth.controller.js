class AuthController {
    registerUser = (req, res, next) => {
        res.json({
            data: null,
            message: "Auth Route",
            status: "Success",
            options: null
        });
    }
}

const authCtl = new AuthController();
module.exports = authCtl;
