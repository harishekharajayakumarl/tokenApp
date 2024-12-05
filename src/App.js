import React, { useState } from 'react';
import TokenForm from './components/TokenForm'; // Ensure correct import paths
import TokenDisplay from './components/TokenDisplay';
import './App.css';

const App = () => {
  const [blueTokens, setBlueTokens] = useState([]);
  const [redTokens, setRedTokens] = useState([]);

  return (
    <div className="App">
      <h1>Token Generator</h1>
      <TokenForm setBlueTokens={setBlueTokens} setRedTokens={setRedTokens} />
      <TokenDisplay blueTokens={blueTokens} redTokens={redTokens} />
    </div>
  );
};

export default App;
