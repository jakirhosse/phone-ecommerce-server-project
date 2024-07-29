const mongoose = require("mongoose");
const ordersSchema = new mongoose.Schema({
  product: {
    type: Object,
  },
  paidStatus: {
    type: Boolean,
  },
  tranjectionId: {
    type: String,
  },
});
module.exports = mongoose.model('orders', ordersSchema);
