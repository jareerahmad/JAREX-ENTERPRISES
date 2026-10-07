
import { useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

import apiRequest from "../services/api";

function Projects() {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const data = await apiRequest("/projects");

                const featuredProjects = (data.projects || []).filter(
                    (project) =>
                        project.published !== false &&
                        project.featured === true
                );

                setProjects(featuredProjects);
            } catch (error) {
                console.error("Fetch projects error:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchProjects();
    }, []);

    return (
        <section
            id="work"
            className="relative overflow-hidden bg-[#080D0A] px-5 py-28 md:px-8 md:py-40 lg:px-10"
        >
            <div className="mx-auto max-w-[1500px]">

                {/* Section Header */}
                <div className="mb-20 flex items-start justify-between border-t border-white/[0.08] pt-5">
                    <div className="flex items-center gap-3">
                        <span className="h-px w-8 bg-[#19C37D]" />

                        <span className="text-xs uppercase tracking-[0.3em] text-[#19C37D]">
                            03 — Selected work
                        </span>
                    </div>

                    <span className="hidden text-xs uppercase tracking-[0.25em] text-[#4F5B54] md:block">
                        Projects / 2026
                    </span>
                </div>

                {/* Heading */}
                <div className="grid gap-10 lg:grid-cols-[1.5fr_0.7fr] lg:items-end">
                    <h2 className="max-w-5xl text-5xl font-medium leading-[0.9] tracking-[-0.06em] text-[#F3F5F3] md:text-7xl lg:text-[7rem]">
                        Work built
                        <br />
                        <span className="text-[#52615A]">with purpose.</span>
                    </h2>

                    <p className="max-w-sm text-sm leading-7 text-[#707C75] lg:pb-2">
                        A selection of digital products and platforms created through
                        different ideas, technologies and real-world requirements.
                    </p>
                </div>

                {/* Projects */}
                <div className="mt-28 space-y-24">

                    {projects.map((project) => (
                        <article
                            key={project.id}
                            className="group"
                        >

                            {/* Image */}
                            <Link
                                to={`/projects/${project.slug}`}
                                className="relative block overflow-hidden"
                            >
                                <div className="aspect-[16/8] overflow-hidden">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="h-full w-full object-cover grayscale-0 lg:grayscale-50 transition-transform duration-700 ease-out group-hover:scale-[1.035] group-hover:grayscale-0"
                                    />
                                </div>

                                <div className="absolute inset-0 bg-gradient-to-t from-[#050706]/80 via-transparent to-transparent opacity-70" />

                                <div className="absolute bottom-5 right-5 flex h-11 w-11 items-center justify-center rounded-full border border-white/[0.15] bg-[#050706]/70 text-[#F3F5F3] backdrop-blur-md transition-all duration-300 group-hover:border-[#19C37D] group-hover:bg-[#19C37D] group-hover:text-[#03110A] md:bottom-7 md:right-7">
                                    <ArrowUpRight size={19} strokeWidth={1.8} />
                                </div>
                            </Link>

                            {/* Project Information */}
                            <div className="grid gap-8 border-b border-white/[0.08] py-8 md:grid-cols-[1.1fr_1fr_0.65fr] md:gap-12 md:py-10">

                                {/* Title */}
                                <div>
                                    <p className="mb-3 text-xs uppercase tracking-[0.25em] text-[#19C37D]">
                                        {project.category}
                                    </p>

                                    <h3 className="text-4xl font-medium tracking-[-0.05em] text-[#E9EEE9] transition-colors duration-300 group-hover:text-[#19C37D] md:text-6xl">
                                        {project.title}
                                    </h3>
                                </div>

                                {/* Description */}
                                <div>
                                    <p className="max-w-lg text-sm leading-7 text-[#737F78]">
                                        {project.description}
                                    </p>
                                </div>

                                {/* Technologies */}
                                <div className="flex flex-wrap content-start gap-2 md:justify-end">
                                    {project.technologies.map((technology) => (
                                        <span
                                            key={technology}
                                            className="border border-white/[0.08] px-3 py-1.5 text-[10px] uppercase tracking-[0.15em] text-[#68746D] transition-colors duration-300 group-hover:border-white/[0.12]"
                                        >
                                            {technology}
                                        </span>
                                    ))}
                                </div>

                            </div>
                        </article>
                    ))}

                </div>

                {/* Bottom */}
                <div className="mt-24 flex flex-col gap-6 border-t border-white/[0.08] pt-7 md:flex-row md:items-center md:justify-between">
                    <Link
                        to="/projects"
                        className="group flex w-fit items-center gap-4 text-sm text-[#C4CEC7]"
                    >
                        <span className="transition-colors duration-300 group-hover:text-[#19C37D]">
                            View all projects
                        </span>

                        <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/[0.1] transition-all duration-300 group-hover:border-[#19C37D] group-hover:bg-[#19C37D] group-hover:text-[#03110A]">
                            <ArrowUpRight
                                size={16}
                                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                            />
                        </span>
                    </Link>

                    <span className="text-xs uppercase tracking-[0.2em] text-[#3F4B44]">
                        JAREX / Selected Work
                    </span>
                </div>

            </div>
        </section>
    );
}

export default Projects;