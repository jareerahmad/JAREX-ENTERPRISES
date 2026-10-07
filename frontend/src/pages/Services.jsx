import { ArrowLeft, ArrowUpRight, Check, Plus } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
    {
        number: "01",
        title: "Business Websites",
        description:
            "Professional websites designed around your business, brand and customers. Built to communicate clearly, establish trust and create a strong digital presence.",
        features: [
            "Custom business-focused design",
            "Responsive across devices",
            "Clear information architecture",
            "Modern interactions and animations",
        ],
    },
    {
        number: "02",
        title: "E-Commerce Platforms",
        description:
            "Complete online shopping experiences that connect products, customers, carts, orders and administration into one practical system.",
        features: [
            "Product and category management",
            "Shopping cart and checkout flows",
            "User authentication",
            "Order and admin management",
        ],
    },
    {
        number: "03",
        title: "Full-Stack Web Applications",
        description:
            "Interactive web applications built with a complete frontend, backend and database architecture for real-world workflows.",
        features: [
            "Modern frontend interfaces",
            "Backend application logic",
            "Database integration",
            "Authentication and authorization",
        ],
    },
    {
        number: "04",
        title: "Digital Platforms",
        description:
            "Purpose-built platforms for ideas that need more than a traditional website — from dashboards and portals to specialized digital systems.",
        features: [
            "Custom functionality",
            "Dynamic data-driven experiences",
            "Admin workflows",
            "Scalable application structure",
        ],
    },
    {
        number: "05",
        title: "Custom Web Experiences",
        description:
            "Distinctive web experiences created around a specific idea, campaign, product or organization instead of relying on an ordinary template.",
        features: [
            "Unique visual direction",
            "Interactive experiences",
            "Motion and transitions",
            "Performance-conscious development",
        ],
    },
    {
        number: "06",
        title: "Website Modernization",
        description:
            "Transforming older or limited websites into modern digital experiences with improved design, responsiveness and functionality.",
        features: [
            "Modern UI redesign",
            "Responsive improvements",
            "Frontend architecture updates",
            "Improved user experience",
        ],
    },
];

const process = [
    {
        number: "01",
        title: "Understand",
        description:
            "We first understand the idea, business goal, audience and requirements behind the project.",
    },
    {
        number: "02",
        title: "Shape",
        description:
            "The information is turned into a clear structure, visual direction and practical product experience.",
    },
    {
        number: "03",
        title: "Build",
        description:
            "The product is developed carefully, connecting the interface with the required functionality and data.",
    },
    {
        number: "04",
        title: "Refine",
        description:
            "The result is tested, improved and prepared to work as a reliable digital product.",
    },
];

