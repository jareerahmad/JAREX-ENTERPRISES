import express from "express";

import {
    createProject,
    getProjects,
    getProjectBySlug,
    updateProject,
    deleteProject,
} from "../controllers/projectController.js";

import authMiddleware from "../middleware/authMiddleware.js";
import adminMiddleware from "../middleware/adminMiddleware.js";

const router = express.Router();


// Public routes
router.get("/", getProjects);
router.get("/:slug", getProjectBySlug);


// Admin routes
router.post(
    "/",
    authMiddleware,
    adminMiddleware,
    createProject
);

router.put(
    "/:id",
    authMiddleware,
    adminMiddleware,
    updateProject
);

router.delete(
    "/:id",
    authMiddleware,
    adminMiddleware,
    deleteProject
);


export default router;