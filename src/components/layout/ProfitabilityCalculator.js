import React, { useState } from 'react';
import { InfoBlockTypeSix } from '../common/InfoBlockTypeSix';
import InputField from '../common/InputField';
import './ProfitabilityCalculator.css';

const ProfitabilityCalculator = ({
    commissionSBP = '0.7%',
    commissionPaymentService = '1%',
    smsPerOrder = 2,
    monthlyExpenses = 20000,
    serviceCommission = '15%',
    taxes = '15%',
    revenue = 0,
    paymentCommissions = 0,
    smsExpenses = 0,
    salaryExpenses = 0,
    totalExpenses = 0,
}) => {
    const [orderValue, setOrderValue] = useState('');
    const [smsCost, setSmsCost] = useState('');
    const [orderCount, setOrderCount] = useState('');

    const formatPrice = (price) => {
        return price.toLocaleString('ru-RU') + ' ₽';
    };

    const handleInputChange = (setter) => (e) => {
        const value = e.target.value;
        if (value === '' || !isNaN(value)) {
            setter(value);
        }
    };

    return (
        <div className="profitability-calculator">
            <h2 className="h3 h4-1440 p2-768">Калькулятор доходности</h2>

            <p className="p4 p6-768 text1 text-center">
                Мы создали для Вас калькулятор потенциальной доходности, чтобы вы могли оценить перспективы Вашего проекта!
            </p>

            <InfoBlockTypeSix className="profitability-calculator-body">
                <div className="calculator-content">
                    <div className="input-block">
                        <p className="p4 p5-768">Введите данные для расчета</p>
                        <div className="input-fields">
                            <InputField
                                placeholder="Ср. стоимость заказа"
                                value={orderValue}
                                onChange={handleInputChange(setOrderValue)}
                            />
                            <InputField
                                placeholder="Ср. стоимость СМС с чеком"
                                value={smsCost}
                                onChange={handleInputChange(setSmsCost)}
                            />
                            <InputField
                                placeholder="Количество заказов в месяц"
                                value={orderCount}
                                onChange={handleInputChange(setOrderCount)}
                            />
                        </div>
                    </div>

                    <div className="results-block">
                        <h3 className="p2 p3-768">Результаты расчета</h3>
                        <div className="total-cost-rectangle" />

                        <div className="results-content">
                            <div className="fixed-expenses">
                                <p className="p6 text2">Постоянные расходы</p>
                                <div className="expenses-list">
                                    <div className="expense-item">
                                        <span className="p4 p5-768 text1">Комиссия СБП</span>
                                        <span className="expense-value">{commissionSBP}</span>
                                    </div>
                                    <div className="expense-item">
                                        <span className="p4 p5-768 text1">Комиссия сервиса оплаты</span>
                                        <span className="expense-value">{commissionPaymentService}</span>
                                    </div>
                                    <div className="expense-item">
                                        <span className="p4 p5-768 text1">Кол-во смс для заказа</span>
                                        <span className="expense-value">{smsPerOrder}</span>
                                    </div>
                                    <div className="expense-item">
                                        <span className="p4 p5-768 text1">Расходы в месяц</span>
                                        <span className="expense-value">{formatPrice(monthlyExpenses)}</span>
                                    </div>
                                    <div className="expense-item">
                                        <span className="p4 p5-768 text1">Комиссия сервиса</span>
                                        <span className="expense-value">{serviceCommission}</span>
                                    </div>
                                    <div className="expense-item">
                                        <span className="p4 p5-768 text1">Налоги (УСН Д-Р 15%)</span>
                                        <span className="expense-value">{taxes}</span>
                                    </div>
                                </div>
                            </div>

                            <div className="total-cost-rectangle results-block-line" />

                            <div className="final-calculations">
                                <p className="p6 text2">Итоговые расчеты</p>
                                <div className="calculations-list">
                                    <div className="calculation-item">
                                        <span className="p4 p5-768 text1">Выручка</span>
                                        <span className="calculation-value">{formatPrice(revenue)}</span>
                                    </div>
                                    <div className="calculation-item">
                                        <span className="p4 p5-768 text1">Комиссии за оплату</span>
                                        <span className="calculation-value">{formatPrice(paymentCommissions)}</span>
                                    </div>
                                    <div className="calculation-item">
                                        <span className="p4 p5-768 text1">Расходы на смс</span>
                                        <span className="calculation-value">{formatPrice(smsExpenses)}</span>
                                    </div>
                                    <div className="calculation-item">
                                        <span className="p4 p5-768 text1">ЗП исполнителям</span>
                                        <span className="calculation-value">{formatPrice(salaryExpenses)}</span>
                                    </div>
                                    <div className="calculation-item">
                                        <span className="p4 p5-768 text1">Постоянный расход</span>
                                        <span className="calculation-value">{formatPrice(totalExpenses)}</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="total-cost-rectangle" />
                        <div className="total-monthly">
                            <span className="total-label p5-768">ИТОГО в месяц</span>
                            <span className="total-value">{formatPrice(revenue - paymentCommissions - smsExpenses - salaryExpenses - totalExpenses)}</span>
                        </div>
                    </div>
                </div>
            </InfoBlockTypeSix>
        </div>
    );
};

export default ProfitabilityCalculator;