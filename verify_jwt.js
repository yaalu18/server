import jwt from "jsonwebtoken";
//const jwt = require('jsonwebtoken');

const token = 'your_jwt_token_here'; // Replace with your JWT token
const JWT_SECRET = "yaalu18@123456789"; // Replace with your JWT secret key

try {
  const decoded = jwt.verify(token,JWT_SECRET);
  console.log('Decoded Token:', decoded);
} catch (err) {
  console.error('JWT Verification Error:', err.message);
}
//process.env.JWT_SECRET
