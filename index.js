// index.js

import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import userRoutes from './routes/users.js';
//import router from './routes/Question.js';
import questionRoutes from "./routes/Questions.js";
dotenv.config();

const baseUrl = process.env.BASE_URL;
console.log(`Base URL is: ${baseUrl}`);

const app = express();

app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.get('/', (req, res) => {
    res.send("This is a stackoverflow clone API");
});

app.get('/test', (req, res) => {
    res.send('Test route');
});

app.get('/check', (req, res) => {
    res.send('Checking...');
});

app.use('/user', userRoutes);
//app.use('/questions', router);
app.use("/questions", questionRoutes);

const PORT = process.env.PORT || 5000;
const CONNECTION_URL = "mongodb+srv://yaalu18:admin1@stackoverflow-backend-d.ecqpkpw.mongodb.net/";

mongoose.set('strictQuery', true);

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('MongoDB connected');
        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });
    })
    .catch((err) => console.error(err.message));
