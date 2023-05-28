const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: String,
  email: String,
  password: String,
  role: {
    type: String,
    default: "user",
  },
});

function validateUser(data) {
  const Schema = Joi.object({
    name: Joi.string().min(3).max(10).required(),
    email: Joi.string().email().min(3).max(10).required(),
    password: Joi.string().min(3).max(10).required(),
    role: Joi.string(),
  });
  return Schema.validate(data, { abortEarly: false });
}

function validateUserLogin(data) {
  const Schema = Joi.object({
    email: Joi.string().email().min(3).max(10).required,
    password: Joi.string().min(3).max(10).required(),
  });
  return Schema.validate(data, { abortEarly: false });
}

module.exports = mongoose.model("User", userSchema);
module.exports.validate = validateUser; //signup
module.exports.validateUserLogin = validateUserLogin; //for login
