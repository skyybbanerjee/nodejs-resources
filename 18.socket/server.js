const express = require("express");
const http = require("http");
const socketIo = require("socket.io");

const app = express();

// Creating server with http()
const server = http.createServer(app);

// Initiate socket.io and attach it to the HTTP server
const io = socketIo(server);

app.use(express.static("public")); // Serving static files from the 'public' directory

// Initialize a Set to store usernames
const users = new Set(); // Assuming this should be here to handle usernames

// Listen to connection event
io.on("connection", (socket) => {
  console.log("New client connected ✅");

  // Handle users when they join the chat
  socket.on("join", (userName) => {
    users.add(userName); // Changed `user.add` to `users.add`
    socket.userName = userName; // Store the username for this socket

    // Broadcast joining of a new user
    io.emit("userJoined", userName);

    // Send updated user list to all clients
    io.emit("userList", Array.from(users)); // Ensure event name is consistent
  });

  //Handle incoming chat messages
  socket.on("chatMessage", (message) => {
    // Broadcast new received message to all connected-clients
    io.emit("chatMessage", message); // Ensure event name is consistent
  });

  // Handle user disconnection
  socket.on("disconnect", () => {
    console.log("A client disconnected ❌");
    users.forEach((user) => {
      if (user === socket.userName) {
        users.delete(user);
        io.emit("userLeft", user);
        io.emit("userList", Array.from(users)); // Ensure event name is consistent
      }
    });
  });
});

const PORT = 3000;

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT} ✅`);
});
