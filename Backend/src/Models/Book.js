const mongoose = require("mongoose");

const { Schema } = mongoose;

const schema = new Schema(
  {
    title: "string",
    isbn: "string",
  },
  { timestamps: true }
);
const Book = mongoose.model("Book", schema);

module.exports = Book;
