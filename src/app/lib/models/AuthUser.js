import mongoose from "mongoose";

const AuthUserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  phone: { type: String, required: true }
});

export default mongoose.models.AuthUser || mongoose.model("AuthUser", AuthUserSchema);
