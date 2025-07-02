// server/index.js
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

// Enable CORS
app.use(cors());

// Define API
app.get('/getmessage', (req, res) => {
  res.json({ message: 'Hello World from Server!' });
});

// Start Server
app.listen(PORT, (err) => {
  if (err) {
    console.error('Failed to start server:', err);
    process.exit(1);
  }
  console.log(`Server is running at http://localhost:${PORT}`);
});
