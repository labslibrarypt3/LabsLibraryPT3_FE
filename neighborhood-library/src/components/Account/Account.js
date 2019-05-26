import React, { Component } from "react";
import { Route } from "react-router-dom";
import Settings from "./Settings";
import { Link } from "react-router-dom";

class Account extends Component {
  render() {
    return (
      <div>
        My Account
        <Link to={Settings} />
        <Route path="/account/:id/settings" component={Settings} />
      </div>
    );
  }
}

export default Account;
