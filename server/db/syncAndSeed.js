const db = require('./db')
const Product = require('./Product')

syncAndSeed = () => {
    return db.sync({ force: true })
        .then(() => {
            Product.create({
                name: 'Bazz',
                price: 5,
                discount: 20,
                availability: 'instock'
            })
        })
}

module.exports = syncAndSeed 