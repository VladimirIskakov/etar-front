import React, { useState, useEffect } from 'react';
import './ApplicationForm.css';
import '../../assets/styles/TextStyles.css';
import { InfoBlockTypeFive } from '../common/InfoBlockTypeFive';
import InputField from '../common/InputField';
import PortfolioBtn from '../common/PortfolioBtn';
import ApplicationWindow from './ApplicationWindow';

const ApplicationForm = ({ id }) => {
    const [isWindowVisible, setIsWindowVisible] = useState(false);

    const handleSubmit = () => {
        setIsWindowVisible(true);
    };

    const handleCloseWindow = () => {
        setIsWindowVisible(false);
    };

    return (
        <div id={id} className='application-form'>
            <InfoBlockTypeFive className='application-form-block'>
                <h className='h4'>Готовы обсудить проект?</h>
                <p className='p5 text1'>Оставьте заявку, мы свяжемся с вами и ответим на интересующие вопросы</p>
                <InputField placeholder="Имя" />
                <InputField placeholder="Телефон" />
                <PortfolioBtn className='application-form-btn' onClick={handleSubmit}>
                    Отправить заявку
                </PortfolioBtn>
                <div className='application-form-personal-data'>
                    <p className='p7 text1'>Нажимая на кнопку, вы даете согласие на&nbsp;</p>
                    <p className='p7'>обработку персональных данных</p>
                </div>
            </InfoBlockTypeFive>

            {/* Окно с подтверждением */}
            {isWindowVisible && (
                <ApplicationWindow onClose={handleCloseWindow} />
            )}
        </div>
    );
};

export default ApplicationForm;