import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './DevelopmentOptions.css';
import DecorativeElement from '../common/DecorativeElement';
import IconArrow from '../../assets/images/IconArrow.svg';
import BlueCicleButton from '../common/BlueCicleButton';
import DevelopmentBlock from '../common/DevelopmentBlock';

import { developmentOptionsData } from '../../data';

const DevelopmentOptions = () => {
    const [blockBtnLeft, setBlockBtnLeft] = useState(true);
    const [blockBtnRight, setBlockBtnRight] = useState(false);
    const [sliderRef, setSliderRef] = useState(null);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 767);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 767);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleLeftButtonClick = () => {
        if (sliderRef) {
            sliderRef.slickPrev();
        }
    };

    const handleRightButtonClick = () => {
        if (sliderRef) {
            sliderRef.slickNext();
        }
    };

    const sliderSettings = {
        dots: false,
        infinite: false,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        afterChange: (currentSlide) => {
            setBlockBtnLeft(currentSlide === 0);
            setBlockBtnRight(currentSlide === 1);
        },
    };

    const blocksData = developmentOptionsData

    return (
        <div className='development-options'>
            <h1 className='development-options-title'>Варианты разработки</h1>
            <p className='development-options-subtitle'>Выберите подход, который идеально подойдет вашим задачам</p>
            
            {isMobile ? (
                <div className='development-options-conteiner-mobile'>
                <Slider ref={setSliderRef} {...sliderSettings}>
                    {blocksData.map((block, index) => (
                        <DevelopmentBlock key={index} {...block} />
                    ))}
                </Slider>
                </div>
            ) : (
                <div className='development-options-conteiner'>
                    {blocksData.map((block, index) => (
                        <DevelopmentBlock key={index} {...block} />
                    ))}
                </div>
            )}

            {isMobile && (
                <div className='d-o-arrow-conteiner'>
                    <BlueCicleButton onClick={handleLeftButtonClick} size={50} iconSize={18} icon={IconArrow} disabled={blockBtnLeft} />
                    <BlueCicleButton onClick={handleRightButtonClick} size={50} iconSize={18} icon={IconArrow} disabled={blockBtnRight} />
                </div>
            )}
        </div>
    );
};

export default DevelopmentOptions;