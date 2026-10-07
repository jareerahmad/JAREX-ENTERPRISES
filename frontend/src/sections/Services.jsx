
import { ArrowUpRight } from "lucide-react";

const services = [
    {
        number: "01",
        title: "Web Development",
        description:
            "Modern, responsive websites designed around business goals, clarity and real users.",
    },
    {
        number: "02",
        title: "Digital Platforms",
        description:
            "Full-stack web applications built around real workflows, data and growing business needs.",
    },
    {
        number: "03",
        title: "E-Commerce",
        description:
            "Complete online stores with products, carts, orders, authentication and administration.",
    },
    {
        number: "04",
        title: "Business Websites",
        description:
            "Distinctive digital identities for companies, brands and emerging businesses.",
    },
];

function Services() {
    return (
        <section
            id="services"
            className="relative overflow-hidden bg-[#050706] px-5 py-28 md:px-8 md:py-40 lg:px-10"
        >
            <div className="mx-auto max-w-[1500px]">

                {/* Section Header */}
                <div className="mb-20 flex items-start justify-between border-t border-white/[0.08] pt-5">
                    <div className="flex items-center gap-3">
                        <span className="h-px w-8 bg-[#19C37D]" />

                        <span className="text-xs uppercase tracking-[0.3em] text-[#19C37D]">
                            02 — What we do
                        </span>
                    </div>

                    <span className="hidden text-xs uppercase tracking-[0.25em] text-[#4F5B54] md:block">
                        Capabilities
                    </span>
                </div>

                {/* Intro */}
                <div className="grid gap-10 lg:grid-cols-[1.5fr_0.7fr] lg:items-end">
                    <h2 className="max-w-5xl text-5xl font-medium leading-[0.92] tracking-[-0.06em] text-[#F3F5F3] md:text-7xl lg:text-[7rem]">
                        We create
                        <br />
                        <span className="text-[#52615A]">digital work</span>
                        <br />
                        that matters.
                    </h2>

                    <p className="max-w-sm text-sm leading-7 text-[#707C75] lg:pb-2">
                        From focused business websites to complete digital platforms,
                        JAREX turns ideas into practical digital experiences.
                    </p>
                </div>

                {/* Services List */}
                <div className="mt-28">

                    {services.map((service) => (
                        <article
                            key={service.number}
                            className="group relative border-t border-white/[0.08] py-8 transition-colors duration-500 hover:border-[#19C37D]/40 md:py-10"
                        >
                            <div className="grid gap-6 md:grid-cols-[80px_1.25fr_1fr_52px] md:items-center md:gap-10">

                                {/* Number */}
                                <span className="text-xs tracking-[0.2em] text-[#19C37D] sm:text-[#52615A] transition-colors duration-300 group-hover:text-[#19C37D]">
                                    {service.number}
                                </span>

                                {/* Title */}
                                <h3 className="text-3xl font-medium tracking-[-0.04em] text-[#DCE3DE] transition-all duration-500 group-hover:translate-x-2 group-hover:text-[#19C37D] md:text-4xl lg:text-5xl">
                                    {service.title}
                                </h3>

                                {/* Description */}
                                <p className="max-w-md text-sm leading-7 text-[#69756E]">
                                    {service.description}
                                </p>

                                {/* Arrow */}
                                {/* <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/[0.1] text-[#68746D] transition-all duration-500 group-hover:border-[#19C37D] group-hover:bg-[#19C37D] group-hover:text-[#03110A]">
                                    <ArrowUpRight
                                        size={18}
                                        strokeWidth={1.7}
                                        className="transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                                    />
                                </div> */}
                            </div>

                            {/* Hover line */}
                            <div className="absolute bottom-0 left-0 h-px w-0 bg-[#19C37D] transition-all duration-700 group-hover:w-full" />
                        </article>
                    ))}

                    <div className="border-t border-white/[0.08]" />
                </div>

                {/* Bottom Statement */}
                <div className="mt-20 flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
                    <p className="text-xs uppercase tracking-[0.25em] text-[#4F5B54]">
                        From idea to execution
                    </p>

                    <div className="flex items-center gap-3 text-sm text-[#68746D]">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#19C37D] shadow-[0_0_10px_rgba(25,195,125,0.7)]" />
                        <span>Built for real-world use</span>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default Services;