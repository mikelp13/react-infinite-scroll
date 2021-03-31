import React from "react";

const BookList = ({ books, lastBookElementRef }) => (

  <ul className="list-group list-group-flush ">
    {books.map((book, index) => {
      if (books.length === index + 1) {
        return (
          <li ref={lastBookElementRef} key={book} className="list-group-item">
            {book}
          </li>
        );
      } else {
        return (
          <li key={book} className="list-group-item ">
            {book}
          </li>
        );
      }
    })}
  </ul>
);
export default BookList


