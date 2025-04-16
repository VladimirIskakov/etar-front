import React from 'react';
import './PortfolioBtn.css';

const PortfolioBtn = ({
    className = '',
    disabled = false,
    onClick,
    children,
}) => {
    const handleClick = (event) => {
        if (!disabled && onClick) {
            onClick(event);
        }
    };

    return (
        <button
            className={`btn-portfolio ${className}`}
            onClick={handleClick}
            disabled={disabled}
        >
            {children}
        </button>
    );
};

export default PortfolioBtn;