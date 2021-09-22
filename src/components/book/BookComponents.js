import React from "react";
import { Card, Button, Col } from 'react-bootstrap'
import './BookComponent.css'

// const BookComponent = ( title, description) => { // kalau gini dibawahnya langsung title gausah props.title
const BookComponent = (props) => {
    

    // const imgUrl = 'https://avatars.githubusercontent.com/u/90153758?s=200&v=4';

    return (
        <>
        <Col lg={3} md={6}>
            
            <Card className="book-card mt-5">
                <Card.Img variant="top" src={props.image} />
                <Card.Body>
                    <Card.Title>{props.title}</Card.Title>
                    <Card.Text>
                        {props.description}
                    </Card.Text>
                    <Button variant="primary">Apply</Button>
                </Card.Body>
            </Card>
            
        </Col>
        </>
    )

}

export default BookComponent;