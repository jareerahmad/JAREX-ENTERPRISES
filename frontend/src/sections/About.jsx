
import { ArrowUpRight } from "lucide-react";

function About() {
    return (
        <section
            id="about"
            className="relative overflow-hidden bg-[#050706] px-5 py-28 md:px-8 md:py-40 lg:px-10"
        >
            <div className="mx-auto max-w-[1500px]">

                {/* Section Header */}
                <div className="mb-20 flex items-start justify-between border-t border-white/[0.08] pt-5">
                    <div className="flex items-center gap-3">
                        <span className="h-px w-8 bg-[#19C37D]" />

                        <span className="text-xs uppercase tracking-[0.3em] text-[#19C37D]">
                            04 — The story
                        </span>
                    </div>

                    <span className="hidden text-xs uppercase tracking-[0.25em] text-[#4F5B54] md:block">
                        Behind JAREX
                    </span>
                </div>

                {/* Main Statement */}
                <div className="grid gap-14 lg:grid-cols-[0.6fr_2fr] lg:gap-24">

                    <div>
                        <p className="max-w-xs text-sm leading-7 text-[#68746D]">
                            JAREX is an independent digital venture built around a simple
                            belief: useful digital work should also be memorable.
                        </p>

                        <div className="mt-10 hidden lg:block">
                            <span className="text-[9px] uppercase tracking-[0.35em] text-[#3F4B44]">
                                Independent / Pakistan
                            </span>
                        </div>
                    </div>

                    <div>
                        <h2 className="max-w-6xl text-4xl font-medium leading-[1.01] tracking-[-0.055em] text-[#E8ECE9] md:text-6xl lg:text-[5.5rem]">
                            Technology is only part of the work.
                            <br />
                            <span className="text-[#19C37D]">
                                The thinking behind it matters.
                            </span>
                        </h2>

                        <div className="mt-12 grid gap-10 md:grid-cols-2">

                            <p className="text-sm leading-7 text-[#737F78]">
                                JAREX ENTERPRISES brings together design, technology and
                                practical thinking to create digital products with a clear
                                purpose.
                            </p>

                            <p className="text-sm leading-7 text-[#737F78]">
                                Every project starts with an idea and becomes something
                                tangible through careful planning, development and execution.
                            </p>

                        </div>
                    </div>
                </div>

                {/* Divider Statement */}
                <div className="mt-32 border-y border-white/[0.08] py-12 md:mt-40 md:py-16">
                    <div className="grid gap-8 lg:grid-cols-[0.6fr_2fr] lg:gap-24">

                        <div>
                            <span className="text-xs uppercase tracking-[0.3em] text-[#52615A]">
                                Our philosophy
                            </span>
                        </div>

                        <p className="max-w-5xl text-3xl font-medium leading-[1.15] tracking-[-0.04em] text-[#BFC9C3] md:text-5xl lg:text-6xl">
                            Build things that are{" "}
                            <span className="text-[#F3F5F3]">
                                clear, useful and worth remembering.
                            </span>
                        </p>

                    </div>
                </div>

                {/* Founder */}
                <div className="mt-28 grid gap-10 lg:grid-cols-[0.6fr_2fr] lg:gap-24">

                    <div>
                        <span className="text-xs uppercase tracking-[0.3em] text-[#52615A]">
                            Behind JAREX
                        </span>
                    </div>

                    <div className="border border-white/[0.08] bg-[#080D0A]">

                        <div className="flex flex-col gap-10 p-7 md:p-10 lg:flex-row lg:items-end lg:justify-between">

                            <div>
                                <div className="mb-4 flex items-center gap-3">
                                    <span className="h-1.5 w-1.5 rounded-full bg-[#19C37D] shadow-[0_0_12px_rgba(25,195,125,0.7)]" />

                                    <span className="text-xs uppercase tracking-[0.25em] text-[#19C37D]">
                                        Founder
                                    </span>
                                </div>

                                <h3 className="font-[Sora] text-3xl font-medium tracking-[-0.05em] text-[#E8ECE9] md:text-5xl">
                                    Jareer Ahmad Khan
                                </h3>

                                <p className="mt-5 max-w-xl text-sm leading-7 text-[#707C75]">
                                    Building JAREX as an independent digital venture focused
                                    on modern websites, platforms and digital experiences.
                                </p>
                            </div>

                            <a
                                href="#contact"
                                className="group flex w-fit items-center gap-3 text-sm text-[#AAB5AE]"
                            >
                                <span className="transition-colors duration-300 group-hover:text-[#19C37D]">
                                    Get in touch
                                </span>

                                <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/[0.1] transition-all duration-300 group-hover:border-[#19C37D] group-hover:bg-[#19C37D] group-hover:text-[#03110A]">
                                    <ArrowUpRight
                                        size={17}
                                        strokeWidth={1.7}
                                        className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                                    />
                                </span>
                            </a>

                        </div>

                    </div>
                </div>

                {/* Bottom Meta */}
                <div className="mt-20 flex flex-col gap-4 border-t border-white/[0.08] pt-6 sm:flex-row sm:items-center sm:justify-between">
                    <span className="text-[10px] uppercase tracking-[0.3em] text-[#3F4B44]">
                        JAREX ENTERPRISES
                    </span>

                    <span className="text-[10px] uppercase tracking-[0.3em] text-[#3F4B44]">
                        Digital Products / Platforms / Experiences
                    </span>
                </div>

            </div>
        </section>
    );
}

export default About;