const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

// Simple health-style route for quick testing.
app.get('/hello', (req, res) => {
  res.json({ message: 'Hello, world!' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});