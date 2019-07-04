/*
This component connects to the Goodreads API and returns a list of books based on the user's search results

If you need to make changes to a single result, please go to AddBook.js
 */
import React, { Component } from "react";
import axios from "axios";
import AddBook from "./AddBook";

class AddBookContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
      books: [],
      user_id: null
    };
  }

  // url: https://pt3-neighborhood-library-back.herokuapp.com/api/goodeads/search
  getData = async () => {
    const authToken = localStorage.getItem("jwt");
    await axios
      .get(`http://localhost:4000/api/goodreads/search`, {
        params: { q: this.state.query },
        headers: { authorization: authToken }
      })
      .then(res => {
        this.setState({
          books: res.data.books,
          user_id: localStorage.getItem("id")
        });
      })
      .catch(err => console.log(err));
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.getData();
  };

  render() {
    return (
      <div className="add-book page">
        <h2>Add a book to your library.</h2>
        <p>
          Search Goodreads' database to find a book you currently own and would
          like to make available for borrowing.
        </p>
        <form onSubmit={this.handleSubmit}>
          <input
            placeholder="Powered by Goodreads"
            onChange={this.handleChange}
            value={this.state.query}
            name="query"
          />
          <button type="submit">Search</button>
        </form>
        <div className="goodreads-search-results-container shelf">
          {this.state.books.map(book => {
            return (
              <AddBook
                key={book.goodreadsId}
                cover={book.covers[0]}
                title={book.title}
                authors={book.authors}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default AddBookContainer;