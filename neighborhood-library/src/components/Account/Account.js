import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import { StripeProvider, Elements } from "react-stripe-elements";
import Stripe from "./Stripe/Stripe";
import UserInfo from "./UserInfo";

const Account = props => {
  return (
    <div>
      <h2>{props.name}</h2>
      <UserInfo
        userId={props.userId}
        name={props.name}
        firstName={props.firstName}
        lastName={props.lastName}
        email={props.email}
        address={props.address}
        city={props.city}
        props={props.state}
        zipcode={props.zipcode}
        img={props.img}
      />

      <StripeProvider apiKey="pk_test_j6wi0FWmtWCqFPwU3oCHJA2800c8YshuOy">
        <Elements>
          <Stripe stripe_user_id={props.stripe_user_id} />
        </Elements>
      </StripeProvider>
    </div>
  );
};

export default Account;

// class Account extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {};
//   }
//   componentDidMount() {
//     this.props.getUserData();
//   }

//   render() {
//     return (
//       <div className="page account">
//
//       </div>
//     );
//   }
// }

// export default Account;
