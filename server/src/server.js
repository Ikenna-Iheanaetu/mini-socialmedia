import http from 'http'
import mongoose from 'mongoose'
import app from './app.js'

const PORT = process.env.PORT || 8080;

const MongoUri = 'mongodb+srv://ikenna:oS0Dyq9ZysxyoCuQ@cluster.x40p5m6.mongodb.net/?retryWrites=true&w=majority'

const server = http.createServer(app);

async function connect() {
  try{
    await mongoose.connect(MongoUri)
    console.log('Connected to the database');
  } catch(e){
    console.log(e);
  }
}

async function startServer() {
  connect()
  server.listen(PORT, () => {
    console.log(`Connected to the backend on port ${PORT}`);
  });
}

startServer();
