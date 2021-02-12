import React, { useEffect, useState } from "react";
import Jumbotron from "../components/Jumbotron";
import DeleteBtn from "../components/DeleteBtn";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import Nav from "../components/Nav";
// import { Input, TextArea, FormBtn } from "../components/Form";


function Search() {
  // Setting our component's initial state
  const [books, setBooks] = useState([])
  // const [formObject, setFormObject] = useState("")

  // Load all books and store them with setBooks
  useEffect(() => {
    loadBooks()
  }, [])

  // Loads all books and sets them to books
  function loadBooks() {
    API.getBooks()
      .then(res =>
        setBooks(res.data)
      )
      .catch(err => console.log(err));
  };

  //functions for search bar

  // function handleChange(event) {
  //   const book = event.target.value;

  //   setBooks(books)
  // }
  // console.log(books)

  // function handleSubmit(event) {
  //   event.preventDefault();

  //   console.log(books)
  // }

  //delete book from DB
  function deleteBook(id) {
    API.deleteBook(id)
      .then(res => loadBooks())
      .catch(err => console.log(err));
  }


  return (
    <Container fluid>
      <Nav />
      <Row className="row">
        <Col size="md-12">
          <Jumbotron>
            <h1 className='header' style={{ color: 'white' }}>(React) Google Books Search</h1>
            <h3 className='subHeader' style={{ color: 'white' }}>Search for and Save Books of Interest</h3>
          </Jumbotron>


          {books.length ? (
            <List>
              {books.map(book => {
                return (
                  <ListItem key={book._id}>
                    <a href={"/books/" + book._id}>
                      <strong>
                        {book.title} by {book.author}
                      </strong>
                    </a>
                    <DeleteBtn onClick={() => deleteBook(book._id)} />                  </ListItem>
                );
              })}
            </List>
          ) : (
              <h3>No Results to Display</h3>
            )}
        </Col>

      </Row>
    </Container>
  );
}


export default Search;
