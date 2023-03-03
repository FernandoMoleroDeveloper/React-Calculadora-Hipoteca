import "./MortageCalculator.css";
import React from "react";

const MortageCalculator = () => {
    

    const [monthlyPayment, setMonthlyPayment] = React.useState();

    
    React.useRef();
    const houseValueRef = React.useRef();
    const savingsRef = React.useRef();
    const numYearsRef = React.useRef();
    const annualInterestRef = React.useRef();
    
    /*const paymentReference = React.useRef(null); 
    const getPaymentValue = () => {
        setMonthlyPayment(monthlyPayment.current.value)
    }*/

    const getValuesAndCalculateMonthlyPayment = () => {
    const houseValue = houseValueRef.current.value;
    const savings = savingsRef.current.value;
    const annualInterest = annualInterestRef.current.value;
    const numYears = numYearsRef.current.value;

    const payment = calculateMonthPayment(houseValue,savings,annualInterest,numYears);
    setMonthlyPayment(payment);
    };

    const calculateMonthPayment = (houseValue,savings,annualInterest,numYears) => {
    const numMonths = numYears * 12;
    const annualInterestDecimal = annualInterest / 100;
    const monthlyInterest = annualInterestDecimal / 12;
    const moneyToAsk = houseValue - savings;
    const divider =(1 - Math.pow(1 + monthlyInterest, -numMonths)) / monthlyInterest;
    const monthlyPayment = moneyToAsk / divider;
    return monthlyPayment.toFixed(2);
    };

    return (
    <div className="mortage-calculator">
        <h2>Calculadora de Hipoteca</h2>
        {/*valor de la casa*/}
        <fieldset className="mortage-calculator__fieldset">
            <label>
        <p>Introduce el valor de la casa:</p>
        <button className="mortage-calculator__btn-rest">-</button>
            <input className="mortage-calculator__input" defaultValue="300000"
            ref={houseValueRef} type="number" name="houseValue" placeholder="300000" id="houseValue"/>
            <button className="mortage-calculator__btn-sum">+</button>
            </label>
        </fieldset>

        {/*ahorros aportados*/}
        <fieldset className="mortage-calculator__fieldset">
            <label>
        <p>Introduce los ahorros aportados:</p>
        <button className="mortage-calculator__btn-rest">-</button>
            <input className="mortage-calculator__input" defaultValue="30000"
            ref={savingsRef} type="number" name="savings" placeholder="30000" id="savings"/>
            <button className="mortage-calculator__btn-sum">+</button>
            </label>
        </fieldset>

        {/*plazo en anos*/}
        <fieldset className="mortage-calculator__fieldset">
            <label>
        <p>Introduce el plazo en años:</p>
        <button className="mortage-calculator__btn-rest">-</button>
            <input className="mortage-calculator__input" defaultValue="30"
            ref={numYearsRef} type="number" name="numYears" placeholder="30" id="numYears"/>
            <button className="mortage-calculator__btn-sum">+</button>
            </label>
        </fieldset>

        {/*interes de la hipoteca (tipo fijo)*/}
        <fieldset className="mortage-calculator__fieldset">
            <label>
                
        <p>Introduce el interés de la hipoteca (tipo fijo):</p>
        <button className="mortage-calculator__btn-rest">-</button>
            <input className="mortage-calculator__input" defaultValue="2.50"
            ref={annualInterestRef} type="number" name="annualInterest" placeholder="2" id="annualInterest"/>
            <button className="mortage-calculator__btn-sum">+</button>
            </label>
        </fieldset>

        <button
        onClick={getValuesAndCalculateMonthlyPayment} className="mortage-btn">
        Calcular cuota mensual
        </button>

        <p>Tu cuota mensual sera de :<strong onChange= {(event) => setMonthlyPayment(event.target.value)}> {monthlyPayment}€</strong></p>
    </div>
);
};

export default MortageCalculator;
