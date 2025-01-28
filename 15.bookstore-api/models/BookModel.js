const mongoose = require("mongoose");

const BookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Book-title is required."],
    trim: true,
    maxLength: [100, "Book-title cannot exceed 100 characters."],
  },
  author: {
    type: String,
    required: [true, "Author-name is required."],
    trim: true,
    maxLength: [30, "Author-name cannot exceed 30 characters."],
  },
  publicationYear: {
    type: Number,
    required: [true, "Publication-year is required."],
    min: [1800, "Publication-year cannot be earlier than 1800."],
    max: [
      new Date().getFullYear(),
      "Publication-year cannot be in the future.",
    ],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Book", BookSchema); // Export the Book model for use in other files.
