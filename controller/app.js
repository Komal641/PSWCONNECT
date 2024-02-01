//app.js

const express = require('express');
const path = require('path');
const router = express.Router();

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
  router.get('/register', (req, res) => {
    // Send the services.html file when the user accesses the "/services" URL
    res.sendFile(path.join(viewsPath, 'register.html'));
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
