const express = require('express');
const { createProduct, getAllProducts, singleProduct, updateProduct, deleteProduct } = require('../controlars/topProductscontrolars');
const router = express.Router()
router.post('/products', createProduct);
router.get("/products", getAllProducts)
router.get('/products/:id', singleProduct);
router.put('/products/:id', updateProduct);
router.delete('/products/:id', deleteProduct);

module.exports = router;

