import React, { Component } from "react";
import axios from "axios";
import GoodreadsSearchResults from "./GoodreadsSearchResults";

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
        console.log("search submitted");
        this.setState({ books: res.data.books });
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
            console.log(book);
            return (
              <div className="goodreads-search-result">
                <p>{book.title}</p>
                <p>{book.authors}</p>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default SearchGoodreads;
