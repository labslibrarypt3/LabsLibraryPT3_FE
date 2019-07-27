import React, { Component, useState, useEffect } from "react";
import { Link, Route } from "react-router-dom";
import StripeConnect from "./Stripe/StripeConnect";
import AccountInfo from "./AccountInfo";
import EditAccountInfoForm from "./EditAccountInfoForm";

class Account extends Component {
  constructor(props) {
    super(props);
    console.log(props, "are there props in the accounts page");
  }

  componentDidMount() {
    console.log("Account.js mounted");
    this.props.getUserData();
  }

  render() {
    // if (this.props.email === " ") {
    //   window.location.replace(" http://localhost:3000/auth");
    // }
    let heading = "";
    this.props.lastInitial === " "
      ? (heading = `Welcome ${this.props.firstName} ${this.props.lastInitial}.`)
      : (heading = `Welcome ${this.props.firstName}.`);
    return (
      <main className="account">
        <h2>{heading}</h2>
        <Route
          exact
          path="/account"
          render={props => (
            <AccountInfo
              {...props}
              userId={this.props.userId}
              name={this.props.name}
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
              {...props}
              userId={this.props.userId}
              name={this.props.name}
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
        <StripeConnect stripe_user_id={this.props.stripe_user_id} />
      </main>
    );
  }
}

export default Account;
