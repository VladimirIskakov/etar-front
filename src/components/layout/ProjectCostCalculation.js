import React, { useState } from 'react';
import Parameter from '../common/Parameter';
import { InfoBlockTypeSix } from '../common/InfoBlockTypeSix';
import './ProjectCostCalculation.css';

const ProjectCostCalculation = ({ parametersData }) => {
    const [selectedParameters, setSelectedParameters] = useState([]);

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

    const calculateTotalCost = () => {
        let totalCost = 0;
        selectedParameters.forEach((index) => {
            const parameter = parametersData[index];
            if (parameter) {
                totalCost += parameter.price1 || 0;
            }
        });
        return totalCost;
    };

    const totalCost = calculateTotalCost();

    return (
        <div className="project-cost-calculation">
            <h2 className="h3 h4-1440 p2-768">Расчет содержания проекта</h2>

            <p className="p4 p6-768 text1 text-center">
                Учтите все затраты: обязательные и дополнительные расходы на поддержку проекта после разработки
            </p>

            <div className="cost-calculation-blocks">
                <div className="left-block">
                    <p className="p3 p4-768">Выберите нужные модули и узнайте итоговую стоимость обслуживания</p>
                    <InfoBlockTypeSix className="left-subblock left-subblock-1">
                        <p className="p5">Стоимость обслуживания</p>
                        <p className="total-cost-value">{formatPrice(totalCost)}₽</p>
                    </InfoBlockTypeSix>
                </div>

                <div className="right-block1">
                    {parametersData.slice(0, 5).map((parameter, index) => (
                        <Parameter
                            key={index}
                            name={parameter.name}
                            price1={parameter.price1}
                            price2={parameter.price2}
                            tooltipText={parameter.tooltipText}
                            time1={parameter.time1}
                            time2={parameter.time2}
                            onToggle={(isChecked) => handleParameterToggle(index, isChecked)}
                        />
                    ))}
                </div>

                <InfoBlockTypeSix className="left-subblock left-subblock-2">
                    <p className="p5">Стоимость обслуживания</p>
                    <p className="total-cost-value">{formatPrice(totalCost)}₽</p>
                </InfoBlockTypeSix>
            </div>
        </div>
    );
};

export default ProjectCostCalculation;