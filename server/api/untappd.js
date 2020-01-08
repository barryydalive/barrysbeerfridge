// const Untappd = require('untappd-js')

const axios = require('axios')

const untappd = require('../untappd')
const express = require('express')
const router = express.Router()
const CLIENTID = process.env.CLIENTID
const CLIENT_SECRET = process.env.CLIENT_SECRET
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

router.get('/:beerId', async (req, res, next) => {
  try {
    const resp = await axios.get(`https://api.untappd.com/v4/beer/info/${req.params.beerId}?client_id=${CLIENTID}&client_secret=${CLIENT_SECRET}`)
    const { beer, } = resp.data.response
    res.send(beer)
  } catch (err) {
    console.log(err)
  }
})

module.exports = router
