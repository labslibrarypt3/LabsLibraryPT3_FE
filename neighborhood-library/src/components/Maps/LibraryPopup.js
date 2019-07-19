import React, { Component } from "react";
import axios from "axios";
import Library from "./Library";

class LibraryPopup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      library: []
    };
  }
  componentDidMount() {
    const endpoint = "http://localhost:4000/api/books/mybooks";
    const data = () => {
      if (localStorage.getItem("jwt")) {
        const authToken = localStorage.getItem("jwt");
        return axios
          .get(endpoint, { headers: { Authorization: `${authToken}` } })
          .then(res => {
            if (res.status !== 200 || authToken === null) {
              window.location.replace(" http://localhost:3000/auth");
              console.log("log in please ....");
            }

            this.setState({ data: res.data });
          })
          .catch(err => console.log(err));
      } else {
        window.location.replace(" http://localhost:3000/auth");
      }
    };
    data();
  }

  render() {
    console.log(this.props);
    return (
      <div>
        <Library />
      </div>
    );
  }
}
export default LibraryPopup;
