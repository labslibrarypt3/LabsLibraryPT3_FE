import React, { Component } from "react";
import Router from "react-router-dom";
import Nav from "../Nav";

class Account extends Component {
  render() {
    return (
      <div>
        My Account
        <Route path="/account/:id/settings" component={Settings} />
        <Nav />
      </div>
    );
  }
}

export default Account;
