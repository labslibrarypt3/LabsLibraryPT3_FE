import React, { Component, useState, useEffect } from "react";
import { Link, Route } from "react-router-dom";
import StripeConnectButton from "./Stripe/StripeConnectButton";
import AccountInfo from "./AccountInfo";
import EditAccountInfoForm from "./EditAccountInfoForm";

class Account extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log("Account.js mounted");
    this.props.getUserData();
  }
  render() {
    return (
      <div>
        <h2>Welcome {this.props.name}!</h2>
        <hr />
        <Route
          exact
          path="/account"
          render={props => (
            <AccountInfo
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
          )}
        />

        <Route
          path="/account/edit"
          render={props => (
            <EditAccountInfoForm
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
          )}
        />

        <hr />
        <StripeConnectButton stripe_user_id={this.props.stripe_user_id} />
      </div>
    );
  }
}

export default Account;
