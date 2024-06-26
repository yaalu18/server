
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
