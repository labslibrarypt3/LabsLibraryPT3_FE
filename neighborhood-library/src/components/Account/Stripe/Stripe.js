import React, { Component } from "react";
import {
  CardElement,
  injectStripe,
  ReactStripeElements,
  Elements
} from "react-stripe-elements";
import axios from "axios";
import InputKeyValue from "./InputKeyValue";
import BankAccountForm from "./BankAccountForm";

class Stripe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      setupBegan: false,
      isLoadingFieldsNeeded: false,
      error: null,
      fieldsNeededForm: {}
    };
  }

  componentWillMount() {
    this.fetchAccount();
  }

  getFieldValue = key => {
    const { fieldsNeededForm } = this.state;
    if (fieldsNeededForm[key]) {
      return fieldsNeededForm[key];
    } else {
      return "";
    }
  };

  handleInputChange = (e, key) => {
    const { fieldsNeededForm } = this.state;
    fieldsNeededForm[key] = e.target.value;
    this.setState({ fieldsNeededForm });
  };

  fetchAccount = () => {
    axios
      .post("localhost:4000/api/striperoutes/account/get", {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        }
      })
      .then(res => res.json())
      .then(json => {
        const { success, message, account, setupBegan } = json;
        // ↑ same as const success = json.success
        success
          ? this.setState({ setupBegan, isLoadingFieldsNeeded: false })
          : this.setState({ error: message, isLoadingFieldsNeeded: false });
      })
      .catch(error => error.json());
  };

  onStartAccountSetup = () => {
    console.log("onStartAccountSetup");
    this.setState({ isLoadingFieldsNeeded: true });
    axios
      .post("localhost:4000/api/striperoutes/account/setup", {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ country: "US" })
      })
      .then(res => res.json())
      .then(json => {
        const { success, message } = json;
        // ↑ same as const success = json.success
        success
          ? this.fetchAccount()
          : this.setState({ error: message, isLoadingFieldsNeeded: false });
      })
      .catch(error => {
        console.log(error);
      });
  };

  onClickBeginSetup = () => {
    console.log("onClickBeginSetup");
    this.onStartAccountSetup();
  };

  onClickSaveFieldsNeeded = () => {
    console.log("onClickSaveFieldsNeeded");
    const { fieldsNeededForm } = this.state;
    this.setState({ isLoading: true });
    axios
      .post("localhost:4000/api/striperoutes/account/save", {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(fieldsNeededForm)
      })
      .then(res => res.json())
      .then(json => {
        const { success, message } = json;
        // ↑ same as const success = json.success
        success
          ? this.fetchAccount()
          : this.setState({ error: message, isLoadingFieldsNeeded: false });
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    const { isLoadingFieldsNeeded, setupBegan, error, account } = this.state;
    if (isLoadingFieldsNeeded) {
      return <p>...loading</p>;
    }

    if (!setupBegan) {
      return (
        <div>
          {error ? <p>{error}</p> : null}
          <button onClick={this.onClickBeginSetup}>Begin Setup</button>
          <p>
            We partner with Stripe to facilitate transferring late fees and lost
            fees from borrowers to lenders. By clicking setup you agree to
            Stripe's terms of service.
          </p>
        </div>
      );
    }

    console.log("account", account);
    const { verification } = account;
    const { fields_needed } = verification;

    return (
      <div>
        {error ? <p>{error}</p> : null}

        {fields_needed.length === 0 ? (
          <p>All setup</p>
        ) : (
          <div>
            {fields_needed.map(fieldKey => {
              if (fieldKey === "bank_account") {
                return (
                  <Elements>
                    <BankAccountForm />
                  </Elements>
                );
              }
              return (
                <InputKeyValue
                  text={fieldKey}
                  id={fieldKey}
                  value={this.getFieldValue(fieldKey)}
                  key={Math.random()}
                  onInputChange={this.inputChangeHandler}
                />
              );
            })}
            <div>
              <button onClick={this.onClickSaveFieldsNeeded}>Save</button>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default injectStripe(Stripe);
