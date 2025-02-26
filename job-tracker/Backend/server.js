import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js"; // ✅ Ensure correct path

// Load environment variables
dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();
app.use(cors());
app.use(express.json()); // ✅ Important for handling JSON requests

// ✅ Register authentication routes
app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
  res.send("Job Tracker API is running...");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
