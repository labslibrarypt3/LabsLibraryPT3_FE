import React, { Component } from "react";
import axios from "axios";

class CreatePlan extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  submitForm = e => {
    e.preventDefault();
    axios
      .post("/create-plan", this.state)
      .then(data => this.setState({ ...this.state, planid: data.data.id }));
  };

  render() {
    return (
      <div>
        <h3> Step 2 - Create Plan </h3>
        <p>
          <i>
            Add Borrower as "subscriber" to Lender's service to enable charging
            recurring late fees
          </i>
        </p>
        <form onSubmit={this.submitForm}>
          <label> Account </label>
          <input
            onChange={event =>
              this.setState({ ...this.state, account: event.target.value })
            }
          />
          <label> Amount </label>
          <input
            onChange={event =>
              this.setState({ ...this.state, amount: event.target.value })
            }
          />
          <label> Name </label>
          <input
            onChange={event =>
              this.setState({ ...this.state, name: event.target.value })
            }
          />
          <label> ID </label>
          <input
            onChange={event =>
              this.setState({ ...this.state, id: event.target.value })
            }
          />
          <button type="submit"> Submit </button>
          <p> {this.state.planid} </p>
        </form>
      </div>
    );
  }
}
