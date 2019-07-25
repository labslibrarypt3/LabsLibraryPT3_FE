import React, { Component } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";
import TransBook from "../TransBook";
const baseUrl = process.env.REACT_APP_BASE_URL;

class Borrowed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    const data = () => {
      const endpoint = `${baseUrl}/api/trans/borrow`;
      if (localStorage.getItem("jwt")) {
        const authToken = localStorage.getItem("jwt");
        return axios
          .get(endpoint, { headers: { Authorization: `${authToken}` } })

          .then(res => {
            this.setState({ data: res.data });
          })
          .catch(err => {
            console.log(" Error", err);
          });
      } else {
        return <Redirect to={"/"} />;
      }
    };
    data();
  }

  render() {
    return (
      <div className="borrowed shelves">
        <h3>Borrowed</h3>
        <p>These are books you are borrowing from someone else:</p>
        <div className="shelf grid-container">
          {this.state.data.map(e => {
            return (
              <TransBook
                title={e.title}
                authors={e.authors}
                cover={e.cover}
                bookId={e.bookId}
                key={e.borrower_id}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default Borrowed;
