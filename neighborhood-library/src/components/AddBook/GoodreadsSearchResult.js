/* This component renders 1 book from the list of search results from the Goodreads API.

You can add a book to your library from this component */

import React, { Component } from "react";
import axios from "axios";

class GoodreadsSearchResult extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.title,
      authors: this.props.authors,
      ISBN: "0",
      cover: this.props.cover,
      user_id: localStorage.getItem('id')
    };
  }

  addBookToLibrary = async () => {
    const book = this.state; 
    const axiosResponse = await axios
      .post("http://localhost:4000/api/books/", book,console.log(book, 'frontend obj'))
      .then(res => console.log ('book added to library'))
      .catch(err => console.log(err,'front end book post'));
  };

  render() {
    return (
      <div className="goodreads-search-result">
        <img className="book-cover" src={this.props.cover} alt="cover image" />
        <p>
          {this.props.title} by {this.props.authors}
        </p>
        <button onClick={this.addBookToLibrary}>Add to Library</button>
      </div>
    );
  }
}

export default GoodreadsSearchResult;
