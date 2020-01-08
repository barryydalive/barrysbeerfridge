// const Untappd = require('untappd-js')

// const axios = require('axios')

const untappd = require('../untappd')
const express = require('express')
const router = express.Router()

router.get('/', (req, res, next)=>{
  const { searchQuery, } = req.query
  try {
    untappd.beerSearch((err, obj) => {
      console.log('obj:', obj)
      res.send(obj.response.beers)
    }, { q: searchQuery, })

  } catch (err) {
    console.log(err)
  }
})

module.exports = router
