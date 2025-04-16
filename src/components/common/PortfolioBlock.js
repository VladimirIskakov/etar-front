import React from 'react';
import PortfolioBtn from './PortfolioBtn';
import { Platforms } from './Platforms';
import './PortfolioBlock.css';
import { useNavigate } from 'react-router-dom';

export const PortfolioBlock = ({
    id,
    icon,
    mobile_app = false,
    ios = false,
    android = false,
    admin_panel = false,
    web_site = false,
    title = '',
    description = '',
}) => {
    const navigate = useNavigate();

    const handleButtonClick = () => {
        navigate(`/portfolio/${id}`);
        window.scrollTo(0, 0);
    };

    return (
        <div className='portfolio-block'>
            <div className='portfolio-block-platforms'>
                <Platforms
                    mobile_app={mobile_app}
                    ios={ios}
                    android={android}
                    admin_panel={admin_panel}
                    web_site={web_site}
                />
            </div>

            <div className='portfolio-icon-container'>
                <img src={icon} alt="icon" className='portfolio-icon' />
            </div>

            <div className='portfolio-content'>
                <h className='h6 p2-768'>{title}</h>
                <p className='p6'>{description}</p>
                <PortfolioBtn className='portfolio-button-container' onClick={handleButtonClick}>
                    Подробнее о проекте
                </PortfolioBtn>
            </div>
        </div>
    );
};