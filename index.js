const express = require('express')
const morgan = require('morgan')

const app = express()
const dotenv = require('dotenv').config()
const port = process.env.PORT

// for logging the requests to the console
app.use(morgan('dev'))

app.get("/", (req, res) => {
    res.status(200).json({ message: "It was Nice" })
})
app.listen(port, () => {
    console.log(`Express Server listening on the port: ${port}`)
})

