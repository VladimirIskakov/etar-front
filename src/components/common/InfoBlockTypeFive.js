import React from 'react';
import './InfoBlock.css';

/**
 * InfoBlockTypeFive: Блок с градиентной рамкой и выравниванием по центру.
 * Отличительные особенности:
 * - Градиентная рамка с эффектом обрезки.
 * - Контент выравнивается по центру.
 * - Подходит для акцентных блоков с визуальным выделением.
 */
export const InfoBlockTypeFive = ({ className, children }) => {
    return (
        <div className={`info-block-type-five ${className}`}>
            {children}
        </div>
    );
};