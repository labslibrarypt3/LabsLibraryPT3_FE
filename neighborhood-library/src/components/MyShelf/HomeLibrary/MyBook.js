import React from "react";
import axios from "axios";

const MyBook = props => {
  return (
    <div key={props.bookId} className="book">
      <div className="book-top">
        <img src={props.cover} className="book-cover" />
      </div>
      <div className="book-bottom">
        <p>{props.title}</p>
        <p>{props.authors}</p>
        <button
          onClick={function buttonClicked(e) {
            const book = props.bookId;
            console.log("buttonclicked", props.bookId);
            return axios({
              method: "DELETE",
              url: "http://localhost:4000/api/books/",
              data: {
                bookId: props.bookId
              }
            });
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
};
//'http://localhost:4000/api/books/'
export default MyBook;
