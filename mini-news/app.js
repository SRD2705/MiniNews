const express = require('express')

const app = express()
const port = process.env.PORT || 4000

// static files
app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/img', express.static(__dirname + 'public/img'))
app.use('/js', express.static(__dirname + 'public/js'))

// Templating Engine
app.set('views', './src/views')
app.set('view engine', 'ejs')

// Routes
const newsRouter = require('./src/routes/news')

app.use('/', newsRouter)

// Listen on port 4000
app.listen(port, () => console.log('Listening on port',port))

