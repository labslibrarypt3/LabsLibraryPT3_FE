import React, { Component } from "react";
import axios from "axios";

class GRBooks extends Component {
  componentDidMount() {
    axios
      .post("localhost:4000/api/goodreads/search")
      .then(response => console.log(response))
      .catch(error => console.log(error));
  }

  render() {
    return <div />;
  }
}

export default GRBooks;
