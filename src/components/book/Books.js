import React from 'react'
import { Container, Row } from 'react-bootstrap'
import BookList from './BookList'
import BookForm from './BookForm'

export const Books = () => {
    return (
        <Container>
            <Row>
                <BookForm/>
            </Row>
            
            <Row>
                <BookList/>
            </Row>
        </Container>
    )
}

export default Books;