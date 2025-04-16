import React from 'react';
import './Footer.css';
import '../../assets/styles/TextStyles.css';
import DecorativeElement from '../common/DecorativeElement';
import LogoImg from '../../assets/images/Logo.svg';
import TelegramIcon from '../../assets/images/telegram.svg';
import EmailIcon from '../../assets/images/Email.svg';
import PhoneIcon from '../../assets/images/phone-telephone.svg';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();

  const scrollToSection = (sectionId) => {
    const currentPath = window.location.pathname;
    const sectionElement = document.getElementById(sectionId);

    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: 'smooth' });
    } else if (currentPath !== '/') {
      navigate(`/?scrollTo=${sectionId}`); 
    }
  };

  return (
    <footer className="footer">
      <div className='rectangle'></div>
      <div className='footer-top-block'>
        <div className='logo-container'>
          <img className="footer-logo-style" src={LogoImg} alt="logo" />
        </div>
        <div className='links-container'>
          <a className='p5 p6-768 btn-class' onClick={() => scrollToSection('portfolio-section')}>Портфолио</a>
          <a className='p5 p6-768 btn-class' onClick={() => scrollToSection('about-company')}>О нас</a>
          <a className='p5 p6-768 btn-class' onClick={() => scrollToSection('stages-of-development')}>Этапы работы</a>
          <a className='p5 p6-768 btn-class' onClick={() => scrollToSection('contact-us')}>Связь с нами</a>
        </div>
        <div className="contacts-container">
          <div className="contact-item">
            <img src={PhoneIcon} alt="Телефон" className="contact-icon" />
            <span className='p6 text1'>+7 (999) 620-01-46</span>
          </div>
          <div className="contact-item">
            <img src={EmailIcon} alt="Почта" className="contact-icon" />
            <span className='p6 text1'>vmv@yourtar.ru</span>
          </div>
          <div className="contact-item">
            <img src={TelegramIcon} alt="Телеграм" className="contact-icon" />
            <span className='p6 text1'>Напишите нам в tg</span>
          </div>
        </div>
      </div>
      <div className='rectangle'></div>
      <div className='footer-bottom-block'>
        <p className='p7 text2'>ООО «ЁРТАР» © Все права защищены / 2024</p>
        <div className='footer-bottom-links'>
          <a className='p7 text2 btn-class'>Политика конфиденциальности</a>
          <a className='p7 text2 btn-class'>Публичная оферта</a>
        </div>
      </div>
      <DecorativeElement className='footer-de-castop-class' />
    </footer>
  );
};

export default Footer;