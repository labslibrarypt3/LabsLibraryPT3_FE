/*
This component connects to the Goodreads API and returns a list of books based on the user's search results

If you need to make changes to a single result, please go to GoodreadsSearchResult.js
 */
import React, { Component } from "react";
import axios from "axios";
import GoodreadsSearchResult from "./GoodreadsSearchResult";

class SearchGoodreads extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
      books: []
    };
  }

  // url: https://pt3-neighborhood-library-back.herokuapp.com/api/goodeads/search
  getData = async () => {
    const axiosResponse = await axios
      .get(`http://localhost:4000/api/goodreads/search`, {
        params: { q: this.state.query }
      })
      .then(res => {
        this.setState({ books: res.data.books });
      })
      .catch(err => err.json({ error: err }));
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
      <div>
        <h2>Add a Book to your Library</h2>
        <p>I am a list of books you want to lend out to the community</p>
        <form onSubmit={this.handleSubmit}>
          <input
            placeholder="Search for books to add to your library"
            onChange={this.handleChange}
            value={this.state.query}
            name="query"
          />
          <button type="submit">Search</button>
        </form>
        <div className="goodreads-search-results-container">
          {this.state.books.map(book => {
            return (
              <GoodreadsSearchResult
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

export default SearchGoodreads;
