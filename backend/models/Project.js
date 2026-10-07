import mongoose from "mongoose";

const projectSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            trim: true,
        },

        slug: {
            type: String,
            required: true,
            unique: true,
            trim: true,
            lowercase: true,
        },

        category: {
            type: String,
            required: true,
            trim: true,
        },

        year: {
            type: String,
            required: true,
        },

        description: {
            type: String,
            required: true,
            trim: true,
        },

        overview: {
            type: String,
            default: "",
            trim: true,
        },

        challenge: {
            type: String,
            default: "",
            trim: true,
        },

        solution: {
            type: String,
            default: "",
            trim: true,
        },

        technologies: {
            type: [String],
            default: [],
        },

        features: {
            type: [String],
            default: [],
        },

        image: {
            type: String,
            default: "",
        },

        liveUrl: {
            type: String,
            default: "",
        },

        githubUrl: {
            type: String,
            default: "",
        },

        featured: {
            type: Boolean,
            default: false,
        },

        published: {
            type: Boolean,
            default: true,
        },
    },
    {
        timestamps: true,
    }
);

const Project = mongoose.model("Project", projectSchema);

export default Project;