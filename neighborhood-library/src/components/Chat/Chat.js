import React, { Component } from "react";
import Chatroom from "./Chatroom";
import axios from "axios";
const baseUrl = process.env.REACT_APP_BASE_URL;
const feBaseUrl = process.env.REACT_APP_FE_BASE_URL;

class Chat extends Component {
  constructor() {
    super();
    this.state = {
      closeChat: false,
      messages: "",
      checkoutId: ""
    };
  }

  dataBuild = {
    messageBuild: {
      message: " ",
      checkoutId: " "
    },
    userData: "",
    messages: "",
    borrowedBooks: [],
    lentBooks: [],
    lentTransactions: "",
    otherUserData: ""
  };
  // boolean value on state to toggle between  true and false

  // this endpoint gets the books that have been borrowed by this user and stores it in
  // this .state.borrowing

  //added to data build
  getBorrowedBooks = async () => {
    const endpoint = `${baseUrl}/api/trans/borrow`;

    const authToken = localStorage.getItem("jwt");
    await axios
      .get(endpoint, { headers: { Authorization: `${authToken}` } })

      .then(res => {
        if (
          res.status !== 200 ||
          authToken === null ||
          res.data === "Hello World, from Neighborhood Library Backend"
        ) {
          window.location.replace(`${feBaseUrl}/auth`);

          console.log("log in please ....");
        }

        this.dataBuild.borrowedBooks = res.data;
        this.getName();
      })
      .catch(err => {
        console.log(" Error", err);
      });
  };

  // this transaction retrieves this users name and modifies the first and last name to
  // return firstname and last initial and stores into state as userName

  getName = async () => {
    const authToken = localStorage.getItem("jwt");
    const endpoint = `${baseUrl}/api/users/user`;
    await axios
      .get(endpoint, {
        headers: { authorization: authToken }
      })
      .then(res => {
        this.dataBuild.userData = res.data;
        this.getLentBooks();
      })
      .catch(err => console.log(err));
  };

  // This retrieves the books that this user has lent out and stores them as lending on
  // state

  getLentBooks = async () => {
    const endpoint = `${baseUrl}/api/trans/lend`;
    await axios
      .get(endpoint, {
        headers: { authorization: localStorage.getItem("jwt") }
      })
      .then(res => {
        // this.getLentTransactions();
        this.dataBuild.lentBooks = res.data;
        this.getLentTransactions();
      })
      .catch(err => {
        console.log(" Error", err);
      });
  };

  // this retrieves transactions where the user has lent books transactions

  getLentTransactions = async () => {
    const endpoint = `${baseUrl}/api/trans/tranlent`;

    await axios
      .get(endpoint, {
        headers: { authorization: localStorage.getItem("jwt") },
        params: { lender_id: localStorage.getItem("id") }
      })
      .then(res => {
        //  transactions= res.data;
        console.log("109", this.dataBuild, "end of chat package build");
        // this.setState({ dataBuild: this.dataBuild.lentTransactions });
      })
      .catch(err => {
        console.log(" Error", err);
      });
  };

  componentDidMount() {
    // this.setState({ databuild: this.dataBuild });
    this.getBorrowedBooks();
  }

  render() {
    return (
      <main>
        <h3 className="chat-header">Borrowed by me:</h3>
        {// first get the book title data by mapping over the get borrowed books array

        this.dataBuild.borrowedBooks.map(e => {
          return (
            <div>
              <Chatroom
                title={e.title}
                dataBuild={this.dataBuild}
                roomTitle={`${e.bookId}`}
              />
            </div>
          );
        })}

        <h3 className="chat-header">Lent by me:</h3>
        {// first get the book title data by mapping over the get borrowed books array
        this.dataBuild.lentBooks.map(e => {
          return (
            <div>
              <Chatroom
                title={e.title}
                dataBuild={this.dataBuild}
                roomTitle={`${e.bookId}`}
              />
            </div>
          );
        })}
      </main>
    );
  }
}

export default Chat;
