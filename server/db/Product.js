Sequelize = require('sequelize')
db = require('./db')

const Product = db.define('product', {
    name: {
        type: Sequelize.STRING
    },
    price: {
        type: Sequelize.INTEGER
    },
    discount: {
        type: Sequelize.INTEGER
    },
    availability: {
        type: Sequelize.STRING
    }
})

module.exports = Product