//Original by Keith Weaver and modified to suit the purposes of this app. https://gist.github.com/keithweaver/75a320454828093468f4802011891c5e

import React from "react";
import PropTypes from "prop-types";

export const BANK_ACCOUNT_FORM_COUNTRY = "country";
export const BANK_ACCOUNT_FORM_CURRENCY = "currency";
export const BANK_ACCOUNT_FORM_ROUTING_NUMBER = "routing_number";
export const BANK_ACCOUNT_FORM_ACCOUNT_NUMBER = "account_number";
export const BANK_ACCOUNT_FORM_ACCOUNT_HOLDER_NAME = "account_holder_name";
export const BANK_ACCOUNT_FORM_ACCOUNT_HOLDER_TYPE = "account_holder_type";

const BankAccountForm = props => {
  const {
    onChangeFunc,
    countryValue,
    currencyValue,
    routingNumberValue,
    accountNumberValue,
    accountHolderNameValue,
    accountHolderTypeValue,
    countryKey,
    currencyKey,
    routingNumberKey,
    accountNumberKey,
    accountHolderNameKey,
    accountHolderTypeKey,
    countryLabel,
    currencyLabel,
    routingNumberLabel,
    accountNumberLabel,
    accountHolderNameLabel,
    accountHolderTypeLabel
  } = props;
  return (
    <div>
      <div>
        <label htmlFor={countryKey}>{countryLabel}</label>
        <input
          type="text"
          id={countryKey}
          value={countryValue}
          onChange={e => onChangeFunc(e, countryKey)}
        />
      </div>
      <div>
        <label htmlFor={currencyKey}>{currencyLabel}</label>
        <input
          type="text"
          id={currencyKey}
          value={currencyValue}
          onChange={e => onChangeFunc(e, currencyKey)}
        />
      </div>
      <div>
        <label htmlFor={routingNumberKey}>{routingNumberLabel}</label>
        <input
          type="text"
          id={routingNumberKey}
          value={routingNumberValue}
          onChange={e => onChangeFunc(e, routingNumberKey)}
        />
      </div>
      <div>
        <label htmlFor={accountNumberKey}>{accountNumberLabel}</label>
        <input
          type="text"
          id={accountNumberKey}
          value={accountNumberValue}
          onChange={e => onChangeFunc(e, accountNumberKey)}
        />
      </div>
      <div>
        <label htmlFor={accountHolderNameKey}>{accountHolderNameLabel}</label>
        <input
          type="text"
          id={accountHolderNameKey}
          value={accountHolderNameValue}
          onChange={e => onChangeFunc(e, accountHolderNameKey)}
        />
      </div>
      <div>
        <label htmlFor={accountHolderTypeKey}>{accountHolderTypeLabel}</label>
        <input
          type="text"
          id={accountHolderTypeKey}
          value={accountHolderTypeValue}
          onChange={e => onChangeFunc(e, accountHolderTypeKey)}
        />
      </div>
    </div>
  );
};

BankAccountForm.propTypes = {
  // This function should be binded to the parent component
  onChangeFunc: PropTypes.func.isRequired,

  // Values below should be saved in the parent state
  countryValue: PropTypes.string.isRequired,
  currencyValue: PropTypes.string.isRequired,
  routingNumberValue: PropTypes.string.isRequired,
  accountNumberValue: PropTypes.string.isRequired,
  accountHolderNameValue: PropTypes.string.isRequired,
  accountHolderTypeValue: PropTypes.string.isRequired,

  // Below are not required but you can customize if you want
  countryKey: PropTypes.string,
  currencyKey: PropTypes.string,
  routingNumberKey: PropTypes.string,
  accountNumberKey: PropTypes.string,
  accountHolderNameKey: PropTypes.string,
  accountHolderTypeKey: PropTypes.string,

  // Below are not required but you can customize if you want
  countryLabel: PropTypes.string,
  currencyLabel: PropTypes.string,
  routingNumberLabel: PropTypes.string,
  accountNumberLabel: PropTypes.string,
  accountHolderNameLabel: PropTypes.string,
  accountHolderTypeLabel: PropTypes.string
};

BankAccountForm.defaultProps = {
  countryKey: BANK_ACCOUNT_FORM_COUNTRY,
  currencyKey: BANK_ACCOUNT_FORM_CURRENCY,
  routingNumberKey: BANK_ACCOUNT_FORM_ROUTING_NUMBER,
  accountNumberKey: BANK_ACCOUNT_FORM_ACCOUNT_NUMBER,
  accountHolderNameKey: BANK_ACCOUNT_FORM_ACCOUNT_HOLDER_NAME,
  accountHolderTypeKey: BANK_ACCOUNT_FORM_ACCOUNT_HOLDER_TYPE,
  countryLabel: BANK_ACCOUNT_FORM_COUNTRY,
  currencyLabel: BANK_ACCOUNT_FORM_CURRENCY,
  routingNumberLabel: BANK_ACCOUNT_FORM_ROUTING_NUMBER,
  accountNumberLabel: BANK_ACCOUNT_FORM_ACCOUNT_NUMBER,
  accountHolderNameLabel: BANK_ACCOUNT_FORM_ACCOUNT_HOLDER_NAME,
  accountHolderTypeLabel: BANK_ACCOUNT_FORM_ACCOUNT_HOLDER_TYPE
};

export default BankAccountForm;