function Services() {
    return (
        <main className="min-h-screen bg-[#050706] text-[#F3F5F3]">
            {/* Hero */}
            <section className="relative overflow-hidden px-5 pb-24 pt-32 md:px-8 md:pb-32 md:pt-40 lg:px-10">
                <div className="pointer-events-none absolute right-[-15%] top-[-10%] h-[650px] w-[650px] rounded-full bg-[#19C37D]/[0.07] blur-[160px]" />

                <div className="relative z-10 mx-auto max-w-[1500px]">

                    <div className="grid gap-12 lg:grid-cols-[1.5fr_0.65fr] lg:items-end">
                        <div>
                            <div className="mb-8 flex items-center gap-3">
                                <span className="h-px w-8 bg-[#19C37D]" />

                                <span className="text-xs uppercase tracking-[0.3em] text-[#19C37D]">
                                    What we do
                                </span>
                            </div>

                            <h1 className="max-w-6xl text-6xl font-medium leading-[0.84] tracking-[-0.07em] md:text-8xl lg:text-[10rem]">
                                Digital work
                                <br />
                                <span className="text-[#19C37D]">with purpose.</span>
                            </h1>
                        </div>

                        <div>
                            <p className="max-w-md text-base leading-8 text-[#7F8B84]">
                                JAREX ENTERPRISES creates websites, platforms and digital
                                products designed around real business needs and real users.
                            </p>

                            <div className="mt-8 flex items-center gap-3">
                                <span className="h-1.5 w-1.5 rounded-full bg-[#19C37D] shadow-[0_0_12px_rgba(25,195,125,0.7)]" />

                                <span className="text-[10px] uppercase tracking-[0.3em] text-[#52615A]">
                                    Strategy / Design / Development
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services */}
            <section className="border-y border-white/[0.08] bg-[#080D0A] px-5 py-28 md:px-8 md:py-40 lg:px-10">
                <div className="mx-auto max-w-[1500px]">
                    <div className="mb-20 grid gap-10 lg:grid-cols-[0.7fr_1.8fr] lg:gap-24">
                        <div>
                            <span className="text-xs uppercase tracking-[0.3em] text-[#19C37D]">
                                01 — Services
                            </span>

                            <p className="mt-7 max-w-xs text-sm leading-7 text-[#68746D]">
                                Different problems require different digital solutions. Our
                                services are built around the actual needs of the project.
                            </p>
                        </div>

                        <div>
                            <h2 className="max-w-5xl text-4xl font-medium leading-[1.03] tracking-[-0.055em] text-[#E8ECE9] md:text-6xl lg:text-[5.5rem]">
                                From websites to{" "}
                                <span className="text-[#19C37D]">
                                    complete digital systems.
                                </span>
                            </h2>
                        </div>
                    </div>

                    <div className="border-t border-white/[0.08]">
                        {services.map((service) => (
                            <article
                                key={service.number}
                                className="group grid gap-8 border-b border-white/[0.08] py-10 md:grid-cols-[80px_1.1fr_1.1fr] md:items-start md:gap-10 md:py-14"
                            >
                                <div>
                                    <span className="text-xs tracking-[0.2em] text-[#52615A] transition-colors duration-300 group-hover:text-[#19C37D]">
                                        {service.number}
                                    </span>
                                </div>

                                <div>
                                    <h3 className="text-3xl font-medium tracking-[-0.045em] text-[#DCE3DE] transition-colors duration-300 group-hover:text-[#19C37D] md:text-4xl">
                                        {service.title}
                                    </h3>

                                    <p className="mt-5 max-w-xl text-sm leading-7 text-[#69756E] md:text-base">
                                        {service.description}
                                    </p>
                                </div>

                                <div className="md:pt-1">
                                    <p className="mb-5 text-[10px] uppercase tracking-[0.25em] text-[#4F5B54]">
                                        Includes
                                    </p>

                                    <div className="space-y-3">
                                        {service.features.map((feature) => (
                                            <div
                                                key={feature}
                                                className="flex items-center gap-3 text-sm text-[#AAB5AE]"
                                            >
                                                <Check
                                                    size={14}
                                                    strokeWidth={1.8}
                                                    className="shrink-0 text-[#19C37D]"
                                                />

                                                <span>{feature}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </article>
                        ))}
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
                                02 — How we work
                            </span>
                        </div>

                        <span className="hidden text-xs uppercase tracking-[0.25em] text-[#4F5B54] md:block">
                            Our approach
                        </span>
                    </div>

                    <div className="grid gap-12 lg:grid-cols-[0.7fr_1.8fr] lg:gap-24">
                        <div>
                            <p className="max-w-xs text-sm leading-7 text-[#68746D]">
                                A project should have a clear reason behind every major
                                decision — from the first idea to the final interaction.
                            </p>
                        </div>

                        <div>
                            <h2 className="max-w-5xl text-4xl font-medium leading-[1.02] tracking-[-0.055em] text-[#DCE3DE] md:text-6xl lg:text-[5.5rem]">
                                Understand first.
                                <br />
                                <span className="text-[#52615A]">Build with intent.</span>
                                <br />
                                <span className="text-[#19C37D]">Improve continuously.</span>
                            </h2>

                            <div className="mt-16 border-t border-white/[0.08]">
                                {process.map((item) => (
                                    <div
                                        key={item.number}
                                        className="grid gap-5 border-b border-white/[0.08] py-8 md:grid-cols-[80px_0.7fr_1.3fr] md:items-start md:gap-10"
                                    >
                                        <span className="text-xs tracking-[0.2em] text-[#52615A]">
                                            {item.number}
                                        </span>

                                        <h3 className="text-2xl font-medium tracking-[-0.04em] text-[#DCE3DE] md:text-3xl">
                                            {item.title}
                                        </h3>

                                        <p className="max-w-lg text-sm leading-7 text-[#69756E]">
                                            {item.description}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* What Makes It Different */}
            <section className="border-y border-white/[0.08] bg-[#080D0A] px-5 py-28 md:px-8 md:py-40 lg:px-10">
                <div className="mx-auto max-w-[1500px]">
                    <div className="grid gap-12 lg:grid-cols-[0.7fr_1.8fr] lg:gap-24">
                        <div>
                            <span className="text-xs uppercase tracking-[0.3em] text-[#19C37D]">
                                03 — The difference
                            </span>
                        </div>

                        <div>
                            <h2 className="max-w-5xl text-4xl font-medium leading-[1.03] tracking-[-0.055em] text-[#E8ECE9] md:text-6xl lg:text-[5.5rem]">
                                Not just a website.
                                <br />
                                <span className="text-[#19C37D]">
                                    A digital foundation.
                                </span>
                            </h2>

                            <div className="mt-14 grid gap-8 border-t border-white/[0.08] md:grid-cols-3">
                                <div className="pt-7">
                                    <Plus
                                        size={18}
                                        strokeWidth={1.5}
                                        className="text-[#19C37D]"
                                    />

                                    <h3 className="mt-6 text-xl font-medium tracking-[-0.03em] text-[#DCE3DE]">
                                        Designed for people
                                    </h3>

                                    <p className="mt-4 text-sm leading-7 text-[#69756E]">
                                        Clear structure and intentional interfaces make digital
                                        products easier to understand and use.
                                    </p>
                                </div>

                                <div className="border-white/[0.08] pt-7 md:border-l md:pl-8">
                                    <Plus
                                        size={18}
                                        strokeWidth={1.5}
                                        className="text-[#19C37D]"
                                    />

                                    <h3 className="mt-6 text-xl font-medium tracking-[-0.03em] text-[#DCE3DE]">
                                        Built for real workflows
                                    </h3>

                                    <p className="mt-4 text-sm leading-7 text-[#69756E]">
                                        Functionality is shaped around how a business, customer or
                                        organization actually needs to work.
                                    </p>
                                </div>

                                <div className="border-white/[0.08] pt-7 md:border-l md:pl-8">
                                    <Plus
                                        size={18}
                                        strokeWidth={1.5}
                                        className="text-[#19C37D]"
                                    />

                                    <h3 className="mt-6 text-xl font-medium tracking-[-0.03em] text-[#DCE3DE]">
                                        Made to evolve
                                    </h3>

                                    <p className="mt-4 text-sm leading-7 text-[#69756E]">
                                        Good digital products should have room to grow as ideas,
                                        users and business requirements change.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="relative overflow-hidden px-5 py-28 md:px-8 md:py-40 lg:px-10">
                <div className="pointer-events-none absolute bottom-[-300px] left-1/2 h-[650px] w-[850px] -translate-x-1/2 rounded-full bg-[#19C37D]/[0.08] blur-[180px]" />

                <div className="relative z-10 mx-auto max-w-[1500px]">
                    <div className="max-w-5xl">
                        <p className="mb-8 text-xs uppercase tracking-[0.3em] text-[#66736B]">
                            Have a project in mind?
                        </p>

                        <h2 className="text-5xl font-medium leading-[0.9] tracking-[-0.065em] text-[#F3F5F3] md:text-7xl lg:text-[8rem]">
                            Let's turn the
                            <br />
                            <span className="text-[#19C37D]">idea into reality.</span>
                        </h2>
                    </div>

                    <div className="mt-16 border-t border-white/[0.08] pt-7">
                        <Link
                            to="/contact"
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

export default Services;