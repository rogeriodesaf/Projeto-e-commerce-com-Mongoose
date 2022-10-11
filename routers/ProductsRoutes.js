const express = require('express')
const ProductController = require('../controllers/ProductController')
const router  = express.Router()

router.get('/create',ProductController.createProduct)
router.post('/create',ProductController.createProductPost)
router.get('/',ProductController.showProducts)

module.exports = router