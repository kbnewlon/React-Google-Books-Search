import axios from "axios";
const BASEURL = "https://www.googleapis.com/books/v1/volumes?q=";
const BOOKURL = "https://www.googleapis.com/books/v1/volumes/";
const KEY = "&key=";
const APIKEY = "AIzaSyDmDHr4-clbDIhBsoLXM3t5TZfYdT0OFFo"

export default {
  // Gets all books
  getBooks: function() {
    return axios.get("/api/books");
  },
  // Gets the book with the given id
  getBook: function(id) {
    return axios.get("/api/books/" + id);
  },
  // Deletes the book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves a book to the database
  saveBook: function(bookData) {
    return axios.post("/api/books", bookData);
  }, 
  //Searches google books
  search: function (query) {
    return axios.get(BASEURL + query + KEY + APIKEY)
  },
  //returns the searched book
  singleBook: function (query){
    return axios.get(BOOKURL + query);
  }
};


