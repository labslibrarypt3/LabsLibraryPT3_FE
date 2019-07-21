import React, { Component } from "react";
import {
  Alert,
  FormGroup,
  FormControl,
  FormLabel,
  Button
} from "react-bootstrap";

import "./ResetPassword.css";
import axios from "axios";

class ResetPassword extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      showError: false,
      messageFromServer: ""
    };
  }
  handleChange = name => e => this.setState({ [name]: e.target.value });
  sendEmail = e => {
    e.preventDefault();
    console.log(this.state.email);
    this.state.email === ""
      ? this.setState({ showError: false, messageFromServer: "" })
      : console.log(this.state.email, "after handling before axios");
    axios
      .post("http://localhost:4000/auths/forgot-password", {
        email: this.state.email
      })
      .then(response => {
        response.data === "email not found"
          ? this.setState({ showError: true, messageFromServer: "" })
          : response.data === "reset email sent"
          ? this.setState({
              showError: false,
              messageFromServer: "reset email sent"
            })
          : this.setState({ showError: true, messageFromServer: " " });
      })
      .catch(err => console.log(err.data));
  };
  ///
  render() {
    const { email, messageFromServer, showError } = this.state;
    return (
      <div>
        <h2>Forgot Password / Reset Password</h2>
        <form onSubmit={this.sendEmail}>
          <input
            placeholder="enter email address"
            type="email"
            label="email"
            value={email}
            onChange={this.handleChange("email")}
            required
          />
          <Button type="submit">Reset Password</Button>
        </form>
        {showError ? (
          "This email wasnt found as typed"
        ) : messageFromServer !== "" ? (
          <div>Reset email sent</div>
        ) : (
          <div />
        )}
      </div>
    );
  }
}
export default ResetPassword;
