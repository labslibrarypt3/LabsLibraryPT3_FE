import React, { Component } from "react";
import axios from "axios";
const baseUrl = process.env.REACT_APP_BASE_URL;
class ResetPasswordRedirect extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newPassword: "",
      confirmPassword: ""
    };
  }
  inputHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmitHandler = e => {
    e.preventDefault();

    if (this.state.newPassword !== this.state.confirmPassword) {
      alert("Your new password and confirm password must match");
    } else {
      const endpoint = `${baseUrl}/auths/reset-password`;
      const endpointObj = {
        newPassword: this.state.newPassword,
        email: this.props.email
      };
      const authToken = localStorage.getItem("jwt");
      axios.post(endpoint, endpointObj);
    }
  };
  render() {
    return (
      <section className="edit-password-form">
        <h2>Change Password</h2>
        <form onSubmit={this.onSubmitHandler}>
          <div className="form-pair">
            <label>New Password:</label>
            <input
              onChange={this.inputHandler}
              type="password"
              name="newPassword"
              value={this.state.newPassword}
              required
            />
          </div>
          <div className="form-pair">
            <label>Confirm password:</label>
            <input
              onChange={this.inputHandler}
              type="password"
              name="confirmPassword"
              value={this.state.confirmPassword}
              required
            />
          </div>
          <button onSubmit={this.onSubmitHandler}>Submit</button>
        </form>
      </section>
    );
  }
}
export default ResetPasswordRedirect;
