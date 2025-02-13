import { useState } from 'react';
import './increDecre.css';
function increDecre(){

    const [count, setCount] = useState(0);

    function increment() {
        setCount(count + 1);
    }
    function decrement() {
        setCount(count === 0 ? 0 : count - 1);
    }
    function reset() {
        setCount(0);
    }

    return (
        <main class="increDecreMain">
            <h2>Number: { count }</h2>
            <div class="buttons-con">
                <button onClick={increment} class="increment">Increment</button>
                <button onClick={reset} class="reset">Reset</button>
                <button onClick={decrement} class="decrement">Decrement</button>
            </div>
            
        </main>
    );
}
export default increDecre;