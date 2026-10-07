import express from "express";

import authMiddleware from "../middleware/authMiddleware.js";
import adminMiddleware from "../middleware/adminMiddleware.js";

const router = express.Router();

router.get(
    "/test",
    authMiddleware,
    adminMiddleware,
    (req, res) => {
        res.json({
            success: true,
            message: "Admin authentication is working.",
            user: {
                id: req.user._id,
                name: req.user.name,
                email: req.user.email,
                role: req.user.role,
            },
        });
    }
);

export default router;