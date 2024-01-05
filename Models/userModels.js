
import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  Date: { type: Date, default: Date.now },
  email: { type: String, required: true, unique: true },
  fullNames: String,
  password: { type: String, required: true },
  phoneNumber: String,
  location: String,
  role: { type: String, default: "user" },
});
export const User = mongoose.model("User", userSchema);


// email, fullNames, password, phoneNumber, location, role