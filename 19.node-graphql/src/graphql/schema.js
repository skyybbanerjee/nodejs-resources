//this file describes the structure of our data

const { gql } = require("graphql-tag");
//String
//Int
//Float
//Boolean
//ID -> an unique identifier

//contollers (ex Blog) -> fetch All, fetch by Id etc...
//req.params.id = usual REST API way

const typeDefs = gql`
  type Product {
    id: ID!
    title: String!
    category: String!
    price: Float!
    inStock: Boolean!
  }

  type Query {
    products: [Product]!
    product(id: ID!): Product
  }
  type Mutation {
    createProduct(
      title: String!
      category: String!
      price: Float!
      inStock: Boolean!
    ): Product
    deleteProduct(id: ID!): Boolean
    updateProduct(id: ID!
    title: String
    category: String
    price: Float
    inStock: Boolean
    ): Product
  }
`;

module.exports = typeDefs;
