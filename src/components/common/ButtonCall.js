import React from 'react';
import './ButtonCall.css'; 
import '../../assets/styles/TextStyles.css';

const CallButton = ({ onClick, className = '', children }) => {
    return (
        <button className={`call-button Button1 ${className}`} onClick={onClick}>
            {children}
        </button>
    );
};

export default CallButton;