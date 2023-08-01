const express = require('express')
const { create, getAllProduct, updateProduct, deleteProduct, getProductByCategory } = require('../controllers/productController')
const productRoutes = express.Router()

productRoutes.post('/create',create)
productRoutes.get('/',getAllProduct)
productRoutes.put('/update',updateProduct)
productRoutes.delete('/delete',deleteProduct)
productRoutes.get('/byCategory/:category',getProductByCategory)



module.exports=productRoutes