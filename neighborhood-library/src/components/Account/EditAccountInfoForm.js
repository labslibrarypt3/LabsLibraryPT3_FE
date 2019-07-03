import React, { Component } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";

class EditAccountInfoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: "",
      name: "",
      firstName: "",
      lastName: "",
      email: "",
      address: "",
      city: "",
      state: "",
      zipcode: "",
      img: "",
      password: "",
      stripe_user_id: ""
    };
  }
  inputHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmitHandler = e => {
    e.preventDefault();

    const userUpdate = {
      name: this.state.name ? this.state.name : this.props.name,
      firstName: this.state.firstName
        ? this.state.firstName
        : this.props.firstName,
      lastName: this.state.lastName ? this.state.lastName : this.props.lastName,
      email: this.state.email ? this.state.email : this.props.email,
      address: this.state.address ? this.state.address : this.props.address,
      city: this.state.city ? this.state.city : this.props.city,
      state: this.state.state ? this.state.state : this.props.state,
      zipcode: this.state.zipcode ? this.state.zipcode : this.props.zipcode,
      img: this.state.img ? this.state.img : this.props.img
    };

    const endpoint = `http://localhost:4000/api/users/update`;
    const authToken = localStorage.getItem("jwt");
    axios.put(endpoint, userUpdate, {
      headers: { authorization: `${authToken}` }
    });
  };

  render() {
    console.log(this.props);
    return (
      <div className="user-info">
        <h2>Edit Profile</h2>
        <form onSubmit={this.onSubmitHandler} className="edit-profile-form">
          <div className="form-pair">
            <label>Name</label>
            <input
              onChange={this.inputHandler}
              placeholder={this.props.name}
              type="text"
              name="name"
              ref="name"
              val={this.state.name}
            />
          </div>
          <div className="form-pair">
            <label>FirstName</label>
            <input
              onChange={this.inputHandler}
              placeholder={this.props.firstName}
              type="text"
              name="firstName"
              ref="firstName"
              val={this.state.firstName}
            />
          </div>

          <div className="form-pair">
            <label>LastName</label>
            <input
              onChange={this.inputHandler}
              placeholder={this.props.lastName}
              type="text"
              name="lastName"
              ref="lastName"
              val={this.state.lastName}
            />
          </div>

          <div className="form-pair">
            <label>Street Address</label>
            <input
              onChange={this.inputHandler}
              placeholder={this.props.address}
              type="text"
              name="address"
              ref="address"
              val={this.state.address}
            />
          </div>
          <div className="form-pair">
            <label>City</label>
            <input
              onChange={this.inputHandler}
              placeholder={this.props.city}
              type="text"
              name="city"
              ref="name"
              val={this.state.city}
            />
          </div>

          <div className="form-pair">
            <label>State</label>
            <input
              onChange={this.inputHandler}
              placeholder={this.props.state}
              type="text"
              name="state"
              ref="name"
              val={this.state.state}
            />
          </div>

          <div className="form-pair">
            <label>Zipcode</label>
            <input
              onChange={this.inputHandler}
              placeholder={this.props.zipcode}
              type="text"
              name="zipcode"
              ref="name"
              val={this.state.zipCode}
            />
          </div>

          <div className="form-pair">
            <label>Email</label>
            <input
              onChange={this.inputHandler}
              placeholder={this.props.email}
              type="email"
              name="email"
              ref="email"
              value={this.state.email}
            />
          </div>
          <div className="form-pair">
            <label>Avatar url:</label>
            <input
              onChange={this.inputHandler}
              placeholder="Enter web address for img"
              type="text"
              name="img"
              ref="img"
              val={this.state.img}
            />
          </div>
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default EditAccountInfoForm;
