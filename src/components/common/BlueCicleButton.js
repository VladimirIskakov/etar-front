import React, { useEffect, useState } from 'react';
import './BlueCicleButton.css';
import Ellipse from '../../assets/images/Ellipse.svg';

const BlueCicleButton = ({
  size = 70,
  mobileSize = size,
  iconSize = size * 0.65,
  mobileIconSize = iconSize,
  className = '',
  icon,
  disabled = false, 
  onClick, 
}) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const currentSize = isMobile ? mobileSize : size;
  const currentIconSize = isMobile ? mobileIconSize : iconSize;

  const handleClick = (event) => {
    if (!disabled && onClick) {
      onClick(event); 
    }
  };

  return (
    <button
      className={`btn-ellipse-container ${disabled ? 'disabled' : ''} ${className}`}
      style={{ height: `${currentSize}px`, width: `${currentSize}px` }}
      disabled={disabled} 
      onClick={handleClick} 
    >
      <img
        style={{
          height: `${currentIconSize}px`,
          width: `${currentIconSize}px`,
        }}
        className='btn-ellipse-icon'
        src={icon}
        alt="Icon"
      />
    </button>
  );
};

export default BlueCicleButton;
