import React from 'react';
import './InfoBlock.css';

/**
 * InfoBlockTypeSix: Блок с текстом, выравнивание по левому краю.
 * Отличительные особенности:
 * - Простой блок с текстом.
 * - Текст выравнивается по левому краю.
 * - Подходит для текстовых блоков без дополнительных элементов.
 */
export const InfoBlockTypeSix = ({ className='', children }) => {
    return (
        <div className={`info-block-type-six ${className}`}>
            {children}
        </div>
    );
};