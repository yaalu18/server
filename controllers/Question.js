import Question from "../models/Questions.js";
import mongoose from "mongoose";
//import auth from "../middlewares/auth.js";
export const AskQuestion = async (req, res) => {
    const postQuestionData = req.body;
    const postQuestion = new Question({ ...postQuestionData, userId: req.userId });
    try {
        console.log("I am here inside Askquestion component")
        await postQuestion.save();
        res.status(200).json("Posted a question successfully");
    } catch (error) {
        console.log(error);
        res.status(409).json("Couldn't post a new question");
    }
}
export const getAllQuestions=async (req,res)=>{
    try{
        const questionlist=await Question.find();
        res.status(200).json(questionlist)
    }
    catch(error){
        res.status(404).json({message:error.message})
    }
}