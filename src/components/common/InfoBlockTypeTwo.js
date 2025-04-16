import React from 'react';
import './InfoBlock.css';
import IconContainer from './IconContainer';

/**
 * InfoBlockTypeTwo: Блок с иконкой и текстом, выравнивание по левому краю.
 * Отличительные особенности:
 * - Иконка отображается слева.
 * - Текст выравнивается по левому краю.
 * - Подходит для блоков с иконкой и текстовым содержимым.
 */
export const InfoBlockTypeTwo = ({ className='', children, icon }) => {
    return (
        <div className={`info-block-type-two ${className}`}>
            <IconContainer size={50} iconSize={22} className='info-block-type-img' icon={icon} />
            {children}
        </div>
    );
};