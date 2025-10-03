// server.js

import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 3001; // Port for our backend server

// --- Middleware ---
// Enable CORS to allow requests from our frontend
app.use(cors());
// Enable the express app to parse JSON formatted request bodies
app.use(express.json());

// --- Routes ---
app.post('/calculate', (req, res) => {
  const { num1, num2, operation } = req.body;

  // --- Input Validation ---
  const number1 = parseFloat(num1);
  const number2 = parseFloat(num2);

  // Check if the inputs are valid numbers
  if (isNaN(number1) || isNaN(number2)) {
    return res.status(400).json({ error: 'Please enter valid numbers.' });
  }

  let result;

  // --- Perform Calculation ---
  switch (operation) {
    case 'add':
      result = number1 + number2;
      break;
    case 'subtract':
      result = number1 - number2;
      break;
    case 'multiply':
      result = number1 * number2;
      break;
    case 'divide':
      // Handle division by zero
      if (number2 === 0) {
        return res.status(400).json({ error: "Oops! You can't divide by zero. 😉" });
      }
      result = number1 / number2;
      break;
    default:
      return res.status(400).json({ error: 'Invalid operation.' });
  }

  // Send the successful result back
  res.json({ result });
});


// --- Start the Server ---
app.listen(PORT, () => {
  console.log(`🧮 Server is running on http://localhost:${PORT}`);
});