import React from 'react';

export default function InputCheckBox(props) {
  const { labelText, id, onChangeFunc, changeOnCheck } = props;
  return (
    <div className="input-group mb-2">
      <div className="input-group-text">
        <input
          className="form-check-input"
          type="checkbox"
          id={id}
          aria-label="Checkbox for following text input"
          onChange={() => onChangeFunc(!changeOnCheck)}
        />
      </div>
      <label htmlFor={id} className="input-group-text">
        {labelText}
      </label>
    </div>
  );
}
