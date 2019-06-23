import React, { Component } from "react";
import { Route, Link, Redirect } from "react-router-dom";
import axios from "axios";
import { StripeProvider, Elements } from "react-stripe-elements";
import Stripe from "./Stripe/Stripe";

class Account extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: "",
      name: "",
      email: ""
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
          headers: { authorization: authToken },
          params: { userId: localStorage.getItem("id") }
        })
        .then(res => {
          this.setState({
            userId: res.data.userId,
            name: res.data.name,
            email: res.data.email
          });
        })
        .catch(err => console.log(err));
    } else {
      return <Redirect to={"/"} />;
    }
  };

  render() {
    return (
      <div>
        <h2>{this.state.name}</h2>

        <StripeProvider apiKey="pk_test_j6wi0FWmtWCqFPwU3oCHJA2800c8YshuOy">
          <Elements>
            <Stripe />
          </Elements>
        </StripeProvider>
      </div>
    );
  }
}

export default Account;
