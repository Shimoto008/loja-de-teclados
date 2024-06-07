const express = require ('express')
const bodyParser = require('body-parser')
const app = express()
const authRoutes = require ('./routes/auth')
const db = require('./config/db')

app.use(bodyParser.json())
app.use('/api/auth', authRoutes)


const PORT = 3000

app.listen(PORT, () =>{
  console.log(`servidor rodando em http://localhost:${PORT}`)
})
