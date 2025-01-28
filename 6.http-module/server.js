const http = require("http");
const server = http.createServer((req, res) => {
  console.log(req, "<- req");
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end('Hello from Nodejs http-module!')
});

const PORT = 3002;

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
