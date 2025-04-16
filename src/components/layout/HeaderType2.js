import React from 'react';
import './Header.css'; // Импортируем стили
import '../../assets/styles/TextStyles.css';
import MenuImg from '../../assets/images/menu_24px.svg';
import LogoImg from '../../assets/images/Logo.svg';
import CloseImg from '../../assets/images/Close 24 px.svg';
import CallButton from '../common/ButtonCall';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PhoneIcon from '../../assets/images/phone-telephone.svg';

const HeaderType2 = () => {
  const navigate = useNavigate();



  const handleLogoClick = () => {
    navigate('/');
  };



  return (
    <header className="header">
      <div className='header-elements'>
        <div className='headr-2-left-block'>
            <button className="header-logo-btn" onClick={handleLogoClick}>
            <img className="logo-style" src={LogoImg} alt="logo" />
            </button>
            <p className='p7 text1'>Разработка сайтов и мобильных приложений любой сложности</p>
        </div>
        
        <div>
            <div className="contact-item-header">
                <img src={PhoneIcon} alt="Телефон" className="contact-icon" />
            <span className='p6 text1'>+7 (999) 620-01-46</span>
          </div>
        </div>

      </div>
      
      <div className='rectangle'></div>

    </header>
  );
};

export default HeaderType2;