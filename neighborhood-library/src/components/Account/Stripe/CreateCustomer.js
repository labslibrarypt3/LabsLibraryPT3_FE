import React, { Component } from "react";
import axios from "axios";

class CreateCustomer extends Component {
  constructor() {
    super();

    this.state = {};
  }

  submitForm = e => {
    e.preventDefault();

    axios
      .post("/create-customer", this.state)
      .then(data => this.setState({ ...this.state, id: data.data.id }));
  };

  render() {
    return (
      <div>
        <h3> Step 3 - Create Customer </h3>
        <p>This should prbably be included in the mark as borrowed process</p>
        <p>
          <i>
            Create a customer (Borrower User) on behalf of Lender User (Within
            Lender User's account)
          </i>
        </p>
        <form onSubmit={this.submitForm}>
          <label> Description </label>
          <input
            onChange={event =>
              this.setState({ ...this.state, description: event.target.value })
            }
          />
          <label> Account </label>
          <input
            onChange={event =>
              this.setState({ ...this.state, account: event.target.value })
            }
          />
          <Button type="submit"> Submit </Button>
          <p> {this.state.id} </p>
        </form>
      </div>
    );
  }
}

export default CreateCustomer;
