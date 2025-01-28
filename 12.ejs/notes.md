A **template engine** is a tool used in web development to generate HTML dynamically. It allows developers to combine **static HTML templates** with **dynamic data** to produce final HTML pages that can be served to the client.

### **How a Template Engine Works**
1. **Static Template**:
   - Contains placeholders or tags for dynamic content.
   - Example (EJS Template):
     ```html
     <h1>Welcome, <%= username %>!</h1>
     ```

2. **Dynamic Data**:
   - The server passes data (e.g., from a database or API) to the template engine.
   - Example (Data Object):
     ```javascript
     { username: "Skyy" }
     ```

3. **Rendering Process**:
   - The template engine processes the template, replaces the placeholders with actual data, and generates a final HTML file.
   - Resulting HTML:
     ```html
     <h1>Welcome, Skyy!</h1>
     ```

4. **Output**:
   - The server sends the final HTML file to the client’s browser.

---

### **Why Use a Template Engine?**
1. **Dynamic Content**:
   - Generate HTML dynamically based on user data or backend logic.
   - Example: Display user-specific data like a profile or dashboard.

2. **Separation of Concerns**:
   - Keeps HTML templates separate from server-side logic, improving code organization and readability.

3. **Reusability**:
   - Use partials (reusable components like headers and footers) to avoid repetitive code.

4. **Easy Maintenance**:
   - Update templates in one place rather than editing multiple HTML files.

5. **Better SEO**:
   - Server-side rendering generates fully rendered HTML that search engines can crawl, unlike client-side rendering.

---

### **Examples of Template Engines**
1. **EJS (Embedded JavaScript)**:
   - Simple, minimal, and integrates well with Express.js.
   - Syntax: `<%= variable %>`, `<% logic %>`.

2. **Pug (formerly Jade)**:
   - Uses indentation-based syntax and eliminates the need for closing tags.
   - Example:
     ```pug
     h1 Welcome #{username}
     ```

3. **Handlebars**:
   - Focuses on logic-less templates with simple syntax.
   - Example:
     ```html
     <h1>Welcome, {{username}}</h1>
     ```

4. **Mustache**:
   - A logic-less template engine with minimal syntax.
   - Example:
     ```html
     <h1>Welcome, {{username}}</h1>
     ```

---

### **Template Engines in Modern Development**
- Template engines are often used for **server-side rendering (SSR)** in traditional web applications.
- In modern applications, they may complement client-side frameworks like **React** or **Vue** when SSR or static site generation (SSG) is required for SEO and performance.

---

### **When to Use a Template Engine**
1. **Server-Side Rendering**:
   - For applications where HTML needs to be fully rendered before being sent to the client.
   - Example: Blogs, e-commerce sites.

2. **Multi-Page Applications (MPAs)**:
   - For traditional web apps with multiple server-rendered pages.

3. **Email Templates**:
   - To generate dynamic email content based on user-specific data.

---

### **Conclusion**
A template engine acts as a bridge between static HTML and dynamic data, enabling developers to build dynamic, server-rendered web applications efficiently. It improves development workflows by simplifying the process of creating reusable, maintainable, and dynamic web pages.

EJS (Embedded JavaScript) is a simple templating engine used in Node.js and Express.js development to generate HTML dynamically on the server. It integrates seamlessly with Express.js and allows you to embed JavaScript code directly within HTML templates, making it easy to render dynamic content in your web applications.

---

### **Key Features of EJS**
1. **Dynamic Content Rendering**:
   - EJS lets you pass data from your server (in Node.js) to the view and render it as HTML dynamically.
   - This is useful for creating web pages that change based on user input or server-side logic.

2. **JavaScript Inside HTML**:
   - EJS allows you to use JavaScript logic (like loops, conditionals, and expressions) directly in your HTML templates.

3. **Seamless Integration**:
   - It integrates well with Express.js and can be easily set as the view engine for your application.

4. **Supports Partial Views**:
   - You can divide your views into reusable components (partials), such as headers, footers, and navigation bars.

