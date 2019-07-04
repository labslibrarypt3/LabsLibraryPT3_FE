import React, { Component } from "react";
import axios from "axios";

class EditPasswordForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      password: "",
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
      const endpoint = `http://localhost:4000/auths/password/`;
      const endpointObj = {
        newPassword: this.state.newPassword,
        password: this.state.password,
        email: this.props.email
      };
      const authToken = localStorage.getItem("jwt");
      axios.post(endpoint, endpointObj, {
        headers: { authorization: `${authToken}` }
      });
    }
  };
  render() {
    return (
      <div className="edit-profile-form-container">
        <h2>Change Password</h2>
        <form className="edit-profile-form" onSubmit={this.onSubmitHandler}>
          <div>
            <label>Current Password:</label>
            <input
              onChange={this.inputHandler}
              type="password"
              name="password"
              value={this.state.password}
              required
            />
          </div>
          <div>
            <label>New Password:</label>
            <input
              onChange={this.inputHandler}
              type="password"
              name="newPassword"
              value={this.state.newPassword}
              required
            />
          </div>
          <div>
            <label>Confirm password:</label>
            <input
              onChange={this.inputHandler}
              type="password"
              name="confirmPassword"
              value={this.state.confirmPassword}
              required
            />
          </div>
          <button>Submit</button>
        </form>
      </div>
    );
  }
}
export default EditPasswordForm;