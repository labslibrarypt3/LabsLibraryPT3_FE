import React, { Component } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";
import MyBook from "../MyBook";

class HomeLibrary extends Component {
  constructor() {
    super();
    this.state = {
      data: []
    };
  }
  componentDidMount() {
    const endpoint = "http://localhost:4000/api/books/mybooks";
    const data = () => {
      if (localStorage.getItem("jwt")) {
        const authToken = localStorage.getItem("jwt");
        return axios
          .get(endpoint, {headers:{Authorization:`${authToken}`}})
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
