import React, { Component } from "react";
import axios from "axios";
import { NavLink, Redirect } from "react-router-dom";

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
          .get(endpoint, { headers: { authorization: authToken } })
          .then(res => {
            this.setState({ data: res.data });
          })
          .catch(err => console.log(err));
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
