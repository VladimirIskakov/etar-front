import React from 'react';
import DecorativeElement from './DecorativeElement';

const DevelopmentBlock = ({ subtitle, title, description1, description2, pros, cons }) => {
    return (
        <div className='development-options-block'>
            <DecorativeElement className='development-options-de' />
            <p className='development-options-block-subtitle'>{subtitle}</p>
            <h className='h6 h6-1440 p3-768'>{title}</h>
            <div className='development-options-rectangle'></div>

            <div className='d-o-rows-conteiner'>
                <div className='d-o-text-row'>
                    <p className='d-o-text-block-1'>Как это работает?</p>
                    <p className='d-o-text-block-2'>{description1}</p>
                </div>

                <div className='d-o-text-row'>
                    <p className='d-o-text-block-1'>Когда подходит?</p>
                    <p className='d-o-text-block-2'>{description2}</p>
                </div>
            </div>

            <div className='d-o-rows-type-one'>
                <div className='d-o-block-type-one'>
                    <h3 className='block-title'>Плюсы</h3>
                    <ul className='advantages-list'>
                        {pros.map((pro, index) => (
                            <li key={index}>{pro}</li>
                        ))}
                    </ul>
                </div>

                <div className='d-o-block-type-one'>
                    <h3 className='block-title'>Минусы</h3>
                    <ul className='advantages-list'>
                        {cons.map((con, index) => (
                            <li key={index}>{con}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default DevelopmentBlock;