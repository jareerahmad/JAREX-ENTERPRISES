import { useEffect, useState } from "react";
import {
    Plus,
    FolderKanban,
    ExternalLink,
    Pencil,
    Trash2,
    X,
} from "lucide-react";

import { useAuth } from "../context/AuthContext";
import ProjectForm from "./ProjectForm";

const API_URL = import.meta.env.VITE_API_URL;

function AdminProjects() {
    const { token } = useAuth();

    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [showForm, setShowForm] = useState(false);
    const [editingProject, setEditingProject] = useState(null);
    const [deletingProject, setDeletingProject] = useState(null);
    const [deleting, setDeleting] = useState(false);

    const fetchProjects = async () => {
        try {
            setLoading(true);
            setError("");

            const response = await fetch(`${API_URL}/projects`);

            const data = await response.json();

            if (!response.ok) {
                throw new Error(
                    data.message || "Failed to fetch projects."
                );
            }

            setProjects(data.projects || []);
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchProjects();
    }, []);

    const handleDelete = async () => {
        if (!deletingProject) return;

        try {
            setDeleting(true);
            setError("");

            const response = await fetch(
                `${API_URL}/projects/${deletingProject._id}`,
                {
                    method: "DELETE",
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            const data = await response.json();

            if (!response.ok) {
                throw new Error(
                    data.message || "Failed to delete project."
                );
            }

            setProjects((current) =>
                current.filter(
                    (project) =>
                        project._id !== deletingProject._id
                )
            );

            setDeletingProject(null);
        } catch (error) {
            setError(error.message);
        } finally {
            setDeleting(false);
        }
    };

    return (
        <div className="min-h-screen px-5 py-7 sm:px-8 lg:px-10">
            {/* Header */}
            <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                <div>
                    <p className="mb-2 text-sm font-medium uppercase tracking-[0.18em] text-[#19C37D]">
                        Content
                    </p>

                    <h1 className="text-3xl font-semibold tracking-tight text-[#F3F5F3]">
                        Projects
                    </h1>

                    <p className="mt-2 text-sm text-[#89938D]">
                        Manage the projects displayed across the JAREX website.
                    </p>
                </div>

                <button
                    type="button"
                    onClick={() => setShowForm(true)}
                    className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#19C37D] px-4 py-3 text-sm font-medium text-[#050706] transition hover:bg-[#16ad6e]"
                >
                    <Plus size={18} />
                    Add Project
                </button>
            </div>

            {/* Error */}
            {error && (
                <div className="mb-6 rounded-lg border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-400">
                    {error}
                </div>
            )}

            {/* Loading */}
            {loading ? (
                <div className="rounded-xl border border-[#1B2922] bg-[#0B100D] p-10 text-center">
                    <p className="text-sm text-[#89938D]">
                        Loading projects...
                    </p>
                </div>
            ) : projects.length === 0 ? (
                <div className="rounded-xl border border-[#1B2922] bg-[#0B100D] p-12 text-center">
                    <FolderKanban
                        size={32}
                        strokeWidth={1.5}
                        className="mx-auto mb-4 text-[#19C37D]"
                    />

                    <h2 className="text-lg font-medium text-[#F3F5F3]">
                        No projects yet
                    </h2>

                    <p className="mt-2 text-sm text-[#89938D]">
                        Add your first project to the JAREX portfolio.
                    </p>
                </div>
            ) : (
                <div className="space-y-4">
                    {projects.map((project) => (
                        <div
                            key={project._id}
                            className="rounded-xl border border-[#1B2922] bg-[#0B100D] p-5 transition-colors hover:border-[#19C37D]/30"
                        >
                            <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
                                <div className="flex min-w-0 items-start gap-4">
                                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#19C37D]/10 text-[#19C37D]">
                                        <FolderKanban
                                            size={20}
                                            strokeWidth={1.7}
                                        />
                                    </div>

                                    <div className="min-w-0">
                                        <div className="flex flex-wrap items-center gap-2">
                                            <h2 className="text-base font-medium text-[#F3F5F3]">
                                                {project.title}
                                            </h2>

                                            {project.featured && (
                                                <span className="rounded-full bg-[#19C37D]/10 px-2 py-1 text-[10px] uppercase tracking-wider text-[#19C37D]">
                                                    Featured
                                                </span>
                                            )}

                                            {!project.published && (
                                                <span className="rounded-full bg-yellow-500/10 px-2 py-1 text-[10px] uppercase tracking-wider text-yellow-400">
                                                    Draft
                                                </span>
                                            )}
                                        </div>

                                        <p className="mt-1 text-sm text-[#89938D]">
                                            {project.category} · {project.year}
                                        </p>

                                        <p className="mt-3 max-w-2xl text-sm leading-6 text-[#89938D]">
                                            {project.description}
                                        </p>
                                    </div>
                                </div>

                                <div className="flex flex-wrap items-center gap-3">

                                    <button
                                        type="button"
                                        onClick={() => setEditingProject(project)}
                                        className="inline-flex items-center gap-2 rounded-lg border border-[#1B2922] px-3.5 py-2 text-sm text-[#89938D] transition hover:border-[#19C37D]/30 hover:bg-[#111813] hover:text-[#19C37D]"
                                    >
                                        <Pencil size={15} />
                                        Edit
                                    </button>

                                    <button
                                        type="button"
                                        onClick={() => setDeletingProject(project)}
                                        className="inline-flex items-center gap-2 rounded-lg border border-red-500/20 px-3.5 py-2 text-sm text-red-400 transition hover:bg-red-500/10"
                                    >
                                        <Trash2 size={15} />
                                        Delete
                                    </button>

                                    {project.liveUrl && (
                                        <a
                                            href={project.liveUrl}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="inline-flex items-center gap-2 text-sm text-[#19C37D] transition hover:text-[#F3F5F3]"
                                        >
                                            View Live
                                            <ExternalLink size={15} />
                                        </a>
                                    )}

                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {showForm && (
                <ProjectForm
                    onClose={() => setShowForm(false)}
                    onCreated={(newProject) => {
                        setProjects((current) => [
                            newProject,
                            ...current,
                        ]);
                    }}
                />
            )}

            {editingProject && (
                <ProjectForm
                    project={editingProject}
                    onClose={() => setEditingProject(null)}
                    onUpdated={(updatedProject) => {
                        setProjects((current) =>
                            current.map((project) =>
                                project._id === updatedProject._id
                                    ? updatedProject
                                    : project
                            )
                        );
                    }}
                />
            )}

            {deletingProject && (
                <div className="fixed inset-0 z-[70] flex items-center justify-center bg-black/70 px-4 backdrop-blur-sm">
                    <div className="w-full max-w-md rounded-2xl border border-[#1B2922] bg-[#0B100D] shadow-2xl">

                        <div className="flex items-center justify-between border-b border-[#1B2922] px-5 py-4">
                            <div>
                                <p className="text-[10px] uppercase tracking-[0.18em] text-red-400">
                                    Delete Project
                                </p>

                                <h2 className="mt-1 text-lg font-semibold text-[#F3F5F3]">
                                    Remove this project?
                                </h2>
                            </div>

                            <button
                                type="button"
                                onClick={() => setDeletingProject(null)}
                                disabled={deleting}
                                className="flex h-9 w-9 items-center justify-center rounded-lg text-[#89938D] transition hover:bg-[#111813] hover:text-[#F3F5F3]"
                            >
                                <X size={19} />
                            </button>
                        </div>

                        <div className="px-5 py-5">
                            <p className="text-sm leading-6 text-[#89938D]">
                                You are about to permanently delete{" "}
                                <span className="font-medium text-[#F3F5F3]">
                                    {deletingProject.title}
                                </span>
                                . This action cannot be undone.
                            </p>
                        </div>

                        <div className="flex flex-col-reverse gap-3 border-t border-[#1B2922] px-5 py-4 sm:flex-row sm:justify-end">

                            <button
                                type="button"
                                onClick={() => setDeletingProject(null)}
                                disabled={deleting}
                                className="rounded-lg border border-[#1B2922] px-5 py-2.5 text-sm text-[#89938D] transition hover:bg-[#111813] hover:text-[#F3F5F3] disabled:opacity-50"
                            >
                                Cancel
                            </button>

                            <button
                                type="button"
                                onClick={handleDelete}
                                disabled={deleting}
                                className="inline-flex items-center justify-center gap-2 rounded-lg bg-red-500 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-red-600 disabled:cursor-not-allowed disabled:opacity-60"
                            >
                                <Trash2 size={16} />

                                {deleting
                                    ? "Deleting..."
                                    : "Delete Project"}
                            </button>

                        </div>
                    </div>
                </div>
            )}

        </div>
    );
}

export default AdminProjects;