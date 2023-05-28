const { findByIdAndRemove } = require("../model/Book");
const { Book, validateProduct } = require("../model/Book");
const jwt = require("jsonwebtoken");
const config = require("config");
const User = require("../model/User");

const getAllBooks = async (req, res, next) => {
  let token = req.header("x-auth-token");
  if (!token) return res.status(400).send("Token Not Provided");
  try {
    let user = jwt.verify(token, config.get("jwtPrivateKey"));
    req.user = User.findById(user._id);
    console.log(user);
  } catch (error) {
    return res.status(401).send("Invalid Token");
  }

  if (req.user.role != "admin") {
    return res.status(403).send("You are not authorized");
  }
  let books;
  let page = req.query.page ? req.query.page : 1;
  let perPage = req.query.perPage ? req.query.perPage : 10;
  let skipRecords = perPage * (page - 1);
  try {
    books = await Book.find().skip(skipRecords).limit(perPage);
  } catch (err) {
    console.log(err);
  }

  if (!books) {
    return res.status(404).json({ message: "No Products Found" });
  } else {
    return res.status(200).json({ books });
  }
};

const addBook = async (req, res, next) => {
  const { name, author, description, price, available, image } = req.body;
  let { error } = validateProduct(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  let book;
  try {
    book = new Book({
      name,
      author,
      description,
      price,
      available,
      image,
    });
    await book.save();
  } catch (error) {
    console.log(error);
  }

  if (!book) {
    return res.status(500).json({ message: "Unable to add" });
  } else {
    return res.status(201).json({ book });
  }
};

const getById = async (req, res, next) => {
  const id = req.params.id;
  let book;
  try {
    book = await Book.findById(id);
  } catch (error) {
    console.log(error);
  }
  if (!book) {
    return res.status(404).json({ message: "No Book Found" });
  } else {
    return res.status(300).json({ book });
  }
};

const updateBook = async (req, res, next) => {
  const id = req.params.id;
  const { name, author, description, price, available, image } = req.body;
  let { error } = validateProduct(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  let book;
  try {
    book = await Book.findByIdAndUpdate(id, {
      name,
      author,
      description,
      price,
      available,
      image,
    });
    book = await book.save();
  } catch (error) {
    console.log(error);
  }

  if (!book) {
    return res.status(404).json({ message: "Unable to update the book" });
  } else {
    return res.status(200).json({ book });
  }
};

const deleteBook = async (req, res, next) => {
  const id = req.params.id;
  let book;
  try {
    book = await Book.findByIdAndDelete(id);
  } catch (error) {
    console.log(error);
  }

  if (!book) {
    return res.status(404).json({ message: "No Book Found" });
  } else {
    return res.status(200).json({ book });
  }
};
exports.getAllBooks = getAllBooks;
exports.addBook = addBook;
exports.getById = getById;
exports.updateBook = updateBook;
exports.deleteBook = deleteBook;
