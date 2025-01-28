const express = require("express");
const app = express();

//define middleware f(x)
const myFirstMiddleware = (req, res, next) => {
  console.log("This MiddleWare() will run on every request ☑️");
  //console.log(`req: ${req}, res: ${res}, next: ${next}`);
  next();
};

app.use(myFirstMiddleware);

app.get("/", (req, res) => {
  res.send("Home Page");
});
app.get("/about", (req, res) => {
  res.send("About Page");
});
app.get("/contact", (req, res) => {
    res.send("Contact Page");
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT} ⚡`);
});
