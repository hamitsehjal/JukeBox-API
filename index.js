const express = require('express')
const morgan = require('morgan')
const router = require('./router')

const app = express()
const dotenv = require('dotenv').config()
const port = process.env.PORT

// for logging the requests to the console
app.use(morgan('dev'))

// parsing the incoming JSON request 
app.use(express.json())

// parsing the incoming array or String request
app.use(express.urlencoded({ extended: true }))

app.use('/api', router)
app.get("/", (req, res) => {
    res.status(200).json({ message: "It was Nice" })
})
app.listen(port, () => {
    console.log(`Express Server listening on the port: ${port}`)
})

