import React from "react";
import axios from "axios";
class StripeConnectSuccess extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    //get token from the url
    // send code to stripe
    // fetch the user acct id
    console.log(this.props.params.get("code"));
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
