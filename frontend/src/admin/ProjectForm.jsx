import { useState } from "react";
import { X, Plus, Trash2, Save } from "lucide-react";
import { useAuth } from "../context/AuthContext";

const API_URL = "http://localhost:5000/api";

const emptyForm = {
    title: "",
    slug: "",
    category: "",
    year: new Date().getFullYear().toString(),
    description: "",
    overview: "",
    challenge: "",
    solution: "",
    technologies: [""],
    features: [""],
    image: "",
    liveUrl: "",
    githubUrl: "",
    featured: false,
    published: true,
};

function ProjectForm({
    project = null,
    onClose,
    onCreated,
    onUpdated,
}) {
    const { token } = useAuth();

    const [form, setForm] = useState(
        project
            ? {
                title: project.title || "",
                slug: project.slug || "",
                category: project.category || "",
                year: project.year || "",
                description: project.description || "",
                overview: project.overview || "",
                challenge: project.challenge || "",
                solution: project.solution || "",
                technologies:
                    project.technologies?.length
                        ? project.technologies
                        : [""],
                features:
                    project.features?.length
                        ? project.features
                        : [""],
                image: project.image || "",
                liveUrl: project.liveUrl || "",
                githubUrl: project.githubUrl || "",
                featured: project.featured || false,
                published:
                    project.published !== undefined
                        ? project.published
                        : true,
            }
            : emptyForm
    );

    const [saving, setSaving] = useState(false);
    const [error, setError] = useState("");

    const isEditing = Boolean(project);

    const handleChange = (event) => {
        const { name, value, type, checked } = event.target;

        setForm((current) => ({
            ...current,
            [name]:
                type === "checkbox"
                    ? checked
                    : value,
        }));
    };

    const handleArrayChange = (
        field,
        index,
        value
    ) => {
        setForm((current) => ({
            ...current,
            [field]: current[field].map(
                (item, itemIndex) =>
                    itemIndex === index
                        ? value
                        : item
            ),
        }));
    };

    const addArrayItem = (field) => {
        setForm((current) => ({
            ...current,
            [field]: [
                ...current[field],
                "",
            ],
        }));
    };

    const removeArrayItem = (
        field,
        index
    ) => {
        setForm((current) => {
            if (current[field].length === 1) {
                return current;
            }

            return {
                ...current,
                [field]: current[field].filter(
                    (_, itemIndex) =>
                        itemIndex !== index
                ),
            };
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            setSaving(true);
            setError("");

            const payload = {
                ...form,

                technologies:
                    form.technologies.filter((item) =>
                        item.trim()
                    ),

                features:
                    form.features.filter((item) =>
                        item.trim()
                    ),
            };

            const url = isEditing
                ? `${API_URL}/projects/${project._id}`
                : `${API_URL}/projects`;

            const response = await fetch(url, {
                method: isEditing
                    ? "PUT"
                    : "POST",

                headers: {
                    "Content-Type":
                        "application/json",

                    Authorization: `Bearer ${token}`,
                },

                body: JSON.stringify(payload),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(
                    data.message ||
                    `Failed to ${isEditing
                        ? "update"
                        : "create"
                    } project.`
                );
            }

            if (isEditing) {
                onUpdated(data.project);
            } else {
                onCreated(data.project);
            }

            onClose();
        } catch (error) {
            setError(error.message);
        } finally {
            setSaving(false);
        }
    };

    return (
        <div className="fixed inset-0 z-[60] flex items-start justify-center overflow-y-auto bg-black/70 px-4 py-6 backdrop-blur-sm sm:py-10">
            <div className="w-full max-w-3xl rounded-2xl border border-[#1B2922] bg-[#0B100D] shadow-2xl">

                {/* Header */}
                <div className="flex items-center justify-between border-b border-[#1B2922] px-5 py-4 sm:px-6">
                    <div>
                        <p className="text-[10px] uppercase tracking-[0.18em] text-[#19C37D]">
                            Projects
                        </p>

                        <h2 className="mt-1 text-xl font-semibold text-[#F3F5F3]">
                            {isEditing
                                ? "Edit Project"
                                : "Add Project"}
                        </h2>
                    </div>

                    <button
                        type="button"
                        onClick={onClose}
                        className="flex h-9 w-9 items-center justify-center rounded-lg text-[#89938D] transition hover:bg-[#111813] hover:text-[#F3F5F3]"
                    >
                        <X size={19} />
                    </button>
                </div>

                <form onSubmit={handleSubmit}>
                    <div className="space-y-8 px-5 py-6 sm:px-6">

                        {/* Error */}
                        {error && (
                            <div className="rounded-lg border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-400">
                                {error}
                            </div>
                        )}

                        {/* Basic Information */}
                        <section>
                            <h3 className="mb-4 text-sm font-medium text-[#F3F5F3]">
                                Basic Information
                            </h3>

                            <div className="grid gap-4 sm:grid-cols-2">

                                <Input
                                    label="Project title"
                                    name="title"
                                    value={form.title}
                                    onChange={handleChange}
                                    placeholder="JAKMalls"
                                    required
                                />

                                <Input
                                    label="Slug"
                                    name="slug"
                                    value={form.slug}
                                    onChange={handleChange}
                                    placeholder="jakmalls"
                                    required
                                />

                                <Input
                                    label="Category"
                                    name="category"
                                    value={form.category}
                                    onChange={handleChange}
                                    placeholder="E-Commerce Platform"
                                    required
                                />

                                <Input
                                    label="Year"
                                    name="year"
                                    value={form.year}
                                    onChange={handleChange}
                                    placeholder="2026"
                                    required
                                />

                            </div>

                            <div className="mt-4">
                                <TextArea
                                    label="Short description"
                                    name="description"
                                    value={form.description}
                                    onChange={handleChange}
                                    placeholder="A short description of the project..."
                                    required
                                />
                            </div>
                        </section>

                        {/* Case Study */}
                        <section>
                            <h3 className="mb-4 text-sm font-medium text-[#F3F5F3]">
                                Case Study
                            </h3>

                            <div className="space-y-4">

                                <TextArea
                                    label="Overview"
                                    name="overview"
                                    value={form.overview}
                                    onChange={handleChange}
                                    placeholder="Explain what the project is..."
                                />

                                <TextArea
                                    label="Challenge"
                                    name="challenge"
                                    value={form.challenge}
                                    onChange={handleChange}
                                    placeholder="What problem or challenge did the project address?"
                                />

                                <TextArea
                                    label="Solution"
                                    name="solution"
                                    value={form.solution}
                                    onChange={handleChange}
                                    placeholder="How was the project built and what was the approach?"
                                />

                            </div>
                        </section>

                        {/* Technologies */}
                        <ArrayField
                            label="Technologies"
                            field="technologies"
                            items={form.technologies}
                            placeholder="React"
                            onChange={handleArrayChange}
                            onAdd={addArrayItem}
                            onRemove={removeArrayItem}
                        />

                        {/* Features */}
                        <ArrayField
                            label="Features"
                            field="features"
                            items={form.features}
                            placeholder="User authentication"
                            onChange={handleArrayChange}
                            onAdd={addArrayItem}
                            onRemove={removeArrayItem}
                        />

                        {/* Links */}
                        <section>
                            <h3 className="mb-4 text-sm font-medium text-[#F3F5F3]">
                                Links & Media
                            </h3>

                            <div className="space-y-4">

                                <Input
                                    label="Image URL"
                                    name="image"
                                    value={form.image}
                                    onChange={handleChange}
                                    placeholder="https://..."
                                />

                                <div className="grid gap-4 sm:grid-cols-2">

                                    <Input
                                        label="Live URL"
                                        name="liveUrl"
                                        value={form.liveUrl}
                                        onChange={handleChange}
                                        placeholder="https://..."
                                    />

                                    <Input
                                        label="GitHub URL"
                                        name="githubUrl"
                                        value={form.githubUrl}
                                        onChange={handleChange}
                                        placeholder="https://github.com/..."
                                    />

                                </div>
                            </div>
                        </section>

                        {/* Visibility */}
                        <section>
                            <h3 className="mb-4 text-sm font-medium text-[#F3F5F3]">
                                Visibility
                            </h3>

                            <div className="grid gap-3 sm:grid-cols-2">

                                <Checkbox
                                    name="featured"
                                    checked={form.featured}
                                    onChange={handleChange}
                                    title="Featured project"
                                    description="Highlight this project on the homepage."
                                />

                                <Checkbox
                                    name="published"
                                    checked={form.published}
                                    onChange={handleChange}
                                    title="Published"
                                    description="Make this project visible publicly."
                                />

                            </div>
                        </section>

                    </div>

                    {/* Footer */}
                    <div className="flex flex-col-reverse gap-3 border-t border-[#1B2922] px-5 py-4 sm:flex-row sm:justify-end sm:px-6">

                        <button
                            type="button"
                            onClick={onClose}
                            className="rounded-lg border border-[#1B2922] px-5 py-2.5 text-sm text-[#89938D] transition hover:bg-[#111813] hover:text-[#F3F5F3]"
                        >
                            Cancel
                        </button>

                        <button
                            type="submit"
                            disabled={saving}
                            className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#19C37D] px-5 py-2.5 text-sm font-medium text-[#050706] transition hover:bg-[#16ad6e] disabled:cursor-not-allowed disabled:opacity-60"
                        >
                            {isEditing ? (
                                <Save size={17} />
                            ) : (
                                <Plus size={17} />
                            )}

                            {saving
                                ? isEditing
                                    ? "Saving..."
                                    : "Creating..."
                                : isEditing
                                    ? "Save Changes"
                                    : "Create Project"}
                        </button>

                    </div>
                </form>
            </div>
        </div>
    );
}


/* ---------------- INPUT ---------------- */

function Input({
    label,
    name,
    value,
    onChange,
    placeholder,
    required = false,
}) {
    return (
        <label className="block">

            <span className="mb-2 block text-xs text-[#89938D]">
                {label}
            </span>

            <input
                type="text"
                name={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                required={required}
                className="w-full rounded-lg border border-[#1B2922] bg-[#050706] px-3.5 py-3 text-sm text-[#F3F5F3] outline-none transition placeholder:text-[#4f5a54] focus:border-[#19C37D]/50"
            />

        </label>
    );
}


/* ---------------- TEXTAREA ---------------- */

function TextArea({
    label,
    name,
    value,
    onChange,
    placeholder,
    required = false,
}) {
    return (
        <label className="block">

            <span className="mb-2 block text-xs text-[#89938D]">
                {label}
            </span>

            <textarea
                name={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                required={required}
                rows={4}
                className="w-full resize-y rounded-lg border border-[#1B2922] bg-[#050706] px-3.5 py-3 text-sm leading-6 text-[#F3F5F3] outline-none transition placeholder:text-[#4f5a54] focus:border-[#19C37D]/50"
            />

        </label>
    );
}


/* ---------------- ARRAY FIELD ---------------- */

function ArrayField({
    label,
    field,
    items,
    placeholder,
    onChange,
    onAdd,
    onRemove,
}) {
    return (
        <section>

            <div className="mb-4 flex items-center justify-between">

                <h3 className="text-sm font-medium text-[#F3F5F3]">
                    {label}
                </h3>

                <button
                    type="button"
                    onClick={() => onAdd(field)}
                    className="inline-flex items-center gap-1.5 text-xs text-[#19C37D] transition hover:text-[#F3F5F3]"
                >
                    <Plus size={15} />
                    Add
                </button>

            </div>

            <div className="space-y-2">

                {items.map((item, index) => (
                    <div
                        key={index}
                        className="flex gap-2"
                    >

                        <input
                            type="text"
                            value={item}
                            onChange={(event) =>
                                onChange(
                                    field,
                                    index,
                                    event.target.value
                                )
                            }
                            placeholder={placeholder}
                            className="min-w-0 flex-1 rounded-lg border border-[#1B2922] bg-[#050706] px-3.5 py-3 text-sm text-[#F3F5F3] outline-none transition placeholder:text-[#4f5a54] focus:border-[#19C37D]/50"
                        />

                        <button
                            type="button"
                            onClick={() =>
                                onRemove(field, index)
                            }
                            disabled={items.length === 1}
                            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-[#1B2922] text-[#89938D] transition hover:border-red-500/30 hover:text-red-400 disabled:cursor-not-allowed disabled:opacity-30"
                            aria-label={`Remove ${label} item`}
                        >
                            <Trash2 size={16} />
                        </button>

                    </div>
                ))}

            </div>
        </section>
    );
}


/* ---------------- CHECKBOX ---------------- */

function Checkbox({
    name,
    checked,
    onChange,
    title,
    description,
}) {
    return (
        <label className="flex cursor-pointer items-start gap-3 rounded-lg border border-[#1B2922] bg-[#050706] p-4">

            <input
                type="checkbox"
                name={name}
                checked={checked}
                onChange={onChange}
                className="mt-1 h-4 w-4 accent-[#19C37D]"
            />

            <span>

                <span className="block text-sm text-[#F3F5F3]">
                    {title}
                </span>

                <span className="mt-1 block text-xs leading-5 text-[#89938D]">
                    {description}
                </span>

            </span>

        </label>
    );
}

export default ProjectForm;