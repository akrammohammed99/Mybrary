const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.render('index')
})

module.exports = router // exporting so that we can require it 
//now whenever this file index.js is imported from somewhere else ie; like in server.js we have done reqire('./routes/index'), the indexRouter variable is going to be set to our router variable ie; the router = express.Router()
