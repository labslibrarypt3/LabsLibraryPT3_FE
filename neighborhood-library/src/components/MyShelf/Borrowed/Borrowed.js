import React, { Component } from "react";
import axios from "axios";
import { NavLink, withRouter } from "react-router-dom";

class Borrowed extends Component {
  constructor() {
    super();
    this.state = {
      data: []
    };
  }
  componentDidMount() {
    const endpoint = "http://localhost:4000/api/trans/borrow";
    const data = () => {
      if (localStorage.getItem("jwt")) {
        console.log(
          localStorage.getItem("id"),
          localStorage.getItem("jwt"),
          "occurs before axios"
        );
        const authToken = localStorage.getItem("jwt");
        console.log(authToken);
        return axios
          .get(endpoint, localStorage.getItem("jwt"))
          .then(res => {
            this.setState({ data: res.data });
          })
          .catch(err => err.json({ error: err }));
      } else {
        return withRouter.push("/");
      }
    };
    data();
  }

  render() {
    return (
      <div>
        <h2>Borrowed</h2>
        <p>I am a list of books you've borrowed from someone else</p>
        <div>
          {this.state.data.map(e => {
            return <li>{e.borrower_id}</li>;
          })}
        </div>
      </div>
    );
  }
}

export default Borrowed;
