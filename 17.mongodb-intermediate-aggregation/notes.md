MongoDB aggregation is a powerful framework for processing and transforming data stored in MongoDB collections. It allows developers to perform advanced data analysis and transformation by processing data through a series of stages, known as an **aggregation pipeline**. Each stage in the pipeline applies a specific operation to the data, and the output of one stage becomes the input for the next.

### **Key Features of MongoDB Aggregation**
1. **Pipeline-Based Processing**: Data is processed step-by-step in a pipeline, where each stage performs a transformation or operation.
2. **Data Aggregation and Computation**: Perform calculations, create summaries, group data, and more.
3. **Flexible Querying**: Filter, sort, and reshape data to meet specific requirements.
4. **Efficient**: Aggregation operations are optimized and often performed on the MongoDB server.

---

### **Aggregation Pipeline**
The aggregation pipeline is the core concept. It consists of multiple stages, each represented by a document containing an operation (e.g., `$match`, `$group`, `$sort`). The stages are processed in sequence.

#### Example Pipeline
```javascript
db.collection.aggregate([
  { $match: { status: "active" } },  // Stage 1: Filter documents
  { $group: { _id: "$category", total: { $sum: "$price" } } },  // Stage 2: Group by category and sum prices
  { $sort: { total: -1 } }  // Stage 3: Sort by total in descending order
]);
```

---

### **Aggregation Stages**
Below are some of the commonly used stages:

1. **`$match`**: Filters documents based on a condition (similar to the `find` query).
   - Example:
     ```javascript
     { $match: { status: "active" } }
     ```

2. **`$group`**: Groups documents by a specified field and performs aggregations like `sum`, `avg`, `min`, `max`, etc.
   - Example:
     ```javascript
     { $group: { _id: "$category", total: { $sum: "$price" } } }
     ```

3. **`$project`**: Reshapes documents by including or excluding specific fields and can compute new fields.
   - Example:
     ```javascript
     { $project: { name: 1, price: 1, discountedPrice: { $multiply: ["$price", 0.9] } } }
     ```

4. **`$sort`**: Sorts documents by a specified field in ascending or descending order.
   - Example:
     ```javascript
     { $sort: { total: -1 } }
     ```

5. **`$limit` and `$skip`**: Limits or skips a specified number of documents.
   - Example:
     ```javascript
     { $limit: 5 }
     { $skip: 10 }
     ```

6. **`$unwind`**: Deconstructs an array field into separate documents (one for each element in the array).
   - Example:
     ```javascript
     { $unwind: "$items" }
     ```

7. **`$lookup`**: Performs a left outer join with another collection.
   - Example:
     ```javascript
     { 
       $lookup: {
         from: "orders",
         localField: "customerId",
         foreignField: "_id",
         as: "orderDetails"
       }
     }
     ```

8. **`$addFields`**: Adds new fields or modifies existing ones.
   - Example:
     ```javascript
     { $addFields: { discountedPrice: { $multiply: ["$price", 0.9] } } }
     ```

9. **`$count`**: Counts the number of documents.
   - Example:
     ```javascript
     { $count: "totalCount" }
     ```

---

### **Example Use Cases**
1. **Summarizing Data**:
   - Count the total sales grouped by product categories.
   - Example:
     ```javascript
     db.sales.aggregate([
       { $group: { _id: "$category", totalSales: { $sum: "$amount" } } }
     ]);
     ```

2. **Filtering and Sorting**:
   - Retrieve the top 5 highest-priced items in a specific category.
   - Example:
     ```javascript
     db.products.aggregate([
       { $match: { category: "electronics" } },
       { $sort: { price: -1 } },
       { $limit: 5 }
     ]);
     ```

3. **Data Transformation**:
   - Add a new field showing a discounted price for items.
   - Example:
     ```javascript
     db.items.aggregate([
       { $project: { name: 1, originalPrice: "$price", discountedPrice: { $multiply: ["$price", 0.8] } } }
     ]);
     ```

4. **Joining Collections**:
   - Combine customer and order data using `$lookup`.
   - Example:
     ```javascript
     db.customers.aggregate([
       { 
         $lookup: {
           from: "orders",
           localField: "_id",
           foreignField: "customerId",
           as: "orders"
         }
       }
     ]);
     ```

---

### **Advantages of MongoDB Aggregation**
1. **Server-Side Processing**:
   - The operations are performed directly on the database server, reducing network overhead.

2. **Scalability**:
   - Efficient for large datasets due to MongoDB's ability to process data in batches.

3. **Flexibility**:
   - Support for complex queries, joins, and transformations.

4. **Ease of Use**:
   - The pipeline approach is intuitive and modular.

---

### **When to Use Aggregation**
- Generating reports (e.g., total revenue, user activity).
- Transforming data before sending it to the frontend.
- Joining collections to combine related data.
- Performing complex calculations or filtering.

---

MongoDB’s aggregation framework processes data through a pipeline of stages, transforming documents as they pass through. Each stage applies an operation, which can filter, group, sort, project, or modify data.

Below is a detailed explanation of **all the aggregate operators** grouped by their functionality:

---

### **1. `$match`**
Filters documents to include only those that meet specific criteria, similar to the `find` method.

**Usage:**
```javascript
db.collection.aggregate([
  { $match: { status: "active", age: { $gte: 18 } } }
]);
```
- Filters documents where `status` is `"active"` and `age` is at least 18.

---

### **2. `$group`**
Groups documents by a specific field and performs aggregate computations on grouped data.

