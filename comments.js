// Create web server
const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');

// Port
const port = 3000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Static files
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.post('/comments', (req, res) => {
  const { name, email, comment } = req.body;
  console.log(req.body);
  res.send('Comment posted');
});

// Listen
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});