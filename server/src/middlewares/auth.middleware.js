const { verify } = require("jsonwebtoken");
const { AppConfig } = require("../config/config")
const authSvc = require("../modules/auth/auth.service");
const { UserRole } = require("../config/constants");
const auth = (role = null) => {
    return async (req, res, next) => {
        try {
            let token = req.headers['authorization'];
            if (!token) {
                throw {
                    code: 401,
                    message: "Authorization token is missing",
                    status: "Fail",
                    data: null,
                    options: null
                }
            }
            // token verify
            token = token.split(" ").pop();
            const decoded = verify(token, process.env.JWT_SECRET);
            if (!decoded) {
                throw {
                    code: 403,
                    message: "Bearer type accepted",
                    status: "Access Denied",
                    data: null,
                    options: null
                }
            }
            const userDetails = await authSvc.getSingleRowByfilter({ _id: decoded.sub });
            if (!userDetails) {
                throw {
                    code: 404,
                    message: "User not found",
                    status: "Fail",
                    data: null,
                    options: null
                }
            }

            req.loggedInUser = authSvc.getUserPublicProfile(userDetails);
            if (userDetails.role === UserRole.ADMIN || role === null || role.includes(userDetails.role)) {
                next();
            } else {
                throw {
                    code: 403,
                    message: "Access Denied ",
                    status: "Fail",
                    data: null,
                    options: null
                }
            }
        } catch (exception) {
            let code = exception.code || 500;
            let status = exception.status || "error";
            next({
                code: code,
                message: exception.message || "Internal Server Error",
                status: status,
                data: null,
                options: null
            })
        }
    }
}

module.exports = auth;