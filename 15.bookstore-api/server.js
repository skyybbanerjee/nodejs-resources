const express = require("express");
require("dotenv").config();
const connectToDB = require("./database/db.js");
const bookRoutes = require("./routes/book-routes.js");

const app = express();

const PORT = process.env.PORT || 3000;

//connect to our DB.
connectToDB();

//middleware -> express/json
app.use(express.json());

//creating routes
app.use('/api/books', bookRoutes);


app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT} 🛜`);
});
