import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const [firstName, setFirstName] = useState('');
  const [surname, setSurname] = useState('');

  const increment = () => setCount(prev => prev + 1);
  const decrement = () => setCount(prev => prev - 1);
  const reset = () => setCount(0);
  const incrementFive = () => setCount(prev => prev + 5);

  return (
    <div style={styles.container}>
      <h1>React Counter App</h1>

      <div style={styles.counterBox}>
        <h2>Counter: {count}</h2>
        <button onClick={increment} style={styles.button}>Increment</button>
        <button onClick={decrement} style={styles.button}>Decrement</button>
        <button onClick={reset} style={styles.button}>Reset</button>
        <button onClick={incrementFive} style={styles.button}>Increment Five</button>
      </div>

      <div style={styles.inputBox}>
        <input
          type="text"
          placeholder="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          style={styles.input}
        />
        <input
          type="text"
          placeholder="Surname"
          value={surname}
          onChange={(e) => setSurname(e.target.value)}
          style={styles.input}
        />
      </div>

      <div style={styles.output}>
        <h3>Full Name:</h3>
        <span>
          First Name: {firstName} <br />
            Last Name: {surname}
        </span>
      </div>
    </div>
  );
}

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    padding: '2rem',
    textAlign: 'center',
    background: '#f5f5f5',
    minHeight: '100vh'
  },
  counterBox: {
    marginBottom: '2rem'
  },
  button: {
    margin: '0.5rem',
    padding: '0.5rem 1rem',
    fontSize: '1rem',
    cursor: 'pointer'
  },
  inputBox: {
    marginBottom: '1rem'
  },
  input: {
    margin: '0.5rem',
    padding: '0.5rem',
    fontSize: '1rem'
  },
  output: {
    fontSize: '1.2rem',
    marginTop: '1rem'
  }
};

export default App;
