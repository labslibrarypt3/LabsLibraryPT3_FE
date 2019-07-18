import React, { Component } from "react";
import AuthPostData from "./AuthPostData";
import { FormControl, Form, FormGroup, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import ResetPassword from "./ForgotPassword";

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
        <form onSubmit={this.handleSubmit} className="login-form">
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control name="email" type="email" placeholder="Enter email" />
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
              label
              onClick={this.loginVsRegisterToggler}
              href="#"
              variant="primary"
              className="login-button"
              type="submit"
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
