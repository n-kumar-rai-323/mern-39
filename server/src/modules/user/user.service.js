const BaseService = require("../../services/base.service");
const UserModel = require("./user.model");
class UserService extends BaseService {
    
    getUserPublicProfile = (user) => {
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

const userSvc = new UserService(UserModel
);
module.exports = userSvc;