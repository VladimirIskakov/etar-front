import React from 'react';
import './InfoBlock.css';
import DecorativeElement from './DecorativeElement';

/**
 * InfoBlockTypeSeven: Блок с декоративным элементом и текстом.
 * Отличительные особенности:
 * - Использует декоративный элемент с эффектом размытия.
 * - Подходит для блоков с визуальным акцентом.
 * - Аналогичен InfoBlockTypeOne, но без адаптивных размеров.
 */
export const InfoBlockTypeSeven = ({ className, height, width, children }) => {
    return (
        <div className={`info-block-type-one ${className}`}>
            <DecorativeElement className='de-info-block-one' />
            {children}
        </div>
    );
};