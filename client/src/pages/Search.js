import React, { useEffect, useState } from "react";
import Jumbotron from "../components/Jumbotron";
import DeleteBtn from "../components/DeleteBtn";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";
import SearchBar from '../components/SearchBar';
import Results from '../components/Results'
import Nav from "../components/Nav";

function Search() {
  // Setting our component's initial state
  const [books, setBooks] = useState([])
  const [formObject, setFormObject] = useState([])

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

// const onChange = event => setFormObject(event.target.value);


  return (
    <Container fluid>
      <Nav />
      <Row className="row">
        <Col size="md-12">
          <Jumbotron>
            <h1>(React) Google Books Search</h1>
            <p>Search for and Save Books of Interest</p>
          </Jumbotron>
          <SearchBar />
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
                    <DeleteBtn onClick={() => { }} />
                  </ListItem>
                );
              })}
            </List>
          ) : (
              // <h3>No Results to Display</h3>
              <Results />
            )}
        </Col>
      </Row>
    </Container>
  );
}


export default Search;
