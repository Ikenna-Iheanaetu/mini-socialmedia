import mongoose from "mongoose";
import PostMessage from "../models/postsModels.js";

export const getPosts = async (req, res) => {
    try {
        const postMessage = await PostMessage.find()
        console.log(postMessage);
        res.status(200).send(postMessage)
    } catch (error) {
        console.log(error);
    }
}

export const createPost = async (req, res) => {
    const post = req.body
    const newPost = new PostMessage(post)

    try{
        await newPost.save()
        res.status(201).json(newPost)
    } catch(error){
        res.status(400).json('Creation Failed')
        console.log(error);
    }
}

export const updatePost = async ( req, res ) => {
    const { id: _id } = req.params
    const post = req.body

    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No post with that id was found')

    await PostMessage.findByIdAndUpdate(_id, post, { new: true })

    res.status(200).json({ 'message': 'Updated successfully' })
}

export const deletePost = async (req, res) => {
    const { id: _id } = req.params

    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No post with that id was found')

    await PostMessage.findByIdAndRemove(_id)

    res.status(200).json({message: 'Deleted successfully'})
} 

export const likePostCount = async (req, res) => {
    const { id: _id } = req.params

    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No post with that id was found')

    const post = await PostMessage.findById(_id)

    await PostMessage.findByIdAndUpdate(_id, { likeCount: post.likeCount + 1 }, { new: true })

    res.status(200).json({message: 'Like added successfully'})
    

}