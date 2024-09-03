import Question from "../models/Questions.js";
import mongoose from "mongoose";
//import auth from "../middlewares/auth.js";
export const AskQuestion = async (req, res) => {
    const postQuestionData = req.body;
    console.log("Received question data from client:", postQuestionData);
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
        const questionlist=await Question.find();//.sort({ askedOn: -1 });
        res.status(200).json(questionlist)
    }
    catch(error){
        res.status(404).json({message:error.message})
    }
}
export const Question=async(req,res)=>{
    const {id:_id}=req.params;
    const {value,userId}=req.body;
    if(!mongoose.Types.ObjectId.isValid(_id)){
        return res.status(404).send('question unavailable...');
    }
    try{
        const question=await Question.findbyId(_id)
        const upIndex=question.upVote.findIndex((id)=>id===String(userId))
        const downIndex=question.downVote.findIndex((id)=>id===String(userId))
        if(value==='upVote'){
            if(downIndex!==-1){
                question.downVote=question.downVote.filter((id)=>id!==string(userId))
            }
            if(upIndex===-1){
                question_upVote.push(userId)
            }else{
                question.upVote=question.upVote.upVote.filter((id)=>id!=string(userId))
            }
        }
        else if(value==='downVote'){
            if(upIndex!==-1){
                question.upVote=question.upVote.filter((id)=>id!==String(userId))
            }if(downIndex===-1){
                question.downVote/push(userId)
            }else{
                question.downVote-question.downVote.filter((id)=>id!==String(userId))
            }
        }
        await Questions.findByIdAndUpdate(_id,question)    
        res.status(200).json({message:"Voted successfully"})
    }catch(error){
        res.status(400).json({message:"id not found"})
    }
} 