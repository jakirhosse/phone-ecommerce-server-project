const express = require('express');
const { paymentFail } = require('../controlars/paymentFailControler');
const router = express.Router();

router.post('/payment/fail/:tranId', paymentFail);
module.exports = router;
