import React, { Component } from "react";
import axios from "axios";
import { NavLink, Redirect } from "react-router-dom";

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
      <div>
        <h2>Lent</h2>
        <p>I am a list of books you've loaned to  someone else</p>
        <div>
          {this.state.data.map(e => {
            return <li key={e.lender_id} bookid={e.book_id}>{e.title}</li>;
          })}
        </div>
      </div>
    );
  }
}

export default Loaned;
