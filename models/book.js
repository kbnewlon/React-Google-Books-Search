const mongoose = require("mongoose");
const Schema = mongoose.Schema;


//title, author, image, description, link 
const bookSchema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, data: Buffer },
  link: { type: String }
});
//books connects to schema on mongoDB googlebooksDB
const Book = mongoose.model("books", bookSchema);

module.exports = Book;