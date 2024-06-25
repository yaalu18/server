export const AskQuestion=await(req,res)=>{
    const postQuestionData=req.body;
    const postQuestion=new Question({...postQuestionData,userId:req.userId});
    try{
        await postQuestion.save();
        res.status(200).json("Posted a question successfully")
    }
    catch(error){
        console.log(error);
        res.status(409).json("couldn't post a new question")
    }

}