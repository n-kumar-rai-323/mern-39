
const userSvc = require("./user.service");

class UserController {

    async getAllUsers(req, res, next) {
        try {
            let filter = {};
            if (req.query.role) {
                filter = {
                    role: req.query.role
                }
            }
            if (req.query.search) {
                filter = {
                    ...filter,
                    $or: [
                        { name: new RegExp(req.query.search, "i") },
                        { email: new RegExp(req.query.search, "i") },
                        { location: new RegExp(req.query.search, "i") },
                        { address: new RegExp(req.query.search, "i") },
                        { bloodGroup: new RegExp(req.query.search, "i") },

                    ]
                }
            }
            let { data, pagination } = await userSvc.getAllRowsByFilter(filter, req.query);
            res.json({
                data: data,
                message: "Users fetched successfully",
                status: "Success",
                options: {
                    pagination: pagination
                }
            });
        } catch (exception) {
            next(exception);
        }
    }

    async getSingleUserById(req, res, next) {
        try {
            const userId = await userSvc.getSingleRowByfilter({
                _id:req.params.id
            })
            if(!userId){
                throw {
                    code: 404,
                    message: "User not found",
                    status: "Fail",
                    data: null,
                    options: null,
                }
            }else{
                res.json({
                    data: userSvc.getUserPublicProfile(userId),
                    message: "User fetched successfully",
                    status: "Success",
                    options: null
                });
            }
        } catch (exception) {
            next(exception);
        }
    }

    async updateUserById(req, res, next) {
        try {
            
        } catch (exception) {
            next(exception);
        }
    }
}
const userCtrl = new UserController();

module.exports = userCtrl;