import React, { Component } from "react";
import AuthPostData from "./AuthPostData";
import { FormControl, Form, FormGroup, Button } from "react-bootstrap";
// import { Link } from "react-router-dom";

class Register extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
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
    const type = "register";
    const userData = {
      name: this.state.username,
      password: this.state.password,
      email: this.state.email
    };

    AuthPostData(type, userData);
  };

  render() {
    return (
      <div className="login">
        <form onSubmit={this.handleSubmit}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="username"
              name="username"
              placeholder="First and Last Name"
              value={this.state.username}
              onChange={this.handleInput}
            />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              name="password"
              type="password"
              placeholder="*******"
              value={this.state.password}
              onChange={this.handleInput}
            />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              name="email"
              type="email"
              placeholder="Email@email.com"
              value={this.state.email}
              onChange={this.handleInput}
            />
          </Form.Group>
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>

          <Button variant="primary" className="login-button" type="submit">
            Register
          </Button>
          <div className="register">
            <p>Already have an account?</p>

            <Button
              onClick={this.props.loginVsRegisterToggler}
              variant="primary"
              className="login-button"
            >
              Login
            </Button>
          </div>
        </form>
      </div>
    );
  }
}

export default Register;
