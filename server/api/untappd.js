// const Untappd = require('untappd-js')

// const axios = require('axios')

const UntappdClient = require('node-untappd')
const express = require('express')
const router = express.Router()
const { CLIENTID, CLIENT_SECRET, } = require('../secrets')
const debug = false
const untappd = new UntappdClient(debug)
untappd.setClientId(CLIENTID)
untappd.setClientSecret(CLIENT_SECRET)

router.get('/', (req, res, next)=>{
  const { searchQuery, } = req.query
  try {
    untappd.beerSearch((err, obj) => {
      res.send(obj.response.beers)
    }, { q: searchQuery, })

  } catch (err) {
    console.log(err)
  }
})

module.exports = router
