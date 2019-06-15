import React, { Component } from "react";
import axios from "axios";
import Landing from "../../Landing/Landing";
import { NavLink, withRouter } from "react-router-dom";
import MyBook from "./MyBook";

class HomeLibrary extends Component {
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
        const authToken = localStorage.getItem("jwt");
        return axios
          .get(endpoint, { headers: { authorization: authToken } })
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
        <h3>HomeLibrary</h3>
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

export default HomeLibrary;
