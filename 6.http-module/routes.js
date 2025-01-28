const http = require("http");

const server = http.createServer((req, res) => {
  const url = req.url;

  if (url === "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(`
            <html>
                <body>
                    <h1>Welcome Home Route</h1>
                    <p>This API provides endpoints for CRUD operations on a simple blog post.</p>
                </body>
            </html>
        `);
  } else if (url === "/about") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(`
            <html>
                <body>
                    <h1>About Route</h1>
                    <p>This is the about page.</p>
                </body>
            </html>
        `);
  } else {
    // Handle unknown routes
    res.writeHead(404, { "Content-Type": "text/html" });
    res.end(`
            <html>
                <body style="font-family: Arial, sans-serif; text-align: center; padding: 50px;">
                    <h1 style="color: red;">404 - Page Not Found :(</h1>
                    <p>Sorry, the page you're looking for doesn't exist.</p>
                    <a href="/" style="text-decoration: none; color: blue;">Go Back Home</a>
                </body>
            </html>
        `);
  }
});

const PORT = 3002;
server.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
