import React from 'react';
import './ApplicationWindow.css';
import '../../assets/styles/TextStyles.css';
import CheckImg from '../../assets/images/check60px.svg';
import CloseImg from '../../assets/images/Close 24 px.svg';

const ApplicationWindow = ({ onClose }) => {
    return (
        <>
            {/* Затемнённый фон */}
            <div className="application-window-overlay" onClick={onClose}></div>

            {/* Окно с подтверждением */}
            <div className='application-windiw'>
                <button className="application-windiw-close-button" onClick={onClose}>
                    <img src={CloseImg} alt="close" />
                </button>
                <img src={CheckImg} alt="check" />
                <h className='h3 p2-768'>Ваша заявка принята</h>
                <p className='p3 p5-768 text1'>С вами свяжутся в ближайшее время</p>
            </div>
        </>
    );
};

export default ApplicationWindow;