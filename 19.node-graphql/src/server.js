require("dotenv").config();
const { ApolloServer } = require("@apollo/server");
const { startStandaloneServer } = require("@apollo/server/standalone"); // Standalone mode without Express.js
const connectDB = require("./database/db.js");
const typeDefs = require("./graphql/schema");
const resolvers = require("./graphql/resolvers");

// Create and start the Apollo Server
async function startServer() {
  try {
    await connectDB();
    const server = new ApolloServer({ typeDefs, resolvers });
    const { url } = await startStandaloneServer(server, {
      listen: { port: process.env.PORT },
    });

    console.log(`Server ready at ${url} 🛜`);
  } catch (error) {
    console.error("Error starting server:", error.message);
  }
}

startServer();
