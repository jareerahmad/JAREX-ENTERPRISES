
import { useEffect, useState } from "react";
import {
    ArrowLeft,
    ArrowUpRight,
    Check,
    ExternalLink,
} from "lucide-react";
import { Link, useParams } from "react-router-dom";

import Reveal from "../components/Reveal";

import apiRequest from "../services/api";

function ProjectDetails() {
    const { slug } = useParams();

    const [project, setProject] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProject = async () => {
            try {
                const data = await apiRequest(`/projects/${slug}`);

                setProject(data.project);
            } catch (error) {
                console.error("Fetch project error:", error);
                setProject(null);
            } finally {
                setLoading(false);
            }
        };

        fetchProject();
    }, [slug]);


    if (loading) {
        return (
            <main className="flex min-h-screen items-center justify-center bg-[#050706] px-5 pt-24 text-[#F3F5F3]">
                <p className="text-xs font-medium uppercase tracking-[0.3em] text-[#19C37D]">
                    Loading project...
                </p>
            </main>
        );
    }

    if (!project) {
        return (
            <main className="flex min-h-screen items-center justify-center bg-[#050706] px-5 pt-24 text-[#F3F5F3]">
                <div className="text-center">
                    <p className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-[#19C37D]">
                        Project not found
                    </p>

                    <h1 className="text-4xl font-semibold tracking-[-0.04em] md:text-5xl">
                        This project doesn't exist.
                    </h1>

                    <Link
                        to="/projects"
                        className="mt-8 inline-flex items-center gap-2 border border-white/[0.1] px-5 py-3 text-sm text-[#AAB5AE] transition-all duration-300 hover:border-[#19C37D]/50 hover:text-[#19C37D]"
                    >
                        <ArrowLeft size={16} />
                        Back to work
                    </Link>
                </div>
            </main>
        );
    }

    return (
        <main className="min-h-screen bg-[#050706] pt-24 text-[#F3F5F3] md:pt-28">

            {/* Hero */}
            <section className="px-5 pb-16 pt-12 md:px-8 md:pb-20 md:pt-16 lg:px-10">
                <div className="mx-auto max-w-[1500px]">
                    <Reveal>
                        <div className="grid gap-10 lg:grid-cols-[1fr_0.42fr] lg:items-end">

                            <div>
                                <Link
                                    to="/projects"
                                    className="mb-8 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-[#68746D] transition-colors duration-300 hover:text-[#19C37D]"
                                >
                                    <ArrowLeft size={14} />
                                    All work
                                </Link>

                                <div className="mb-5 flex items-center gap-3">
                                    <span className="h-1.5 w-1.5 rounded-full bg-[#19C37D] shadow-[0_0_12px_rgba(25,195,125,0.8)]" />

                                    <span className="text-xs font-medium uppercase tracking-[0.3em] text-[#19C37D]">
                                        {project.category}
                                    </span>
                                </div>

                                <h1 className="max-w-5xl text-6xl font-semibold leading-[0.9] tracking-[-0.06em] sm:text-7xl md:text-8xl lg:text-[110px]">
                                    {project.title}
                                </h1>

                                <p className="mt-7 max-w-2xl text-base leading-7 text-[#89938D] md:text-lg md:leading-8">
                                    {project.description}
                                </p>
                            </div>

                            <div className="lg:pb-2">
                                <div className="grid grid-cols-2 border-y border-white/[0.08] py-5">
                                    <div>
                                        <p className="text-[10px] uppercase tracking-[0.25em] text-[#4F5B54]">
                                            Year
                                        </p>

                                        <p className="mt-2 text-sm text-[#C2CBC5]">
                                            {project.year}
                                        </p>
                                    </div>

                                    <div>
                                        <p className="text-[10px] uppercase tracking-[0.25em] text-[#4F5B54]">
                                            Type
                                        </p>

                                        <p className="mt-2 text-sm text-[#C2CBC5]">
                                            Full-stack
                                        </p>
                                    </div>
                                </div>

                                {project.liveUrl && project.liveUrl !== "#" && (
                                    <a
                                        href={project.liveUrl}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="group mt-5 inline-flex w-full items-center justify-between border border-[#19C37D]/30 bg-[#19C37D]/10 px-5 py-4 text-sm font-medium text-[#C9F7E1] transition-all duration-300 hover:border-[#19C37D] hover:bg-[#19C37D] hover:text-[#03110A]"
                                    >
                                        <span>Visit live website</span>

                                        <ExternalLink
                                            size={17}
                                            className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                                        />
                                    </a>
                                )}
                            </div>

                        </div>
                    </Reveal>
                </div>
            </section>

            {/* Project image */}
            <section className="px-5 md:px-8 lg:px-10">
                <Reveal>
                    <div className="group relative mx-auto max-w-[1500px] overflow-hidden border border-white/[0.08] bg-[#0B100D]">

                        <div className="relative overflow-hidden bg-[#080C0A]">
                            <div className="flex min-h-[320px] items-center justify-center p-4 sm:p-6 md:min-h-[500px] md:p-10 lg:min-h-[650px]">
                                <img
                                    src={project.image}
                                    alt={`${project.title} project`}
                                    className="max-h-[750px] w-full object-contain transition-transform duration-[1200ms] ease-out group-hover:scale-[1.015]"
                                />
                            </div>

                            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#050706]/40 via-transparent to-transparent" />

                            <div className="absolute left-5 top-5 md:left-8 md:top-8">
                                <div className="flex items-center gap-3 border border-white/[0.12] bg-[#050706]/70 px-4 py-2.5 backdrop-blur-xl">
                                    <span className="h-1.5 w-1.5 rounded-full bg-[#19C37D] shadow-[0_0_12px_rgba(25,195,125,0.9)]" />

                                    <span className="text-[10px] font-medium uppercase tracking-[0.25em] text-[#D5DDD8]">
                                        {project.category}
                                    </span>
                                </div>
                            </div>
                        </div>

                    </div>
                </Reveal>
            </section>

            {/* Overview */}
            <section className="px-5 py-24 md:px-8 md:py-32 lg:px-10">
                <div className="mx-auto grid max-w-[1200px] gap-12 md:grid-cols-[0.3fr_1fr] md:gap-20">

                    <Reveal>
                        <div>
                            <p className="text-xs font-medium uppercase tracking-[0.3em] text-[#19C37D]">
                                01
                            </p>

                            <p className="mt-3 text-xs uppercase tracking-[0.25em] text-[#4F5B54]">
                                Overview
                            </p>
                        </div>
                    </Reveal>

                    <Reveal delay={0.08}>
                        <div>
                            <h2 className="text-3xl font-semibold leading-tight tracking-[-0.04em] md:text-5xl">
                                A complete commerce experience built around real-world
                                workflows.
                            </h2>

                            <p className="mt-7 max-w-3xl text-base leading-8 text-[#89938D]">
                                {project.overview}
                            </p>
                        </div>
                    </Reveal>

                </div>
            </section>

            {/* Challenge + Solution */}
            <section className="border-y border-white/[0.08] bg-[#0B100D] px-5 py-24 md:px-8 md:py-32 lg:px-10">
                <div className="mx-auto grid max-w-[1200px] gap-16 md:grid-cols-2 md:gap-20">

                    <Reveal>
                        <div>
                            <p className="text-xs font-medium uppercase tracking-[0.3em] text-[#19C37D]">
                                02
                            </p>

                            <h2 className="mt-5 text-3xl font-semibold tracking-[-0.04em] md:text-4xl">
                                The challenge
                            </h2>

                            <p className="mt-6 text-base leading-8 text-[#89938D]">
                                {project.challenge}
                            </p>
                        </div>
                    </Reveal>

                    <Reveal delay={0.08}>
                        <div>
                            <p className="text-xs font-medium uppercase tracking-[0.3em] text-[#19C37D]">
                                03
                            </p>

                            <h2 className="mt-5 text-3xl font-semibold tracking-[-0.04em] md:text-4xl">
                                The solution
                            </h2>

                            <p className="mt-6 text-base leading-8 text-[#89938D]">
                                {project.solution}
                            </p>
                        </div>
                    </Reveal>

                </div>
            </section>

            {/* Features */}
            <section className="px-5 py-24 md:px-8 md:py-32 lg:px-10">
                <div className="mx-auto max-w-[1200px]">

                    <Reveal>
                        <div className="max-w-2xl">
                            <p className="text-xs font-medium uppercase tracking-[0.3em] text-[#19C37D]">
                                04
                            </p>

                            <h2 className="mt-5 text-4xl font-semibold tracking-[-0.05em] md:text-5xl">
                                Built for the
                                <span className="text-[#68746D]"> complete workflow.</span>
                            </h2>
                        </div>
                    </Reveal>

                    <div className="mt-14 grid border-l border-t border-white/[0.08] sm:grid-cols-2 lg:grid-cols-3">
                        {project.features.map((feature, index) => (
                            <Reveal key={feature} delay={index * 0.04}>
                                <div className="group border-b border-r border-white/[0.08] p-6 md:p-8">
                                    <div className="flex items-center justify-between">
                                        <span className="text-xs text-[#4F5B54]">
                                            {String(index + 1).padStart(2, "0")}
                                        </span>

                                        <Check
                                            size={17}
                                            strokeWidth={1.6}
                                            className="text-[#19C37D] opacity-50 transition-all duration-300 group-hover:opacity-100"
                                        />
                                    </div>

                                    <h3 className="mt-12 text-base font-medium text-[#D9E0DC]">
                                        {feature}
                                    </h3>
                                </div>
                            </Reveal>
                        ))}
                    </div>

                </div>
            </section>

            {/* Technology */}
            <section className="border-y border-white/[0.08] bg-[#0B100D] px-5 py-24 md:px-8 md:py-32 lg:px-10">
                <div className="mx-auto grid max-w-[1200px] gap-12 md:grid-cols-[0.4fr_1fr] md:gap-20">

                    <Reveal>
                        <div>
                            <p className="text-xs font-medium uppercase tracking-[0.3em] text-[#19C37D]">
                                05
                            </p>

                            <h2 className="mt-5 text-3xl font-semibold tracking-[-0.04em] md:text-4xl">
                                Technology
                            </h2>
                        </div>
                    </Reveal>

                    <Reveal delay={0.08}>
                        <div className="flex flex-wrap gap-3">
                            {project.technologies.map((technology) => (
                                <span
                                    key={technology}
                                    className="border border-white/[0.09] px-5 py-3 text-sm text-[#AAB5AE] transition-colors duration-300 hover:border-[#19C37D]/40 hover:text-[#19C37D]"
                                >
                                    {technology}
                                </span>
                            ))}
                        </div>
                    </Reveal>

                </div>
            </section>

            {/* CTA */}
            <section className="px-5 py-28 md:px-8 md:py-40 lg:px-10">
                <Reveal>
                    <div className="mx-auto max-w-[1200px] border border-white/[0.08] bg-[#0B100D] px-6 py-12 md:px-12 md:py-16 lg:px-16">

                        <p className="text-xs font-medium uppercase tracking-[0.3em] text-[#19C37D]">
                            Have a project in mind?
                        </p>

                        <div className="mt-6 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
                            <h2 className="max-w-2xl text-4xl font-semibold leading-tight tracking-[-0.05em] md:text-6xl">
                                Let's build something
                                <span className="text-[#68746D]"> meaningful.</span>
                            </h2>

                            <Link
                                to="/contact"
                                className="group inline-flex shrink-0 items-center gap-3 border border-[#19C37D]/40 bg-[#19C37D]/10 px-6 py-4 text-sm font-medium text-[#C9F7E1] transition-all duration-300 hover:border-[#19C37D] hover:bg-[#19C37D] hover:text-[#03110A]"
                            >
                                <span>Start a project</span>

                                <ArrowUpRight
                                    size={17}
                                    className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                                />
                            </Link>
                        </div>

                    </div>
                </Reveal>
            </section>

        </main>
    );
}

export default ProjectDetails;