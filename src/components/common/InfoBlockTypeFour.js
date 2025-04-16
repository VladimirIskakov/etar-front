import React from 'react';
import './InfoBlock.css';
import IconContainer from './IconContainer';

/**
 * InfoBlockTypeFour: Блок с иконкой по центру и текстом, выравнивание по центру.
 * Отличительные особенности:
 * - Иконка отображается по центру.
 * - Весь контент выравнивается по центру.
 * - Подходит для блоков с акцентом на иконке.
 */
export const InfoBlockTypeFour = ({ className='', children, icon }) => {
    return (
        <div className={`info-block-type-four ${className}`}>
            <IconContainer size={50} iconSize={22} className='info-block-type-four-img' icon={icon} />
            {children}
        </div>
    );
};