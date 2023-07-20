const express = require('express')
const app = express()
require('dotenv').config()
const port = process.env.PORT || 3000
const cors = require("cors");

app.use(express.urlencoded({ extended: true }));
app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
    res.send('hello from simple server :)')
})


app.listen(port, () => console.log('> Server is up and running on port : ' + port))