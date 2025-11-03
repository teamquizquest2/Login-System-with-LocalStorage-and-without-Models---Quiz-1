// File: index.js
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import jwt from "jsonwebtoken";  // ✅ ADD THIS LINE
import UserModel from "./myschema/UserSchema.js";

const app = express();
const PORT = 5000;

// ✅ Secret key for JWT
const JWT_SECRET = "quizapp_secret_key"; // (You can move it to .env in real apps)

// ✅ Middlewares
app.use(cors());
app.use(express.json());

// ✅ MongoDB connection
mongoose.connect("mongodb://127.0.0.1:27017/quizapp", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("✅ MongoDB Connected"))
.catch(err => console.error("❌ DB Connection Error:", err));


// ✅ POST — Add User (Signup)
app.post("/user/add-user", async (req, res) => {
  try {
    const { name, email, fname, password, status } = req.body;

    // check existing email
    const existing = await UserModel.findOne({ email });
    if (existing) {
      return res.json({ success: false, message: "Email already registered" });
    }

    const newUser = new UserModel({ name, email, fname, password, status });
    await newUser.save();

    // ✅ Create JWT Token
    const token = jwt.sign(
      { id: newUser._id, email: newUser.email },
      JWT_SECRET,
      { expiresIn: "2h" }
    );

    res.json({
      success: true,
      message: "✅ User added successfully",
      user: newUser,
      token, // 🎟️ send token to frontend
    });
  } catch (err) {
    res.json({ success: false, message: err.message });
  }
});


// ✅ POST — Login User
app.post("/user/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await UserModel.findOne({ email });
    if (!user) {
      return res.json({ success: false, message: "User not found" });
    }

    if (user.password !== password) {
      return res.json({ success: false, message: "Incorrect password" });
    }

    // ✅ Create JWT Token
    const token = jwt.sign(
      { id: user._id, email: user.email },
      JWT_SECRET,
      { expiresIn: "2h" }
    );

    res.json({
      success: true,
      message: "✅ Login successful",
      user,
      token,
    });
  } catch (err) {
    res.json({ success: false, message: err.message });
  }
});


// ✅ GET — Get All Users
app.get("/user/all-user", async (req, res) => {
  try {
    const users = await UserModel.find();
    res.json({ success: true, getData: users });
  } catch (err) {
    res.json({ success: false, message: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
