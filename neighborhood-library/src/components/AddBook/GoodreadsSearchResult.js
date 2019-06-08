import React, { Component } from "react";

class GoodreadsSearchResult extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="goodreads-search-result">
        <img src={this.props.cover} alt="cover image" />
        <p>
          {this.props.title} by {this.props.authors}
        </p>
        <button>Lend</button>
      </div>
    );
  }
}

export default GoodreadsSearchResult;
