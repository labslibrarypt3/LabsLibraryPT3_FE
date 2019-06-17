import React, { Component } from "react";
//This MyBook IS the same as the one in HomeLibrary, because I got curious and wanted to try both. If you have no idea what this note is referencing, see the top of Borrowed.js
import MyBook from "../HomeLibrary/MyBook";

class Loaned extends Component {
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
        <h2>Loaned</h2>
        <p>I am a list of books you've lent to someone else</p>
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

export default Loaned;
