import { useState } from 'react';
import './App.css';
import Calculator from './calculator';
import NewCal from './newCal'

function App() {

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
    <main class="apps">
      <h2>Number: { count }</h2>
      <button onClick={increment} class="increment">Increment</button>
      <button onClick={reset} class="reset">Reset</button>
      <button onClick={decrement} class="decrement">Decrement</button>
      <Calculator />
      <NewCal/>
    </main>
  );
}

export default App;