/* This component renders 1 book from the list of search results from the Goodreads API.

/* You can add a book to your library from this component */

import React from "react";

const AddBook = props => {
  return (
    <div className="add-book book">
      <img className="book-cover" src={props.cover} alt="book cover" />

      <div className="book-data">
        <p>{props.title}</p>
        <p>by {props.authors}</p>

        <button
          onClick={() => {
            const book = {
              title: props.title,
              authors: props.authors,
              cover: props.cover
            };
            props.addBookToLibrary(book);
          }}
        >
          Add to Library
        </button>
      </div>
    </div>
  );
};

export default AddBook;
