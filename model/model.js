// model.js

const mongoose = require('mongoose');

// Define registration schema
const registrationSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  username: String,
  password: String,
});

// Define registration model
const Registration = mongoose.model('Registration', registrationSchema);

module.exports = Registration;
