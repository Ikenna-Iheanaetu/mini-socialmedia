import React from 'react'
import Post from './Post/Post'
import './style.css'

import { Grid, CircularProgress } from '@mui/material'


import { useSelector } from 'react-redux'

const Posts = ({ setCurrentId }) => {

    const posts = useSelector((state) => state.postsReducer)
    console.log(posts)
    
  return (
    <>
    <h2>POSTS</h2>

    {!posts.length ? <CircularProgress /> : ( 
      <Grid className='mainContainer' container alignItems='stretch' spacing={3}>
        {posts.map((post) => (

          <Grid item key={post._id} xs={12} sm={6}>
            <Post post={post} setCurrentId={setCurrentId} />
          </Grid>
    ))}
      </Grid>
     )}
    </>
  )
}

export default Posts