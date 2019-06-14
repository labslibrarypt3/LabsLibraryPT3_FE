import React, { Component } from "react";
import { NavLink, withRouter } from "react-router-dom";

import axios from "axios";
//This MyBook, imported below on line 5, is not the same as the one in HomeLibrary. I copied it here in case it needs its own stuff.
// If it's the same as the one in HomeLibrary, delete one.
import MyBook from "./MyBook";

class Borrowed extends Component {
  constructor() {
    super();
    this.state = {
      data: []
    };
  }
  componentDidMount() {
    const endpoint = "http://localhost:4000/api/books";
    const data = () => {
      if (localStorage.getItem("jwt")) {
        return axios
          .get(endpoint, localStorage.getItem("id"))
          .then(res => {
            console.log(...res.data);
            this.setState({ data: res.data });
          })
          .catch(err => {
            console.log(" Error", err);
          });
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
            return (
              <MyBook key={e.bookId} title={e.title} authors={e.authors} />
            );
          })}
        </div>
      </div>
    );
  }
}

export default Borrowed;
