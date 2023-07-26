import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Container, Typography, AppBar, Grow, Grid } from '@mui/material'
import memoriesImg from './images/memories.png'

import Posts from "./components/Posts/Posts";
import Form from "./components/Form/Form";

import { getPosts } from './actions/posts'

import './style.css'

function App() {
  const dispatch = useDispatch()
  const [ currentId, setCurrentId ] = useState(null)

  useEffect(() => {
    dispatch(getPosts())
  },[dispatch])

  return (
    <Container maxWidth='lg'>
      <AppBar className='app-bar' position="static" color='inherit'>
        <div className="row">
        <Typography className="heading" variant="h2">
        Memories
      </Typography>
      <img className="image" src={memoriesImg} alt='memories' height='60' width='60' />
        </div>
      </AppBar>
      <Grow in>
        <Container>
          <Grid container justify='space-between' alignItems='stretch' spacing={3}>
            <Grid item xs={12} sm={8}>
              <Posts setCurrentId={setCurrentId} />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form currentId={currentId} setCurrentId={setCurrentId} />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
}

export default App;
