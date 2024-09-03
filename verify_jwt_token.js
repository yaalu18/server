import jwt from "jsonwebtoken";
import dotenv from 'dotenv';
//const jwt = require('jsonwebtoken');
//const dotenv = require('dotenv');
dotenv.config(); // Load environment variables from .env file
// Example payload (can be any JSON object)
const payload = {
  user_id: 12345,
  username: 'exampleuser',
};

// Generate JWT token
const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });

console.log('Generated JWT token:', token);
