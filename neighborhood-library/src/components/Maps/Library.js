import React, { Component } from "react";
import axios from "axios";
import { Button } from "react-bootstrap";

const baseUrl = process.env.REACT_APP_BASE_URL;
const feBaseUrl = process.env.REACT_APP_FE_BASE_URL;

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
    this.props.getUserData();
    // const data = () => {
    //   if (localStorage.getItem("jwt")) {
    //     const endpoint = `${baseUrl}/api/books`;
    //     const authToken = localStorage.getItem("jwt");
    //     return axios
    //       .get(endpoint, { headers: { Authorization: `${authToken}` } })
    //       .then(res => {
    //         this.setState({ data: res.data });
    //       })
    //       .catch(err => console.log(err));
    //   } else {
    //     window.location.replace(`${feBaseUrl}/auth`);
    //   }
    // };
    // data();
  }

  createTransaction = async () => {
    const endpoint = `${baseUrl}/api/trans/`;
    const authToken = localStorage.getItem("jwt");
    console.log(authToken, "inside createTransaction ");
    const transaction = this.state.transaction;
    axios
      .post(endpoint, transaction)
      .then(res => window.location.replace(`${feBaseUrl}/chat`))
      .catch(err => console.log(err));
  };
  buttonClicked = e => {
    e.preventDefault();

    if (localStorage.getItem("userId") == "undefined") {
      window.location.replace(" http://localhost:3000/auth");
    }
    this.setState(
      {
        transaction: {
          userId: localStorage.getItem("userId"),
          lender_id: e.target.value,
          book_id: e.target.name
        }
      },
      () => {
        this.createTransaction();
      }
    );
  };

  render() {
    console.log(this.props);
    return (
      <div className="library-pop-up">
        <Button
          variant="primary"
          className="back-to-map-button"
          type="submit"
          onClick={this.props.toggleLibrary}
        >
          Back
        </Button>

        <div className="shelf grid-container library">
          {this.props.books.map(e => {
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
      </div>
    );
  }
}

export default Library;
