import React from "react";
const baseUrl = process.env.REACT_APP_BASE_URL;
const stripeClientId = process.env.REACT_APP_STRIPE_CLIENT_ID;

const StripeConnect = () => {
  const stateValue = Math.random().toString(36);
  const redirect_uri = "https://goofy-mayer-45bb20.netlify.com";

  const stripeUrl = `https://connect.stripe.com/express/oauth/authorize?redirect_uri=${redirect_uri}&client_id=${stripeClientId}&state=${stateValue}&suggested_capabilities[]=platform_payments`;
  return (
    <section className="stripe-connect">
      <p>
        We partner with Stripe to facilitate payments for late and lost books.
        <br />
        <br />
        Connect to Stripe by following the link below:
      </p>
      <a href={stripeUrl}>
        <img src={require("./connect-to-stripe-button.png")} />
      </a>
    </section>
  );
};

export default StripeConnect;
