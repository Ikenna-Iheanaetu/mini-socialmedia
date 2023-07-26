import { fetchPosts, createPost, updatePost, deletePost, updateLikeCountPost } from "../api/index";

export const getPosts =  () => async ( dispatch ) => {

    try {
        const { data } = await fetchPosts()
        dispatch({ type: 'FETCH_ALL', payload: data })
    } catch (error) {
        console.error(error)
    }

}

export const createPostInApp = (postData) => async ( dispatch ) => {
    try{
        const { data } = await createPost(postData)
        dispatch({ type: 'CREATE', payload: data })
    }catch(error){
        console.log(error);
    }
}

export const updatePostInApp = (id, postData) => async ( dispatch ) => {
    try{
        const { data } = await updatePost(id, postData)
        dispatch({ type: 'UPDATE', payload: data })
    } catch(error){
        console.log(error)
    }
}

export const deletePostInApp = (id) => async (dispatch) => {
    try{
        await deletePost(id)
        dispatch({ type: 'DELETE', payload: id })
    } catch(error) {
        console.log(error)
    }
}

export const updateLikeCountPostInApp = (id) => async (dispatch) => {
    try{
        await updateLikeCountPost(id)
        dispatch({ type: 'LIKE_COUNT', payload: id })
    } catch(error) {
        console.log(error)
    }
}