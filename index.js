// index.js

const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Set the path to your static files (like CSS, images, etc.)
app.use(express.static(path.join(__dirname, 'public')));

// Import routes from the controller/app.js
const appRoutes = require('./controller/app');

// Use the routes
app.use('/', appRoutes);

// Define the path to your views directory
const viewsPath = path.join(__dirname, 'views');

app.get('/', (req, res) => {
  // Send the home.html file when the user accesses the root URL ("/")
  res.sendFile(path.join(viewsPath, 'home.html'));
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}/`);
});
