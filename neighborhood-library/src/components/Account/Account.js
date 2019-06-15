import React, { Component } from "react";
import { Route } from "react-router-dom";
import Settings from "./Settings";
import { Link } from "react-router-dom";
import { Redirect } from "react-router-dom";
import { axios } from "axios";
import { StripeProvider, Elements } from "react-stripe-elements";
import StripePayment from "./Stripe/StripePayment";

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
    const authToken = localStorage.getItem("jwt");
    axios
      .get("http://localhost:4000/auths/auth", {
        headers: { authorization: authToken }
      })
      .then(res => {
        this.setState({ userId: res.userId, name: res.name, email: res.email });
      });
  }
  render() {
    return (
      <div>
        <h2>Welcome {this.state.name}</h2>
        <Link to={Settings} />
        <Route path="/settings/:id" component={Settings} />
        <StripeProvider apiKey="pk_test_j6wi0FWmtWCqFPwU3oCHJA2800c8YshuOy">
          <Elements>
            <StripePayment />
          </Elements>
        </StripeProvider>
      </div>
    );
  }
}

export default Account;
