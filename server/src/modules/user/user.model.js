const mongoose = require("mongoose");
const { UserRole, Gender, UserStatus, BloodGroup } = require("../../config/constants");
const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    minlength: 2,
    maxlength: 50,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: [UserRole.ADMIN, UserRole.DONOR, UserRole.RECEIVER, UserRole.USER], // added USER here
    default: UserRole.USER,
  },
  gender: {
    type: String,
    enum: [Gender.MALE, Gender.FEMALE, Gender.OTHER],
    required: true
  },
  bloodGroup: {
    type: String,
    enum: [BloodGroup.A_POS, BloodGroup.A_NEG, BloodGroup.B_POS, BloodGroup.B_NEG, BloodGroup.AB_POS, BloodGroup.AB_NEG, BloodGroup.O_POS, BloodGroup.O_NEG],
    required: true
  },
  age: {
    type: Number,
    min: 0,
    required: true
  },
  phone: {
    countryCode: Number,
    phone: Number
  },
  location: {
    type: String,
    required: true
  },
  image: {
    url: String,
    optimizedUrl: String,
  },
  status: {
    type: String,
    enum: [UserStatus.ACTIVE, UserStatus.INACTIVE],
    default: UserStatus.INACTIVE
  },
  activationCode: String,
  forgetPasswordCode: String,
  expiryDate: Date,
}, {
  timestamps: true,
  autoIndex: true,
  autoCreate: true
});

const UserModel = mongoose.model("User", UserSchema);

module.exports = UserModel;
