import React, { Component } from "react";
import { Redirect, Link } from "react-router-dom";
import EditPasswordForm from "./EditPasswordForm";
import EditAccountInfoForm from "./EditAccountInfoForm";

class AccountInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      edit: false,
      EditPasswordForm: false
    };
  }

  handlePasswordClick = () => {
    this.setState({
      edit: false,
      EditPasswordForm: true
    });
  };

  onSubmit = () => {
    this.setState({
      edit: false,
      EditPasswordForm: false
    });
  };

  render() {
    return (
      <div className="user-info">
        <h2> Account Info</h2>
        <div>
          <label>UserName:</label> {this.props.name}
        </div>
        <div>
          <label>FirstName:</label> {this.props.firstname}
        </div>
        <div>
          <label>LastName:</label> {this.props.lastname}
        </div>
        <div>
          <label>Street Address:</label> {this.props.address}
        </div>
        <div>
          <label>City:</label> {this.props.city}
        </div>
        <div>
          <label>State:</label> {this.props.state}
        </div>
        <div>
          <label>Zipcode:</label> {this.props.zipcode}
        </div>
        <div>
          <label>Email:</label> {this.props.email}
        </div>
        <div>
          <img src={this.props.img} alt="user profile image" />
        </div>
        <Link to="/account/edit">Edit Account</Link>
        <div>
          <button onClick={this.handlePasswordClick}>Change Password</button>
        </div>
      </div>
    );
  }
}

export default AccountInfo;
