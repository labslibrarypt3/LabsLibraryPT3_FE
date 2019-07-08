import React, { Component } from "react";
import MapContainer from "./MapContainer";
import axios from "axios";

class BookSearch extends Component {
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
  // I accidentally lost this function.
  // Sorry,
  // Ira.

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
  createTransaction = () => {
    const endpoint = "http://localhost:4000/api/trans/";
    const authToken = localStorage.getItem("jwt");
    const transaction = this.state.transaction;
    return axios
      .post(endpoint, transaction, {
        headers: { Authorization: `${authToken}` }
      })
      .then(res => console.log("transaction request added"))
      .catch(err => console.log(err));
  };
  buttonClicked = e => {
    e.preventDefault();
    this.setState({
      transaction: {
        lender_id: e.target.value,
        book_id: e.target.name
      }
    });
    this.createTransaction();
  };

  //   });
  // };
  //user searches books in stock
  // user finds book to borrow and clicks request
  //opens chat box and request from lender
  // lenders click lend button to create transaction - start stripe

  render() {
    console.log(this.props);
    return (
      <div>
        <form>
          <input
            placeholder="Search for..."
            ref={input => (this.search = input)}
            onChange={this.handleInputChange}
          />
          <div className="shelf grid-container">
            {this.state.data.map(e => {
              console.log(e.user_id, this.props.userId, "in map of booksearch");
              if (e.user_id != this.props.userId) {
                return (
                  <div key={e.bookId} className="book">
                    <img
                      src={e.cover}
                      className="book-cover"
                      alt="book cover"
                    />
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
          <p>{this.state.query}</p>
        </form>
        {/* <MapContainer /> */}
      </div>
    );
  }
}

export default BookSearch;
