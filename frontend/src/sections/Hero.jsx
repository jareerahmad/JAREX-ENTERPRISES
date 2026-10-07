import { ArrowDownRight, ArrowUpRight } from "lucide-react";

function Hero() {
    return (
        <section className="relative flex h-auto items-center overflow-hidden bg-[#050706]">
            {/* Background glow */}
            <div className="pointer-events-none absolute -right-40 top-20 h-[500px] w-[500px] rounded-full bg-[#19C37D]/10 blur-[150px]" />

            <div className="pointer-events-none absolute -left-40 bottom-[-200px] h-[500px] w-[500px] rounded-full bg-[#0B6B46]/10 blur-[160px]" />

            {/* Grid */}
            <div
                className="pointer-events-none absolute inset-0 opacity-[0.035]"
                style={{
                    backgroundImage:
                        "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
                    backgroundSize: "80px 80px",
                }}
            />

            <div className="relative z-10 mx-auto w-full max-w-[1500px] px-5 pb-20 pt-40 md:px-8 lg:px-10">
                <div className="max-w-7xl">
                    {/* Small label */}
                    <div className="mb-8 flex items-center gap-3">
                        <span className="h-px w-10 bg-[#19C37D]" />

                        <span className="text-xs font-medium uppercase tracking-[0.35em] text-[#7E8983]">
                            Digital Enterprise
                        </span>
                    </div>

                    {/* Main heading */}
                    <h1 className="max-w-[1100px] text-[clamp(4rem,10vw,9.5rem)] font-medium leading-[0.82] tracking-[-0.075em] text-[#F3F5F3]">
                        We build
                        <br />

                        <span className="text-[#19C37D]">digital</span> experiences.
                    </h1>

                    {/* Bottom content */}
                    <div className="mt-14 grid gap-10 border-t border-white/[0.1] pt-8 md:grid-cols-[1fr_auto] md:items-end">

                        <div className="max-w-xl">
                            <p className="text-base leading-7 text-[#8F9994] md:text-lg">
                                JAREX ENTERPRISES creates modern digital products, business
                                platforms and web experiences designed to make an impact.
                            </p>
                        </div>

                        <a
                            href="#work"
                            className="group flex w-fit items-center gap-3 text-sm font-medium text-[#DCE7E1]"
                        >
                            <span>Explore our work</span>

                            <span className="flex h-11 w-11 items-center justify-center rounded-full border border-[#19C37D]/40 transition-all duration-300 group-hover:border-[#19C37D] group-hover:bg-[#19C37D] group-hover:text-[#03110A]">
                                <ArrowUpRight
                                    size={17}
                                    className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                                />
                            </span>
                        </a>
                    </div>
                </div>

                {/* Bottom scroll indicator */}
                <div className="mt-20 flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] text-[#66716B]">
                    <ArrowDownRight size={14} />

                    <span>Scroll to explore</span>
                </div>
            </div>
        </section>
    );
}

export default Hero;
