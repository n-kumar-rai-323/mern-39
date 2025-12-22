const Joi = require("joi")
const { UserRole, BloodGroup } = require("../../config/constants")

const UserUpdateDTO = Joi.object(
    {
        name: Joi.string().min(2).max(50).required(),
        
        phone: Joi.object({
            countryCode: Joi.string(),
            phone: Joi.string().min(10).max(10)
        }).allow(null, "").default(null),
        role: Joi.string().allow(UserRole.DONOR, UserRole.RECEIVER, UserRole.ADMIN).default(UserRole.RECEIVER),
        bloodGroup: Joi.string().valid(...Object.values(BloodGroup)).required(),
        location: Joi.string().max(100).required(),
        gender: Joi.string().regex(/^(male|female|other)$/).optional(),
        age: Joi.number().min(0).max(150).required(),
    }
)

module.exports = { UserUpdateDTO }