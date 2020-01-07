const express = require('express')
const router = express.Router()

router.use('/beers', require('./beers'))
router.use('/untappd', require('./untappd'))
module.exports = router
