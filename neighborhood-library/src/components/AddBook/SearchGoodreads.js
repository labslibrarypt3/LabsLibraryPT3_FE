import React, { Component } from "react";
import axios from "axios";

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
        params: { query: this.state.query }
      })
      .then(res => this.setState({ books: res.data.books }))
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
        <form onSubmit={this.handleSubmit}>
          <input
            placeholder="Search for books to add to your library"
            onChange={this.handleChange}
            value={this.state.query}
            name="query"
          />
          <button type="submit">Search</button>
        </form>
      </div>
    );
  }
}

export default SearchGoodreads;
