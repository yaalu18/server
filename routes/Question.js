import express from "express";
import { AskQuestion } from "../controllers/Question.js";
import {getAllQuestions} from '../controllers/Question.js';
import auth from "../middlewares/auth.js";
const router=express.Router()
router.post('/Ask',auth,AskQuestion)
router.get("/get", getAllQuestions);
export default router