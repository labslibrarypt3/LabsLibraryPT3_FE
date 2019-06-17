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
        <h3>HomeLibrary</h3>
        {console.log(this.state.data)}
        <div>
          {state.data.map(e => {
            return (
              <MyBook key={e.bookId} title={e.title} authors={e.authors} />
            );
          })}
        </div>
      </div>
    );
  }
}
{
  /* <GoodreadsSearchResult
key={book.goodreadsId}
cover={book.covers[0]}
title={book.title}
authors={book.authors}
/> */
}

export default HomeLibrary;
