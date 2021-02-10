const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, data: Buffer },
  link: { type: String }
});

const Book = mongoose.model("books", bookSchema);

module.exports = Book;


//title, author, image, description, link 