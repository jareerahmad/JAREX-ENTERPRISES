import Message from "../models/Message.js";

// Create a new contact message
export const createMessage = async (req, res) => {
    try {
        const { name, email, subject, message } = req.body;

        if (!name || !email || !subject || !message) {
            return res.status(400).json({
                success: false,
                message: "Name, email, subject and message are required.",
            });
        }

        const newMessage = await Message.create({
            name,
            email,
            subject,
            message,
        });

        res.status(201).json({
            success: true,
            message: "Message sent successfully.",
            data: newMessage,
        });
    } catch (error) {
        console.error("Create message error:", error);

        res.status(500).json({
            success: false,
            message: "Server error while sending message.",
        });
    }
};

// Get all messages
export const getMessages = async (req, res) => {
    try {
        const messages = await Message.find().sort({
            createdAt: -1,
        });

        res.status(200).json({
            success: true,
            data: messages,
        });
    } catch (error) {
        console.error("Get messages error:", error);

        res.status(500).json({
            success: false,
            message: "Server error while fetching messages.",
        });
    }
};

// Get a single message
export const getMessageById = async (req, res) => {
    try {
        const message = await Message.findById(req.params.id);

        if (!message) {
            return res.status(404).json({
                success: false,
                message: "Message not found.",
            });
        }

        res.status(200).json({
            success: true,
            data: message,
        });
    } catch (error) {
        console.error("Get message error:", error);

        res.status(500).json({
            success: false,
            message: "Server error while fetching message.",
        });
    }
};

// Mark message as read/unread
export const updateMessageStatus = async (req, res) => {
    try {
        const { status } = req.body;

        if (!["read", "unread"].includes(status)) {
            return res.status(400).json({
                success: false,
                message: "Invalid message status.",
            });
        }

        const message = await Message.findByIdAndUpdate(
            req.params.id,
            { status },
            { new: true }
        );

        if (!message) {
            return res.status(404).json({
                success: false,
                message: "Message not found.",
            });
        }

        res.status(200).json({
            success: true,
            message: "Message status updated.",
            data: message,
        });
    } catch (error) {
        console.error("Update message status error:", error);

        res.status(500).json({
            success: false,
            message: "Server error while updating message.",
        });
    }
};

// Delete a message
export const deleteMessage = async (req, res) => {
    try {
        const message = await Message.findByIdAndDelete(req.params.id);

        if (!message) {
            return res.status(404).json({
                success: false,
                message: "Message not found.",
            });
        }

        res.status(200).json({
            success: true,
            message: "Message deleted successfully.",
        });
    } catch (error) {
        console.error("Delete message error:", error);

        res.status(500).json({
            success: false,
            message: "Server error while deleting message.",
        });
    }
};