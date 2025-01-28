const { default: mongoose } = require("mongoose");
const BookModel = require("../models/BookModel");

//Controllers related to BOOKs📚

//!Get All Books
async function getAllBooks(req, res) {
  try {
    const allBooks = await BookModel.find({});
    if (allBooks.length > 0) {
      res.status(200).json({
        success: true,
        message: "Books fetched successfully✅",
        allBooks: allBooks,
      });
      console.log("All books fetched successfully 📚");
    } else {
      res.json({ success: false, message: "No books found." });
    }
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
    console.error(err);
  }
}

//!Get Single Book by ID
async function getSingleBookById(req, res) {
  try {
    const bookId = req.params.id;

    // Validate the bookId to ensure it is a valid ObjectId
    if (!mongoose.Types.ObjectId.isValid(bookId)) {
      return res.status(400).json({
        success: false,
        message: "Invalid book ID format. Please provide a valid ID.",
      });
    }

    const bookDetails = await BookModel.findById(bookId);
    if (!bookDetails) {
      return res.status(404).json({
        success: false,
        message: `Book with the current book_id '${bookId}' not found`,
      });
    }
    res.status(200).json({
      success: true,
      message: "Book fetched successfully ✅",
      book: bookDetails,
    });
    console.log(`Book with id: ${bookId} fetched successfully✅`);
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
    console.error(err);
  }
}

//!Add A Book
async function addNewBook(req, res) {
  try {
    const newBookFormData = req.body;

    // Check if a book with the same title already exists
    const bookExists = await BookModel.findOne({
      title: newBookFormData.title,
    });
    if (bookExists) {
      return res.status(409).json({
        success: false,
        message: `Book with title '${newBookFormData.title}' already exists!`,
      });
    }

    // If no duplicate, create the new book
    const newlyCreatedBook = await BookModel.create(newBookFormData);

    if (newlyCreatedBook) {
      res.status(201).json({
        success: true,
        message: "Book added successfully",
        addedBook: newlyCreatedBook,
      });
    } else {
      res.status(400).json({ success: false, message: "Failed to add book" });
    }
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
    console.error(err);
  }
}

//!Update A Book by ID
async function updateSingleBookById(req, res) {
  try {
    const updatedBookFormData = req.body;
    const bookId = req.params.id;

    // Validate the bookId to ensure it is a valid ObjectId
    if (!mongoose.Types.ObjectId.isValid(bookId)) {
      return res.status(400).json({
        success: false,
        message: "Invalid book ID format. Please provide a valid ID.",
      });
    }

    // Check if a book with the same title already exists, excluding the current book being updated
    if (updatedBookFormData.title) {
      const existingBookWithTitle = await BookModel.findOne({
        title: updatedBookFormData.title,
        _id: { $ne: bookId }, // Exclude the current book
      });
      if (existingBookWithTitle) {
        return res.status(409).json({
          success: false,
          message: `A book with the title '${updatedBookFormData.title}' already exists. Please use a different title.`,
        });
      }
    }

    // Proceed with updating the book
    const updatedBook = await BookModel.findByIdAndUpdate(
      bookId,
      updatedBookFormData,
      { new: true } // Return the updated document
    );

    if (!updatedBook) {
      return res.status(404).json({
        success: false,
        message: `Book with the current book_id '${bookId}' not found`,
      });
    }

    res.status(200).json({
      success: true,
      message: "Book updated successfully⚙️✅",
      updatedBook: updatedBook,
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
    console.error(err);
  }
}


//!Delete A Book by ID
async function deleteSingleBookById(req, res) {
  try {
    const bookId = req.params.id;

    // Validate the bookId to ensure it is a valid ObjectId
    if (!mongoose.Types.ObjectId.isValid(bookId)) {
      return res.status(400).json({
        success: false,
        message: "Invalid book ID format. Please provide a valid ID.",
      });
    }

    const deletedBook = await BookModel.findByIdAndDelete(bookId);
    if (!deletedBook) {
      return res.status(404).json({
        success: false,
        message: `Book with the current book_id '${bookId}' not found`,
      });
    }
    res.status(200).json({
      success: true,
      message: `Book with id '${bookId}' deleted successfully`,
      deletedBook: deletedBook,
    });
    console.log(`Book with id: ${bookId} deleted successfully 🚮`);
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
    console.error(err);
  }
}

module.exports = {
  getAllBooks,
  getSingleBookById,
  addNewBook,
  updateSingleBookById,
  deleteSingleBookById,
};
