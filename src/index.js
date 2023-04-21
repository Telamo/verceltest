
const express = require('express')
const app = express()


const port = 8080


app.use(express.urlencoded({
    extended: false 
   }))
app.use(express.json())
const cors = require('cors');
app.use(cors())

app.listen(port, () => {
    console.log('App listening on port: ' + port)
})

const rootRoute = require('./routes/rootRoute')
app.use('/api', rootRoute)