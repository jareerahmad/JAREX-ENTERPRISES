
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import Reveal from "../components/Reveal";

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
        <main className="min-h-screen bg-[#050706] pt-24 text-[#F3F5F3] md:pt-28">
            {/* Hero */}
            <section className="px-5 pb-16 pt-12 md:px-8 md:pb-24 md:pt-16 lg:px-10">
                <div className="mx-auto max-w-[1500px]">
                    <Reveal>
                        <div className="max-w-4xl">
                            <p className="mb-5 text-xs font-medium uppercase tracking-[0.3em] text-[#19C37D]">
                                Selected Work
                            </p>

                            <h1 className="text-5xl font-semibold leading-[0.95] tracking-[-0.055em] text-[#F3F5F3] sm:text-6xl md:text-7xl lg:text-[88px]">
                                Work that turns
                                <span className="block text-[#68746D]">
                                    ideas into products.
                                </span>
                            </h1>

                            <p className="mt-7 max-w-2xl text-base leading-7 text-[#89938D] md:text-lg md:leading-8">
                                A selection of digital products and platforms built with
                                practical technology, thoughtful interfaces and real-world
                                functionality.
                            </p>
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* Projects */}
            <section className="px-5 pb-24 md:px-8 md:pb-32 lg:px-10">
                <div className="mx-auto max-w-[1500px]">

                    {/* Loading */}
                    {loading ? (
                        <div className="border border-white/[0.08] bg-[#0B100D] px-6 py-16 text-center md:px-10">
                            <div className="mx-auto mb-4 h-6 w-6 animate-spin rounded-full border-2 border-[#1B2922] border-t-[#19C37D]" />

                            <p className="text-sm text-[#68746D]">
                                Loading projects...
                            </p>
                        </div>
                    ) : projects.length === 0 ? (
                        <div className="border border-white/[0.08] bg-[#0B100D] px-6 py-16 text-center md:px-10">
                            <p className="text-sm text-[#68746D]">
                                Projects are currently being prepared.
                            </p>
                        </div>
                    ) : (
                        <div className="space-y-10">
                            {projects.map((project, index) => (
                                <Reveal key={project.slug} delay={index * 0.08}>
                                    <article className="group overflow-hidden border border-white/[0.08] bg-[#0B100D] transition-all duration-500 hover:border-[#19C37D]/30">

                                        {/* Image */}
                                        <Link
                                            to={`/projects/${project.slug}`}
                                            className="relative block overflow-hidden"
                                        >
                                            <div className="aspect-[16/8] overflow-hidden">
                                                <img
                                                    src={project.image}
                                                    alt={project.title}
                                                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.035]"
                                                />
                                            </div>

                                            <div className="absolute inset-0 bg-gradient-to-t from-[#050706]/80 via-transparent to-transparent opacity-70" />

                                            <div className="absolute left-5 top-5 flex items-center gap-3 md:left-7 md:top-7">
                                                <span className="border border-white/[0.15] bg-[#050706]/70 px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.2em] text-[#DCE4DF] backdrop-blur-md">
                                                    {project.category}
                                                </span>

                                                <span className="border border-white/[0.15] bg-[#050706]/70 px-3 py-1.5 text-[10px] text-[#AAB5AE] backdrop-blur-md">
                                                    {project.year}
                                                </span>
                                            </div>

                                            <div className="absolute bottom-5 right-5 flex h-11 w-11 items-center justify-center rounded-full border border-white/[0.15] bg-[#050706]/70 text-[#F3F5F3] backdrop-blur-md transition-all duration-300 group-hover:border-[#19C37D] group-hover:bg-[#19C37D] group-hover:text-[#03110A] md:bottom-7 md:right-7">
                                                <ArrowUpRight size={19} strokeWidth={1.8} />
                                            </div>
                                        </Link>

                                        {/* Content */}
                                        <div className="grid gap-8 px-5 py-7 md:grid-cols-[1fr_auto] md:items-end md:px-8 md:py-9 lg:px-10">
                                            <div>
                                                <div className="mb-4 flex items-center gap-3">
                                                    <span className="text-xs font-medium tracking-[0.2em] text-[#19C37D]">
                                                        {String(index + 1).padStart(2, "0")}
                                                    </span>

                                                    <span className="h-px w-8 bg-[#1B2922]" />
                                                </div>

                                                <h2 className="text-3xl font-semibold tracking-[-0.04em] text-[#F3F5F3] md:text-4xl">
                                                    {project.title}
                                                </h2>

                                                <p className="mt-3 max-w-2xl text-sm leading-7 text-[#89938D] md:text-base">
                                                    {project.description}
                                                </p>

                                                {project.technologies?.length > 0 && (
                                                    <div className="mt-5 flex flex-wrap gap-2">
                                                        {project.technologies.map((technology) => (
                                                            <span
                                                                key={technology}
                                                                className="border border-white/[0.07] px-3 py-1.5 text-[11px] text-[#7E8983]"
                                                            >
                                                                {technology}
                                                            </span>
                                                        ))}
                                                    </div>
                                                )}
                                            </div>

                                            <div className="flex flex-wrap gap-3">
                                                <Link
                                                    to={`/projects/${project.slug}`}
                                                    className="group/link inline-flex items-center gap-2 border border-white/[0.1] px-5 py-3 text-sm font-medium text-[#C4CEC8] transition-all duration-300 hover:border-[#19C37D]/50 hover:text-[#19C37D]"
                                                >
                                                    <span>View case study</span>

                                                    <ArrowUpRight
                                                        size={16}
                                                        className="transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
                                                    />
                                                </Link>

                                                {project.liveUrl &&
                                                    project.liveUrl !== "#" && (
                                                        <a
                                                            href={project.liveUrl}
                                                            target="_blank"
                                                            rel="noreferrer"
                                                            className="group/link inline-flex items-center gap-2 border border-[#19C37D]/30 bg-[#19C37D]/10 px-5 py-3 text-sm font-medium text-[#C9F7E1] transition-all duration-300 hover:border-[#19C37D] hover:bg-[#19C37D] hover:text-[#03110A]"
                                                        >
                                                            <span>Visit website</span>

                                                            <ExternalLink
                                                                size={15}
                                                                className="transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
                                                            />
                                                        </a>
                                                    )}
                                            </div>
                                        </div>
                                    </article>
                                </Reveal>
                            ))}
                        </div>
                    )}
                </div>
            </section>
        </main>
    );
}

export default Projects;