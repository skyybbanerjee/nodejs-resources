const fs = require("fs");
const path = require("path");

const dataFolder = path.join(__dirname, "data");
if (!fs.existsSync(dataFolder)) {
  fs.mkdirSync(dataFolder);
  console.log(`dataFolder created ✅`);
}

const filePath = path.join(dataFolder, "example.txt");

//write - sync. way
fs.writeFileSync(filePath, "Hello, Node.js!");
console.log(`File created successfully✔️`);

//read - sync. way
const readContentFromFile = fs.readFileSync(filePath, "utf8");
console.log(`Content of the file: ${readContentFromFile}`);

//appending

fs.appendFileSync(filePath, "\nThis is an appended line.");
console.log("Appended line to the file successfully! ✔️");

//Now, Async. way... ⏳
const asyncFilePath = path.join(dataFolder, "async-example.txt");

fs.writeFile(asyncFilePath, "Hello, Async Node.js!", (err) => {
  if (err) throw err;
  console.log("Async file created successfully!✅");
});

fs.readFile(asyncFilePath, "utf8", (err, data) => {
  if (err) throw err;
  console.log(`Content of the async file: ${data}`);
});

fs.appendFile(
  asyncFilePath,
  "\nThis is an appended line asynchronously.",
  (err) => {
    if (err) throw err;
    console.log("Appended line to the async file successfully!");
    fs.readFile(asyncFilePath, "utf8", (err, updatedData) => {
      if (err) throw err;
      console.log(`Updated content of the async file: ${updatedData}`);
    });
  }
);
