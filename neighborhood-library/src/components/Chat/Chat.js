import React, { Component } from "react";
import TwillioApp from "./Chatroom";
import axios from "axios";

class Chat extends Component {
  constructor() {
    super();
    this.state = {
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
  // this endpoint gets the books that have been borrowed by this user and stores it in
  // this .state.borrowing

  //added to data build
  getBorrowedBooks = async () => {
    const endpoint = "http://localhost:4000/api/trans/borrow";

    const authToken = localStorage.getItem("jwt");
    await axios
      .get(endpoint, { headers: { Authorization: `${authToken}` } })

      .then(res => {
        this.dataBuild.borrowedBooks = res.data;
        this.getName();
      })
      .catch(err => {
        console.log(" Error", err);
      });
  };

  // this endpoint returns the transactions where this user has borrowed books
  // added to data build
  // getBorrowedTransaction = async () => {
  //   const endpoint = "http://localhost:4000/api/trans/tranborrow";

  //   const authToken = localStorage.getItem("jwt");
  //   await axios
  //     .get(endpoint, { headers: { Authorization: `${authToken}` } })

  //     .then(res => {
  //       this.dataBuild.borrowedTransactions = res.data;
  //       this.getName();
  //     })
  //     .catch(err => {
  //       console.log(" Error", err);
  //     });
  // };

  // this transaction retrieves this users name and modifies the first and last name to
  // return firstname and last initial and stores into state as userName

  getName = async () => {
    const authToken = localStorage.getItem("jwt");
    const endpoint = "http://localhost:4000/api/users/user";
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
    const endpoint = "http://localhost:4000/api/trans/lend";
    await axios
      .get(endpoint, {
        headers: { authorization: localStorage.getItem("jwt") },
        params: { lender_id: localStorage.getItem("id") }
      })
      .then(res => {
        this.getLentTransactions();
        this.dataBuild.lentBooks = res.data;
      })
      .catch(err => {
        console.log(" Error", err);
      });
  };

  // this retrieves transactions where the user has lent books transactions

  getLentTransactions = async () => {
    const endpoint = "http://localhost:4000/api/trans/tranlent";

    await axios
      .get(endpoint, {
        headers: { authorization: localStorage.getItem("jwt") },
        params: { lender_id: localStorage.getItem("id") }
      })
      .then(res => {
        // console.log(res.data, "in lens tran");
        this.dataBuild.lentTransactions = res.data;
        console.log("109", this.dataBuild, "end of chat package build");
        this.setState({ dataBuild: this.dataBuild });
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
      <>
        <h3>Borrowed by me:</h3>

        {// first get the book title data by mapping over the get borrowed books array

        this.dataBuild.borrowedBooks.map(e => {
          console.log(e, "this is the borrowing map");
          return (
            <div>
              <div key={Math.random()}>{e.title}</div>
              <TwillioApp
                dataBuild={this.dataBuild}
                roomTitle={`${e.bookId}`}
              />
            </div>
          );
        })}

        <h3>Lent by me:</h3>
        {// first get the book title data by mapping over the get borrowed books array
        this.dataBuild.lentBooks.map(e => {
          const lenderid = e.user_id;
          // console.log(e, "this is the first lending map");
          return (
            <div>
              <div key={Math.random()}>{e.title}</div>
              <TwillioApp
                dataBuild={this.dataBuild}
                roomTitle={`${e.bookId}`}
              />
            </div>
          );
        })}
      </>
    );
  }
}

export default Chat;
