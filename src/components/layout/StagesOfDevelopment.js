import React from 'react';
import './StagesOfDevelopment.css'
import { InfoBlockTypeTwo } from '../common/InfoBlockTypeTwo';
import img_01 from '../../assets/images/InfoBlockTypeTwo/01.svg'
import img_02 from '../../assets/images/InfoBlockTypeTwo/02.svg'
import img_03 from '../../assets/images/InfoBlockTypeTwo/03.svg'
import img_04 from '../../assets/images/InfoBlockTypeTwo/04.svg'
import img_05 from '../../assets/images/InfoBlockTypeTwo/05.svg'
import img_06 from '../../assets/images/InfoBlockTypeTwo/06.svg'
import img_07 from '../../assets/images/InfoBlockTypeTwo/07.svg'
import img_08 from '../../assets/images/InfoBlockTypeTwo/08.svg'

const StagesOfDevelopment = ({ id }) => {
    return (
        <div id={id} className='stages-of-development'>
            <h className='stages-of-development-title'>Этапы разработки</h>
            <p className='stages-of-development-subtitle'>От идеи до готового решения</p>

            <div className='stages-of-development-block-conteiner'>
                <div className='stages-of-development-block'>
                    <InfoBlockTypeTwo icon={img_01}>
                        <p className='stages-of-development-block-title'>Обсуждение проекта</p>
                        <p className='stages-of-development-block-content'>Определяем цели и подбираем подходящие решение для проекта</p>
                    </InfoBlockTypeTwo>      
                </div>
                <div className='stages-of-development-block'>
                    <InfoBlockTypeTwo icon={img_02}>
                        <p className='stages-of-development-block-title'>Подготовка ТЗ</p>
                        <p className='stages-of-development-block-content'>Опишем функционал, сроки и стоимость будущего проекта</p>
                    </InfoBlockTypeTwo>
                </div>
                <div className='stages-of-development-block'>
                    <InfoBlockTypeTwo icon={img_03}>
                        <p className='stages-of-development-block-title'>Старт работ</p>
                        <p className='stages-of-development-block-content'>Утверждаем условия работы, подписываем договор</p>
                    </InfoBlockTypeTwo>
                </div>
                <div className='stages-of-development-block'>
                    <InfoBlockTypeTwo icon={img_04}>
                        <p className='stages-of-development-block-title'>Разработка</p>
                        <p className='stages-of-development-block-content'>Мы разрабатываем, вы наблюдаете за развитием Вашего продукта</p>
                    </InfoBlockTypeTwo>
                </div>
                <div className='stages-of-development-block'>
                    <InfoBlockTypeTwo icon={img_05}>
                        <p className='stages-of-development-block-title'>Тестирование</p>
                        <p className='stages-of-development-block-content'>Вы тестируете готовый продукт, мы вносим правки</p>
                    </InfoBlockTypeTwo>
                </div>
                <div className='stages-of-development-block'>
                    <InfoBlockTypeTwo icon={img_06}>
                        <p className='stages-of-development-block-title'>Запуск продукта</p>
                        <p className='stages-of-development-block-content'>Готовый продукт выходит в свет, подписываем акты</p>
                    </InfoBlockTypeTwo>
                </div>
                <div className='stages-of-development-block'>
                    <InfoBlockTypeTwo icon={img_07}>
                        <p className='stages-of-development-block-title'>Гарантия</p>
                        <p className='stages-of-development-block-content'>Бесплатное исправление ошибок в течение 6–12 месяцев</p>
                    </InfoBlockTypeTwo>
                </div>
                <div className='stages-of-development-block'>
                    <InfoBlockTypeTwo icon={img_08}>
                        <p className='stages-of-development-block-title'>Поддержка</p>
                        <p className='stages-of-development-block-content'>Сопровождаем и развиваем ваш проект по мере необходимости</p>
                    </InfoBlockTypeTwo>
                </div>
            </div> 

        </div>
    );
};

export default StagesOfDevelopment;