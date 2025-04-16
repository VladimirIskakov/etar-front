import React from 'react';
import './AboutCompany.css';
import developer_img from '../../assets/images/developer_img.jpg';
import '../../assets/styles/TextStyles.css';
import { InfoBlockTypeFour } from '../common/InfoBlockTypeFour';
import Check_24px from '../../assets/images/check_24px.svg';
import Logo_Skolkovo from '../../assets/images/Logo_Skolkovo.svg';
import Icon_idea from '../../assets/images/Icon_idea.svg';
import Briefcase_24px from '../../assets/images/Briefcase_24px.svg';

const AboutCompany = ({ id }) => {
    return (
        <div id={id} className='about-company'>
            <h className='landing-title'>О компании</h>

            <div className='about-company-block'>
                <img src={developer_img} alt="developer" />

                <div>
                    <p className='p3'>
                        YourTar — это команда опытных специалистов, готовых разработать
                        продукт любой сложности, который поможет вашему бизнесу стать
                        эффективнее и достичь новых высот
                    </p>
                    <p className='p6 text1'>
                        Мы беремся за нестандартные задачи, оцифровываем процессы, которые кажутся невозможными для автоматизации, и помогаем вам укрепить позиции на рынке
                        и превратить конкурентов в партнеров
                    </p>
                    <p className='p6 text1'>
                        Благодаря нашим готовым решениям YourTar Develop, вы можете значительно сократить сроки и стоимость разработки. Мы используем проверенные сервисы
                        для реализации стандартного функционала, оставляя больше ресурсов для создания уникальных особенностей вашего проекта, при этом качество всегда остается
                        на высшем уровне
                    </p>
                </div>
            </div>

            <div className='about-company-info-blocks'>
                <div>
                    <InfoBlockTypeFour icon={Check_24px}>
                        <p className='p5'>Аккредитованная <br /> IT-компания</p>
                    </InfoBlockTypeFour>
                </div>
                <div>
                    <InfoBlockTypeFour icon={Icon_idea}>
                        <p className='p5'>Поддержка разработок <br /> федеральными фондами</p>
                    </InfoBlockTypeFour>
                </div>
                <div>
                    <InfoBlockTypeFour icon={Logo_Skolkovo}>
                        <p className='p5'>Резидент<br />ИЦ «Сколково»</p>
                    </InfoBlockTypeFour>
                </div>
                <div>
                    <InfoBlockTypeFour icon={Briefcase_24px}>
                        <p className='p5'>В реестре Малых <br /> Технологических Компаний</p>
                    </InfoBlockTypeFour>
                </div>
            </div>
        </div>
    );
};

export default AboutCompany;