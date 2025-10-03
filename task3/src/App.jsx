import { useState, useEffect} from 'react'
import './App.css'

function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timerId = setInterval(() => {
      setTime(new Date()); 
    }, 1000);

    return () => clearInterval(timerId);
  }, []);

  return (
    
    <div>
      <h1>Welcome to CHARUSAT!!!!</h1>
      <h2>It is: {time.toLocaleTimeString()}</h2>
      <h2>Date: {time.toLocaleDateString()}</h2>
    </div>
  );
}


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Clock/>
    </>
  )
}

export default App
