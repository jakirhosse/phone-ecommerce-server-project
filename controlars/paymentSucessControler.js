const Order = require('../models/orderModel');

//payment success //

const paymentSuccess = async (req, res) => {
  try {
    console.log(req.params.tranId);
    const result = await Order.updateOne(
      { tranjectionId: req.params.tranId },
      {
        $set: {
          paidStatus: true,
        },
      }
    );
    if (result.modifiedCount > 0) {
      res.redirect(
        `https://phone-ecommerce-client-project.vercel.app/payment/success/${req.params.tranId}`
      );
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { paymentSuccess };
