const Sequelize = require('sequelize')
const db = require('../db')

const Beer = db.define('beer', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  ABV: {
    type: Sequelize.DECIMAL(10, 2),
  },
  type: {
    type: Sequelize.STRING,
  },
  img: {
    type: Sequelize.STRING,
  },
  brewery: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  amount: {
    type: Sequelize.INTEGER,
  },
})

module.exports = Beer
