const mongoose = require("mongoose");

// Connect to MongoDB
mongoose
  .connect(
    "mongodb+srv://soumadip-banerjee:mongodbbasics5991@cluster0.4frx1.mongodb.net"
  )
  .then(() => {
    console.log("Connected to MongoDB✅");
    runQueryExamples(); // Run queries after successful connection
  })
  .catch((err) => console.log(err));

// Define the schema
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
  isActive: Boolean,
  tags: [String],
  createdAt: { type: Date, default: Date.now() },
});

// Create the User model
const User = mongoose.model("User", userSchema);

// Function to perform database operations
async function runQueryExamples() {
  try {
    //! Create a new document
    const newUser = await User.create({
      name: "Updating",
      email: "travisUpdate.parker@exampl.Update",
      age: 558,
      isActive: false,
      tags: ["NextJs", "CSS3", "HTML"],
    });

    //!await newUser.save();
    console.log("Created new user:", newUser);

    const getLastCreatedUserById = await User.findById(newUser._id);
    //!console.log("Last created user by ID:", getLastCreatedUserById);

    const travis = await User.findById("679281987c6f130a439f166a");
    //!console.log(travis.name);

    const allUsers = await User.find({});
    //! console.log(allUsers);

    const inactiveUsers = await User.find({ isActive: false });
    //!console.log(`${inactiveUsers.length} users are inactive`, inactiveUsers);

    const getPeterParker = await User.findOne({ name: "Peter Parker" });
    //!console.log(getPeterParker);

    const selectedFields = await User.find().select("name email -_id");
    //!console.log('Selected Fields Only: ',selectedFields);

    const limitedUsers = await User.find().limit(5).skip(1);
    //!console.log(`${limitedUsers.length} Limited Users: `, limitedUsers);

    const sortedUsersDesc = await User.find().sort({ age: -1 });
    //!console.log('Desc. Sorted Users: ',sortedUsersDesc);

    const sortedUsersAsc = await User.find().sort({ age: 1 });
    //!console.log("Asc. Sorted Users: ", sortedUsersAsc);

    const countDocuments = await User.countDocuments({ isActive: true });
    //!console.log(`Count:`,countDocuments);

    const updatedUser = await User.findByIdAndUpdate(
      newUser._id,
      {
        $set: { age: 69 },
        $push: { tags: "updatedTag" },
      },
      { new: true }
    );
    console.log("Updated User: ", updatedUser);

    //const deletedUser = await User.findByIdAndDelete(newUser._id);
    //!console.log(`Deleted User:`, deletedUser);
  } catch (error) {
    console.log(error);
  } finally {
    // Close the connection after the operation
    await mongoose.connection.close().then(() => {
      console.log("Connection closed.");
    });
  }
}
