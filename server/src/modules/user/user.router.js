const userRouter = require("express").Router();
const {UserRole}=require("../../config/constants");
const userCtrl = require("./user.controller");
const auth = require("../../middlewares/auth.middleware");
const uploader=require("../../middlewares/uploader.middleware");
const { UserUpdateDTO } = require("./user.validator");
const bodyValidator = require("../../middlewares/request-validator.middleware");


userRouter.get('/', auth([UserRole.ADMIN]), userCtrl.getAllUsers);
userRouter.get('/:id', auth(), userCtrl.getSingleUserById);
userRouter.put('/:id', auth([UserRole.ADMIN]), uploader().single("image"),bodyValidator(UserUpdateDTO), userCtrl.updateUserById);


module.exports = userRouter;