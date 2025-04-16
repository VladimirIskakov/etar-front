import React from 'react';
import '../assets/styles/TextStyles.css';
import '../assets/styles/NotFoundPage.css'
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import DecorativeElement from '../components/common/DecorativeElement';
import PortfolioBtn from '../components/common/PortfolioBtn';
import { useNavigate } from 'react-router-dom';

const NotFoundPage = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/');
    window.scrollTo(0, 0);
};

  return (
    <div className='not-found-page'>
      <Header />
      <DecorativeElement className='decorative-element-1' />
      <div className='not-found-page-block'>
        <h className='h-error-404'>404</h>
        <h className='h3 h4-1440 p4-768'>Страница, которую вы ищите не найдена</h>
        <PortfolioBtn onClick={handleButtonClick} className='not-found-page-back-btn'>Перейти на главную</PortfolioBtn>
      </div>
      

      <Footer />
    </div>
  );
};

export default NotFoundPage;