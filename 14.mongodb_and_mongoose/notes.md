### **What is MongoDB?**
MongoDB is a NoSQL database that stores data in a flexible, JSON-like document format, making it ideal for handling unstructured or semi-structured data.

---

### **What is Mongoose?**
Mongoose is a Node.js library that provides a schema-based solution for modeling and interacting with MongoDB, offering a powerful API for managing database operations.

---

### **Relevant Mongoose Methods (with 1-line explanations):**

#### **Schema Methods**
1. **`mongoose.Schema()`**: Defines the structure of a document with fields and their types.
2. **`schema.methods`**: Adds custom instance methods to schema models.
3. **`schema.statics`**: Adds static methods directly to the model class.

#### **Model Methods**
4. **`mongoose.model()`**: Compiles a schema into a model for interacting with a collection.
5. **`Model.create()`**: Creates and saves a new document to the database.
6. **`Model.find()`**: Fetches all documents that match the query criteria.
7. **`Model.findById()`**: Retrieves a single document by its unique `_id`.
8. **`Model.findOne()`**: Finds the first document matching the query.
9. **`Model.findByIdAndUpdate()`**: Finds a document by `_id` and updates it.
10. **`Model.findOneAndUpdate()`**: Finds a single document by query and updates it.
11. **`Model.findByIdAndDelete()`**: Finds and deletes a document by `_id`.
12. **`Model.findOneAndDelete()`**: Finds and deletes the first document matching the query.
13. **`Model.deleteMany()`**: Deletes all documents matching the query.
14. **`Model.deleteOne()`**: Deletes the first document matching the query.
15. **`Model.updateMany()`**: Updates multiple documents matching the query.
16. **`Model.updateOne()`**: Updates the first document matching the query.
17. **`Model.countDocuments()`**: Counts documents that match the query.
18. **`Model.aggregate()`**: Performs complex operations like grouping, filtering, and sorting.
19. **`Model.populate()`**: Fills references in a document with data from related collections.
20. **`Model.save()`**: Saves a document to the database.

#### **Query Methods**
21. **`Query.exec()`**: Executes a query and returns a Promise.
22. **`Query.select()`**: Specifies which fields to include or exclude in the result.
23. **`Query.sort()`**: Sorts the query results based on specified criteria.
24. **`Query.limit()`**: Limits the number of documents returned.
25. **`Query.skip()`**: Skips a specified number of documents in the result.

#### **Connection Methods**
26. **`mongoose.connect()`**: Establishes a connection to the MongoDB database.
27. **`mongoose.disconnect()`**: Closes the connection to the database.
28. **`mongoose.connection`**: Provides access to the current database connection instance.

---