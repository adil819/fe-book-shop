import React from "react";
import { Card, Button, Col } from 'react-bootstrap'
import './BookComponent.css'
import { Link } from 'react-router-dom'

// const BookComponent = ( title, description) => { // kalau gini dibawahnya langsung title gausah props.title
const BookComponent = (props) => {
    

    // const imgUrl = 'https://avatars.githubusercontent.com/u/90153758?s=200&v=4';

    return (
        
        <Col lg={3} md={6}>
            
            <Card className="book-card mt-5 mb-3">
                {/* <Card.Img variant="top" className="book-img" src={props.image} /> */}
                <Card.Body className="book-body">
                    <Card.Title>{props.title}</Card.Title>
                    <Card.Title>{props.title}</Card.Title>
                    <Card.Text>
                        {props.description}
                    </Card.Text>
                    <Card.Text> Publisher :  <i>{props.publisher}</i> </Card.Text>
                    <Card.Text> Tahun Terbit : <i>{props.year}</i> </Card.Text>
                    <Card.Text> Jumlah Halaman : <i>{props.page}</i> </Card.Text>
                    <Card.Text> Bahasa : <i>{props.language}</i> </Card.Text>
                    <Card.Text> Stok : <i>{props.stock}</i> </Card.Text>
                    <Card.Text> Harga : Rp. <i>{props.price}</i> </Card.Text>
                    <Link to={`/books/${props.bookId}`} className="btn btn-primary">Detail</Link>
                </Card.Body>
            </Card>
            
        </Col>
        
    )

}

export default BookComponent;