// models/User.js

const mongoose = require('mongoose');

// Define User schema
const userSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true
  },
  idNumber: {
    type: String,
    required: true,
    unique: true // Ensure ID numbers are unique
  },
  accountNumber: {
    type: String,
    required: true,
    unique: true // Ensure account numbers are unique
  },
  password: {
    type: String,
    required: true
  },
}, { timestamps: true }); // Add timestamps for createdAt and updatedAt

// Create the User model
const User = mongoose.model('User', userSchema);

module.exports = User;
