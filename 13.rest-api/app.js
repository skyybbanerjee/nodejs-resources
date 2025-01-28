const express = require("express");

const app = express();

// Middleware
app.use(express.json());

// Sample data
let books = [
  { id: 1, title: "Book 1", author: "Author 1" },
  { id: 2, title: "Book 2", author: "Author 2" },
  { id: 3, title: "Book 3", author: "Author 3" },
];

// Introduction route
app.get("/", (req, res) => {
  res.json({
    message: "Welcome to our bookstore API",
  });
});

// Get all books
app.get("/books", (req, res) => {
  res.json({ success: true, message: "Displaying all books", books });
});

// Get a single book
app.get("/books/:id", (req, res) => {
  const book = books.find((b) => b.id === parseInt(req.params.id)); // Convert id to number
  if (!book) {
    return res.status(404).json({
      success: false,
      message: `Book with id '${req.params.id}' not found!`,
    });
  }

  res.status(200).json({ success: true, message: "Book found", book });
});

// Add a new book
app.post("/add", (req, res) => {
  const newBook = {
    id: Math.floor(Math.random() * 1000), // Generate numeric ID
    title: req.body.title,
    author: req.body.author,
  };

  // Check if a book with the same title already exists
  const bookExists = books.some((book) => book.title === newBook.title);
  if (bookExists) {
    return res.status(409).json({
      success: false,
      message: `Book with title '${newBook.title}' already exists!`,
    });
  }

  books.push(newBook);

  res.status(201).json({
    success: true,
    message: "Book added successfully ✅",
    book: newBook,
  });
});

// Update a book
app.put("/books/:id", (req, res) => {
  const book = books.find((b) => b.id === parseInt(req.params.id)); // Convert id to number
  if (book) {
    book.title = req.body.title || book.title;
    book.author = req.body.author || book.author; // Allow updating the author as well
    res.status(200).json({
      success: true,
      message: "Book updated successfully",
      book,
    });
  } else {
    return res.status(404).json({
      success: false,
      message: `Book with id '${req.params.id}' not found!`,
    });
  }
});

// Delete a book
app.delete("/delete/:id", (req, res) => {
  const bookIdx = books.findIndex(
    (item) => item.id === parseInt(req.params.id)
  ); // Convert id to number
  if (bookIdx !== -1) {
    const deletedBook = books.splice(bookIdx, 1);
    res.status(200).json({
      success: true,
      message: `Book with id '${req.params.id}' deleted successfully`,
      book: deletedBook[0],
    });
  } else {
    return res.status(404).json({
      success: false,
      message: `Book with id '${req.params.id}' not found!`,
    });
  }
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT} ✅`);
});