**Usage:**
```javascript
db.collection.aggregate([
  { $group: { _id: "$category", totalSales: { $sum: "$price" } } }
]);
```
- Groups documents by `category` and calculates the total sales for each category.

---

### **3. `$project`**
Shapes the output documents by specifying the fields to include, exclude, or compute.

**Usage:**
```javascript
db.collection.aggregate([
  { $project: { name: 1, totalPrice: { $multiply: ["$price", "$quantity"] } } }
]);
```
- Includes `name` and computes a new field `totalPrice`.

---

### **4. `$sort`**
Sorts documents by a specified field in ascending (`1`) or descending (`-1`) order.

**Usage:**
```javascript
db.collection.aggregate([
  { $sort: { createdAt: -1 } }
]);
```
- Sorts documents by `createdAt` in descending order.

---

### **5. `$limit`**
Limits the number of documents passed to the next stage.

**Usage:**
```javascript
db.collection.aggregate([
  { $limit: 5 }
]);
```
- Passes only the first 5 documents to the next stage.

---

### **6. `$skip`**
Skips a specified number of documents before passing the rest.

**Usage:**
```javascript
db.collection.aggregate([
  { $skip: 10 }
]);
```
- Skips the first 10 documents.

---

### **7. `$lookup`**
Performs a left outer join to another collection.

**Usage:**
```javascript
db.orders.aggregate([
  {
    $lookup: {
      from: "customers",
      localField: "customerId",
      foreignField: "_id",
      as: "customerDetails"
    }
  }
]);
```
- Joins the `orders` collection with the `customers` collection on the `customerId` field.

---

### **8. `$unwind`**
Deconstructs an array field into multiple documents, one for each array element.

**Usage:**
```javascript
db.collection.aggregate([
  { $unwind: "$tags" }
]);
```
- For each document with a `tags` array, creates separate documents for each tag.

---

### **9. `$addFields`**
Adds or modifies fields in documents.

**Usage:**
```javascript
db.collection.aggregate([
  { $addFields: { totalCost: { $multiply: ["$price", "$quantity"] } } }
]);
```
- Adds a new field `totalCost`.

---

### **10. `$count`**
Counts the number of documents passing through the pipeline.

**Usage:**
```javascript
db.collection.aggregate([
  { $match: { inStock: true } },
  { $count: "inStockItems" }
]);
```
- Counts documents where `inStock` is `true`.

---

### **11. `$facet`**
Runs multiple aggregation pipelines in parallel and outputs their results in a single document.

**Usage:**
```javascript
db.collection.aggregate([
  {
    $facet: {
      priceStats: [{ $group: { _id: null, avgPrice: { $avg: "$price" } } }],
      categoryCount: [{ $group: { _id: "$category", count: { $sum: 1 } } }]
    }
  }
]);
```
- Computes average price and counts products by category.

---

### **12. `$bucket`**
Groups documents into specified ranges.

**Usage:**
```javascript
db.collection.aggregate([
  {
    $bucket: {
      groupBy: "$price",
      boundaries: [0, 50, 100, 200],
      default: "Other",
      output: { count: { $sum: 1 } }
    }
  }
]);
```
- Groups documents into price ranges.

---

### **13. `$bucketAuto`**
Automatically creates evenly distributed buckets based on a specified number.

**Usage:**
```javascript
db.collection.aggregate([
  { $bucketAuto: { groupBy: "$price", buckets: 3 } }
]);
```
- Divides documents into 3 buckets based on `price`.

---

### **14. `$replaceRoot`**
Replaces the root document with a specified sub-document.

**Usage:**
```javascript
db.collection.aggregate([
  { $replaceRoot: { newRoot: "$details" } }
]);
```
- Replaces the root document with the `details` field.

---

### **15. `$merge`**
Writes the output of an aggregation pipeline to another collection.

**Usage:**
```javascript
db.collection.aggregate([
  { $match: { inStock: true } },
  { $merge: { into: "inStockProducts" } }
]);
```
- Writes in-stock products to the `inStockProducts` collection.

---

### **16. `$out`**
Writes the output of the aggregation to a specified collection, overwriting it.

**Usage:**
```javascript
db.collection.aggregate([
  { $match: { category: "Electronics" } },
  { $out: "electronicsCollection" }
]);
```
- Saves filtered documents to a new collection.

---

### **17. `$sample`**
Randomly selects a specified number of documents.

**Usage:**
```javascript
db.collection.aggregate([
  { $sample: { size: 5 } }
]);
```
- Selects 5 random documents.

---

### **18. `$text`**
Performs text search (requires a text index).

**Usage:**
```javascript
db.collection.aggregate([
  { $match: { $text: { $search: "electronics" } } }
]);
```
- Searches for documents containing the term "electronics."

---

### **19. `$sortByCount`**
Counts and sorts documents by their frequency.

**Usage:**
```javascript
db.collection.aggregate([
  { $unwind: "$tags" },
  { $sortByCount: "$tags" }
]);
```
- Counts occurrences of each `tag` and sorts them in descending order.

---

### **20. `$addToSet`**
Accumulates unique values into an array.

**Usage:**
```javascript
db.collection.aggregate([
  { $group: { _id: "$category", uniqueTags: { $addToSet: "$tags" } } }
]);
```
- Groups by `category` and collects unique `tags`.

---

These operators enable powerful data transformation, filtering, and aggregation capabilities in MongoDB. They can be combined to build complex pipelines tailored to specific application requirements.

