import React from "react";
import PropTypes from "prop-types";

const InputKeyValue = props => {
  return (
    <div>
      <label htmlFor={props.id}>{props.text}</label>
      <input
        type="text"
        id={props.id}
        onChange={e => {
          props.inputChangeHandler(e, props.id);
        }}
        value={props.value}
      />
    </div>
  );
};

InputKeyValue.propTypes = {
  id: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired
};

export default InputKeyValue;
