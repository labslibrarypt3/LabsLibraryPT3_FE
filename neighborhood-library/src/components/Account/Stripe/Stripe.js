import React, { Component } from "react";
import CreateAccount from "./CreateAccount";
import CreatePlan from "./CreatePlan";
import CreateCustomer from "./CreateCustomer";
import SubscribeToPlan from "./SubscribeToPlan";

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
