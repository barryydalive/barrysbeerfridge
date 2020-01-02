const express = require('express')
const router = express.Router()

router.use('/beers', require('./beers'))

module.exports = router
