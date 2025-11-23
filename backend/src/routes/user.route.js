import express from "express";
import { followUser, getCurrentUser, getUserProfile, syncUser, updateProfile } from "../controllers/user.controller.js";
import { protectRoute } from "../middleware/auth.middleware.js";
const router = express.Router();

//Get Your Profile
router.get("/profile/:username",getUserProfile)
//update Your Profile => auth is an obligation
router.put("/profile/",protectRoute, updateProfile)
router.post("/sync",protectRoute,syncUser)
router.post("/me",protectRoute,getCurrentUser)
router.post("follow/:targetUserId",protectRoute,followUser)

export default router;