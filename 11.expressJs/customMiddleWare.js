const express = require("express");
const app = express();

// Define middleware function

function addTimestamp(req, res, next) {
  const timestamp = new Date().toISOString();
  console.log(`${timestamp} from ${req.method} to ${req.url} ⏲️`);
  next();
}

//app.use(addTimestamp); //running on every request-response cycle

app.get("/", (req, res) => {
  res.send("Home Page 🏠");
});
app.get("/about", addTimestamp, (req, res) => {
  //the middleware runs only on '/about'
  res.send("About Page ✨");
});
app.get("/contact", (req, res) => {
  res.send("Contact Page 📞");
});
app.listen(3000, (req, res) => {
  console.log("Server is running on port 3000 ✅");
});
