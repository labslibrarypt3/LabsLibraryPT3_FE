import React, { Component } from "react";
import axios from "axios";
<<<<<<< HEAD
import { NavLink, withRouter } from "react-router-dom";
=======
//This MyBook, imported below on line 5, is not the same as the one in HomeLibrary. I copied it here in case it needs its own stuff.
// If it's the same as the one in HomeLibrary, delete one.
import MyBook from "./MyBook";
import { NavLink, withRouter, Redirect } from "react-router-dom";
>>>>>>> 073f96300eeec053792a36b0aecef2813f5f9192

class Borrowed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }
  componentDidMount() {
    const endpoint = "http://localhost:4000/api/trans/borrow";
    const data = () => {
      if (localStorage.getItem("jwt")) {
        const authToken = localStorage.getItem("jwt");
        return axios
<<<<<<< HEAD
          .get(endpoint, { headers: { authorization: authToken } })
          .then(res => {
            this.setState({ data: res.data });
          })
          .catch(err => err.json({ error: err }));
=======
        .get(endpoint, {headers:{authorization:localStorage.getItem("jwt")}})
        .then(res => {
          // console.log(...res.data);
          this.setState({ data: res.data });
        })
          .catch(err => {
            console.log(" Error", err);
          });
>>>>>>> 073f96300eeec053792a36b0aecef2813f5f9192
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
            return <li>{e.borrower_id}</li>;
          })}
        </div>
      </div>
    );
  }
}

export default Borrowed;
