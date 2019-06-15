import React, { Component } from "react";
import axios from "axios";
//This MyBook, imported below on line 5, is not the same as the one in HomeLibrary. I copied it here in case it needs its own stuff.
// If it's the same as the one in HomeLibrary, delete one.
import MyBook from "./MyBook";
import { NavLink, withRouter, Redirect } from "react-router-dom";

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
        console.log(localStorage.getItem("id"),(localStorage.getItem("jwt")), 'occurs before axios')
       
        return axios
        .get(endpoint, {headers:{authorization:localStorage.getItem("jwt")}})
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
            console.log(e)
            return (
              <li>{e.borrower_id}</li>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Borrowed;
