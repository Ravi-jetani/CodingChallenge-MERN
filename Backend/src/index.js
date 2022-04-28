const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const { ObjectId } = require("mongoose").Types;

const Book = require("./Models/Book");
const Shelf = require("./Models/Shelf");

const app = express();
const port = 3100;
// DB Connection
app.use(cors());
mongoose.connect("mongodb://127.0.0.1:27017/challenge", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("Connected to DB");
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.get("/getShelfList", (req, res) => {
  Shelf.find({}, (err, shelf) => {
    if (err) return console.error(err);
    console.log(shelf);
    return res.status(200).send(shelf);
  });
});
app.get("/getShelf", (req, res) => {
  try {
    const { shelfId } = req.query;
    console.log(shelfId);
    Shelf.findById({ _id: shelfId }, (err, shelf) => {
      if (err) return console.error(err);
      console.log(shelf);
      return res.status(200).send(shelf);
    });
  } catch (err) {
    console.log(err);
    res.status(400).send(err);
  }
});
app.get("/getBooksByShelfId", (req, res) => {
  try {
    const { shelfId } = req.query;
    console.log(shelfId);
    const key = new ObjectId(shelfId);
    console.log("key: ", key);

    Book.find({ shelfId: key }, (err, shelf) => {
      if (err) return console.error(err);
      console.log(shelf);
      return res.status(200).send(shelf);
    });
  } catch (err) {
    console.log(err);
    res.status(400).send(err);
  }
});
app.get("/getBookById", (req, res) => {
  try {
    const { bookId } = req.query;
    console.log(bookId);
    const id = new ObjectId(bookId);
    console.log("key: ", id);

    Book.findById(id, (err, book) => {
      if (err) return console.error(err);
      console.log(book);
      return res.status(200).send(book);
    });
  } catch (err) {
    console.log(err);
    res.status(400).send(err);
  }
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
