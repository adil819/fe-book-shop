import React from 'react'
import BookComponent from "./BookComponents";
import {books} from "../../api/books";

export const BookList = ({ dataBooks}) => {

    return (    
      <>
        {
            dataBooks.map(book => 
              <BookComponent 
                key={book.id}
                title={book.title} 
                description={book.description} 
                image={book.image} 
                variant="primary"/>
              )
        }
        {
          books && !books.length && <h4>No Book Display</h4>
        }
      </>
    );
}

export default BookList;

