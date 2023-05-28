const mongoose = require("mongoose");
const Joi = require("@hapi/joi");

const Schema = mongoose.Schema;

const CommentSchema = new Schema({
  name: String,
  email: String,
  message: String,
});

var Comment = mongoose.model("Comment", CommentSchema);

function validateComment(data) {
  const Schema = Joi.object({
    name: Joi.string().min(3).max(10).required(),
    email: Joi.string().email().min(3).max(20).required(),
    message: Joi.string().min(3).max(250).required(),
  });
  return Schema.validate(data, { abortEarly: false });
}

module.exports.Comment = Comment;
module.exports.validateComment = validateComment; //signup
