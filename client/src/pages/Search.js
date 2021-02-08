import React, { useEffect, useState } from "react";
import Jumbotron from "../components/Jumbotron";
import DeleteBtn from "../components/DeleteBtn";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import Nav from "../components/Nav";



//currently returning the same 10 books every time search is clicked 
//fixed needed to grab the search term and use that to concatenate the url

function Search() {
  // Setting our component's initial state
  //books is the typed search value
  const [books, setBooks] = useState("")
  const [results, setResults] = useState([])

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

  function handleChange(event) {
    const books = event.target.value;
  
    setBooks(books)
  }
  
  //upon clicking the search button this function uses a prevent default to keep the page from reloading twice.
  //it also pulls from the google books api the searched books
  function handleSubmit(event) {
    event.preventDefault();
    API.search(books)
    .then(data => {
      console.log(data.data.items)
      setResults(data.data.items)
      // console.log(data);
    })
    console.log(books)
  }
  


  return (
    <Container fluid>
      <Nav />
      <Row className="row">
        <Col size="md-12">
          <Jumbotron>
            <h1>(React) Google Books Search</h1>
            <p>Search for and Save Books of Interest</p>
          </Jumbotron>

        {/* searchBar */}
          <div className="searchContainer">
            <h2 className="searchHeader">Book Search</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group searchBar">
                    <input type="text" onChange={handleChange}
                        className="form-control"
                        placeholder="Search"
                        autoComplete="off" />
                    <button type="submit" className="btn btn-dark mt-2">Search</button>
                </div>
            </form>
        </div>



          {results.length ? (
            <List>
              {results.map(book => {
                return (
                  <ListItem key={book.id}>
                    <a href={book.volumeInfo.previewLink}>
                    <img src={book.volumeInfo.imageLinks?.thumbnail} alt={book.title}/>
                      <strong>
                        {book.volumeInfo.title} 
                      </strong>
                      <strong> Author(s):{book.volumeInfo.authors}</strong>
                      
                    </a>
                    <DeleteBtn onClick={() => { }} />
                  </ListItem>
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
