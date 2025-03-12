import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";

dotenv.config();  // Load environment variables from .env
connectDB();  // Connect to MongoDB Atlas

const app = express();

// Middleware
app.use(cors());  // Enable Cross-Origin Resource Sharing (CORS)
app.use(express.json());  // Parse incoming JSON request bodies

// Routes
app.use("/api/auth", authRoutes);  // Authentication routes

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));