import express from 'express'
import cors from 'cors'
import morgan from 'morgan'

import postRouter from './routers/postsRouter.js'

const app = express()

app.use(cors({
    origin: 'http://localhost:3000'
}))
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb'}));
app.use(morgan('combined'))

app.use('/posts', postRouter)

export default app