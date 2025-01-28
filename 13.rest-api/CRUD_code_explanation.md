This code implements a simple **RESTful API for a bookstore** using **Express.js**, a popular Node.js framework. Below is a detailed explanation of each part of the code:

---

### 1. **Dependencies and Initialization**
```javascript
const express = require("express");
const app = express();
```
- **`express`**: Imports the Express.js module to create a web server.
- **`app`**: Initializes the Express application. This object is used to define routes and middleware.

---

### 2. **Middleware**
```javascript
app.use(express.json());
```
- **Middleware**: `express.json()` is built-in middleware that parses incoming JSON request bodies, making it easier to handle JSON data from the client.

---

### 3. **Data Setup**
```javascript
let books = [
  { id: 1, title: "Book 1", author: "Author 1" },
  { id: 2, title: "Book 2", author: "Author 2" },
  { id: 3, title: "Book 3", author: "Author 3" },
];
```
- **`books`**: An in-memory array representing a collection of book objects. Each book has an `id`, `title`, and `author`.
- This array acts as a pseudo-database for simplicity.

---

### 4. **Routes**
Routes define the API endpoints and their behavior.

#### a) **Introduction Route**
```javascript
app.get("/", (req, res) => {
  res.json({
    message: "Welcome to our bookstore API",
  });
});
```
- **Endpoint**: `/`
- **Method**: GET
- **Purpose**: Sends a welcome message as a JSON response.
- **Response**: 
  ```json
  { "message": "Welcome to our bookstore API" }
  ```

---

#### b) **Get All Books**
```javascript
app.get("/books", (req, res) => {
  res.json({ success: true, message: "Displaying all books", books });
});
```
- **Endpoint**: `/books`
- **Method**: GET
- **Purpose**: Retrieves the entire `books` array.
- **Response**: 
  ```json
  {
    "success": true,
    "message": "Displaying all books",
    "books": [ /* Array of books */ ]
  }
  ```

---

#### c) **Get a Single Book**
```javascript
app.get("/books/:id", (req, res) => {
  const book = books.find((b) => b.id === parseInt(req.params.id));
  if (!book) {
    return res.status(404).json({ success: false, message: `Book not found!` });
  }
  res.status(200).json({ success: true, message: "Book found", book });
});
```
- **Endpoint**: `/books/:id`
- **Method**: GET
- **Purpose**: Retrieves a single book by its `id`.
- **Logic**:
  - `req.params.id`: Captures the `id` parameter from the URL.
  - `parseInt()`: Converts the `id` (string) to a number.
  - `books.find(...)`: Finds the book with the matching `id`.
  - If the book is not found, it returns a `404` status with an error message.
- **Response (Success)**:
  ```json
  {
    "success": true,
    "message": "Book found",
    "book": { "id": 1, "title": "Book 1", "author": "Author 1" }
  }
  ```
- **Response (Error)**:
  ```json
  {
    "success": false,
    "message": "Book not found!"
  }
  ```

---

#### d) **Add a New Book**
```javascript
app.post("/add", (req, res) => {
  const newBook = {
    id: Math.floor(Math.random() * 1000),
    title: req.body.title,
    author: req.body.author,
  };
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
```
- **Endpoint**: `/add`
- **Method**: POST
- **Purpose**: Adds a new book to the `books` array.
- **Logic**:
  - **Generate ID**: A random `id` is assigned using `Math.random()`.
  - **Duplicate Check**: `books.some()` checks if a book with the same title already exists.
  - **Add Book**: If no duplicates, the book is added to the array.
- **Response (Success)**:
  ```json
  {
    "success": true,
    "message": "Book added successfully ✅",
    "book": { "id": 123, "title": "New Book", "author": "New Author" }
  }
  ```
- **Response (Error)**:
  ```json
  {
    "success": false,
    "message": "Book with title 'New Book' already exists!"
  }
  ```

---

#### e) **Update a Book**
```javascript
app.put("/books/:id", (req, res) => {
  const book = books.find((b) => b.id === parseInt(req.params.id));
  if (book) {
    book.title = req.body.title || book.title;
    book.author = req.body.author || book.author;
    res.status(200).json({ success: true, message: "Book updated successfully", book });
  } else {
    return res.status(404).json({ success: false, message: `Book not found!` });
  }
});
```
- **Endpoint**: `/books/:id`
- **Method**: PUT
- **Purpose**: Updates the `title` or `author` of a book.
- **Logic**:
  - Find the book using `id`.
  - Update `title` and `author` with new values, or keep existing ones.
- **Response**:
  ```json
  {
    "success": true,
    "message": "Book updated successfully",
    "book": { "id": 1, "title": "Updated Book", "author": "Updated Author" }
  }
  ```

---

#### f) **Delete a Book**
```javascript
app.delete("/delete/:id", (req, res) => {
  const bookIdx = books.findIndex((item) => item.id === parseInt(req.params.id));
  if (bookIdx !== -1) {
    const deletedBook = books.splice(bookIdx, 1);
    res.status(200).json({
      success: true,
      message: `Book deleted successfully`,
      book: deletedBook[0],
    });
  } else {
    return res.status(404).json({ success: false, message: `Book not found!` });
  }
});
```
- **Endpoint**: `/delete/:id`
- **Method**: DELETE
- **Purpose**: Removes a book from the `books` array by `id`.
- **Logic**:
  - Use `findIndex` to locate the index of the book.
  - Use `splice` to remove the book from the array.
- **Response**:
  ```json
  {
    "success": true,
    "message": "Book deleted successfully",
    "book": { "id": 1, "title": "Book 1", "author": "Author 1" }
  }
  ```

---

### 5. **Server Startup**
```javascript
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT} ✅`);
});
```
- Starts the server on `http://localhost:3000`.

---

### Key Concepts:
- **CRUD Operations**: Create, Read, Update, and Delete functionalities for `books`.
- **Route Parameters**: `:id` captures dynamic values in the URL.
- **Error Handling**: Returns appropriate status codes (`404`, `409`, `201`).
- **Middleware**: Parses incoming JSON data for easy handling.