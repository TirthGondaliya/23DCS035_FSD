import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="app">
      <div className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
        <button className="close-btn" onClick={() => setSidebarOpen(false)}>&times;</button>
        <h2>Sidebar Menu</h2>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>

      <button className="hamburger" onClick={() => setSidebarOpen(true)}>
        &#9776;
      </button>

      <div className="content">
        <h1>React App</h1>
        <p>Main content area.</p>-
      </div>
    </div>
  );
};

export default App;
