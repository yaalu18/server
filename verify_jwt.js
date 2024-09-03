import jwt from "jsonwebtoken";
import dotenv from 'dotenv';
dotenv.config(); 
//require('dotenv').config({ path: '/.env' });
//console.log('Loaded environment variables:', process.env);

//const jwt = require('jsonwebtoken');

const token ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxMjM0NSwidXNlcm5hbWUiOiJleGFtcGxldXNlciIsImlhdCI6MTcxOTQ4NDc5NywiZXhwIjoxNzE5NDg4Mzk3fQ.Gzyj9rS_k0tauT0_uLiGao0-4-0spP_uRrV1QxtA3bQ"; // Replace with your JWT token
const JWT_SECRET ="yaalu18@123456789"; // Replace with your JWT secret key

try {
console.log('JWT_SECRET:', JWT_SECRET);
console.log('JWT_SECRET from environment:', process.env.JWT_SECRET);

  const decoded = jwt.verify(token,JWT_SECRET);
  
  console.log('Decoded Token:', decoded);
} catch (err) {
  console.error('JWT Verification Error:', err.message);
}
//process.env.JWT_SECRET
