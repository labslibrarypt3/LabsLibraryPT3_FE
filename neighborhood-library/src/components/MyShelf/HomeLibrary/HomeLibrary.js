import React, { Component } from "react";
import axios from "axios";
import Landing from "../../Landing/Landing";
import { NavLink, Redirect } from "react-router-dom";
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
          .catch(err => console.log(err));
      } else {
        return <Redirect to={"/"} />;
      }
    };
    data();
  }

  render() {
    return (
      <div className="home-library">
        <h3>HomeLibrary</h3>
        <div className="shelf">
          {this.state.data.map(e => {
            console.log(e, "in map");
            return (
              <MyBook
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

export default HomeLibrary;
