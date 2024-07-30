const Order = require('../models/orderModel');
const paymentFail = async (req, res) => {
  try {
    console.log(req.params.tranId);
    const result = await Order.deleteOne({ tranjectionId: req.params.tranId });
    if (result.deletedCount) {
      res.redirect(
        `https://phone-ecommerce-client-project.vercel.app/payment/fail/${req.params.tranId}`
      );
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { paymentFail };
