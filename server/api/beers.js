const express = require('express')
const router = express.Router()
const { Beer, } = require('../db/models')

router.use('/untappd', (req, res, next) => {
  try {
    const code = req.query.code
    console.log('code:', code)
    res.sendStatus(200)
  } catch (err) {
    console.log(err)
  }
})
router.get('/', async (req, res, next)=>{
  try {
    const beers = await Beer.findAll({ order: [ 'id', ], })
    res.send(beers)
  } catch (err) {
    next(err)
  }
})

router.post('/', async (req, res, next)=>{
  try {
    const beerToAdd = req.body
    for (const key in beerToAdd) {
      if (!beerToAdd[key]) {
        beerToAdd[key] = undefined
      }
    }
    const beer = await Beer.create(beerToAdd)
    res.send(beer)
  } catch (err) {
    console.log('nope')
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

router.put('/:id', async(req, res, next)=>{
  try {
    const id = req.params.id
    const [ , [ beer, ], ] = await Beer.update(req.body, { where: { id, }, returning: true, })
    res.send(beer)
  } catch (err) {
    next(err)
  }
})

module.exports = router
