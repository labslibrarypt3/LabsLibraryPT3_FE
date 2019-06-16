import React, { Component } from "react";
import axios from "axios";
import { NavLink, withRouter } from "react-router-dom";

class Borrowed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }
  componentDidMount() {
    console.log(
      localStorage.getItem("id"),
      localStorage.getItem("jwt"),
      "occurs before axios"
    );
    const data = () => {
      const endpoint = "http://localhost:4000/api/trans/borrow";
      if (localStorage.getItem("jwt")) {
        console.log(
          localStorage.getItem("id"),
          localStorage.getItem("jwt"),
          "occurs before axios"
        );

        return axios
          .get(endpoint, {
            headers: { authorization: localStorage.getItem("jwt") },
            params: { borrower_id: localStorage.getItem("id") }
          })
          .then(res => {
            // console.log(...res.data);
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
      <div>
        <h2>Borrowed</h2>
        <p>I am a list of books you've borrowed from someone else</p>
        <div>
          {this.state.data.map(e => {
            console.log(e);
            return <li key>{e.borrower_id}</li>;
          })}
        </div>
    );
  }
}

export default Borrowed;
