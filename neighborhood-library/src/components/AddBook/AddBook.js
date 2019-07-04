/* This component renders 1 book from the list of search results from the Goodreads API.

/* You can add a book to your library from this component */

import React from "react";

const AddBook = props => {
  return (
    <div className="add-book book">
      <div className="book-top">
        <img className="book-cover" src={props.cover} alt="cover" />
      </div>
      <div className="book-bottom">
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

// import React, { Component } from "react";
// import axios from "axios";

// class AddBook extends Component {
//   constructor(props) {
//     super(props);
//     state = {
//       title: this.props.title,
//       authors: this.props.authors,
//       ISBN: "0",
//       cover: this.props.cover,
//       user_id: localStorage.getItem("id")
//     };
//   }

//   addBookToLibrary = async () => {
//   const book = this.state;
//   const endpoint = "http://localhost:4000/api/books/";
//   const authToken = localStorage.getItem("jwt");
//   await axios
//     .post(endpoint, book, { headers: { authorization: `${authToken}` } })
//     .then(res => console.log("book added to library"))
//     .catch(err => console.log(err, "front end book post"));
// };

//   render() {
//     return (
//
//     );
//   }
// }

// export default AddBook;
