import React from 'react';
import './WhyWeBlock.css';
import { InfoBlockTypeOne } from './InfoBlockTypeOne';
import IconWhyWeOne from '../../assets/images/IconWhyWeOne.svg';
import IconContainer from './IconContainer';
import IconServiceGuarantees from '../../assets/images/IconServiceGuarantees.svg';
import IconEye from '../../assets/images/IconEye.svg';
import IconExperiencedSpecialists from '../../assets/images/IconExperiencedSpecialists.svg';
import IcinIndividualApproach from '../../assets/images/IcinIndividualApproach.svg';
import PortfolioBtn from './PortfolioBtn';

export const WhyWeBlock = ({ scrollComand, className = '' }) => {
    return (
        <div className={`why-we-block ${className}`}>
            <h4 className='why-we-block-title'>Почему мы?</h4>
            <div className='why-we-block-conteiner'>
                <InfoBlockTypeOne height='370px' width='97%'>
                    <img className='block-type-one-logo' src={IconWhyWeOne} alt="IconWhyWeOne" />
                    <p className='block-type-one-title'>Качество, скорость, цена</p>
                    <p className='block-type-one-content'>
                        Мы экономим ваше время, используя готовые решения, что позволяет быстрее и дешевле разработать продукт без ущерба качеству
                    </p>
                </InfoBlockTypeOne>

                <InfoBlockTypeOne height='210px' width='97%'>
                    <IconContainer size={44} className='' icon={IconServiceGuarantees} />
                    <p className='block-type-one-title'>Гарантийное обслуживание</p>
                    <p className='block-type-one-content'>
                        После запуска продукта мы обеспечиваем бесплатную поддержку в течение 6–12 месяцев, устраняя любые возможные недочеты для стабильной работы
                    </p>
                </InfoBlockTypeOne>

                <InfoBlockTypeOne height='210px' width='97%'>
                    <IconContainer size={44} className='' icon={IconEye} />
                    <p className='block-type-one-title'>Наглядность</p>
                    <p className='block-type-one-content'>
                        Вы получите доступ к процессу разработки и сможете наблюдать за процессом создания продукта
                    </p>
                </InfoBlockTypeOne>

                <InfoBlockTypeOne height='210px' width='97%'>
                    <IconContainer size={44} className='' icon={IconExperiencedSpecialists} />
                    <p className='block-type-one-title'>Опытные специалисты</p>
                    <p className='block-type-one-content'>
                        Наша команда имеет многолетний опыт разработки, что позволяет создавать продукты любой сложности
                    </p>
                </InfoBlockTypeOne>

                <InfoBlockTypeOne height='210px' width='97%'>
                    <IconContainer size={44} className='' icon={IcinIndividualApproach} />
                    <p className='block-type-one-title'>Индивидуальный подход</p>
                    <p className='block-type-one-content'>
                        Мы учитываем ваши цели, особенности бизнеса и пожелания, чтобы разработать продукт, идеально соответствующий вашим ожиданиям
                    </p>
                </InfoBlockTypeOne>

                <PortfolioBtn onClick={scrollComand} className='button-profil about-company-btn'>
                    Подробнее о компании
                </PortfolioBtn>
            </div>
        </div>
    );
};