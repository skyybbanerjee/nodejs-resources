//! callback hell
//! Nested callBacks
const fs = require("fs");

fs.readFile("input.txt", "utf8", (err, data) => {
  if (err) throw err;
  console.log("file:", data);
  const modifyFileData = data.toUpperCase();
  fs.writeFile("output.txt", modifyFileData, (err) => {
    if (err) throw err;
    console.log("Data written to the new file.");
    fs.readFile("output.txt", "utf8", (err, data) => {
      if (err) throw err;
      console.log("New file content:", data);
    });
  });
});
