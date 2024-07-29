const express = require('express');
const cors = require('cors');
const config = require('./config/config');
require('./config/db'); // Importing the database connection
const newProductsRoute = require("./route/newProductsRoute.js")
const topProducts = require("./route/topProductsRoute.js")
const orderProductsRoute = require("./route/orderProductsRoute.js")
const paymentSucessRoute = require("./route/paymentSucessRoute.js");
const paymentFailRoute = require ("./route/paymentFailRoute.js")
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.use("/api/new", newProductsRoute)
app.use("/api",topProducts)
app.use('/api/order', orderProductsRoute);
app.use(paymentSucessRoute)
app.use(paymentFailRoute)


app.get("/", (req, res) => {
  res.status(200).json({ message: 'Server is ready' });
});


// not found 
app.use((req, res, next)=>{
  res.status(200).json({ message: "This url is not found" })
})
// server error 
app.use((err, req, res, next)=>{
    res.status(200).json({message : "Server something broke"})
})
const PORT = config.app.port;
app.listen(PORT, () => {
  console.log(`Server is running successfully at http://localhost:${PORT}`);
});
