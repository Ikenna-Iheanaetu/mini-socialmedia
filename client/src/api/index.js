import axios from 'axios'

const url = 'http://localhost:8080/posts'

export const fetchPosts = () => axios.get(url)

export const createPost = (newPost) => axios.post(url,  {
    title: newPost.title,
    message: newPost.message,
    creator: newPost.creator,
    tags: newPost.tags,
    selectedFile: newPost.selectedFile
})

export const updatePost = (id, updatedPost) => axios.patch(`${url}/${id}`, {
    title: updatedPost.title,
    message: updatedPost.message,
    creator: updatedPost.creator,
    tags: updatedPost.tags,
    selectedFile: updatedPost.selectedFile
})

export const deletePost = (id) => axios.delete(`${url}/${id}`)

export const updateLikeCountPost = (id) => axios.patch(`${url}/${id}/likepost`)