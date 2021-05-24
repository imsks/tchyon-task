import React from "react";

export const FormLabelInputGroup = (props) => {
  const {
    label,
    inputType,
    handleInput,
    required = false,
    disabled = false,
  } = props;

  return (
    <div className="form__group">
      <input
        type={inputType}
        className="form__input"
        placeholder={label}
        onChange={handleInput}
        required={required}
        disabled={disabled}
      />
    </div>
  );
};