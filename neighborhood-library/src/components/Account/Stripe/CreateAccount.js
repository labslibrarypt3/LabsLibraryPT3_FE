import React, { Component } from "react";
import axios from "axios";

class CreateAccount extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  submitForm = e => {
    e.preventDefault();
    axios
      .post("/createAccount", this.state)
      .then(data => this.setState({ ...this.state, id: data.data.id }));
  };

  render() {
    return (
      <div>
        <h3> Connect to Stripe </h3>
        <form onSubmit={this.submitForm}>
          <label> Email </label>
          <input
            type="email"
            onChange={event =>
              this.setState({ ...this.state, email: event.target.value })
            }
          />
          <button type="submit"> Submit </button>
          <p> {this.state.id} </p>
        </form>
      </div>
    );
  }
}

export default CreateAccount;
