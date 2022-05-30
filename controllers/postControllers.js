import PostMessage from "../models/postMessages.js";

export const getPosts = async (req, res) => {
try {
  const PostMessages = await PostMessage.find()
  res.status(200).json(PostMessages)
} catch (error) {
    console.log(error)
}
};

export const createPost = async (req, res) => {

    const post = req.body

    try {
        const newPost = new PostMessage(post)
        await newPost.save()
        res.status(200).json(newPost)    
    } catch (error) {
        res.status(409).json({msg: error.message});
    }
}