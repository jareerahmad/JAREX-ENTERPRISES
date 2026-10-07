
import { ArrowDownRight, ArrowUpRight } from "lucide-react";

function Introduction() {
    return (
        <section className="relative overflow-hidden bg-[#080D0A] px-5 py-28 md:px-8 md:py-40 lg:px-10">
            <div className="mx-auto max-w-[1500px]">

                {/* Section Header */}
                <div className="mb-20 flex items-start justify-between border-t border-white/[0.08] pt-5">
                    <div className="flex items-center gap-3">
                        <span className="h-px w-8 bg-[#19C37D]" />

                        <span className="text-xs uppercase tracking-[0.3em] text-[#19C37D]">
                            01 — Introduction
                        </span>
                    </div>

                    <ArrowDownRight
                        size={18}
                        strokeWidth={1.3}
                        className="text-[#52615A]"
                    />
                </div>

                {/* Main Statement */}
                <div className="grid gap-14 lg:grid-cols-[0.65fr_2fr] lg:gap-24">

                    {/* Side Label */}
                    <div>
                        <p className="max-w-xs text-sm leading-7 text-[#68746D]">
                            Independent digital enterprise creating purposeful websites,
                            platforms and digital experiences.
                        </p>

                        <div className="mt-10 hidden lg:block">
                            <span className="text-[9px] uppercase tracking-[0.35em] text-[#3F4B44]">
                                Based in Pakistan
                            </span>
                        </div>
                    </div>

                    {/* Statement */}
                    <div>
                        <h2 className="max-w-6xl text-4xl font-medium leading-[1.03] tracking-[-0.055em] text-[#E8ECE9] md:text-6xl lg:text-[5.5rem]">
                            JAREX is where{" "}
                            <span className="text-[#19C37D]">
                                ideas become
                            </span>{" "}
                            digital products.
                        </h2>

                        <p className="mt-10 max-w-3xl text-base leading-8 text-[#7F8B84] md:text-lg">
                            We create modern digital experiences for businesses, brands
                            and ambitious ideas. From business websites to complete web
                            platforms, every project is built with purpose, clarity and
                            attention to detail.
                        </p>
                    </div>
                </div>

                {/* Large Brand Element */}
                <div className="relative mt-32 overflow-hidden border-y border-white/[0.08] py-8 md:mt-40 md:py-12">
                    <div className="pointer-events-none absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-[#19C37D]/10" />

                    <div className="relative flex items-center justify-between gap-8">
                        <span className="whitespace-nowrap text-[clamp(4rem,12vw,11rem)] font-medium leading-none tracking-[-0.08em] text-[#101813]">
                            JAREX
                        </span>

                        <div className="hidden shrink-0 items-center gap-3 md:flex">
                            <span className="h-2 w-2 rounded-full bg-[#19C37D] shadow-[0_0_14px_rgba(25,195,125,0.7)]" />

                            <span className="text-[10px] uppercase tracking-[0.3em] text-[#52615A]">
                                Digital Enterprise
                            </span>
                        </div>
                    </div>
                </div>

                {/* Approach */}
                <div className="mt-28 grid gap-10 border-t border-white/[0.08] pt-8 md:mt-32 md:grid-cols-2">

                    <div>
                        <span className="text-xs uppercase tracking-[0.3em] text-[#52615A]">
                            Our approach
                        </span>
                    </div>

                    <div>
                        <p className="max-w-2xl text-2xl font-medium leading-8 tracking-[-0.025em] text-[#BFC9C3] md:text-3xl md:leading-10">
                            Simple ideas deserve{" "}
                            <span className="text-[#F3F5F3]">
                                exceptional execution.
                            </span>
                        </p>

                        <a
                            href="#services"
                            className="group mt-8 inline-flex items-center gap-3 text-sm text-[#7F8B84]"
                        >
                            <span className="transition-colors duration-300 group-hover:text-[#19C37D]">
                                Discover what we do
                            </span>

                            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/[0.1] transition-all duration-300 group-hover:border-[#19C37D] group-hover:bg-[#19C37D] group-hover:text-[#03110A]">
                                <ArrowUpRight
                                    size={15}
                                    strokeWidth={1.7}
                                    className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                                />
                            </span>
                        </a>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default Introduction;