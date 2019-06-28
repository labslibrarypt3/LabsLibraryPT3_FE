import React, { Component } from "react";
import { Redirect } from "react-router-dom";

class UserInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        name: "",
        address: "",
        email: "",
        img: "",
        password: ""
      },
      edit: false,
      changePassword: false
    };
  }

  handlePasswordClick = () => {
    this.setState({
      edit: false,
      changePassword: true
    });
  };

  handleEditClick = () => {
    this.setState({
      edit: true,
      changePassword: false
    });
  };

  onSubmit = () => {
    this.setState({
      edit: false,
      changePassword: false
    });
  };

  render() {
    // console.log(this.props,'in the userinfo')
    if (!localStorage.getItem("jwt")) {
      return <Redirect to={"/"} />;
    }
    if (this.state.edit) {
      return (
        <div className="user-info">
          <h2>Edit Profile</h2>
          <form className="edit-profile-form">
            <div className="form-pair">
              <label>Name</label>
              <input
                placeholder={this.props.name}
                type="text"
                name="name"
                ref="name"
              />
            </div>
            <div className="form-pair">
              <label>Street Address</label>
              <input
                placeholder={this.props.address}
                type="text"
                name="address"
                ref="address"
              />
            </div>
            <div className="form-pair">
              <label>Email</label>
              <input
                placeholder={this.props.email}
                type="email"
                name="email"
                ref="email"
              />
            </div>
            <div className="form-pair">
              <label>Avatar url:</label>
              <input
                placeholder="Enter web address for img"
                type="text"
                name="img"
                ref="img"
              />
            </div>
            <button>Submit</button>
          </form>
        </div>
      );
    } else {
      if (!this.state.changePassword) {
        return (
          <div className="user-info">
            <h2> Account Info</h2>
            <div>
              <label>Name:</label> {this.props.name}
            </div>
            <div>
              <label>Street Address:</label> {this.props.address}
            </div>
            <div>
              <label>Email:</label> {this.props.email}
            </div>
            <div>
              <img src={this.props.img} alt="user profile image" />
            </div>
            <div>
              <button onClick={this.handleEditClick}>Edit Profile</button>
            </div>
            <div>
              <button onClick={this.handlePasswordClick}>
                Change Password
              </button>
            </div>
          </div>
        );
      } else {
        return (
          <div className="user-info">
            <h2>Change Password</h2>
            <form>
              <div>
                <label>Current Password:</label>
                <input
                  placeholder={"Enter current password"}
                  type="password"
                  name="currentPassword"
                  ref="currentPassword"
                />
              </div>
              <div>
                <label>New Password:</label>
                <input
                  placeholder={"Enter new password"}
                  type="password"
                  name="newPassword"
                  ref="newPassword"
                />
              </div>
              <div>
                <label>Confirm password:</label>
                <input
                  placeholder={"Enter current password"}
                  type="password"
                  name="currentPassword"
                  ref="currentPassword"
                />
              </div>
            </form>
          </div>
        );
      }
    }
  }
}

export default UserInfo;
