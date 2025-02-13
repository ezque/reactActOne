import React, { useState } from 'react';
import './newCal.css';

function NewCal() {


    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);
    const [result, setResult] = useState(0);

    function handleNum1(value) {
        setNum1(Number(value));
    }
    function handleNum2(value) {
        setNum2(Number(value));
    }

    function add() {
        setResult(num1 + num2);
    }
    function subtract() {
        setResult(num1 - num2);
    }
    function multiply() {
        setResult(num1 * num2);
    }
    function divide() {
        setResult(num1 / num2);
    }

    return (
        <main class="newCal">
            <h3>Result: {result} </h3>
            <input type="number"  onChange={(e) => handleNum1(e.target.value)} />
            <input type="number" onChange={(e) => handleNum2(e.target.value)} />
            <div>
                <button onClick={add}>+</button>
                <button onClick={subtract}>-</button>
                <button onClick={multiply}>*</button>
                <button onClick={divide}>/</button>
            </div>
        </main>
    );
}

export default NewCal;
