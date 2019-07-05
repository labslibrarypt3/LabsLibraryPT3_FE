import React, { Component } from "react";
import axios from 'axios';

import MapContainer from "./MapContainer";

class Search extends Component {
  state = {
    query: "",
    searchType: "books",
    mapProps: {}
  };

  handleInputChange = ({ target }) => {
    this.setState({
      [target.name]: target.value
    });
  };

  onSubmitHandler = () => {
    const { query, searchType } = this.state;
    axios
     .get(`http://localhost:4000/api/goodreads/search?q=${query}`)
     .then(({ data }) => {
       const book = data.books[0];
       // const {  } = book;
       console.log(data.books[0]);
     })
     .catch(err => {
       console.log(err);
     });
  };

  render() {
    const {
      query,
      mapProps: { searchQuery, searchType }
    } = this.state;
    return (
      <div>
        <input
          placeholder="Search for..."
          onChange={this.handleInputChange}
          name="query"
        />
        <select onChange={this.handleInputChange} name="searchType">
          <option>books</option>
          <option>User Libraries</option>
        </select>
        <button onClick={this.onSubmitHandler}>Submit</button>
        <p>{query}</p>
        {searchType && searchQuery && (
          <MapContainer searchQuery={searchQuery} searchType={searchType} />
        )}
      </div>
    );
  }
}

export default Search;
