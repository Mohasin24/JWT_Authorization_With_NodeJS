const express = require('express')
require('dotenv').config()
const app = express()

const mainRouter = require('./routes/Routes')

// middleware
app.use(express.json())
app.use(express.static('public'))

app.use('/api/v1',mainRouter)

const PORT = process.env.PORT || 3000;

const start = ()=>{
     app.listen(PORT,()=>{
          console.log(`Listening on port : ${PORT}`)
     })
}

start()