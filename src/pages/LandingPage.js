import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/LandingPage.css';
import Header from '../components/layout/Header';
import DecorativeElement from '../components/common/DecorativeElement';
import DecorLine from '../assets/images/line_decor.svg';
import CallButton from '../components/common/ButtonCall';
import Ellipse from '../assets/images/Ellipse.svg';
import Icon_create_web from '../assets/images/Icon_create_web.svg';
import Icon_conection_module from '../assets/images/Icon_conection_module.svg';
import Icon_create_mibile from '../assets/images/Icon_create_mibile.svg';
import IconContainer from '../components/common/IconContainer';
import { WhyWeBlock } from '../components/common/WhyWeBlock';
import StagesOfDevelopment from '../components/layout/StagesOfDevelopment';
import DevelopmentOptions from '../components/layout/DevelopmentOptions';
import LandingPortfolioSlider from '../components/layout/LandingPortfolioSlider';
import PortfolioBtn from '../components/common/PortfolioBtn';
import AboutCompany from '../components/layout/AboutCompany';
import ApplicationForm from '../components/layout/ApplicationForm';
import Footer from '../components/layout/Footer';

export const LandingPage = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const scrollTo = urlParams.get('scrollTo'); 
    if (scrollTo) {
      const sectionElement = document.getElementById(scrollTo);
      if (sectionElement) {
        sectionElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []);

  const scrollToPortfolio = () => {
    const portfolioSection = document.getElementById('portfolio-section');
    if (portfolioSection) {
      portfolioSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToCompany = () => {
    const companySection = document.getElementById('about-company');
    if (companySection) {
      companySection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className='landing-page'>
      <Header />
      

      <DecorativeElement className='decorative-element-1' />

      <div className='LandingPageBlock1'>
        <img className='decor-line-1' src={DecorLine} style={{ transform: 'scaleX(-1)' }} />
        <div className='text-block'>
          <div className='h1 h3-1440 p1-768'>
            РАЗРАБОТКА САЙТОВ<br />  И МОБИЛЬНЫХ ПРИЛОЖЕНИЙ
          </div>
          <p className='p5 p6-1440 p6-768 text1'>Создадим инструменты любой сложности для Вашего бизнеса: быстрее, дешевле, качественнее!</p>
          <PortfolioBtn className='button-profil' onClick={scrollToPortfolio}>Перейти в портфолио</PortfolioBtn>
          <CallButton className='call-button-landingpage'>Заказать звонок</CallButton>
        </div>
        <img className='decor-line-2' src={DecorLine} />
      </div>

      <div className='our-services'>
        <div className='our-services-element'>
          <IconContainer mobileSize={50} mobileIconSize={28} className='our-services-icon' icon={Icon_create_web} />
          <p className='our-services-text'>
            {isMobile ? 'Разработаем веб-сайт' : 'Разработаем веб-сайт'}
          </p>
        </div>
        <div className='our-services-element'>
          <IconContainer mobileSize={50} mobileIconSize={28} className='our-services-icon' icon={Icon_conection_module} />
          <p className='our-services-text'>
            {isMobile ? 'Подключим модули' : 'Подключим необходимые модули для разработки'}
          </p>
        </div>
        <div className='our-services-element'>
          <IconContainer mobileSize={50} mobileIconSize={28} className='our-services-icon' icon={Icon_create_mibile} />
          <p className='our-services-text'>
            {isMobile ? 'Сделаем приложение' : 'Сделаем мобильное приложение'}
          </p>
        </div>
      </div>
      
      <div className='landing-page-body'>
      <WhyWeBlock scrollComand={scrollToCompany}/>

      <StagesOfDevelopment id="stages-of-development"/>

      <DevelopmentOptions />

      <LandingPortfolioSlider
        id="portfolio-section"
        slidesToShow={3} 
        slidesToShowTablet={2} 
        slidesToShowMobile={1}
    />

      <AboutCompany id="about-company" />

      <ApplicationForm id="contact-us" />

      </div>

      <Footer />
    </div>
  );
};