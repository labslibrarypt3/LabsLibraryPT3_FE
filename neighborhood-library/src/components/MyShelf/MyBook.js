//if this works on Loaned.js, Borrowed.js, and HomeLibrary.js, then use this for all 3 and delete the extras
import React, { Component } from "react";
import axios from "axios";
const baseUrl = process.env.REACT_APP_BASE_URL;

class MyBook extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  buttonClicked = () => {
    const authToken = localStorage.getItem("jwt");
    const book = this.props.bookId;
    const endpoint = `${baseUrl}/api/books/`;
    return axios.delete(endpoint, {
      headers: {
        Authorization: `${authToken}`,
        params: book
      }
    });
  };
  // get transaction by bookId then check if checked out.
  // If checked out is true change button text to checked out else
  // render delete.

  render() {
    return (
      <div key={this.props.bookId} className="book">
        <img src={this.props.cover} className="book-cover" alt="book cover" />
        <div className="book-data">
          <p className="book-title">{this.props.title}</p>
          <p className="book-authors">{this.props.authors}</p>
          <button onClick={this.buttonClicked}>Delete</button>
        </div>
      </div>
    );
  }
}
export default MyBook;
