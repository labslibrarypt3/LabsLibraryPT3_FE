import React, { Component } from "react";
import AuthPostData from './AuthPostData';
// import { Link } from "react-router-dom";

class Register extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      email:""
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
    const type = 'manual'
    const userData = {
      name:this.state.username,
      token:this.state.password,
      email:this.state.email
    } 
    AuthPostData(type,userData);
    // const creds = this.state;
    // const endpoint = "";
  };

  render() {
    return (
      <div>
        <form>
          <label htmlFor="login">Register</label>
          <input
            type="text"
            name="username"
            placeholder="username"
            value={this.state.username}
            onChange={this.handleInput}
          />
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
          <button type="submit">Register</button>
        </form>
      </div>
    );
  }
}

export default Register;
