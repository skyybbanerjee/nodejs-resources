// Importing the Express library to create a server
const express = require("express");

// Creating an Express application instance
const app = express();

// -------------------------------------------------
// Express.js Basics
// -------------------------------------------------

// Setting the template engine for rendering views (optional, used if you render EJS templates)
app.set("view engine", "ejs");

// -------------------------------------------------
// Routing
// -------------------------------------------------

// Route for handling GET requests to the root ("/") endpoint
// This sends back a simple response "home page" to the client
app.get("/", (req, res) => {
  res.send("home page");
});

// Route for handling POST requests to the "/api/data" endpoint
// This sends back a JSON response with a dummy message and the request body
app.post("/api/data", (req, res) => {
  res.json({
    message: "Some Dummy Message", // A placeholder message
    data: req.body, // The data sent by the client in the request body (requires middleware to parse it, e.g., `express.json()`)
  });
});

// -------------------------------------------------
// Error Handling Middleware
// -------------------------------------------------

// Error handling middleware for catching and logging errors
// The `err` parameter contains error information passed by Express
// Responds with a 500 status code and an error message to the client
app.use((err, req, res, next) => {
  console.log(err.stack); // Logs the stack trace of the error
  res.status(500).send("Something broke!"); // Sends a 500 status and error message
});

// Note: The `next` parameter is included but not used in this code. It allows for passing control to the next middleware if needed.
