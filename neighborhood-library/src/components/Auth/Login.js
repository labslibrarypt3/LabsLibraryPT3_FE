import React, { Component } from "react";
import AuthPostData from "./AuthPostData";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      password: "",
      email: ""
    };
  }

  handleInput = e => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const type = "login";
    const userData = {
      password: this.state.password,
      email: this.state.email
    };

    AuthPostData(type, userData);
  };
  render() {
    return (
      <div className="login">
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="login">Login</label>
          <input
            type="password"
            name="password"
            placeholder="password"
            value={this.state.password}
            onChange={this.handleInput}
          />
          <input
            type="email"
            name="email"
            placeholder="email"
            value={this.state.email}
            onChange={this.handleInput}
          />
          <button type="submit">Login</button>
        </form>
        <a href="/change-password">Forgot password?</a>
        <div>
          <p>Need an account?</p>
          <button
            href="#"
            className="manual-auth-nav"
            onClick={this.loginVsRegisterToggler}
          >
            Register
          </button>
        </div>
      </div>
    );
  }
}

export default Login;
