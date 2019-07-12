import React, { Component } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";
import MyBook from "../MyBook";
import TransBook from "../TransBook";

class Loaned extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }
  componentDidMount() {
    const data = () => {
      const endpoint = "http://localhost:4000/api/trans/lend";
      if (localStorage.getItem("jwt")) {
        return axios
          .get(endpoint, {
            headers: { authorization: localStorage.getItem("jwt") },
            params: { lender_id: localStorage.getItem("id") }
          })
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
      <div className="loaned shelves">
        <h3>Lent</h3>
        <p>I am a list of books you've loaned to someone else</p>
        <div className="shelf grid-container">
          {this.state.data.map(e => {
            return (
              <TransBook
                key={e.lender_id}
                title={e.title}
                authors={e.authors}
                cover={e.cover}
                bookId={e.bookId}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default Loaned;
