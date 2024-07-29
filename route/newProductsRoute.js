const express = require("express");
const { createProduct, getAllNewProducts, getSingleProduct, updateProduct, deleteProduct } = require("../controlars/newProductscontrolars");
const router = express.Router()

router.post("/products", createProduct)
router.get('/products', getAllNewProducts);
router.get("/products/:id", getSingleProduct)
router.put('/products/:id', updateProduct);
router.delete('/products/:id',deleteProduct);
module.exports = router;
