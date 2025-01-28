const express = require("express");

const app = express();

//root route
app.get("/", (req, res) => {
  res.send("Welcome to our home-page!");
});

// get all products
app.get("/products", (req, res) => {
  const products = [
    { id: 1, name: "Product 1", price: 10 },
    { id: 2, name: "Product 2", price: 20 },
    { id: 3, name: "Product 3", price: 30 },
  ];
  res.json(products);
});

// get single product
app.get("/products/:id", (req, res) => {
  const products = [
    { id: 1, name: "Product 1", price: 10 },
    { id: 2, name: "Product 2", price: 20 },
    { id: 3, name: "Product 3", price: 30 },
  ];
  const productId = parseInt(req.params.id);
  const product = products.find((p) => p.id === productId);

  if (!product) {
    return res.status(404).json({success:false, message: "Product not found" });
  }
  res.json(product);
});

const port = 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}✅`);
});