5. **No Special Syntax**:
   - EJS uses plain JavaScript for templating, which makes it easy to learn if you are already familiar with JavaScript.

6. **Lightweight**:
   - EJS is fast, efficient, and minimal, making it ideal for server-side rendering.

---

### **How EJS Works**
1. **Templates**:
   - EJS templates are plain text files that include HTML and JavaScript.
   - The templates are processed on the server to generate final HTML, which is then sent to the browser.

2. **Data Binding**:
   - Data can be passed to the EJS template from the backend, and placeholders in the template are replaced with actual data.

3. **Control Structures**:
   - EJS supports control structures like `if` statements, `for` loops, and more, enabling dynamic logic in your templates.

---

### **Setting Up EJS with Express.js**
1. **Install EJS**:
   Run the following command in your Node.js project:
   ```bash
   npm install ejs
   ```

2. **Set EJS as the View Engine**:
   Configure Express to use EJS as the templating engine:
   ```javascript
   const express = require("express");
   const app = express();

   app.set("view engine", "ejs");
   ```

3. **Create EJS Templates**:
   - By default, EJS templates are stored in a `views` directory.
   - Create a file `index.ejs` in the `views` folder with the following content:
     ```html
     <!DOCTYPE html>
     <html>
     <head>
       <title>Welcome</title>
     </head>
     <body>
       <h1>Welcome, <%= name %>!</h1>
     </body>
     </html>
     ```

4. **Render EJS Templates**:
   Use the `res.render()` method in an Express route to render the EJS template:
   ```javascript
   app.get("/", (req, res) => {
     res.render("index", { name: "Skyy" });
   });
   ```

   - The `res.render()` method takes two arguments:
     1. The name of the EJS template file (without the `.ejs` extension).
     2. An object containing the data to pass to the template.

---

### **EJS Syntax**
1. **Outputting Variables**:
   - Use `<%= %>` to output variables or expressions:
     ```html
     <p>Hello, <%= name %>!</p>
     ```

2. **Escape HTML**:
   - EJS escapes special characters by default to prevent XSS attacks. Use `<%- %>` to include unescaped HTML.

3. **Control Structures**:
   - **Conditional Statements**:
     ```html
     <% if (isLoggedIn) { %>
       <p>Welcome back, <%= username %>!</p>
     <% } else { %>
       <p>Please log in.</p>
     <% } %>
     ```

   - **Loops**:
     ```html
     <ul>
       <% items.forEach(item => { %>
         <li><%= item %></li>
       <% }); %>
     </ul>
     ```

4. **Include Partials**:
   - Use `<%- include("partial_name") %>` to include reusable components:
     ```html
     <%- include("header") %>
     <h1>Page Content</h1>
     <%- include("footer") %>
     ```

---

### **Benefits of EJS**
1. **Simple to Learn**:
   - EJS has a very shallow learning curve and is beginner-friendly.

2. **Full Control of HTML**:
   - Developers can write complete HTML with embedded JavaScript for dynamic content.

3. **Reusability**:
   - Use partials to organize and reuse components like headers, footers, and navigation bars.

4. **Server-Side Rendering**:
   - EJS generates fully rendered HTML on the server, improving SEO and performance compared to client-side rendering.

---

### **Limitations of EJS**
1. **No Reactivity**:
   - Unlike client-side frameworks like React, EJS does not offer dynamic updates in the browser.

2. **Increased Server Load**:
   - Since rendering happens on the server, it can increase the server's workload, especially for complex applications.

3. **Tied to Server-Side Logic**:
   - EJS templates are dependent on the server, which might not be ideal for modern SPAs (Single Page Applications).

---

### **Conclusion**
EJS is a powerful templating engine in Node.js and Express.js development, ideal for server-rendered applications that require dynamic HTML generation. It’s especially useful for building traditional web applications where SEO and server-side rendering are important. However, for modern, interactive web apps, client-side frameworks like React or Vue.js might be more appropriate.