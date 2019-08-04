import React, { Component } from "react";
import AuthPostData from "./AuthPostData";
import { FormControl, Form, FormGroup, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import ResetPassword from "./ForgotPassword";
import { link } from "fs";

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

  // handlRegClick = e =>{
  //   link
  // }
  render() {
    return (
      <div className="login">
        <form onSubmit={this.handleSubmit} className="login-form">
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              name="email"
              type="email"
              placeholder="Enter email"
              value={this.state.email}
              onChange={this.handleInput}
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              name="password"
              type="password"
              placeholder="Password"
              value={this.state.password}
              onChange={this.handleInput}
            />
          </Form.Group>

          <Button variant="primary" className="login-button" type="submit">
            Login
          </Button>
          <div>
            <Link to="/login/reset">Forgot password?</Link>
          </div>
          <div className="register">
            <p>Need an account?</p>

            <Button
              onClick={this.props.loginVsRegisterToggler}
              variant="primary"
              className="login-button"
            >
              Register
            </Button>
          </div>
        </form>
      </div>
    );
  }
}

export default Login;
