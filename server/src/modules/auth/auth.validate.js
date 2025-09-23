const Joi = require("joi")
const { UserRole, BloodGroup } = require("../../config/constants")

const userRegisterDTO = Joi.object(
    {
        name: Joi.string().min(2).max(50).required(),
        email: Joi.string().email().required(),
        password: Joi.string().required(),
        confirmPassword: Joi.string().allow(Joi.ref("password")).required(),
        phone: Joi.string().allow(null, '').optional().default(null),
        role: Joi.string().allow(UserRole.DONOR, UserRole.RECEIVER, UserRole.ADMIN).default(UserRole.RECEIVER),
        bloodGroup: Joi.string().valid(...Object.values(BloodGroup)).required(),
        location: Joi.string().max(100).required(),
    }
)

module.exports={userRegisterDTO}