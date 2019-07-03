import React, { Component } from "react";

class StripeConnectButton extends Component {
  render() {
    return (
      <div className="stripe">
        <p>
          We partner with Stripe to facilitate payments for late and lost books.
          <br />
          <br />
          Connect to Stripe by following the link below:
        </p>
        <a href={`http://localhost:4000/api/stripe/connect`}>
          <img src={require("./connect-to-stripe-button.png")} />
        </a>
      </div>
    );
  }
}

export default StripeConnectButton;
