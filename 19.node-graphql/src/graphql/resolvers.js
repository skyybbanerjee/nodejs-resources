const Product = require("../models/Product.js");

const resolvers = {
  Query: {
    products: async () => await Product.find({}), // Fetch all products
    product: async (_, { id }) => await Product.findById(id), // Fetch product by ID
  },
  Mutation: {
    createProduct: async (_, args) => {
      const newlyCreatedProduct = new Product(args);
      await newlyCreatedProduct.save();
      return newlyCreatedProduct;
    },
    updateProduct: async (_, { id, ...updatedFields }) => {
      return await Product.findByIdAndUpdate(id, updatedFields, { new: true });
    },
    deleteProduct: async (_, { id }) => {
      const deletedProduct= await Product.findByIdAndDelete(id);
      return deletedProduct !== null;
    },
  },
};

module.exports = resolvers;
