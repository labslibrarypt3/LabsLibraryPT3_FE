//if this works on Loaned.js, Borrowed.js, and HomeLibrary.js, then use this for all 3 and delete the extras
import React, { Component } from "react";
const feBaseUrl = process.env.REACT_APP_FE_BASE_URL;

class TransBook extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  buttonClicked = () => {
    window.location.replace(`${feBaseUrl}/chat`);
  };

  render() {
    return (
      <div key={this.props.bookId} className="book">
        <img src={this.props.cover} className="book-cover" alt="book cover" />
        <div className="book-data">
          <p className="book-title">{this.props.title}</p>
          <p className="book-authors">{this.props.authors}</p>
          <button onClick={this.buttonClicked}>Contact</button>
        </div>
      </div>
    );
  }
}
export default TransBook;
