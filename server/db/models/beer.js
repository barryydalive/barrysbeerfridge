const Sequelize = require('sequelize')
const db = require('../db')

const Beer = db.define('beer', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  ABV: {
    type: Sequelize.DECIMAL(10, 2),
    defaultValue: 0.00,
  },
  type: {
    type: Sequelize.STRING,
    defaultValue: 'unknown',
  },
  img: {
    type: Sequelize.STRING,
    defaultValue: 'https://images.unsplash.com/photo-1521572008054-962cefc90ce7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80',
  },
  brewery: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  amount: {
    type: Sequelize.INTEGER,
    defaultValue: 0,
  },
})

module.exports = Beer
