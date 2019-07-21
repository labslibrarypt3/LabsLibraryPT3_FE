import React, { Component } from "react";
import axios from "axios";

class Library extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
      data: [],
      transaction: {
        lender_id: "",
        borrower_id: "",
        book_id: ""
      }
    };
  }

  componentDidMount() {
    const data = () => {
      if (localStorage.getItem("jwt")) {
        const endpoint = "http://localhost:4000/api/books/";
        const authToken = localStorage.getItem("jwt");
        return axios
          .get(endpoint, { headers: { Authorization: `${authToken}` } })
          .then(res => {
            this.setState({ data: res.data });
          })
          .catch(err => console.log(err));
      } else {
        window.location.replace("http://localhost:3000/auth");
      }
    };
    data();
  }
  createTransaction = async () => {
    const endpoint = "http://localhost:4000/api/trans/";
    const authToken = localStorage.getItem("jwt");
    console.log(authToken, "inside createTransaction ");
    const transaction = this.state.transaction;
    return axios
      .post(endpoint, transaction)
      .then(res => console.log("transaction request added"))
      .catch(err => console.log(err));
  };
  buttonClicked = e => {
    e.preventDefault();
    console.log(e, "target in click handler");
    this.setState(
      {
        transaction: {
          userId: localStorage.getItem("userId"),
          lender_id: e.target.value,
          book_id: e.target.name
        }
      },
      () => {
        console.log(this.state.transaction, "in the library click handler");
        this.createTransaction();
      }
    );
  };

  render() {
    console.log(this.props);
    return (
      <div className="shelf grid-container library">
        <button onClick={this.props.toggleLibrary}>Back</button>
        {this.state.data.map(e => {
          console.log(e.user_id, this.props.userId, "in map of booksearch");
          if (e.user_id !== this.props.userId) {
            return (
              <div key={e.bookId} className="book">
                <img src={e.cover} className="book-cover" alt="book cover" />
                <div className="book-data">
                  <p className="book-title">{e.title}</p>
                  <p className="book-authors">{e.authors}</p>
                  <button
                    value={e.user_id}
                    name={e.bookId}
                    onClick={this.buttonClicked}
                  >
                    Borrow
                  </button>
                </div>
              </div>
            );
          }
        })}
      </div>
    );
  }
}

export default Library;
