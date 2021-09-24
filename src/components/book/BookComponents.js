import React from "react";
import { Card, Button, ButtonGroup, Col } from 'react-bootstrap'
import './BookComponent.css'
import { Link } from 'react-router-dom'
import { tmpImage } from '../../api/BookApi'
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
// npm install react-confirm-alert --save

// const BookComponent = ( title, description) => { // kalau gini dibawahnya langsung title gausah props.title
const BookComponent = (props) => {
    

   const confirmDelete = () => {
        confirmAlert({
          title: 'Confirm to delete',
          message: 'Are you sure? The book will disappear.',
          buttons: [
            {
              label: 'Yes',
              onClick: () => props.handleDelete(props.bookId)
            },
            {
              label: 'No',
            //   onClick: () => alert('Click No')
            }
          ]
        });
      };
    

    return (
        
        <Col lg={3} md={6}>
            
            <Card className="book-card mt-5 mb-3" style={{width:"16rem", height:"90%"}}>
                {/* <Card.Img variant="top" className="book-img" src={props.image} /> */}
                <Card.Body className="book-body">
                    <Card.Img variant="top" className="book-img" src={tmpImage} />
                    <Card.Text/>
                    <Card.Title>{props.title}</Card.Title>
                    <Card.Text>
                        {/* {props.description} */}
                    </Card.Text>
                    <Card.Text> oleh  <i>{props.publisher}</i> </Card.Text>
                    {/* <Card.Text> Tahun Terbit : <i>{props.year}</i> </Card.Text>
                    <Card.Text> Jumlah Halaman : <i>{props.pages}</i> </Card.Text>
                    <Card.Text> Bahasa : <i>{props.language}</i> </Card.Text> */}
                    <Card.Text> Stok : <i>{props.stock}</i> </Card.Text>
                    {/* <Card.Text> Harga Beli : Rp. <i>{props.price}</i> </Card.Text> */}
                    <Card.Text> Harga Jual : Rp. <i>{props.purchaseAmount}</i> </Card.Text>
                    <div className="d-flex justify-content-between align-items-center">
                        <ButtonGroup aria-label="Basic example">
                            <Link to={`/books/${props.bookId}`} className="btn btn-outline-primary">Detail</Link>
                            <Link to={`/books/edit/${props.bookId}`} className="btn btn-outline-warning">Update</Link>
                            {
                                props.purchaseAmount > 0 || props.purchaseAmount === null ?                                    
                                    <button onClick={() => props.handleDelete(props.bookId)} className="btn btn-sm btn-outline-danger" disabled={true}>
                                    Delete
                                    </button>
                                :
                                    <button onClick={confirmDelete} className="btn btn-sm btn-outline-danger">
                                    Delete
                                    </button>
                            }
                        </ButtonGroup>
                    {/* <small className="text-muted">Rp. {props.price}</small> */}
                    </div>
                </Card.Body>
            </Card>
            
        </Col>
        
    )

}

export default BookComponent;