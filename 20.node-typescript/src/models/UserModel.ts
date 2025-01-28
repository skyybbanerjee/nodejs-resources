import mongoose, { Document } from "mongoose";

interface IUser extends Document {
  name: string;
  email: string;
  age: number;
  createdAt: Date;
}

const UserSchema = new mongoose.Schema<IUser>({
  name: String,
  email: String,
  age: Number,
  createdAt: Date,
});

const UserModel = mongoose.model<IUser>("User", UserSchema);

export { UserModel, IUser };
