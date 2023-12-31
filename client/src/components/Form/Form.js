import React, { useState, useEffect } from 'react'
import './style.css'

import { TextField, Button, Typography, Paper } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux';
import FileBase64 from 'react-file-base64'
import { createPostInApp, updatePostInApp } from '../../actions/posts';


const Form = ({ currentId, setCurrentId }) => {

    const [postData, setPostData] = useState({ creator: '', title: '', message: '', tags: '', selectedFile: '' });


    const post = useSelector((state) =>  currentId ? state.postsReducer.find((p) => p._id === currentId) : null )

    

    const dispatch = useDispatch();

    useEffect(() => {
        console.log(currentId);
        if (post) setPostData(post)

      }, [post]);

      const handleSubmit = (e) => {
        e.preventDefault()
        console.log(postData);
        if(currentId){
          dispatch(updatePostInApp(currentId, postData))
         
        } else{
        dispatch(createPostInApp(postData))

        }
      }

      const clear = () => {
        setCurrentId(null)
        setPostData({ creator: '', title: '', message: '', tags: '', selectedFile: '' });
      };

    return (
        <Paper className='paper'>
            <form autoComplete="off" noValidate className='root' >
                {/*  <Typography variant="h6">{currentId ? `Editing "${post.title}"` : 'Creating a Memory'}</Typography> */}
                <Typography variant="h6">{currentId ? 'Editing' : 'Creating'} a Memory</Typography>

                <TextField name="creator" variant="outlined" label="Creator" fullWidth value={postData.creator} onChange={(e) => setPostData({ ...postData, creator: e.target.value })} />

                <TextField name="title" variant="outlined" label="Title" fullWidth value={postData.title} onChange={(e) => setPostData({ ...postData, title: e.target.value })} />

                <TextField name="message" variant="outlined" label="Message" fullWidth multiline rows={4} value={postData.message} onChange={(e) => setPostData({ ...postData, message: e.target.value })} />

                <TextField name="tags" variant="outlined" label="Tags (coma separated)" fullWidth value={postData.tags} onChange={(e) => setPostData({ ...postData, tags: e.target.value.split(',') })} />

                <div className='fileInput' ><FileBase64 type="file" multiple={false} onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })} /></div>

                <Button className='buttonSubmit' variant="contained" color="primary" size="large" type="submit" onClick={handleSubmit} fullWidth>Submit</Button>

                <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
            </form>
        </Paper>
    )
}

export default Form