const express = require("express");
const {
  insertSampleProducts,
  getProductStats,
  getProductAnalysis,
} = require("../controllers/productController.js");

const router = express.Router();

//inserting multiple products
router.post("/add", insertSampleProducts);
router.get("/stats", getProductStats);
router.get("/analysis", getProductAnalysis);

module.exports = router;
