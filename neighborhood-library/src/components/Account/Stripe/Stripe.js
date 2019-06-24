import React, { Component } from "react";

class Stripe extends Component {
  render() {
    return (
      <div className="stripe">
        <CreateAccount />
        <CreatePlan />
        <CreateCustomer />
        <SubscribeToPlan />
      </div>
    );
  }
}

export default Stripe;
