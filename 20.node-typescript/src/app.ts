import express, { Express, Request, Response, NextFunction } from "express";
import { IUser, UserModel } from "./models/UserModel";

const app: Express = express();
const PORT = 3000;

app.use(express.json());

interface CustomRequest extends Request {
  startTime?: number;
}

//middleware -> add startTime to req. {}
app.use((req: CustomRequest, res: Response, next: NextFunction) => {
  req.startTime = Date.now();
  next();
});

//routes
app.get("/", (req: Request, res: Response) => {
  res.send("Hello World, from TS with Express!");
});

interface User {
  name: string;
  email: string;
}
app.post("/user", (req: Request<{}, {}, User>, res: Response) => {
  const { name, email } = req.body;
  res.json({
    success: true,
    message: `User ${name} has been created with email ${email}✅`,
  });
});

//get single user by id
app.get("/users/:id", (req: Request<{ id: string }>, res: Response) => {
  const { id } = req.params;
  res.json({
    success: true,
    userId: id,
    message: `User with id: '${id}' has been retrieved✅`,
  });
});

//list of users
app.get("/users", async (req: Request<{ id: string }>, res: Response) => {
  //   const users = [
  //     { id: "1", name: "Alice", email: "alice@example.com" },
  //     { id: "2", name: "Bob", email: "bob@example.com" },
  //     { id: "3", name: "Charlie", email: "charlie@example.com" },
  //   ];
  try {
    // const users: IUser = await UserModel.find()
  } catch (err) {
    res
      .status(500)
      .json({ success: false, message: "Failed to retrieve users" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}🛜`);
});
