import { useState } from 'react';
import './App.css'; 

function App() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [operation, setOperation] = useState('add');
  
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault(); 
    
    
    setResult(null);
    setError('');

    try {
      const response = await fetch('http://localhost:3001/calculate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ num1, num2, operation }),
      });

      const data = await response.json();

      if (!response.ok) {
        // If server returns an error (e.g., 400), throw it to the catch block
        throw new Error(data.error || 'Something went wrong!');
      }

      // On success, update the result state
      setResult(data.result);

    } catch (err) {
      // On failure, update the error state
      setError(err.message);
    }
  };

  return (
    <div className="calculator-container">
      <h1>Web-based Calculator for Kids 🧮</h1>
      <form onSubmit={handleSubmit} className="calculator-form">
        <div className="inputs">
          <input
            type="text"
            value={num1}
            onChange={(e) => setNum1(e.target.value)}
            placeholder="Num1"
            required
          />
          <select value={operation} onChange={(e) => setOperation(e.target.value)}>
            <option value="add">+</option>
            <option value="subtract">-</option>
            <option value="multiply">×</option>
            <option value="divide">÷</option>
          </select>
          <input
            type="text"
            value={num2}
            onChange={(e) => setNum2(e.target.value)}
            placeholder="Num2"
            required
          />
        </div>
        <button type="submit">Calculate!</button>
      </form>

      {/* Conditionally render the result or the error */}
      {result !== null && (
        <div className="result">
          <h2>Result is: {result} 🎉</h2>
        </div>
      )}

      {error && (
        <div className="error">
          <p>{error}</p>
        </div>
      )}
    </div>
  );
}

export default App;
