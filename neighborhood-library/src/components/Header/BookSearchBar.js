import React, { Component } from "react";

class BookSearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log("I am searching for neighborhood libraries");
  };

  render() {
    return (
      <form className="book-search-bar">
        <input
          onChange={this.handleChange}
          name="value"
          value={this.state.value}
        />
        <button>Search</button>
      </form>
    );
  }
}

export default BookSearchBar;
