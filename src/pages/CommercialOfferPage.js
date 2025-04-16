import React from 'react';
import '../assets/styles/TextStyles.css';
import '../assets/styles/CommercialOfferPage.css';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { useNavigate } from 'react-router-dom';
import { InfoBlockTypeSix } from '../components/common/InfoBlockTypeSix';
import DecorativeElement from '../components/common/DecorativeElement';
import { WhyWeBlock } from '../components/common/WhyWeBlock';
import { InfoBlockTypeSeven } from '../components/common/InfoBlockTypeSeven';
import LayersIcon from '../assets/images/LayersIcon.svg';
import Icon_conection_module from '../assets/images/Icon_conection_module.svg';
import IconContainer from '../components/common/IconContainer';
import CheckboxButton from '../components/common/CheckboxButton';
import HeaderType2 from '../components/layout/HeaderType2';
import FooterType2 from '../components/layout/FooterType2';
import ParametersContainer from '../components/layout/ParametersContainer';
import ProjectCostCalculation from '../components/layout/ProjectCostCalculation';
import ProfitabilityCalculator from '../components/layout/ProfitabilityCalculator';

import { parametersData, additionalParametersData, calculateTotalCostData } from '../data'

const CommercialOfferPage = () => {
  const navigate = useNavigate();

  const companyName = 'ГК Глобал';

  return (
    <div className='commercial-offer-page'>
      <HeaderType2 />

      <div className='commercial-offer-page-body'>
        <InfoBlockTypeSix className="commercial-offer-page-block-1">
          <div className='commercial-offer-page-block-1-title'>
            <p className='p5 p5-1440 p7-768 text1'>
              Коммерческое предложение для 
              <span style={{ color: 'white' }}>«{companyName}»</span> 
            </p>
            <h className='h2 h4-1440 p2-768'>
              разработка мобильных приложений для повышения качества обслуживания СОЖ
            </h>
          </div>

          <DecorativeElement className="portfolio-page-block-1-de-1" />
          <DecorativeElement className="portfolio-page-block-1-de-2" />
        </InfoBlockTypeSix>

        <div className="commercial-offer-page-block-2">
          <h className='h3 h4-1440 p2-768 text-center'>Расчет стоимости<br /> разработки по</h>
          <p className='p3 p5-768 sop-block-2-title'>При разработке проекта мы предлагаем два подхода,<br /> исходя из ваших потребностей, сроков и бюджета</p>
          <div className='cop-bottom-blocks'>
            <InfoBlockTypeSeven className='sop-subblocks'>
              <IconContainer size={50} icon={Icon_conection_module} />
              <p className='p2 p4-768'>Разработка проекта целиком</p>
              <div className='rectangle' />
              <div className='sop-subblocks-text'>
                <p className='p4 p5-768 text1'>Это полноценное создание продукта, полностью адаптированного под ваши задачи</p>
                <p className='p4 p5-768 text1'>Такой вариант требует больше времени и инвестиций,
                  но при этом вы получаете независимое и гибкое решение
                  без ограничений сторонних инструментов
                </p>
              </div>
            </InfoBlockTypeSeven>

            <InfoBlockTypeSeven className='sop-subblocks'>
              <IconContainer size={50} icon={LayersIcon} />
              <p className='p2 p4-768'>Разработка проекта целиком</p>
              <div className='rectangle' />
              <div className='sop-subblocks-text'>
                <p className='p4 p5-768 text1'>Это более быстрый и бюджетный способ запустить продукт</p>
                <p className='p4 p5-768 text1'>Мы используем проверенные технологии и модули, что позволяет оперативно проверить гипотезу и оценить спрос</p>
                <p className='p4 p5-768 text1'>В будущем такой проект можно доработать, заменяя готовые компоненты и сделать проект независимым</p>
              </div>
            </InfoBlockTypeSeven>
          </div>
        </div>

        <ParametersContainer parametersData={parametersData} additionalParametersData={additionalParametersData}/>

        <ProjectCostCalculation parametersData={calculateTotalCostData}/>

        <ProfitabilityCalculator />

        <WhyWeBlock className='commercial-offer-page-whyweblock' />
      </div>

      <FooterType2 />
    </div>
  );
};

export default CommercialOfferPage;