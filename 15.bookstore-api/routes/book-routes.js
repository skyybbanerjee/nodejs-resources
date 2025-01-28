const express = require("express"); //first step
const {
  getAllBooks,
  getSingleBookById,
  addNewBook,
  updateSingleBookById,
  deleteSingleBookById,
} = require("../controllers/book-controller.js");

//create express-router
const router = express.Router();

//Creating All The Routes That Are Related To BOOKS📚 Only.
router.get("/get", getAllBooks);
router.get("/get/:id", getSingleBookById);
router.post("/add", addNewBook);
router.put("/update/:id", updateSingleBookById);
router.delete("/delete/:id", deleteSingleBookById);

//Exporting The Router
module.exports = router;
