import express from "express";
import { registerUser, loginUser, getUserProfile } from "../controllers/authController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

// User Registration Route
router.post("/signup", registerUser);

// User Login Route
router.post("/login", loginUser);

// Get User Profile (Protected)
router.get("/profile", protect, getUserProfile);

export default router;