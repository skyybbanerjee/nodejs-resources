const Author = require("../models/Author.js");
const Book = require("../models/Book.js");

async function createAuthor(req, res) {
  try {
    const author = new Author(req.body);
    await author.save();
    res.status(201).send({
      success: true,
      message: "Author created successfully✍🏻✅",
      data: author,
    });
  } catch (err) {
    console.error(err);
    res.status(500).send({ success: false, message: err.message });
  }
}

async function createBook(req, res) {
  try {
    const book = new Book(req.body);
    await book.save();
    res.status(201).send({
      success: true,
      message: "Book created successfully 📔✅",
      data: book,
    });
  } catch (err) {
    console.error(err);
    res.status(500).send({ success: false, message: err.message });
  }
}

async function getBookWithAuthor(req, res) {
  try {
    const book = await Book.findById(req.params.id).populate("author");
    if (!book)
      return res
        .status(404)
        .send({ success: false, message: "Book not found ⚠️" });
    res.send({ success: true, data: book });
  } catch (err) {
    console.error(err);
    res.status(500).send({ success: false, message: err.message });
  }
}

module.exports = { createAuthor, createBook, getBookWithAuthor };
