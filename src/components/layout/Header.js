import React from 'react';
import './Header.css'; // Импортируем стили
import '../../assets/styles/TextStyles.css';
import MenuImg from '../../assets/images/menu_24px.svg';
import LogoImg from '../../assets/images/Logo.svg';
import CloseImg from '../../assets/images/Close 24 px.svg';
import CallButton from '../common/ButtonCall';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogoClick = () => {
    navigate('/');
  };

  const scrollToSection = (sectionId) => {
    const currentPath = window.location.pathname;
    const sectionElement = document.getElementById(sectionId);

    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: 'smooth' });
    } else if (currentPath !== '/') {
      navigate(`/?scrollTo=${sectionId}`); // Передаем параметр через URL
    }
  };

  // Новая функция для обработки клика по ссылке в меню
  const handleMenuLinkClick = (sectionId) => {
    scrollToSection(sectionId); // Прокрутка до секции
    toggleMenu(); // Закрытие меню
  };

  return (
    <header className="header">
      <div className='header-elements'>
        <button className="header-logo-btn" onClick={handleLogoClick}>
          <img className="logo-style" src={LogoImg} alt="logo" />
        </button>

        <div className='header-links'>
          <a className='p6 btn-class' onClick={() => scrollToSection('portfolio-section')}>Портфолио</a>
          <a className='p6 btn-class' onClick={() => scrollToSection('about-company')}>О нас</a>
          <a className='p6 btn-class' onClick={() => scrollToSection('stages-of-development')}>Этапы работы</a>
          <a className='p6 btn-class' onClick={() => scrollToSection('contact-us')}>Связь с нами</a>
        </div>
        <CallButton className='call-button-header'>Заказать звонок</CallButton>
        <button className="menu-button" onClick={toggleMenu}>
          <img src={MenuImg} alt="menu" />
        </button>
      </div>
      <div className='rectangle'></div>

      {/* Блок меню */}
      <div className={`menu-overlay ${isMenuOpen ? 'open' : ''}`}>
        <div className="menu-header">
          <p className='p1'>Меню</p>
          <button className="close-button" onClick={toggleMenu}>
            <img src={CloseImg} alt="close" />
          </button>
        </div>
        <div className='menu-links'>
          <a className='p4 text1 btn-class' onClick={() => handleMenuLinkClick('portfolio-section')}>Портфолио</a>
          <div className='menu-line' />
          <a className='p4 text1 btn-class' onClick={() => handleMenuLinkClick('about-company')}>О нас</a>
          <div className='menu-line' />
          <a className='p4 text1 btn-class' onClick={() => handleMenuLinkClick('stages-of-development')}>Этапы работы</a>
          <div className='menu-line' />
          <a className='p4 text1 btn-class' onClick={() => handleMenuLinkClick('contact-us')}>Связь с нами</a>
        </div>
      </div>
    </header>
  );
};

export default Header;