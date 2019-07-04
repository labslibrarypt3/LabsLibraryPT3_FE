import React, { Component } from "react";
import axios from "axios";
import Loaned from "../MyShelf/Loaned/Loaned";
import Borrowed from "../MyShelf/Borrowed/Borrowed";

class Chat extends Component {
  state = {
    lending: [],
    borrowing: [],
    borrowedTransaction: [],
    lender: {},
    lentTransactions: {},
    userName: " ",
    confirmed: false,
    roomSelect: false,
    message: "",
    premessage: "",
    bookId: ""
  };

  // this endpoint gets the books that have been borrowed by this user and stores it in
  // this .state.borrowing

  getBorrowed = () => {
    const endpoint = "http://localhost:4000/api/trans/borrow";

    const authToken = localStorage.getItem("jwt");
    return axios
      .get(endpoint, { headers: { Authorization: `${authToken}` } })

      .then(res => {
        this.setState({ borrowing: res.data });
      })
      .catch(err => {
        console.log(" Error", err);
      });
  };

  // this endpoint returns the transactions where this user has borrowed books

  getBorrowedTransaction = () => {
    const endpoint = "http://localhost:4000/api/trans/tranborrow";

    const authToken = localStorage.getItem("jwt");
    return axios
      .get(endpoint, { headers: { Authorization: `${authToken}` } })

      .then(res => {
        this.setState({ borrowedTransaction: res.data });
      })
      .catch(err => {
        console.log(" Error", err);
      });
  };

  // this transaction retrieves this users name and modifies the first and last name to
  // return firstname and last initial and stores into state as userName

  getName = () => {
    const authToken = localStorage.getItem("jwt");
    const endpoint = "http://localhost:4000/api/users/user";
    return axios
      .get(endpoint, {
        headers: { authorization: authToken }
      })
      .then(res => {
        console.log("account response", res);
        this.setState({
          userName: `${res.data.firstname} ${res.data.lastname[0]}.`
        });
      })
      .catch(err => console.log(err));
  };

  // This retrieves the books that this user has lent out and stores them as lending on
  // state

  getLentBooks = async () => {
    const endpoint = "http://localhost:4000/api/trans/lend";
    const axiosresponse = await axios
      .get(endpoint, {
        headers: { authorization: localStorage.getItem("jwt") },
        params: { lender_id: localStorage.getItem("id") }
      })
      .then(res => {
        console.log(res.data);
        this.setState({ lending: res.data });
      })
      .catch(err => {
        console.log(" Error", err);
      });
  };

  // this retrieves transactions where the user has lent books transactions

  getLentTransactions = async () => {
    const endpoint = "http://localhost:4000/api/trans/tranlent";

    const axiosresponse = await axios
      .get(endpoint, {
        headers: { authorization: localStorage.getItem("jwt") },
        params: { lender_id: localStorage.getItem("id") }
      })
      .then(res => {
        console.log(res.data);
        this.setState({ lentTransactions: res.data });
      })
      .catch(err => {
        console.log(" Error", err);
      });
  };

  messagePostHandler = async e => {
    e.preventDefault();
    const endpoint = "http://localhost:4000/api/trans/update";
    const messageArray = this.state.message;
    const book_id = this.state.bookId;
    const axiosresponse = await axios
      // const transactionId =
      .put(endpoint, {
        messageArray,
        book_id
      })
      .then(res => {
        console.log(res.data);
        // this.setState({ message: res.data });
      })
      .catch(err => {
        console.log(" Error", err);
      });
  };

  inputHandler = e => {
    this.setState({ message: e.target.value });
    this.setState({ bookId: e.target.name });
  };

  // component did mount calls all axious call methods to populate state with data needed

  componentDidMount() {
    this.getBorrowed();
    this.getBorrowedTransaction();
    this.getName();
    this.getLentBooks();
    this.getLentTransactions();
  }

  render() {
    console.log(this.state);
    return (
      <div>
        <div class="menu">
          <ul class="menu-sidebar">
            <h2>Borrowed</h2>
            {this.state.borrowing.map(e => {
              const bookId = e.bookId;
              console.log(bookId, "firstmap");
              const borrowerMessage = this.state.borrowedTransaction.map(
                (bookId, e) => {
                  return bookId.messageArray;
                }
              );
              return (
                <div>
                  <div>{e.title}lender</div>

                  <div>{borrowerMessage}</div>
                  <form onClick={this.messagePostHandler}>
                    <input
                      onChange={this.inputHandler}
                      placeholder="What do you want to say?"
                      value={this.state.message}
                      name={bookId}
                    />
                    <div class="button">
                      <button>POST</button>
                    </div>

                    <div class="delete">
                      <button>DELETE</button>
                    </div>
                  </form>
                </div>
              );
            })}
            <h2>Lent</h2>
            {this.state.lending.map(e => {
              const bookId = e.bookId;
              console.log(bookId, "lendmap");
              const lenderMessage = this.state.lentTransactions.map(
                (bookId, e) => {
                  return bookId.messageArray;
                }
              );
              return (
                <div>
                  <li>{e.title}borrower </li>

                  {lenderMessage}
                  <form onClick={this.messagePostHandler}>
                    <input
                      onChange={this.inputHandler}
                      placeholder="What do you want to say?"
                      value={this.state.message}
                      name={bookId}
                    />
                    <div class="button">
                      <button>POST</button>
                    </div>

                    <ul class="posts" />

                    <div class="delete">
                      <button>DELETE</button>
                    </div>
                  </form>
                </div>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}
export default Chat;
// https://codepen.io/jpekanto/pen/bfiau
// add bollean for lender on table that toggles transaction from false to true
//done
// add button to change state of confirmed to true and call update transaction endpoint

// chat array on transaction table that will hold a maximum of 50

// render chat box

// fix lent to be like the borrowed is rendering

// create an update end
