import React, { Component } from "react";
import {
  CardElement,
  injectStripe,
  ReactStripeElements
} from "react-stripe-elements";
import axios from "axios";

class StripePayment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      setupBegan: false,
      isLoadingFieldsNeeded: true,
      error: null
    };
  }

  componentWillMount() {
    this.fetchFieldsNeeded();
  }

  fetchFieldsNeeded = () => {
    axios
      .post("localhost:4000/api/striperoutes/account/setup", {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        }
      })
      .then(res => res.json())
      .then(json => {
        const { success, message, setupBegan } = json;
        // ↑ same as const success = json.success
        success
          ? this.setState({ setupBegan, isLoadingFieldsNeeded: false })
          : this.setState({ error: message, isLoadingFieldsNeeded: false });
      })
      .catch();
  };

  onClickBeginSetup = () => {
    console.log("onClickBeginSetup");
  };

  // handleSubmit = async e => {
  //   e.preventDefault();
  //   try {
  //     let { token } = await this.props.stripe.createToken({
  //       name: this.state.name
  //     });
  //     let amount = this.state.amount;
  //     console.log(token);
  //     //fix this URL

  //     // await fetch('http://localhost:4000/api/striperoutes/charge', {
  //     await fetch(
  //       "https://pt3-neighborhood-library-back.herokuapp.com/api/striperoutes/charge",
  //       {
  //         method: "POST",
  //         headers: {
  //           "Content-type": "text/plain"
  //         },
  //         body: token.id,
  //         amount
  //       }
  //     );
  //   } catch (e) {
  //     throw e;
  //   }
  //   console.log("clicked!");
  // };

  // handleInputChange = e => {
  //   this.setState({
  //     [e.target.name]: e.target.value
  //   });
  // };

  render() {
    const { isLoadingFieldsNeeded, setupBegan, error } = this.state;
    if (isLoadingFieldsNeeded) {
      return <p>...loading</p>;
    }

    if (!setupBegan) {
      return (
        <div>
          <div>{error ? <p>{error}</p> : null}</div>
          <button onClick={this.onClickBeginSetup}>Begin Setup</button>
          <p>
            We partner with Stripe to facilitate transferring late fees and lost
            fees from borrowers to lenders. By clicking setup you agree to
            Stripe's terms of service.
          </p>
        </div>
      );
    }
    return (
      <div className="stripe">
        <form className="payment-form" onSubmit={this.handleSubmit}>
          <label>Name</label>
          <input
            type="text"
            defaultValue={this.state.name}
            onChange={this.handleInputChange}
          />
          <label>Dollar Amount</label>
          <input
            type="text"
            defaultValue={this.state.amount}
            onChange={this.handleInputChange}
          />
          <CardElement className="cardElement" />
          <button className="button">Click to Pay</button>
        </form>
      </div>
    );
  }

  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  render() {
    return (
      <div className="paymentContainer">
        <form className="paymentForm" onSubmit={this.handleSubmit}>
          <label>Name</label>
          <input
            type="text"
            defaultValue={this.state.name}
            onChange={this.handleInputChange}
          />
          <label>Dollar Amount</label>
          <input
            type="text"
            defaultValue={this.state.amount}
            onChange={this.handleInputChange}
          />
          <br />
          <CardElement className="cardElement" />
          <button className="button">Click to Pay</button>
        </form>
      </div>
    );
  }
}
export default injectStripe(StripePayment);
//hint: testing card number is 4242 4242 4242 4242 4242. any CVV and zip may be used
