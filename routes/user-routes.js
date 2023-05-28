const express = require("express");
const router1 = express.Router();
const User = require("../model/User");
var bcrypt = require("bcryptjs");
const _ = require("lodash");
const jwt = require("jsonwebtoken");
const config = require("config");

router1.get("/", async (req, res, next) => {
  let users;
  try {
    users = await User.find();
    res.json(users);
  } catch (err) {
    console.log(err);
  }

  // if (!users) {
  //   return res.status(404).json({ message: "No User Found" });
  // } else {
  //   return res.status(200).json({ users });
  // }
});

router1.post("/register", async (req, res, next) => {
  const { name, email, password, role } = req.body;
  let user = await User.findOne({ email: email });
  if (user) return res.status(400).send("User with given email already exists");
  try {
    user = new User();
    user.name = name;
    user.email = email;
    user.password = password;
    user.role = role;
    let salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);
    await user.save();
    let userToken = jwt.sign(
      {
        _id: user._id,
        name: user.name,
        role: user.role,
      },
      config.get("jwtPrivateKey")
    );
  } catch (error) {
    console.log(error);
  }

  if (!user) {
    return res.status(500).json({ message: "Unable to add" });
  } else {
    // return res.send(_.pick(user, ["name", "email", "role"]));
    let datatoReturn = {
      name: user.name,
      email: user.email,
      token: user.token,
    };
    res.send(datatoReturn);
  }
});

router1.post("/login", async (req, res, next) => {
  let user = await User.findOne({ email: req.body.email });
  if (!user) return res.status(400).send("User not registered");
  let isValid = await bcrypt.compare(req.body.password, user.password);
  if (!isValid) return res.status(401).send("Invalid Password");
  let token = jwt.sign(
    { _id: user._id, name: user.name, role: user.role },
    config.get("jwtPrivateKey")
  );
  res.send(token);
});

router1.get("/:id", async (req, res, next) => {
  const id = req.params.id;
  let user;
  try {
    user = await User.findById(id);
  } catch (error) {
    console.log(error);
  }
  if (!user) {
    return res.status(404).json({ message: "No User Found" });
  } else {
    return res.status(300).json({ user });
  }
});

router1.put("/:id", async (req, res, next) => {
  const id = req.params.id;
  const { name, email, password, role } = req.body;

  let user;
  try {
    user = await User.findByIdAndUpdate(id, {
      name,
      email,
      password,
      role,
    });
    user = await user.save();
  } catch (error) {
    console.log(error);
  }

  if (!user) {
    res.status(404).json({ message: "No User Found" });
  } else {
    res.status(200).json({ user });
  }
});

router1.delete("/:id", async (req, res, next) => {
  const id = req.params.id;

  let user;
  try {
    user = await User.findByIdAndDelete(id);
  } catch (error) {
    console.log(error);
  }
  if (!user) {
    res.status(404).json({ message: "No User Found" });
  } else {
    res.status(200).json({ user });
  }
});

module.exports = router1;
