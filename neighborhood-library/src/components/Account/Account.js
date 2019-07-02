import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { StripeProvider, Elements } from "react-stripe-elements";
import Stripe from "./Stripe/Stripe";
import UserInfo from "./UserInfo";

class Account extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    this.props.getUserData();
  }

  render() {
    return (
      <div className="page account">
        <h2>{this.props.name}</h2>
        <UserInfo
          userId={this.props.userId}
          name={this.props.name}
          firstName={this.props.firstName}
          lastName={this.props.lastName}
          email={this.props.email}
          address={this.props.address}
          city={this.props.city}
          props={this.props.state}
          zipcode={this.props.zipcode}
          img={this.props.img}
        />

        <StripeProvider apiKey="pk_test_j6wi0FWmtWCqFPwU3oCHJA2800c8YshuOy">
          <Elements>
            <Stripe stripe_user_id={this.props.stripe_user_id} />
          </Elements>
        </StripeProvider>
      </div>
    );
  }
}

export default Account;
