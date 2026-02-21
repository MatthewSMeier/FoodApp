import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    firstName: { type: String },
    lastName: { type: String },

    email: { type: String, required: true, unique: true },
    password: { type: String },

    address: { type: String },

    image: { type: String },
    provider: { type: String, default: "credentials" },
  },
  { timestamps: true }
);

export default mongoose.models.User ||
  mongoose.model("User", UserSchema);