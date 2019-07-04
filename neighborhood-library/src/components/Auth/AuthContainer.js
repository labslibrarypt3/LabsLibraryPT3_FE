import React from "react";
import OAuthContainer from "./OAuthContainer";
import ManualAuthContainer from "./ManualAuthContainer";

const AuthContainer = props => {
  return (
    <section className="auth-container container">
      <OAuthContainer
        isLoggesection={props.isLoggedIn}
        loggedInStateHandler={props.loggedInStateHandler}
      />
      <p>OR</p>
      <ManualAuthContainer
        isLoggedIn={props.isLoggedIn}
        loggedInStateHandler={props.loggedInStateHandler}
      />
    </section>
  );
};

export default AuthContainer;
