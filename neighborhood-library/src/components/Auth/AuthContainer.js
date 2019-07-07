import React from "react";
import OAuthContainer from "./OAuthContainer";
import ManualAuthContainer from "./ManualAuthContainer";

const AuthContainer = props => {
  return (
    <main className="auth-container">
      <OAuthContainer
        isLoggedIn={props.isLoggedIn}
        loggedInStateHandler={props.loggedInStateHandler}
      />
      <p>OR</p>
      <ManualAuthContainer
        isLoggedIn={props.isLoggedIn}
        loggedInStateHandler={props.loggedInStateHandler}
      />
    </main>
  );
};

export default AuthContainer;
