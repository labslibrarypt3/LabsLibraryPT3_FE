import React, { Component } from "react";
import { Route } from "react-router-dom";
import Settings from "./Settings";
import { Link } from "react-router-dom";
import { Redirect } from "react-router-dom";
import { axios } from "axios";

class Account extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: "",
      name: "",
      email: ""
    };
  }
  componentDidMount() {
    const authToken = localStorage.getItem("jwt");
    axios
      .get("http://localhost:4000/auths/auth", {
        headers: { authorization: authToken }
      })
      .then(res => {
        this.setState({ userId: res.userId, name: res.name, email: res.email });
      });
  }
  render() {
    return (
      <div>
        <h2>Welcome {this.state.name}</h2>
        <Link to={Settings} />
        <Route path="/account/:id/settings" component={Settings} />
      </div>
    );
  }
}

export default Account;
