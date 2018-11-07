// Require

const express = require('express')
const app = express()
const path = require('path')
const morgan = require('morgan')


// Settings
app.set('port', process.env.PORT || 3000)

// Engine Settings
app.set('views', path.join(__dirname, 'views'))
app.engine('html', require('ejs').renderFile)
app.set('view engine', 'ejs')

// Middlewares
app.use(morgan('dev'))

// Statics files
app.use(express.static(path.join(__dirname, 'public')))

// Routes
app.use(require('./routes/routes'))

// Server listen
app.listen(app.get('port'), () => {
    console.log('Server listening on: ', app.get('port'))
})