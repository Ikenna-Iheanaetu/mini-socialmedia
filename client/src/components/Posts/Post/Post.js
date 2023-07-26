import React from 'react'
import './style.css'
import moment from 'moment'

import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@mui/material'

import { ThumbUpAlt, Delete, MoreHoriz } from '@mui/icons-material'
import { useDispatch } from 'react-redux'

import { deletePostInApp, updateLikeCountPostInApp } from '../../../actions/posts'

const Post = ({ post, setCurrentId }) => {

  const dispatch = useDispatch()


  return (
    <>
      <Card className='card'>
        <CardMedia className='media' image={post.selectedFile} />
        <div className='overlay'>
          <Typography variant='h6'>{post.creator}</Typography>
          <Typography variant='body'>{moment(post.createdAt).fromNow()}</Typography>
        </div>
        <div className='overlay-2'>
          <Button style={{ color: 'white' }} size='small' onClick={
            () => {
              setCurrentId(post._id)
            }
          }>
            <MoreHoriz fontSize='large' />
          </Button>
        </div>
        <div>
          <Typography variant='body2' color='textSecondary'>{post.tags.map((tag) => ` #${tag} `)} </Typography>


        </div>
        <CardContent>
          <Typography className='title' variant='h5' gutterBottom>{post.message}</Typography>
        </CardContent>
        <CardActions className='cardActions'>
          <Button onClick={() => dispatch(updateLikeCountPostInApp(post._id))} size='small' color='primary'>
            <ThumbUpAlt fontSize='small' />
            Like
            {post.likeCount}
          </Button>

          <Button onClick={() => dispatch(deletePostInApp(post._id))} size='small' color='primary'>
            <Delete fontSize='small' />
            Delete
          </Button>
        </CardActions>
      </Card>
    </>
  )
}

export default Post