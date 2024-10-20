import mongoose, { model, Schema } from "mongoose";

const UserSchema = new Schema({
  FirstName: {
    type: String,
  },
  SecondName: {
    type: String,
  },
  Phone: {
    type: Number,
  },
  Email: {
    type: String,
  },
});

const User = model("User", UserSchema);
export default User;
