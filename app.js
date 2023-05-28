const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/book-routes");
const router1 = require("./routes/user-routes");
const router2 = require("./routes/comment-routes");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());
app.use("/books", router);
app.use("/users", router1);
app.use("/comment", router2);

mongoose
  .connect("mongodb://localhost:27017/BookStore")
  .then(() => console.log("Connected to database"))
  .then(() => app.listen(3300))
  .catch((error) => console.log(error));
