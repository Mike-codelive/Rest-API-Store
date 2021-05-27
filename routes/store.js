const express = require('express')
const router = express.Router()
const {
	getProducts,
	getProduct,
	createProduct,
	updateProduct,
	deleteProduct,
	putProduct
} = require('../controllers/store')

router
.route('/')
.get(getProducts)
.put(putProduct)

router
.route('/')
.get(getProduct)
.post(createProduct)
.delete(deleteProduct)
.put(updateProduct)


module.exports = router