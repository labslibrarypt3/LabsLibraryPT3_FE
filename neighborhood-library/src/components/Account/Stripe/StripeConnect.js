import React from "react";
const feBaseUrl = process.env.REACT_APP_FE_BASE_URL;

const StripeConnect = () => {
  return (
    <section className="stripe-connect">
      <p>
        We partner with Stripe to facilitate payments for late and lost books.
        <br />
        <br />
        Connect to Stripe by following the link below:
      </p>
      <a href={`${feBaseUrl}/api/stripe/connect`}>
        <img src={require("./connect-to-stripe-button.png")} />
      </a>
    </section>
  );
};

export default StripeConnect;
