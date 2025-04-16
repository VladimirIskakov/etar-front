import React, { useEffect, useState } from 'react';
import './InfoBlock.css';
import DecorativeElement from './DecorativeElement';

/**
 * InfoBlockTypeOne: Блок с адаптивными размерами и декоративным элементом.
 * Отличительные особенности:
 * - Адаптируется под мобильные устройства, планшеты и десктопы.
 * - Использует декоративный элемент с эффектом размытия.
 * - Поддерживает кастомные высоту и ширину.
 */
export const InfoBlockTypeOne = ({ className, height, width, children }) => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
    const [isTablet, setIsTablet] = useState(window.innerWidth >= 768 && window.innerWidth < 1440);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
            setIsTablet(window.innerWidth >= 768 && window.innerWidth < 1440);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const currentWidth = isMobile ? '100%' : 
        isTablet ? '98%' : 
        width;

    const currentHeight = isMobile ? '96%' : 
        isTablet ? '96%' : 
        height;

    const styles = {
        height: currentHeight,
        width: currentWidth,
    };

    return (
        <div style={styles} className={`info-block-type-one ${className}`}>
            <DecorativeElement className='de-info-block-one' />
            {children}
        </div>
    );
};