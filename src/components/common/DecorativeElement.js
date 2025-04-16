import React from 'react';
import './DecorativeElement.css'; 

const DecorativeElement = ({className = ''}) => {
    return (
        <div className={`decorative-element ${className}`}></div>
    );
};

export default DecorativeElement;
