import express from "express";

import {
    createMessage,
    getMessages,
    getMessageById,
    updateMessageStatus,
    deleteMessage,
} from "../controllers/messageController.js";

import authMiddleware from "../middleware/authMiddleware.js";
import adminMiddleware from "../middleware/adminMiddleware.js";

const router = express.Router();

// Public — anyone can send a message
router.post("/", createMessage);

// Admin only — view all messages
router.get(
    "/",
    authMiddleware,
    adminMiddleware,
    getMessages
);

// Admin only — view one message
router.get(
    "/:id",
    authMiddleware,
    adminMiddleware,
    getMessageById
);

// Admin only — mark read/unread
router.patch(
    "/:id/status",
    authMiddleware,
    adminMiddleware,
    updateMessageStatus
);

// Admin only — delete message
router.delete(
    "/:id",
    authMiddleware,
    adminMiddleware,
    deleteMessage
);

export default router;