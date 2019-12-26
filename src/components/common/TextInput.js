import React from "react";
import PropTypes from "prop-types";

export default function TextInput(props) {
  let wrapperClass = "form-group";
  //   When you declare:
  //   TextInput.defaultProps = {
  //     error: ""
  //   }
  //   you certainly will have that prop
  //   so you don't have to check this out
  if (/*props.error && */ props.error.length > 0) {
    wrapperClass += " has-error";
  }

  return (
    <div className={wrapperClass}>
      <label htmlFor={props.id}>{props.label}</label>
      <div className="field">
        <input
          id={props.id}
          type="text"
          onChange={props.onChange}
          name={props.name}
          className="form-control"
          value={props.value}
        />
      </div>
      {props.error && <div className="alert alert-danger">{props.error}</div>}
      {/* The && operator like this executes the block on the right when the left is true */}
    </div>
  );
}

TextInput.protoTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string,
  error: PropTypes.string
};

TextInput.defaultProps = {
  error: ""
};
