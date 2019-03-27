const express = require('express')
const bodyParser = require('body-parser')
const loginRouter = require('./routers/login')
const teacherRouter = require('./routers/teacher')

const app = express()

app.use(express.static('public'))

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/api', loginRouter)
app.use('/api', teacherRouter)

module.exports = app
