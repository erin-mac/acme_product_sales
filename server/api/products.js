const Product = require('../db/Product')
const router = require('express').Router()
module.exports = router
//GET /
// router.get('/', async (req, res, next) => {
//     try {
//         const products = await Product.findAll()
//         res.json(products)
//     } catch (error) { next(error) }
// })

// GET / api / products
router.get('/products', async (req, res, next) => {
    try {
        const products = await Product.findAll()
        res.json(products)
    } catch (error) { next(error) }
})

//POST /api/products
router.post('/products', async (req, res, next) => {
    try {
        console.log('posting here!')
        const data = await Product.create(req.body)
        res.json(data.data)
    } catch (error) { next(error) }
})


//DELETE /api/products
router.delete('/products/:productId', async (req, res, next) => {
    try {
        await Product.destroy({
            where: {
                id: req.params.productId
            }
        })
        res.status(204)
    } catch (error) { next(error) }
})

