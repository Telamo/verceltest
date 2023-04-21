const express = require('express')
const rootRoute = express.Router()


rootRoute.get('/test', (req, res) => {
    res.send('hello!')
})


module.exports = rootRoute