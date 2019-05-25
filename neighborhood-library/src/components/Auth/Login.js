import React, { Component } from "react";
import { Link } from "react-router-dom";

class Login extends Component {
  render() {
    return (
      <div>
        <h2>Login</h2>
        <Link
          to="https://github.com/login/oauth/authorize?client_id=66d10ed2a42e30acdfcb
      "
        >
          Log in with Github
        </Link>
      </div>
    );
  }
}

export default Login;
