const express = require("express");
const router = express.Router();
const { Book, validateProduct } = require("../model/Book");
const auth = require("../middleware/auth");
const admin = require("../middleware/admin");
const jwt = require("jsonwebtoken");
const config = require("config");
const User = require("../model/User");

router.get("/", async (req, res, next) => {
  try {
    let book = await Book.find();
    res.json(book);
  } catch (err) {
    console.log(err);
  }

  // if (!book) {
  //   return res.status(404).json({ message: "No Products Found" });
  // } else {
  //   return res.status(200).json({ books });
  // }
});

router.post("/", async (req, res, next) => {
  const { name, author, description, price, available, image } = req.body;
  let { error } = validateProduct(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  try {
    let book = new Book({
      name,
      author,
      description,
      price,
      available,
      image,
    });
    const saved = await book.save();
    res.json(saved);
  } catch (error) {
    console.log(error);
  }

  // if (!book) {
  //   return res.status(500).json({ message: "Unable to add" });
  // } else {
  //   return res.status(201).json({ book });
  // }
});

router.get("/:id", async (req, res, next) => {
  const id = req.params.id;
  let book;
  try {
    book = await Book.findById(id);
    res.json(book);
  } catch (error) {
    console.log(error);
  }
  // if (!book) {
  //   return res.status(404).json({ message: "No Book Found" });
  // } else {
  //   return res.status(300).json({ book });
  // }
});

router.put("/:id", async (req, res, next) => {
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
    const saved = await book.save();
    res.json(saved);
  } catch (error) {
    console.log(error);
  }

  // if (!book) {
  //   return res.status(404).json({ message: "Unable to update the book" });
  // } else {
  //   return res.status(200).json({ book });
  // }
});

router.delete("/:id", async (req, res, next) => {
  const id = req.params.id;
  let book;
  try {
    book = await Book.findByIdAndDelete(id);
    res.json(book);
  } catch (error) {
    console.log(error);
  }

  // if (!book) {
  //   return res.status(404).json({ message: "No Book Found" });
  // } else {
  //   return res.status(200).json({ book });
  // }
});

module.exports = router;
