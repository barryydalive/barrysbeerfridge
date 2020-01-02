const express = require('express')
const router = express.Router()
const { Beer, } = require('../db/models')

router.get('/', async (req, res, next)=>{
  try {
    const beers = await Beer.findAll()
    res.send(beers)
  } catch (err) {
    next(err)
  }
})

router.post('/', async (req, res, next)=>{
  try {
    const beer = await Beer.create(req.body)
    res.send(beer)
  } catch (err) {
    next(err)
  }
})

router.delete('/:id', async(req, res, next) => {
  try {
    const id = req.params.id
    Beer.destroy({ where: { id, }, })
    res.status(204).end()
  } catch (err) {
    next(err)
  }
})

router.get('/:id', async (req, res, next)=>{
  try {
    const beer = await Beer.findByPk(req.params.id)
    res.send(beer)

  } catch (err) {
    next(err)
  }
})

module.exports = router
