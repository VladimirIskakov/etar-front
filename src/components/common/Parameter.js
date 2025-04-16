import React, { useState } from 'react';
import CheckboxButton from './CheckboxButton';
import './Parameter.css';
import QuestionIcon from '../../assets/images/question.svg';

const Parameter = ({ name, price1, price2, tooltipText, time1, time2, onToggle }) => {
    const [isChecked, setIsChecked] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const [isTooltipVisible, setIsTooltipVisible] = useState(false);

    const formatPrice = (price) => {
        return price.toLocaleString('ru-RU');
    };

    const handleCheckboxChange = (checked) => {
        setIsChecked(checked);
        onToggle(checked);
    };

    return (
        <div className="parameter-pop-up-window">
            {isTooltipVisible && (
                <div className="tooltip-container">
                    <div className="tooltip">
                        <p className="p6">{tooltipText}</p>
                        <p className="p7 text2 tooltip-time">
                            Сроки &nbsp; <span className="p7">{time1}&nbsp; мес.</span> &nbsp; /&nbsp;{time2} мес.
                        </p>
                    </div>
                    <div className="tooltip-triangle" />
                </div>
            )}

            <div className={`parameter ${isChecked ? 'checked' : ''} ${isHovered ? 'hovered' : ''}`}>
                <div
                    className="parameter-checkbox"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    <CheckboxButton
                        size={22}
                        sizeTablet={18}
                        sizeMobile={18}
                        checked={isChecked}
                        onChange={handleCheckboxChange}
                    />
                </div>

                <p className="parameter-name p5 p6-768">{name}</p>

                <p className="parameter-price price">{formatPrice(price1)}₽</p>

                <p className="parameter-price p7 p8-768 text1">/&nbsp;{formatPrice(price2)}₽</p>

                <div
                    className="parameter-icon-ball"
                    onClick={() => setIsTooltipVisible(!isTooltipVisible)}
                >
                    <img src={QuestionIcon} alt="Icon" className="parameter-icon" />
                </div>
            </div>
        </div>
    );
};

export default Parameter;