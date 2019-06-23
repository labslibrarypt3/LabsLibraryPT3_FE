import React, { Component } from "react";
import BankAccountSection, {
  BANK_ACCOUNT_FORM,
  BANK_ACCOUNT_FORM_COUNTRY,
  BANK_ACCOUNT_FORM_CURRENCY,
  BANK_ACCOUNT_FORM_ROUTING_NUMBER,
  BANK_ACCOUNT_FORM_ACCOUNT_NUMBER,
  BANK_ACCOUNT_FORM_ACCOUNT_HOLDER_NAME,
  BANK_ACCOUNT_FORM_ACCOUNT_HOLDER_TYPE
} from "./BankAccountSection";
import { injectStripe } from "react-stripe-elements";

class BankAccountForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countryValue: "",
      currencyValue: "",
      routingNumberValue: "",
      accountNumberValue: "",
      accountHolderNameValue: "",
      accountHolderTypeValue: ""
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    const {
      countryValue,
      currencyValue,
      routingNumberValue,
      accountNumberValue,
      accountHolderNameValue,
      accountHolderTypeValue
    } = this.state;

    this.props.stripe
      .createToken("bank_account", {
        country: countryValue,
        currency: currencyValue,
        routing_number: routingNumberValue,
        account_number: accountNumberValue,
        account_holder_name: accountHolderNameValue,
        account_holder_type: accountHolderTypeValue
      })
      .then(({ token }) => {
        console.log("received stripe token", token);
        const { id } = token;
      });
  };

  onChangeFunc = (e, textBoxKey) => {
    const value = e.target.value;
    //can refactor to get literal value within VARIABLES and set state to value
    switch (textBoxKey) {
      case textBoxKey === BANK_ACCOUNT_FORM_COUNTRY:
        this.setState({ countryValue: value });
        break;
      case textBoxKey === BANK_ACCOUNT_FORM_CURRENCY:
        this.setState({ currencyValue: value });
        break;
        break;
      case textBoxKey === BANK_ACCOUNT_FORM_ROUTING_NUMBER:
        this.setState({ routingNumberValue: value });
        break;
      case textBoxKey === BANK_ACCOUNT_FORM_ACCOUNT_HOLDER_NAME:
        this.setState({ accountHolderNameValue: value });
        break;
      case textBoxKey === BANK_ACCOUNT_FORM_ACCOUNT_HOLDER_TYPE:
        this.setState({ accountHolderTypeValue: value });
        break;
    }
  };
  render() {
    const {
      countryValue,
      currencyValue,
      routingNumberValue,
      accountNumberValue,
      accountHolderNameValue,
      accountHolderTypeValue
    } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <BankAccountSection
          onChange={this.onChangeFunc}
          countryValue={countryValue}
          currencyValue={currencyValue}
          routingNumberValue={routingNumberValue}
          accountNumberValue={accountNumberValue}
          accountHolderNameValue={accountHolderNameValue}
          accountHolderTypeValue={accountHolderTypeValue}
          accountHolderTypeValue={accountHolderTypeValue}
        />
        <button>Save Account</button>
      </form>
    );
  }
}

export default injectStripe(BankAccountForm);
