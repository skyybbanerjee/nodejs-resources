require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const productRoutes = require("./routes/productRoutes.js");
const bookRoutes = require("./routes/bookRoutes.js");

const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("Connected to MongoDB ✅");
  })
  .catch((err) => console.log(err));

//use middlewares
app.use(express.json());

// routes
app.use("/products", productRoutes);
app.use("/reference", bookRoutes);

//creating server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT} 🛜`);
});
