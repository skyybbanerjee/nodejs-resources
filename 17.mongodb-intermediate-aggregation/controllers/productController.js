const Product = require("../models/Product.js");

//get product-stats
async function getProductStats(req, res) {
  try {
    const result = await Product.aggregate([
      //stage 1 : match
      {
        $match: {
          inStock: true,
          price: {
            $gte: 50,
          },
        },
      },
      //stage 2 : group
      {
        $group: {
          _id: "$category",
          avgPrice: {
            $avg: "$price",
          },
          count: {
            $sum: 1,
          },
        },
      },
    ]);
    res
      .status(200)
      .json({ success: true, totalProducts: result.length, data: result });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: error.message });
  }
}

//get product-analysis
async function getProductAnalysis(req, res) {
  try {
    const result = await Product.aggregate([
      {
        $match: {
          category: "Electronics",
        },
      },
      {
        $group: {
          _id: null,
          totalRevenue: {
            $sum: "$price",
          },
          avgPrice: {
            $avg: "$price",
          },
          maxPrice: {
            $max: "$price",
          },
          minPrice: {
            $min: "$price",
          },
        },
      },
      {
        $project:{
        _id:0,
        totalRevenue:1,
        avgPrice:1,
        maxPrice:1,
        minPrice:1,
       priceRange: {
         $subtract: ["$maxPrice", "$minPrice"]
       }
      },
    }
    ]);
    res
      .status(200)
      .json({ success: true, totalProducts: result.length, data: result });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: error.message });
  }
}

//insert multiple products
const insertSampleProducts = async (req, res) => {
  try {
    const sampleProducts = [
      {
        name: "LED Desk Lamp",
        category: "Home Decor",
        price: 32.99,
        quantity: 60,
        inStock: true,
        tags: ["lamp", "LED", "home decor", "lighting"],
      },
      {
        name: "Men's Leather Wallet",
        category: "Accessories",
        price: 24.99,
        quantity: 0,
        inStock: false,
        tags: ["wallet", "leather", "men", "accessories"],
      },
      {
        name: "Wireless Earbuds",
        category: "Electronics",
        price: 89.99,
        quantity: 50,
        inStock: true,
        tags: ["earbuds", "wireless", "electronics", "audio"],
      },
      {
        name: "Office Chair",
        category: "Furniture",
        price: 149.99,
        quantity: 0,
        inStock: false,
        tags: ["chair", "office", "furniture", "ergonomic"],
      },
      {
        name: "Electric Kettle",
        category: "Kitchen Appliances",
        price: 39.99,
        quantity: 25,
        inStock: true,
        tags: ["kettle", "electric", "kitchen", "appliances"],
      },
      {
        name: "Resistance Bands Set",
        category: "Fitness",
        price: 19.99,
        quantity: 0,
        inStock: false,
        tags: ["fitness", "resistance bands", "workout", "home gym"],
      },
      {
        name: "Travel Backpack",
        category: "Outdoor",
        price: 54.99,
        quantity: 45,
        inStock: true,
        tags: ["backpack", "travel", "outdoor", "bags"],
      },
      {
        name: "Portable Power Bank",
        category: "Electronics",
        price: 34.99,
        quantity: 0,
        inStock: false,
        tags: ["power bank", "portable", "electronics", "charging"],
      },
      {
        name: "Women's Woolen Scarf",
        category: "Clothing",
        price: 12.99,
        quantity: 120,
        inStock: true,
        tags: ["scarf", "woolen", "women", "clothing"],
      },
      {
        name: "Stainless Steel Knife Set",
        category: "Kitchenware",
        price: 59.99,
        quantity: 0,
        inStock: false,
        tags: ["knife set", "kitchenware", "stainless steel", "cooking"],
      },
      {
        name: "Camping Tent",
        category: "Outdoor",
        price: 129.99,
        quantity: 25,
        inStock: true,
        tags: ["tent", "camping", "outdoor", "gear"],
      },
      {
        name: "Cookware Set",
        category: "Kitchen Appliances",
        price: 79.99,
        quantity: 0,
        inStock: false,
        tags: ["cookware", "kitchen", "appliances", "cooking"],
      },
      {
        name: "Wooden Photo Frame",
        category: "Home Decor",
        price: 14.99,
        quantity: 150,
        inStock: true,
        tags: ["photo frame", "wooden", "home decor", "gifts"],
      },
      {
        name: "Bluetooth Car Adapter",
        category: "Electronics",
        price: 22.99,
        quantity: 0,
        inStock: false,
        tags: ["bluetooth", "car adapter", "electronics", "audio"],
      },
      {
        name: "Gardening Tools Set",
        category: "Outdoor",
        price: 45.99,
        quantity: 30,
        inStock: true,
        tags: ["gardening", "tools", "outdoor", "hobby"],
      },
      {
        name: "Running Cap",
        category: "Fitness",
        price: 9.99,
        quantity: 0,
        inStock: false,
        tags: ["cap", "running", "fitness", "sportswear"],
      },
      {
        name: "Classic Table Clock",
        category: "Home Decor",
        price: 29.99,
        quantity: 40,
        inStock: true,
        tags: ["clock", "table", "home decor", "classic"],
      },
      {
        name: "Electric Screwdriver",
        category: "Tools",
        price: 49.99,
        quantity: 0,
        inStock: false,
        tags: ["screwdriver", "electric", "tools", "DIY"],
      },
    ];
    const result = await Product.insertMany(sampleProducts);
    res.status(200).json({
      success: true,
      message: "Sample products inserted successfully!",
      data: `Inserted: ${result.length} sample products successfully✅`,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: error.message + "🔴",
    });
  }
};

module.exports = { insertSampleProducts, getProductStats, getProductAnalysis };
