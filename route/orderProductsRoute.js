const express = require('express');
const { getAllOrder, orderCreate } = require('../controlars/orderControlers');
const router = express.Router();

router.get('/order', getAllOrder);
router.post('/order', orderCreate);
module.exports = router;
