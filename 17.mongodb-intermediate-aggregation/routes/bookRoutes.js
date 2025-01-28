const express = require("express");
const {
  createAuthor,
  createBook,
  getBookWithAuthor,
} = require("../controllers/bookController.js");
const router = express.Router();

router.post("/author", createAuthor);
router.post("/book", createBook);
router.get("/book/:id", getBookWithAuthor);

module.exports = router;
