const express = require("express");
const app = express();
const mongoose = require("mongoose");
var cors = require('cors')  //use this
const PORT = 7777;
const dotenv = require("dotenv");
dotenv.config();
app.use(express.json());
const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");
const productRoute = require("./routes/product");
const cartRoute = require("./routes/cart");
const orderRoute = require("./routes/order");

mongoose
  .connect(process.env.MANGO_DB_URL)
  .then(() => console.log("Database Connected"))
  .catch((err) => console.log(err));

// app.get('/api' , ()=>console.log('Test API'))
app.use(cors())
app.use("/api/auth", authRoute);
app.use("/api/user", userRoute);
app.use("/api/product", productRoute);
app.use("/api/cart", cartRoute);
app.use("/api/order", orderRoute);

app.listen(process.env.PORT || PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
