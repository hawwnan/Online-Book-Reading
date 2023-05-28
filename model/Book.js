const mongoose = require("mongoose");
const Joi = require("@hapi/joi");

const Schema = mongoose.Schema;
const bookSchema = new Schema({
  name: String,
  author: String,
  description: String,
  price: Number,
  available: { type: Boolean, default: true },
  image: String,
  story: String,
});

var Book = mongoose.model("Book", bookSchema);

function validateProduct(data) {
  const schema = Joi.object({
    name: Joi.string().min(3).max(25),
    author: Joi.string().min(7).max(20),
    description: Joi.string().min(10).max(200),
    price: Joi.number().min(0),
    available: Joi.boolean(),
    image: Joi.string(),
    story: Joi.string(),
  });
  return schema.validate(data, { abortEarly: true });
}

module.exports.Book = Book;
module.exports.validateProduct = validateProduct;
