import React, { useState } from 'react';
import './App.css';

function App() {
  const [expression, setExpression] = useState('');
  const [result, setResult] = useState('');

  const buttons = [
    '/', '*', '+', '-', 'DEL',
    '1', '2', '3',
    '4', '5', '6',
    '7', '8', '9',
    '0', '.', '='
  ];

  const handleClick = (value) => {
    if (value === 'DEL') {
      setExpression(expression.slice(0, -1));
      try {
        const evalResult = eval(expression.slice(0, -1));
        setResult(evalResult || '');
      } catch {
        setResult('');
      }
    } else if (value === '=') {
      try {
        const evalResult = eval(expression);
        setExpression(evalResult.toString());
        setResult('');
      } catch {
        setResult('Error');
      }
    } else {
      const newExpr = expression + value;
      setExpression(newExpr);
      try {
        const evalResult = eval(newExpr);
        setResult(evalResult.toString());
      } catch {
        setResult('');
      }
    }
  };

  return (
    <div className="calculator-container">
      <div className="display">
        <div className="result">{result ? `(${result})` : ''}</div>
        <div className="expression">{expression || '0'}</div>
      </div>

      <div className="button-row">
        {buttons.slice(0, 5).map((btn, i) => (
          <button key={i} onClick={() => handleClick(btn)} className="button pink">
            {btn}
          </button>
        ))}
      </div>

      <div className="grid">
        {buttons.slice(5).map((btn, i) => (
          <button key={i} onClick={() => handleClick(btn)} className="button">
            {btn}
          </button>
        ))}
      </div>
    </div>
  );
}

export default App;
