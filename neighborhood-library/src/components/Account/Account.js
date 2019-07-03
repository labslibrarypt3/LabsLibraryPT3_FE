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
    console.log(this.props.getUserData());
    this.props.getUserData();
  }

  render() {
    const fullNameArray = this.props.name.split(" ");
    const firstName = fullNameArray[0];
    //grabs fullNameArray from above, gets the last word from it, splits that word into an array of letters, and grabs the first letter.
    const lastInitial = fullNameArray[fullNameArray.length - 1].split("")[0];

    return (
      <div>
        <h2>Welcome {`${firstName} ${lastInitial}.`}!</h2>
        <hr />
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
        <StripeConnectButton stripe_user_id={this.props.stripe_user_id} />
      </div>
    );
  }
}

export default Account;
