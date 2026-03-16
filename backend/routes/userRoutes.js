const express = require("express");
const {
    uploadProfile, 
    deleteResume, 
    getPublicProfile
} = require("../controllers/userController");

const { protect } = require("../middlewares/authMiddleware");

const router = express.Router();

// protected route 
router.put("/profile", protect, uploadProfile);
router.post("/resume", protect, deleteResume);

// public route 
router.get("/:id", getPublicProfile);

module.exports = router;