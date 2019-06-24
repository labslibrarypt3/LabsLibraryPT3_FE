import React, { Component } from "react";
import axios from "axios";

class SubscribeToPlan extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  submitForm = e => {
    e.preventDefault();
    axios
      .post("/subscribe-to-plan", this.state)
      .then(data => this.setState({ ...this.state, id: data.data.id }));
  };

  render() {
    return (
      <div>
        <h3> Step 4 - Subscribe to plan </h3>
        <p>
          <i>Subscribe Rory, the customer of James to James' plan </i>
        </p>
        <form onSubmit={this.submitForm}>
          <label> Customer </label>
          <input
            onChange={event =>
              this.setState({ ...this.state, customer: event.target.value })
            }
          />
          <label> plan </label>
          <input
            onChange={event =>
              this.setState({ ...this.state, plan: event.target.value })
            }
          />
          <label> Account </label>
          <input
            onChange={event =>
              this.setState({ ...this.state, account: event.target.value })
            }
          />
          <button type="submit"> Submit </button>
          <p> {this.state.id} </p>
        </form>
      </div>
    );
  }
}

export default SubscribeToPlan;
