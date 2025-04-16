import React from 'react';
import './CheckboxButton.css';
import CheckboxIcon from '../../assets/images/CheckboxIcon.svg';

const CheckboxButton = ({
  disabled = false,
  className,
  size = 22,
  sizeTablet = 22, 
  sizeMobile = 22, 
  checked,
  onChange,
}) => {
  const handleClick = () => {
    if (!disabled && onChange) {
      onChange(!checked); 
    }
  };

  return (
    <button
      className={`checkbox-button ${className} ${checked ? 'checked' : ''} ${
        disabled ? 'disabled' : ''
      }`}
      onClick={handleClick}
      disabled={disabled}
      style={{
        '--size': `${size}px`, 
        '--size-tablet': `${sizeTablet}px`, 
        '--size-mobile': `${sizeMobile}px`, 
      }}
    >
      <div className="gradient-overlay"></div>
      <div className="gradient-border"></div>
      {checked && <img src={CheckboxIcon} alt="Checked" className="check-icon" />}
    </button>
  );
};

export default CheckboxButton;