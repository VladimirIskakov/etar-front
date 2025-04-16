import React, { useState } from 'react';
import Parameter from '../common/Parameter';
import './ParametersContainer.css';
import { InfoBlockTypeSix } from '../common/InfoBlockTypeSix';

const ParametersContainer = ({ parametersData, additionalParametersData }) => {
    const [showAll, setShowAll] = useState(false);
    const [selectedParameters, setSelectedParameters] = useState([]);

    const toggleShowAll = () => {
        setShowAll(!showAll);
    };

    const formatPrice = (price) => {
        return price.toLocaleString('ru-RU');
    };

    const handleParameterToggle = (index, isChecked) => {
        if (isChecked) {
            setSelectedParameters([...selectedParameters, index]);
        } else {
            setSelectedParameters(selectedParameters.filter((i) => i !== index));
        }
    };

    const calculateTotals = () => {
        let totalPrice1 = 0;
        let totalPrice2 = 0;
        let totalTime1 = 0;
        let totalTime2 = 0;

        selectedParameters.forEach((index) => {
            const parameter = parametersData[index] || additionalParametersData[index - parametersData.length];
            if (parameter) {
                totalPrice1 += parameter.price1 || 0;
                totalPrice2 += parameter.price2 || 0;
                totalTime1 += parameter.time1 || 0;
                totalTime2 += parameter.time2 || 0;
            }
        });

        return { totalPrice1, totalPrice2, totalTime1, totalTime2 };
    };

    const { totalPrice1, totalPrice2, totalTime1, totalTime2 } = calculateTotals();

    return (
        <div className="parameters-container">
            <div className='total-cost-container'>
                <p className='p3 p5-768'>Выберите необходимые модули и сравните стоимость и сроки разработки проекта</p>

                <InfoBlockTypeSix className='total-cost tc-1'>
                    <p className='p4 p3-1440 p4-768'>Итоговые стоимость и сроки разработки</p>
                    <div className="total-cost-rectangle" />
                    <div className='total-cost-calculation-table'>
                        <div className='table-row'>
                            <div></div>
                            <p className='p6 p7-768 text1'>С готовыми модулями</p>
                            <p className='p6 p7-768 text1'>С нуля</p>
                        </div>

                        <div className='table-row'>
                            <p className='p6 p7-768 text1'>Стоимость</p>
                            <p className='ready-modul'>{formatPrice(totalPrice1)}₽</p>
                            <p className='zero-module text1'>{formatPrice(totalPrice2)}₽</p>
                        </div>

                        <div className='table-row'>
                            <p className='p6 p7-768 text1'>Сроки</p>
                            <p className='ready-modul'>{totalTime1} мес</p>
                            <p className='zero-module text1'>{totalTime2} мес</p>
                        </div>
                    </div>
                </InfoBlockTypeSix>
            </div>

            <div className="parameters-inner-container">
                <div className={`parameters-services ${showAll ? 'expanded' : 'collapsed'}`}>
                    {parametersData.map((parameter, index) => (
                        <Parameter
                            key={index}
                            name={parameter.name}
                            price1={parameter.price1}
                            price2={parameter.price2}
                            tooltipText={parameter.tooltipText}
                            time1={parameter.time1}
                            time2={parameter.time2}
                            style={{ display: index >= 5 && !showAll ? 'none' : 'block' }}
                            onToggle={(isChecked) => handleParameterToggle(index, isChecked)}
                        />
                    ))}

                    {additionalParametersData.length > 0 && (
                        <>
                            <p className='p3 p4-1440 p5-768 additional-services-title'>Дополнительные услуги</p>
                            {additionalParametersData.map((parameter, index) => (
                                <Parameter
                                    key={index + parametersData.length}
                                    name={parameter.name}
                                    price1={parameter.price1}
                                    price2={parameter.price2}
                                    tooltipText={parameter.tooltipText}
                                    time1={parameter.time1}
                                    time2={parameter.time2}
                                    onToggle={(isChecked) => handleParameterToggle(index + parametersData.length, isChecked)}
                                />
                            ))}
                        </>
                    )}
                </div>

                <button
                    style={{ backgroundColor: 'initial', border: 'initial', cursor: 'pointer', marginTop: '20px' }}
                    className="Button2 text2"
                    onClick={toggleShowAll}
                >
                    {showAll ? 'Скрыть' : 'Показать все'}
                </button>

                <InfoBlockTypeSix className='total-cost tc-2'>
                    <p className='p4 p3-1440 p4-768'>Итоговые стоимость и сроки разработки</p>
                    <div className="total-cost-rectangle" />
                    <div className='total-cost-calculation-table'>
                        <div className='table-row'>
                            <div></div>
                            <p className='p6 p7-768 text1'>С готовыми модулями</p>
                            <p className='p6 p7-768 text1'>С нуля</p>
                        </div>

                        <div className='table-row'>
                            <p className='p6 p7-768 text1'>Стоимость</p>
                            <p className='ready-modul'>{formatPrice(totalPrice1)}₽</p>
                            <p className='zero-module text1'>{formatPrice(totalPrice2)}₽</p>
                        </div>

                        <div className='table-row'>
                            <p className='p6 p7-768 text1'>Сроки</p>
                            <p className='ready-modul'>{totalTime1} мес</p>
                            <p className='zero-module text1'>{totalTime2} мес</p>
                        </div>
                    </div>
                </InfoBlockTypeSix>
            </div>
        </div>
    );
};

export default ParametersContainer;