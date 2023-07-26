import express from 'express'
const postsRouter = express.Router()

import { getPosts, createPost, updatePost, deletePost, likePostCount } from '../controllers/postsController.js'

postsRouter.route('/').get( getPosts ).post( createPost )
postsRouter.route('/:id').patch( updatePost ).delete( deletePost )
postsRouter.route('/:id/likepost').patch( likePostCount )

export default postsRouter