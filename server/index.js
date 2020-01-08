const express = require('express')
const app = express()
const path = require('path')
const db = require('./db')
const bodyParser = require('body-parser')

if (process.env.NODE_ENV !== 'production') { require('../secrets') }

db.sync()

app.use(bodyParser.urlencoded({ extended: false, }))
app.use(bodyParser.json())

app.use(express.static(path.join(__dirname, '..', 'dist')))
app.use('/api', require('./api'))
app.use('*', (req, res, next)=> {
  res.sendFile(path.join(__dirname, '..', 'dist/index.html'))
})

const port = process.env.PORT || 3000

app.listen(port, ()=>{
  console.log(`app is running on PORT ${port}`)
})
