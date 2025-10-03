import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';        // ✅ Make sure this path is correct
import './App.css';             // ✅ Style is linked

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

