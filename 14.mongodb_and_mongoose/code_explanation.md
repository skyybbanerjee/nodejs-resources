Let’s break down our code step by step to understand how it works and what it does. This will also help we get a good overview of MongoDB and Mongoose.

---

### **Summary:**
This code:
1. Connects to a MongoDB database using Mongoose.
2. Defines a **User** schema for the database.
3. Performs multiple database operations, such as creating, reading, updating, and sorting user data.
4. Closes the database connection after all operations are complete.

---

### **Detailed Explanation:**

#### **1. Connecting to MongoDB:**
```javascript
mongoose
  .connect("mongodb+srv://soumadip-banerjee:mongodbbasics5991@cluster0.4frx1.mongodb.net")
  .then(() => {
    console.log("Connected to MongoDB✅");
    runQueryExamples(); // Run queries after connection is established
  })
  .catch((err) => console.log(err));
```
- This connects to your MongoDB **cloud database** using a connection string.
- The `.connect()` method returns a **promise**:
  - On success: Logs "Connected to MongoDB✅".
  - On failure: Logs the error.
- Once connected, the `runQueryExamples()` function is called to execute database operations.

---

#### **2. Defining the Schema and Model:**
```javascript
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
  isActive: Boolean,
  tags: [String],
  createdAt: { type: Date, default: Date.now() },
});
const User = mongoose.model("User", userSchema);
```
- A **schema** defines the structure of documents (like a blueprint) stored in the MongoDB collection.
- Fields:
  - `name`, `email`, `age`, `isActive`, `tags`, `createdAt`.
  - Example: `tags` is an **array of strings**; `createdAt` defaults to the current date.
- **Model**: `User` is the interface to interact with the `users` collection in MongoDB.

---

#### **3. Performing Database Operations:**

##### **a. Creating a New User Document:**
```javascript
const newUser = await User.create({
  name: "Updating",
  email: "travisUpdate.parker@exampl.Update",
  age: 558,
  isActive: false,
  tags: ["NextJs", "CSS3", "HTML"],
});
console.log("Created new user:", newUser);
```
- `User.create()` adds a new document to the database.
- The document has fields matching the schema.

##### **b. Reading Data:**
- **Find user by ID:**
  ```javascript
  const getLastCreatedUserById = await User.findById(newUser._id);
  ```
  Retrieves the newly created user using its `_id`.

- **Find all users:**
  ```javascript
  const allUsers = await User.find({});
  ```
  Fetches all documents from the collection.

- **Find users by a condition:**
  ```javascript
  const inactiveUsers = await User.find({ isActive: false });
  ```
  Fetches all users where `isActive` is `false`.

- **Find one user by a condition:**
  ```javascript
  const getPeterParker = await User.findOne({ name: "Peter Parker" });
  ```
  Finds the first user matching the name `Peter Parker`.

##### **c. Selecting and Limiting Fields:**
- **Select specific fields:**
  ```javascript
  const selectedFields = await User.find().select("name email -_id");
  ```
  Fetches only `name` and `email` fields, excluding `_id`.

- **Limit results:**
  ```javascript
  const limitedUsers = await User.find().limit(5).skip(1);
  ```
  Fetches 5 users, skipping the first one.

##### **d. Sorting Data:**
- **Sort by age (descending):**
  ```javascript
  const sortedUsersDesc = await User.find().sort({ age: -1 });
  ```

- **Sort by age (ascending):**
  ```javascript
  const sortedUsersAsc = await User.find().sort({ age: 1 });
  ```

##### **e. Counting Documents:**
```javascript
const countDocuments = await User.countDocuments({ isActive: true });
```
Counts the number of users where `isActive` is `true`.

##### **f. Updating a User Document:**
```javascript
const updatedUser = await User.findByIdAndUpdate(
  newUser._id,
  {
    $set: { age: 69 }, // Update age to 69
    $push: { tags: "updatedTag" }, // Add "updatedTag" to tags array
  },
  { new: true } // Return the updated document
);
console.log("Updated User: ", updatedUser);
```
- Updates the document using:
  - `$set`: Sets new values for fields.
  - `$push`: Adds an item to an array.

##### **g. Deleting a User Document:**
```javascript
const deletedUser = await User.findByIdAndDelete(newUser._id);
```
Deletes the user by their `_id`.

---

#### **4. Closing the Database Connection:**
```javascript
await mongoose.connection.close().then(() => {
  console.log("Connection closed.");
});
```
- Ensures the connection is closed after all operations are complete.

---

### **Key Concepts Learned:**
1. **Connection**: Use `.connect()` to establish a database connection.
2. **Schema and Model**: Define the structure of documents with `Schema`, interact with the database using `Model`.
3. **CRUD Operations**:
   - Create: `create()`
   - Read: `find()`, `findById()`, `findOne()`
   - Update: `findByIdAndUpdate()`
   - Delete: `findByIdAndDelete()`
4. **Query Modifiers**: `select()`, `limit()`, `sort()`, `skip()`.
5. **Error Handling**: Wrap operations in `try...catch` to handle errors.

This structure ensures clean, organized, and efficient database interactions.