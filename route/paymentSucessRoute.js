
const express = require('express');
const { paymentSuccess } = require('../controlars/paymentSucessControler');
const router = express.Router();
router.post('/payment/success/:tranId', paymentSuccess);

module.exports = router;
