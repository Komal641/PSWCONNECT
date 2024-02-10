//app.js

const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
// const Registration = require('./model');
const router = express.Router();


const app = express();


// Define routes
app.use('/', router);

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/pswconnect', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Middleware setup
app.use(bodyParser.urlencoded({ extended: true }));



// Define the path to your views directory
const viewsPath = path.join(__dirname, '..', 'views');

// Define routes
router.get('/services', (req, res) => {
  // Send the services.html file when the user accesses the "/services" URL
  res.sendFile(path.join(viewsPath, 'services.html'));
});
router.get('/dashboardEmployee', (req, res) => {
    // Send the services.html file when the user accesses the "/services" URL
    res.sendFile(path.join(viewsPath, 'dashboardEmployee.html'));
  });
  router.get('/dashboardUser', (req, res) => {
    // Send the services.html file when the user accesses the "/services" URL
    res.sendFile(path.join(viewsPath, 'dashboardUser.html'));
  });
  router.get('/aboutUs', (req, res) => {
    // Send the services.html file when the user accesses the "/services" URL
    res.sendFile(path.join(viewsPath, 'aboutUs.html'));
  });

  //REGISTRATION
  // Registration route
app.post('/register', (req, res) => {
  const { firstName, lastName, email, username, password } = req.body;
  res.sendFile(path.join(viewsPath, 'register.html'));
  // Create new registration document
  const registration = new Registration({
    firstName,
    lastName,
    email,
    username,
    password,
  });

  // Save registration data to the database
  registration.save()
    .then(() => {
      res.send('Registration successful!');
    })
    .catch((error) => {
      res.status(500).send('Registration failed!');
      console.error(error);
    });
});
  
  router.get('/meetUs', (req, res) => {
    // Send the services.html file when the user accesses the "/services" URL
    res.sendFile(path.join(viewsPath, 'meetUs.html'));
  });
  router.get('/login', (req, res) => {
    // Send the services.html file when the user accesses the "/services" URL
    res.sendFile(path.join(viewsPath, 'login.html'));
  });
  router.get('/location', (req, res) => {
    // Send the services.html file when the user accesses the "/services" URL
    res.sendFile(path.join(viewsPath, 'location.html'));
  });
  router.get('/contactUs', (req, res) => {
    // Send the services.html file when the user accesses the "/services" URL
    res.sendFile(path.join(viewsPath, 'contactUs.html'));
  });
  router.get('/privacyPolicy', (req, res) => {
    // Send the services.html file when the user accesses the "/services" URL
    res.sendFile(path.join(viewsPath, 'privacyPolicy.html'));
  });

module.exports = router;
