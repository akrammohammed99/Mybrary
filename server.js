const express = require('express')
const app = express()
const expressLayouts = require('express-ejs-layouts')

const indexRouter = require('./routes/index')//relative to where we are


app.set('view engine', 'ejs')
app.set('views', __dirname+'/views') //__dirname is current directory
app.set('layout', 'layouts/layout') //layout file helps like when every file is put inside this. so we don't have to duplicate the beginning html and ending html of our project like the header and the footer is common right
app.use(expressLayouts)
app.use(express.static('public')) // public folder of our app. see express in 35 mins video

app.use('/', indexRouter) //WE ARE SAYING THAT IF SOMEONE COMES TO THE ROOT PATH OF OUR APPLICATION, THEN THEY HAVE TO USE THE indexRouter see above code we have used that const variable called indexRouter

app.listen(process.env.PORT || 3000) //since when we deploy, the server is going to tell us what port it is listening to. but for development we have set default to 3000. research about that env variable

