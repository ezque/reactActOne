import { useState } from 'react';
import './App.css';
import Calculator from './calculator';
import NewCal from './newCal'
import IncreDecre from './increDcre';

function App() {
  

  return (
    <main class="apps">
      <IncreDecre />
      <Calculator />
      <NewCal/>
    </main>
  );
}

export default App;