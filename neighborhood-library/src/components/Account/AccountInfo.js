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
          <img src={this.props.img} alt="user profile image" />
        </div>
        <div>
          <label>Name:</label> <input readOnly value={this.props.name} />
        </div>
        <div>
          <label>Street Address:</label>
          <input readOnly value={this.props.address} />
        </div>
        <div>
          <label>City:</label> <input readOnly value={this.props.city} />
        </div>
        <div>
          <label>State:</label> <input readOnly value={this.props.state} />
        </div>
        <div>
          <label>Zipcode:</label> <input readOnly value={this.props.zidcode} />
        </div>
        <div>
          <label>Email:</label> <input readOnly value={this.props.email} />
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
