import React from "react";
import Nav from "../Nav/Nav";
import MapsContainer from "./MapsContainer";

class Search extends Component {
  constructor() {
    super();
    this.state = {
      searchInput: ''
    }
  }

  handleInput = e => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit = e => {
    e.preventDefault();

  }
  render() {
    return (
      <div>
        <Nav />
        <h2>this will be the search page</h2>
        <form>
          <input
            type='text'
            name='search'
            placeholder='search'
            value={this.state.searchInput}
            onChange={this.state.handleInput}
          />
        </form>
        <MapsContainer />
      </div>
    );
  }
}

export default Search;
