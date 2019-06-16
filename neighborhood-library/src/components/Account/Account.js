import React, { Component } from "react";
import { Route, Link, Redirect } from "react-router-dom";
import Settings from "./Settings";
import axios from "axios";
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
    this.getData();
  }
  getData = () => {
    if (localStorage.getItem("jwt")) {
      const authToken = localStorage.getItem("jwt");
      const endpoint = "http://localhost:4000/api/users/account";
      return axios
        .get(endpoint, {
          headers: { authorization: authToken }
        })
        .then(res => {
          this.setState({
            userId: res.userId,
            name: res.name,
            email: res.email
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
        <h2>Welcome {this.state.name}</h2>
        <Link to="/settings/:id" component={Settings} />
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
