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
      alerts: {
        success: false,
        error: false
      }
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
          books: res.data.books
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

  //book parameter is passed in onClick in AddBook.js
  addBookToLibrary = async book => {
    console.log("line 49 AddBookContainer ", typeof book);
    console.log(`I am ${book} getting passed into addBookToLibrary`);
    console.log(
      `Start adding book (title: ${book.title}, author: ${
        book.authors
      }) to home library`
    );
    const endpoint = "http://localhost:4000/api/books/";
    const authToken = localStorage.getItem("jwt");
    const axiosResponse = await axios
      .post(endpoint, book, { headers: { authorization: `${authToken}` } })
      .then(res =>
        this.setState(
          { alert: { success: true, error: false } },
          console.log("Book added to home library")
        )
      )
      .catch(err => this.setState({ alert: { error: true, success: false } }));
  };

  render() {
    return (
      <main className="add-book-container container">
        <h2>What books do you want to lend out?</h2>
        <p>
          Search Goodreads' database to find a book you currently own and would
          like to make available for your neighbors to borrow.
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
        <section className="goodreads-search-results-container shelf">
          {this.state.books.map(book => {
            return (
              <AddBook
                key={book.goodreadsId}
                cover={book.covers[0]}
                title={book.title}
                authors={book.authors}
                addBookToLibrary={this.addBookToLibrary}
              />
            );
          })}
        </section>
      </main>
    );
  }
}

export default AddBookContainer;
