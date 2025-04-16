import React, { useState } from 'react';
import './InputField.css';

const InputField = ({ placeholder, value, onChange, type = 'text' }) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="input-container">
      <input
        type={type}
        value={value}
        onChange={onChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className="custom-input"
        placeholder={isFocused || value ? '' : placeholder}
      />
      {(isFocused || value) && (
        <div className="floating-placeholder">
          {placeholder}
        </div>
      )}
    </div>
  );
};

export default InputField;