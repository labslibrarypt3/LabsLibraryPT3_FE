import React, { Component } from "react";

import Login from "./Login";
import Register from "./Register";
import { Link } from "react-router-dom";

class AuthContainer extends Component {
  constructor() {
    super();
    this.state = {
      loggedIn: false
    };
  }

  render() {
    return (
      <div className="auth-container">
        {this.state.loggedIn ? (
          <Link path="/login" component={Login}>
            Login
          </Link>
        ) : (
          <Link path="/register" component={Register}>
            Register
          </Link>
        )}
      </div>
    );
  }
}

export default AuthContainer;
