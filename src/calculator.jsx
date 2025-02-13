import React, { useState } from 'react';
import './calculator.css';

const Calculator = () => {
    const [expression, setExpression] = useState('');

    const handleInput = (value) => {
        setExpression((prev) => prev + value);
    };

    const calculate = () => {
        try {
            setExpression(eval(expression).toString()); 
        } catch (error) {
            setExpression('Error');
        }
    };

    const clear = () => {
        setExpression('');
    };

    return (
        <main class="calculator">
            <h2>Calculator</h2>
            <div class="input-container">
                <input type="text" value={expression} disabled />
            </div>
            <div class="rows">
                <button onClick={() => handleInput('1')}>1</button>
                <button onClick={() => handleInput('2')}>2</button>
                <button onClick={() => handleInput('3')}>3</button>
                <button onClick={() => handleInput('+')}>+</button>
            </div>
            <div class="rows">
                <button onClick={() => handleInput('4')}>4</button>
                <button onClick={() => handleInput('5')}>5</button>
                <button onClick={() => handleInput('6')}>6</button>
                <button onClick={() => handleInput('-')}>-</button>
            </div>
            <div class="rows">
                <button onClick={() => handleInput('7')}>7</button>
                <button onClick={() => handleInput('8')}>8</button>
                <button onClick={() => handleInput('9')}>9</button>
                <button onClick={() => handleInput('*')}>*</button>
            </div>
            <div class="rows">
                <button onClick={() => handleInput('0')}>0</button>
                <button onClick={clear}>C</button>
                <button onClick={calculate}>=</button>
                <button onClick={() => handleInput('/')}>/</button>
            </div>
        </main>
    );
};

export default Calculator;
