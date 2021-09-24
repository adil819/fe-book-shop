import React, {useState, useEffect} from 'react'
import BookComponent from "./BookComponents";
import {books} from "../../api/books";
import { Link } from 'react-router-dom'
import { Row, Container } from "react-bootstrap"
import bookService from "../../api/bookService"
import { getListBook } from "../../api/bookService"

const BookList = () => {

  const [books, setBooks] = useState([]);

  useEffect(() => {
    getListBook()
      // console.log('Data :', response.data))
      .then((response) => setBooks(response.data))
      
        
  }, [])

    return (    
      <Container>
        <h3>Book Page</h3>
        <Link to="/books/add" className="btn btn-success mb-3 text-uppercase">Add Book</Link>
        <Row className="mt-5">
            {
                books.map(book => 
                  <BookComponent 
                    key={book.id}
                    bookId={book.id}
                    title={book.title} 
                    description={book.description} 
                    publisher={book.publisher}
                    year={book.year}
                    page={book.pages}
                    language={book.language}
                    stock={book.stock}
                    price={book.price}
                    variant="primary"/>
                  )
            }
            {
              books && !books.length && <h4>No Book Display</h4>
            }
        </Row>
      </Container>
      
    );
}

export default BookList;

