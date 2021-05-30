const express = require('express')
const router = express.Router()
const {
	getProducts,
	getProduct,
	createProduct,
	updateProduct,
	deleteProduct,
	putProduct,
	createUser
} = require('../controllers/store')

router
.route('/')
.get(getProducts)
.put(putProduct)

router
.route('/products')
.post(createProduct)

router
.route('/users')
.post(createUser)

router
.route('/products/:id')
.get(getProduct)
.put(updateProduct)
.delete(deleteProduct)

module.exports = router