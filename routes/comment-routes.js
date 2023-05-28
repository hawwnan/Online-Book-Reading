const express = require("express");
const router2 = express.Router();
const { Comment, validateComment } = require("../model/Comment");
const auth = require("../middleware/auth");
const admin = require("../middleware/admin");
const jwt = require("jsonwebtoken");
const config = require("config");

router2.get("/", async (req, res, next) => {
  try {
    let comment = await Comment.find();
    res.json(comment);
  } catch (err) {
    console.log(err);
  }
});

router2.post("/", async (req, res, next) => {
  const { name, email, message } = req.body;
  let { error } = validateComment(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  try {
    let comment = new Comment({
      name,
      email,
      message,
    });
    const saved = await comment.save();
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

module.exports = router2;
