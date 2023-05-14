const Router = require('express')
const { getProdcuts, getProductsById, editProduct, createProduct, deleteProduct } = require('../controllers/products.controllers')
const router = Router()

router.get('/', getProdcuts)

router.get('/:id', getProductsById) 

router.put('/:id', editProduct) 

router.post("/", createProduct)

router.delete("/:id", deleteProduct)

module.exports = router;
