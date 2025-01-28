const path = require("path");

console.log(`Directory name: ${path.dirname(__filename)}`);
//Directory name: c:\Users\ASUS\Desktop\nodejs-course\4.path-module

console.log(`File name: ${path.basename(__filename)}`); //File name: index.js

console.log(`File extension: ${path.extname(__filename)}`); //File extension: .js

const joinPath = path.join("/user", "documents", "node", "projects");

console.log(`Joined Path: `, joinPath); // Joined Path: /user/documents/node/projects

const resolvePath = path.resolve("user", "documents", "node", "projects");

console.log(`Resolved Path: `, resolvePath);
//Resolved Path:  c:\Users\ASUS\Desktop\nodejs-course\user\documents\node\projects

const normalizePath = path.normalize('/user/.documents/../node/something');

console.log(`Normalized Path: `, normalizePath); //Normalized Path:  /user/node/something
