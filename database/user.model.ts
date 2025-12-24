import { model, models, Schema, Document } from "mongoose";

export interface IUser {
  name: string;
  username: string;
  email: string;
  bio?: string;
  image: string;
  location?: string;
  portfolio?: string;
  reputation: number;
}

export interface IUserDoc extends IUser, Document {}

const UserSchema = new Schema<IUserDoc>(
  {
    name: { type: String, required: true },
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    bio: String,
    image: { type: String, required: true },
    location: String,
    portfolio: String,
    reputation: { type: Number, default: 0 },
  },
  { timestamps: true }
);

const User = models.User || model<IUserDoc>("User", UserSchema);

export default User;
