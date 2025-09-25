const bodyValidator = require("../../middlewares/request-validator.middleware")
const uploader = require("../../middlewares/uploader.middleware")
const authCtl = require("./auth.controller")

const authRouter = require("express").Router()
const {userRegisterDTO}= require("./auth.validate")




authRouter.post("/register",uploader().single("image"),bodyValidator(userRegisterDTO), authCtl.registerUser)

module.exports = authRouter