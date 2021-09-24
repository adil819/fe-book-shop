import React, {useState, useEffect} from 'react'
import BookComponent from "./BookComponents";
import {books} from "../../api/books";
import { Link } from 'react-router-dom'
import { Row, Container, Modal } from "react-bootstrap"
import bookService, { deleteBook } from "../../api/bookService"
import { getListBook } from "../../api/bookService"
import ModalComponent from '../modal/ModalComponent';

const BookList = ({match}) => {

  const { path } = match;
  const [books, setBooks] = useState([]);
  // const [modalShow, setModalShow]

  useEffect(() => {
    getListBook()
      loadData();
      // .then((response) => {
      //   console.log(response.data)
      //   setBooks(response.data)
      // })
  }, [])

  const loadData = () => {
    getListBook()
      .then((response) => {
        console.log(response.data)
        setBooks(response.data)
      })
  }

  const bookDelete = (id) => {
    return deleteBook(id) 
      .then(response => {
        loadData();
      })
  }

  // const handleDeleteTrue = () => {
  //   if (modalShow.show && modalShow.id){
  //     bookDelete(modalShow.id)
  //     setModalShow({
  //       show:false,
  //       id:null
  //     })
  //   }
  // }

  

    return (    
      <Container>
        <h3>Book Page</h3>
        <Link to={`${path}/add`} className="btn btn-success mb-3 text-uppercase">Add Book</Link>
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
                    pages={book.pages}
                    language={book.language}
                    stock={book.stock}
                    price={book.price}
                    purchaseAmount={book.purchaseAmount}
                    // image={tmpImage}
                    path={path}
                    handleDelete={bookDelete}
                    variant="primary"/>
                  )
            }
            {/* {
              modalShow.show && {
                <ModalComponent show={modalShow} handleDeleteTrue={handleDeleteTrue} onHide={()} => setModalShow(false)}
            } */}
            {
              books && !books.length && <h4>No Book Display</h4>
            }
        </Row>
      </Container>
      
    );
}

export default BookList;

