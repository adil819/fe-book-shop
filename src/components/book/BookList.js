import React, {useState} from 'react'
import BookComponent from "./BookComponents";
import {books} from "../../api/books";
import { Link } from 'react-router-dom'
import { Row, Container } from "react-bootstrap"

const BookList = () => {

  const [books, setBooks] = useState([
    {
        id: 1,
        title: 'Asesmen Pembelajaran Berbasis Komputer Dan Android',
        description: 'Implementasi Teknologi Informasi dan Komunikasi (TIK) pada lembaga pendidikan saat ini sudah menjadi keharusan, karena penerapan TIK dapat menjadi salah satu indikator keberhasilan suatu institusi pendidikan. Tidak sedikit dosen yang memanfaatkan kemajuan teknologi tersebut.',
        publisher: 'Media Pratama',
        year: 2018,
        page: 180,
        language: 'Indonesia',
        stock: 30,
        price: 170000
      },
      {
        id: 2,
        title: 'Pemrograman Web Seri Php: Langkah Mudah Dan Praktis Memahami',
        description: 'Saat ini, PHP banyak dipakai untuk membuat program situs web dinamis. Contoh aplikasi program PHP adalah forum (phpBB) dan MediaWiki (software di belakang Wikipedia). ',
        publisher: 'Enigma',
        year: 2020,
        page:90,
        language: 'Indonesia',
        stock: 90,
        price: 89000
      }
]);

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
                    page={book.page}
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

