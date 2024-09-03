import express from "express";
import { AskQuestion } from "../controllers/Question.js";
import {getAllQuestions,deleteQuestion,voteQuestion} from '../controllers/Question.js';
import auth from "../middlewares/auth.js";
const router=express.Router()
router.post('/Ask',auth,AskQuestion)
router.get('/get', getAllQuestions);
router.patch('/vote/:id',auth,voteQuestion)
export default router