import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import router from './routes/user.route.js'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import MessageRouter from './routes/message.route.js'
const app = express()
app.use(cookieParser())
app.use(cors())


app.use(express.json())
dotenv.config()
const PORT = process.env.PORT || 3000
const MONGO_URI = process.env.MONGODB_URI;
try {
  mongoose.connect(MONGO_URI);
  console.log('Connected to MongoDB');
} catch (error) {
  console.error('Error connecting to MongoDB', error);
  
}
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use('/api/user', router)
app.use('/api/message', MessageRouter)

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})