import React, { Component } from "react";

class SearchGoodreads extends Component {
  constructor() {
    super();
    this.state = {
      value: ""
    };
  }
  handleChange = event => {
    this.setState({ value: event.target.value });
  };
  handleSubmit = event => {
    event.preventDefault();
  };
  render() {
    return (
      <div>
        <form>
          <input
            placeholder="Search for books to add to your library"
            onChange={this.handleChange}
            value={this.state.value}
          />
          <button submit={this.handleSubmit}>Search</button>
        </form>
      </div>
    );
  }
}

export default SearchGoodreads;
