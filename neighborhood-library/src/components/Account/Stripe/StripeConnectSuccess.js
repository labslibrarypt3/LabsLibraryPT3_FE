import React from "react";
import axios from "axios";
import { withRouter } from "react-router";

class StripeConnectSuccess extends React.Component {
  constructor(props) {
    super(props);
  }

  //location, match, history returning undefined
  //i can see them in the dev tools in the parent react router component
  // but i cannot access them
  componentDidMount() {
    //get token from the url
    // send code to stripe
    // fetch the user acct id
    console.log(window.location.search);
    console.log(window.location.search.split(`&`));
    // Array [ "?code=ac_FXC04glriUoA4WUm0AAnMBXXHz6rlYgf", "state=aux8gduxkpb" ]
  }

  render() {
    return (
      <div>
        <h2>You're all set!</h2>
        <p>
          You've successfully connected to Stripe and can accept payments for
          late or lost books.
        </p>
        <p>Now is a great time to add a book to your library!</p>
      </div>
    );
  }
}

export default StripeConnectSuccess;
