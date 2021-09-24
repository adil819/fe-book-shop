import React from 'react'
import { Row } from 'react-bootstrap'

function BookDetail( {match} ) {

    const {id} = match.params;
    
    return (
        <Row>
            <h3>Book Detail by ID {id}</h3>
        </Row>
    )
}

export default BookDetail
