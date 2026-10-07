import Project from "../models/Project.js";

// Create project
export const createProject = async (req, res) => {
    try {
        const {
            title,
            slug,
            category,
            year,
            description,
            overview,
            challenge,
            solution,
            technologies,
            features,
            image,
            liveUrl,
            githubUrl,
            featured,
            published,
        } = req.body;

        if (
            !title ||
            !slug ||
            !category ||
            !year ||
            !description
        ) {
            return res.status(400).json({
                success: false,
                message:
                    "Title, slug, category, year and description are required.",
            });
        }

        const existingProject = await Project.findOne({ slug });

        if (existingProject) {
            return res.status(409).json({
                success: false,
                message: "A project with this slug already exists.",
            });
        }

        const project = await Project.create({
            title,
            slug,
            category,
            year,
            description,
            overview,
            challenge,
            solution,
            technologies,
            features,
            image,
            liveUrl,
            githubUrl,
            featured,
            published,
        });

        res.status(201).json({
            success: true,
            message: "Project created successfully.",
            project,
        });
    } catch (error) {
        console.error("Create project error:", error);

        res.status(500).json({
            success: false,
            message: "Server error while creating project.",
        });
    }
};


// Get all projects
export const getProjects = async (req, res) => {
    try {
        const projects = await Project.find().sort({
            createdAt: -1,
        });

        res.status(200).json({
            success: true,
            count: projects.length,
            projects,
        });
    } catch (error) {
        console.error("Get projects error:", error);

        res.status(500).json({
            success: false,
            message: "Server error while fetching projects.",
        });
    }
};


// Get single project
export const getProjectBySlug = async (req, res) => {
    try {
        const project = await Project.findOne({
            slug: req.params.slug,
        });

        if (!project) {
            return res.status(404).json({
                success: false,
                message: "Project not found.",
            });
        }

        res.status(200).json({
            success: true,
            project,
        });
    } catch (error) {
        console.error("Get project error:", error);

        res.status(500).json({
            success: false,
            message: "Server error while fetching project.",
        });
    }
};


// Update project
export const updateProject = async (req, res) => {
    try {
        const project = await Project.findById(
            req.params.id
        );

        if (!project) {
            return res.status(404).json({
                success: false,
                message: "Project not found.",
            });
        }

        const {
            title,
            slug,
            category,
            year,
            description,
            overview,
            challenge,
            solution,
            technologies,
            features,
            image,
            liveUrl,
            githubUrl,
            featured,
            published,
        } = req.body;

        if (slug && slug !== project.slug) {
            const existingProject = await Project.findOne({
                slug,
                _id: { $ne: project._id },
            });

            if (existingProject) {
                return res.status(409).json({
                    success: false,
                    message:
                        "Another project already uses this slug.",
                });
            }
        }

        project.title = title ?? project.title;
        project.slug = slug ?? project.slug;
        project.category = category ?? project.category;
        project.year = year ?? project.year;
        project.description =
            description ?? project.description;
        project.overview = overview ?? project.overview;
        project.challenge = challenge ?? project.challenge;
        project.solution = solution ?? project.solution;
        project.technologies =
            technologies ?? project.technologies;
        project.features = features ?? project.features;
        project.image = image ?? project.image;
        project.liveUrl = liveUrl ?? project.liveUrl;
        project.githubUrl = githubUrl ?? project.githubUrl;
        project.featured =
            featured ?? project.featured;
        project.published =
            published ?? project.published;

        const updatedProject = await project.save();

        res.status(200).json({
            success: true,
            message: "Project updated successfully.",
            project: updatedProject,
        });
    } catch (error) {
        console.error("Update project error:", error);

        res.status(500).json({
            success: false,
            message: "Server error while updating project.",
        });
    }
};


// Delete project
export const deleteProject = async (req, res) => {
    try {
        const project = await Project.findById(
            req.params.id
        );

        if (!project) {
            return res.status(404).json({
                success: false,
                message: "Project not found.",
            });
        }

        await project.deleteOne();

        res.status(200).json({
            success: true,
            message: "Project deleted successfully.",
        });
    } catch (error) {
        console.error("Delete project error:", error);

        res.status(500).json({
            success: false,
            message: "Server error while deleting project.",
        });
    }
};