import React from 'react';
import Slider from 'react-slick';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import BlueCicleButton from '../common/BlueCicleButton';
import IconArrow from '../../assets/images/IconArrow.svg';

import PortfolioBtn from '../common/PortfolioBtn';
import './LandingPortfolioSlider.css';
import { PortfolioBlock } from '../common/PortfolioBlock';

import { portfolioData } from '../../data';

const LandingPortfolioSlider = ({
    id,
    slidesToShow: initialSlidesToShow = 3,
    slidesToShowTablet: initialSlidesToShowTablet = 2,
    slidesToShowMobile: initialSlidesToShowMobile = 1,
}) => {
    const [sliderRef, setSliderRef] = useState(null);
    const [slidesToShow, setSlidesToShow] = useState(initialSlidesToShow);
    const navigate = useNavigate();

    const handleResize = () => {
        if (window.innerWidth >= 1440) setSlidesToShow(initialSlidesToShow);
        else if (window.innerWidth >= 768) setSlidesToShow(initialSlidesToShowTablet);
        else setSlidesToShow(initialSlidesToShowMobile);
    };

    useEffect(() => {
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [initialSlidesToShow, initialSlidesToShowTablet, initialSlidesToShowMobile]);

    const sliderSettings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: slidesToShow,
        slidesToScroll: 1,
        arrows: false,
        centerMode: true,
        centerPadding: '0',
        responsive: [
            {
                breakpoint: 1440,
                settings: { slidesToShow: initialSlidesToShowTablet, slidesToScroll: 1 }
            },
            {
                breakpoint: 768,
                settings: { slidesToShow: initialSlidesToShowMobile, slidesToScroll: 1 }
            }
        ]
    };

    const handleButtonClick = () => {
        navigate('/portfolio');
        window.scrollTo(0, 0);
    };


    return (
        <div id={id} className='portfolio-slider'>
            <h className='h4 p2-768'>Портфолио</h>

            <div className='slider-arrows'>
                <BlueCicleButton onClick={() => sliderRef.slickPrev()} size={50} iconSize={18} icon={IconArrow} />
                <BlueCicleButton onClick={() => sliderRef.slickNext()} size={50} iconSize={18} icon={IconArrow} />
            </div>
            <div className='slider-over-container'>
                <Slider ref={slider => setSliderRef(slider)} {...sliderSettings} className='slider-container'>
                {portfolioData.map((block, index) => (
                    <PortfolioBlock
                        key={block.id} // Используйте id как ключ
                        id={block.id} // Передайте id в компонент
                        icon={block.icon}
                        mobile_app={block.mobile_app}
                        web_site={block.web_site}
                        admin_panel={block.admin_panel}
                        android={block.android}
                        ios={block.ios}
                        title={block.title}
                        description={block.description}
                    />
                ))}
                </Slider>
            </div>
            

            <div className='slider-arrows-bottom'>
                <BlueCicleButton onClick={() => sliderRef.slickPrev()} size={50} iconSize={18} icon={IconArrow} />
                <BlueCicleButton onClick={() => sliderRef.slickNext()} size={50} iconSize={18} icon={IconArrow} />
            </div>
        </div>
    );
};

export default LandingPortfolioSlider;