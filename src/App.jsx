/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from 'react';
import './App.scss';

const [count, setCount] = useState(3);

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h1>Count: {count}</h1>
      <h2>SET {setCount}</h2>
      <button>M1</button>
      <button>M2</button>
      </header>
    </div>
  ); 
}

export default App;