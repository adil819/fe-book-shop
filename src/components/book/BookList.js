import React from 'react'
import BookComponent from "./BookComponents";
import {books} from "../../api/books";

export const BookList = () => {

    return (    
            books.map(book => 
              <BookComponent 
                key={book.id}
                title={book.title} 
                description={book.description} 
                image={book.image} 
                variant="primary"/>
              )
    );
}

export default BookList;

