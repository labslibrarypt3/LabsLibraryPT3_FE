import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import ChangePassword from "./ChangePassword"
import ChangeUserInfo from "./ChangeUserInfo"
import axios from "axios"


class UserInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
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

  
  // userId= {this.state.userId}
  // name= {this.state.name}
  // firstName= {this.state.firstname}
  // lastName={this.state.lastname}
  // email= {this.state.email}
  // address= {this.state.address}
  // city= {this.state.city}
  // state={this.state.state}
  // zipcode={this.state.zipcode}
  // img= {this.state.img}
  // password= {this.state.password}
  render() {
    
    if (!localStorage.getItem("jwt")) {
      return <Redirect to={"/"} />;
    }
    if (this.state.edit) {
      return (
       <ChangeUserInfo
         // userId= {this.state.userId}
  name= {this.props.name}
  firstName= {this.props.firstName}
  lastName={this.props.lastName}
  email= {this.props.email}
  address= {this.props.address}
  city= {this.props.city}
  state={this.props.state}
  zipcode={this.props.zipcode}
  img= {this.props.img}
  
       />
      );
    } else {
      if (!this.state.changePassword) {
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
          <ChangePassword
          password= {this.props.password}
          />
        );
      }
    }
  }
}

export default UserInfo;
