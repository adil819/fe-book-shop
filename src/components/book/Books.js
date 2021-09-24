import React, {useState} from 'react'
import { Container, Row, Button } from 'react-bootstrap'
import BookList from './BookList'
import BookForm from './BookForm'
import { BrowserRouter, Switch, Route } from "react-router-dom"
import { Link } from 'react-router-dom'

export const Books = () => {



    // const eventCreateBook = (book) => {
    //     setBooks(getBooks.concat(book))
    //     console.log(getBooks);
    // }

    return (
        <div>

        </div>
        // <Container>
        //     <Row>
        //         <Link to="/add">
        //             <Button>Add Book</Button>
        //         </Link>
        //     </Row>
            
        //     <Row>
        //         <BookList dataBooks={getBooks}/>
        //     </Row>
        // </Container>
    )
}

export default Books;