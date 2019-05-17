import React, { Component } from "react";
import { Route } from "react-router-dom";
import Settings from './Settings';
import Nav from "../Nav/Nav";

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
