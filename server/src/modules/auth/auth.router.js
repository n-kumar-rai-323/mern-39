const bodyValidator = require("../../middlewares/request-validator.middleware")
const authCtl = require("./auth.controller")

const authRouter = require("express").Router()
const {userRegisterDTO}= require("./auth.validate")




authRouter.post("/register",bodyValidator(userRegisterDTO), authCtl.registerUser)

module.exports = authRouter