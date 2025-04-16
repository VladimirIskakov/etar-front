import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './IconConteiner.css';
import Ellipse from '../../assets/images/Ellipse.svg';

const IconContainer = ({
  size = 70,
  mobileSize = size,
  iconSize = size * 0.65,
  mobileIconSize = iconSize,
  className = '',
  icon,
  effect = true,
  text = '', 
  textClassName=''
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

  return (
    <div className={`ellipse-container ${className}`}>
      {icon ? (
       
        <img
          style={{ height: `${currentIconSize}px`, width: `${currentIconSize}px` }}
          className='ellipse-icon'
          src={icon}
          alt="Icon"
        />
      ) : (

        <span
          className={`ellipse-text ${textClassName}`}
        >
          {text}
        </span>
      )}

      <img
        style={{ height: `${currentSize}px`, width: `${currentSize}px` }}
        className='ellipse-ellipse'
        src={Ellipse}
        alt="Ellipse"
      />

      {effect && (
        <div
          style={{ height: `${currentSize * 1.6}px`, width: `${currentSize * 1.6}px` }}
          className='ellipse-decorative-element'
        ></div>
      )}
    </div>
  );
};

IconContainer.propTypes = {
  size: PropTypes.number,
  mobileSize: PropTypes.number,
  iconSize: PropTypes.number,
  mobileIconSize: PropTypes.number,
  className: PropTypes.string,
  icon: PropTypes.string, 
  effect: PropTypes.bool,
  text: PropTypes.string, 
};

export default IconContainer;