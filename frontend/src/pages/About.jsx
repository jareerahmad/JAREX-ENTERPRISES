import { ArrowLeft, ArrowUpRight, Check } from "lucide-react";
import { Link } from "react-router-dom";

const principles = [
    {
        number: "01",
        title: "Purpose before complexity",
        description:
            "We start with the problem, the people and the outcome before deciding what technology belongs in the solution.",
    },
    {
        number: "02",
        title: "Design with intention",
        description:
            "Every interface should communicate clearly, feel considered and make the experience easier to understand.",
    },
    {
        number: "03",
        title: "Technology that serves",
        description:
            "Technology is a tool. We choose practical architectures that support the product instead of adding unnecessary complexity.",
    },
    {
        number: "04",
        title: "Built for the real world",
        description:
            "Projects should work across devices, workflows, users and changing business needs.",
    },
];

const capabilities = [
    "Business websites",
    "E-commerce platforms",
    "Full-stack web applications",
    "Digital platforms",
    "Custom web experiences",
    "Database-powered systems",
];

function About() {
    return (
        <main className="min-h-screen bg-[#050706] text-[#F3F5F3]">
            {/* Hero */}
            <section className="relative overflow-hidden px-5 pb-24 pt-32 md:px-8 md:pb-32 md:pt-40 lg:px-10">
                <div className="pointer-events-none absolute right-[-15%] top-[5%] h-[600px] w-[600px] rounded-full bg-[#19C37D]/[0.07] blur-[150px]" />

                <div className="relative z-10 mx-auto max-w-[1500px]">

                    <div className="grid gap-12 lg:grid-cols-[1.5fr_0.65fr] lg:items-end">
                        <div>
                            <div className="mb-8 flex items-center gap-3">
                                <span className="h-px w-8 bg-[#19C37D]" />

                                <span className="text-xs uppercase tracking-[0.3em] text-[#19C37D]">
                                    About JAREX
                                </span>
                            </div>

                            <h1 className="max-w-6xl text-6xl font-medium leading-[0.84] tracking-[-0.07em] md:text-8xl lg:text-[10rem]">
                                Built around
                                <br />
                                <span className="text-[#19C37D]">good work.</span>
                            </h1>
                        </div>

                        <div>
                            <p className="max-w-md text-base leading-8 text-[#7F8B84]">
                                JAREX ENTERPRISES is an independent digital venture creating
                                modern websites, platforms and digital products for real-world
                                ideas.
                            </p>

                            <div className="mt-8 flex items-center gap-3">
                                <span className="h-1.5 w-1.5 rounded-full bg-[#19C37D] shadow-[0_0_12px_rgba(25,195,125,0.7)]" />

                                <span className="text-[10px] uppercase tracking-[0.3em] text-[#52615A]">
                                    Independent / Pakistan
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Who We Are */}
            <section className="border-y border-white/[0.08] bg-[#080D0A] px-5 py-28 md:px-8 md:py-40 lg:px-10">
                <div className="mx-auto grid max-w-[1500px] gap-12 lg:grid-cols-[0.6fr_2fr] lg:gap-24">
                    <div>
                        <span className="text-xs uppercase tracking-[0.3em] text-[#19C37D]">
                            01 — Who we are
                        </span>
                    </div>

                    <div>
                        <h2 className="max-w-6xl text-4xl font-medium leading-[1.03] tracking-[-0.055em] text-[#E8ECE9] md:text-6xl lg:text-[5.5rem]">
                            We believe digital work should be{" "}
                            <span className="text-[#19C37D]">
                                useful, clear and memorable.
                            </span>
                        </h2>

                        <div className="mt-12 grid gap-10 md:grid-cols-2">
                            <p className="text-base leading-8 text-[#737F78]">
                                JAREX ENTERPRISES exists to turn ideas into practical digital
                                experiences. We work across websites, platforms and
                                applications where design and technology need to work together.
                            </p>

                            <p className="text-base leading-8 text-[#737F78]">
                                The goal is not to build something simply because it can be
                                built. The goal is to create something that has a reason to
                                exist and provides a clear experience for the people using it.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Philosophy */}
            <section className="px-5 py-28 md:px-8 md:py-40 lg:px-10">
                <div className="mx-auto max-w-[1500px]">
                    <div className="mb-20 flex items-start justify-between border-t border-white/[0.08] pt-5">
                        <div className="flex items-center gap-3">
                            <span className="h-px w-8 bg-[#19C37D]" />

                            <span className="text-xs uppercase tracking-[0.3em] text-[#19C37D]">
                                02 — Our philosophy
                            </span>
                        </div>

                        <span className="hidden text-xs uppercase tracking-[0.25em] text-[#4F5B54] md:block">
                            How we think
                        </span>
                    </div>

                    <div className="mb-20 grid gap-10 lg:grid-cols-[0.7fr_1.8fr] lg:gap-24">
                        <p className="text-sm leading-7 text-[#68746D]">
                            Good digital work is rarely about one technology or one visual
                            style. It comes from understanding the purpose behind the
                            product.
                        </p>

                        <h2 className="max-w-5xl text-4xl font-medium leading-[1.02] tracking-[-0.055em] text-[#DCE3DE] md:text-6xl lg:text-[5.5rem]">
                            Think clearly.
                            <br />
                            <span className="text-[#52615A]">Build carefully.</span>
                            <br />
                            <span className="text-[#19C37D]">Make it matter.</span>
                        </h2>
                    </div>

                    <div className="border-t border-white/[0.08]">
                        {principles.map((principle) => (
                            <article
                                key={principle.number}
                                className="group grid gap-6 border-b border-white/[0.08] py-9 md:grid-cols-[80px_1.1fr_1fr] md:items-start md:gap-10 md:py-11"
                            >
                                <span className="text-xs tracking-[0.2em] text-[#52615A] transition-colors duration-300 group-hover:text-[#19C37D]">
                                    {principle.number}
                                </span>

                                <h3 className="text-2xl font-medium tracking-[-0.04em] text-[#DCE3DE] transition-colors duration-300 group-hover:text-[#19C37D] md:text-3xl">
                                    {principle.title}
                                </h3>

                                <p className="max-w-lg text-sm leading-7 text-[#69756E]">
                                    {principle.description}
                                </p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* What We Build */}
            <section className="border-y border-white/[0.08] bg-[#080D0A] px-5 py-28 md:px-8 md:py-40 lg:px-10">
                <div className="mx-auto max-w-[1500px]">
                    <div className="grid gap-12 lg:grid-cols-[0.7fr_1.8fr] lg:gap-24">
                        <div>
                            <span className="text-xs uppercase tracking-[0.3em] text-[#19C37D]">
                                03 — What we build
                            </span>

                            <p className="mt-7 max-w-xs text-sm leading-7 text-[#68746D]">
                                Digital products shaped around business goals, user needs and
                                practical workflows.
                            </p>
                        </div>

                        <div>
                            <h2 className="max-w-5xl text-4xl font-medium leading-[1.03] tracking-[-0.055em] text-[#E8ECE9] md:text-6xl lg:text-[5.5rem]">
                                From a simple idea to a{" "}
                                <span className="text-[#19C37D]">
                                    complete digital system.
                                </span>
                            </h2>

                            <div className="mt-14 grid border-t border-white/[0.08] sm:grid-cols-2">
                                {capabilities.map((capability, index) => (
                                    <div
                                        key={capability}
                                        className={`flex items-center gap-4 border-b border-white/[0.08] py-6 ${index % 2 === 0 ? "sm:border-r sm:pr-8" : "sm:pl-8"
                                            }`}
                                    >
                                        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#19C37D]/30 text-[#19C37D]">
                                            <Check size={14} strokeWidth={1.8} />
                                        </span>

                                        <span className="text-base text-[#BFC9C3] md:text-lg">
                                            {capability}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Founder */}
            <section className="px-5 py-28 md:px-8 md:py-40 lg:px-10">
                <div className="mx-auto max-w-[1500px]">
                    <div className="mb-20 flex items-start justify-between border-t border-white/[0.08] pt-5">
                        <div className="flex items-center gap-3">
                            <span className="h-px w-8 bg-[#19C37D]" />

                            <span className="text-xs uppercase tracking-[0.3em] text-[#19C37D]">
                                04 — Behind JAREX
                            </span>
                        </div>

                        <span className="hidden text-xs uppercase tracking-[0.25em] text-[#4F5B54] md:block">
                            Founder
                        </span>
                    </div>

                    <div className="grid gap-12 lg:grid-cols-[0.7fr_1.8fr] lg:gap-24">
                        <div>
                            <p className="max-w-xs text-sm leading-7 text-[#68746D]">
                                JAREX is being built as an independent digital venture with a
                                long-term focus on creating meaningful digital products.
                            </p>
                        </div>

                        <div className="border border-white/[0.08] bg-[#080D0A]">
                            <div className="p-7 md:p-10 lg:p-14">
                                <div className="mb-7 flex items-center gap-3">
                                    <span className="h-1.5 w-1.5 rounded-full bg-[#19C37D] shadow-[0_0_12px_rgba(25,195,125,0.7)]" />

                                    <span className="text-xs uppercase tracking-[0.3em] text-[#19C37D]">
                                        Founder / Builder
                                    </span>
                                </div>

                                <h2 className="font-[Sora] text-4xl font-medium tracking-[-0.055em] text-[#E8ECE9] md:text-6xl">
                                    Jareer Ahmad Khan
                                </h2>

                                <p className="mt-8 max-w-3xl text-base leading-8 text-[#737F78]">
                                    JAREX is the result of a hands-on approach to technology,
                                    development and digital product building. The focus is on
                                    learning through real projects, turning ideas into working
                                    systems and continuously improving the quality of the work.
                                </p>

                                <div className="mt-10 flex flex-wrap gap-3">
                                    <span className="border border-white/[0.08] px-4 py-2 text-[10px] uppercase tracking-[0.18em] text-[#68746D]">
                                        Digital Products
                                    </span>

                                    <span className="border border-white/[0.08] px-4 py-2 text-[10px] uppercase tracking-[0.18em] text-[#68746D]">
                                        Web Platforms
                                    </span>

                                    <span className="border border-white/[0.08] px-4 py-2 text-[10px] uppercase tracking-[0.18em] text-[#68746D]">
                                        Business Solutions
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Closing */}
            <section className="relative overflow-hidden border-t border-white/[0.08] bg-[#080D0A] px-5 py-28 md:px-8 md:py-40 lg:px-10">
                <div className="pointer-events-none absolute bottom-[-300px] left-1/2 h-[650px] w-[850px] -translate-x-1/2 rounded-full bg-[#19C37D]/[0.08] blur-[180px]" />

                <div className="relative z-10 mx-auto max-w-[1500px]">
                    <div className="max-w-5xl">
                        <p className="mb-8 text-xs uppercase tracking-[0.3em] text-[#66736B]">
                            Let's build something meaningful
                        </p>

                        <h2 className="text-5xl font-medium leading-[0.9] tracking-[-0.065em] text-[#F3F5F3] md:text-7xl lg:text-[8rem]">
                            Have an idea?
                            <br />
                            <span className="text-[#19C37D]">Let's talk.</span>
                        </h2>
                    </div>

                    <div className="mt-16 border-t border-white/[0.08] pt-7">
                        <Link
                            to="/#contact"
                            className="group flex w-fit items-center gap-4 text-sm text-[#C4CEC7]"
                        >
                            <span className="transition-colors duration-300 group-hover:text-[#19C37D]">
                                Start a conversation
                            </span>

                            <span className="flex h-12 w-12 items-center justify-center rounded-full border border-white/[0.1] transition-all duration-300 group-hover:border-[#19C37D] group-hover:bg-[#19C37D] group-hover:text-[#03110A]">
                                <ArrowUpRight
                                    size={18}
                                    strokeWidth={1.7}
                                    className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                                />
                            </span>
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default About;