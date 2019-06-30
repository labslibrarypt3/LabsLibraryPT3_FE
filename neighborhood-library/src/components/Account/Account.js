import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";
import { StripeProvider, Elements } from "react-stripe-elements";
import Stripe from "./Stripe/Stripe";
import UserInfo from "./UserInfo";

class Account extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: " ",
      name: " ",
      firstName: " ",
      lastName: " ",
      email: " ",
      address: " ",
      city: " ",
      state: " ",
      zipcode: " ",
      img: " ",
      password: " ",
      stripe_user_id: " "
    };
  }
  componentDidMount() {
    this.getData();
  }
  getData = () => {
    if (localStorage.getItem("jwt")) {
      const authToken = localStorage.getItem("jwt");
      const endpoint = "http://localhost:4000/api/users/user";
      return axios
        .get(endpoint, {
          headers: { authorization: authToken }
        })
        .then(res => {
          console.log("account response", res);
          this.setState({
            userId: res.data.userId,
            name: res.data.name,
            firstName: res.data.firstname,
            lastName: res.data.lastname,
            email: res.data.email,
            address: res.data.address,
            city: res.data.city,
            state: res.data.state,
            zipcode: res.data.zipcode,
            img: res.data.img,
            password: res.data.password,
            stripe_user_id: res.data.stripe_user_id
          });
        })
        .catch(err => console.log(err));
    } else {
      return <Redirect to={"/"} />;
    }
  };

  render() {
    return !localStorage.getItem("jwt") ? (
      <Redirect to={"/"} />
    ) : (
      <div className="page account">
        <h2>{this.state.name}</h2>
        <UserInfo
          userId={this.state.userId}
          name={this.state.name}
          firstName={this.state.firstName}
          lastName={this.state.lastName}
          email={this.state.email}
          address={this.state.address}
          city={this.state.city}
          state={this.state.state}
          zipcode={this.state.zipcode}
          img={this.state.img}
          password={this.state.password}
        />

        <StripeProvider apiKey="pk_test_j6wi0FWmtWCqFPwU3oCHJA2800c8YshuOy">
          <Elements>
            <Stripe stripe_user_id={this.state.stripe_user_id} />
          </Elements>
        </StripeProvider>
      </div>
    );
  }
}

export default Account;
