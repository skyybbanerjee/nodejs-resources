const express = require("express");
const path = require("path");

const app = express();

//setting up the view-engine as 'ejs'
app.set("view engine", "ejs");

//set the directory for the 'views' directory
app.set("views", path.join(__dirname, "views"));

const products = [
  { id: 1, name: "Product 1", price: 10 },
  { id: 2, name: "Product 2", price: 20 },
  { id: 3, name: "Product 3", price: 30 },
];

app.get("/", (req, res) => {
  res.render("home", { title: "Home", products: products });
});

app.get("/about", (req, res) => {
  res.render("about", { title: "About" });
});

const port = 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port} ✅`);
});
