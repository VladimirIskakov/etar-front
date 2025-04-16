import React from 'react';
import './FooterType2.css'; // Импортируем стили для второго типа подвала
import '../../assets/styles/TextStyles.css';
import DecorativeElement from '../common/DecorativeElement';
import LogoImg from '../../assets/images/Logo.svg';
import TelegramIcon from '../../assets/images/telegram.svg';
import EmailIcon from '../../assets/images/Email.svg';
import PhoneIcon from '../../assets/images/phone-telephone.svg';
import { useNavigate } from 'react-router-dom';
import SkolcovoLogo from '../../assets/images/Logo_Skolkovo.svg';
import CheckLogo from '../../assets/images/check_24px.svg';

const FooterType2 = () => {
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
    <footer className="footer footer-type-2">
      <div className='rectangle'></div>
      <div className='footer-top-block'>
        <div className="footer-type-2-contacts-container">
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

        <div className='footer-type-2-logo-container'>
          <img className="footer-type-2-logo-style" src={LogoImg} alt="logo" />
          <p className='p7 logo-container-text-custom'>Разработка сайтов и мобильных приложений любой сложности</p>
        </div>

        <div className="logo-text-container">
          <div>
            <div className="logo-background">
              <img src={SkolcovoLogo} alt="Skolcovo Logo" className="logo-image" />
            </div>
            <p className='p7 text1 logo-text-castom-text'>
              Резидент<br />
              ИЦ «Сколково»
            </p>
          </div>

          <div>
            <div className="logo-background">
              <img src={CheckLogo} alt="Check Logo" className="logo-image" />
            </div>
            <p className='p7 text1 logo-text-castom-text'>
              Аккредитованная<br />
              IT-компания
            </p>
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

export default FooterType2;