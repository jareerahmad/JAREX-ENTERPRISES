
import {
    ArrowUpRight,
    ChevronDown,
    CircleHelp,
    Mail,
    MessageCircle,
    ShieldCheck,
} from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const COMPANY_EMAIL = "YOUR-EMAIL@example.com";

function Help() {
    const [openFaq, setOpenFaq] = useState(null);

    const helpItems = [
        {
            icon: CircleHelp,
            title: "General questions",
            description:
                "Find answers to common questions about JAREX ENTERPRISES, our work and the website.",
            action: "faq",
        },
        {
            icon: MessageCircle,
            title: "Project inquiries",
            description:
                "Have a project in mind? Tell us what you're looking to build and we'll help you take the next step.",
            action: "contact",
        },
        {
            icon: ShieldCheck,
            title: "Account & access",
            description:
                "Manage your JAREX account, review your account information and access your profile.",
            action: "profile",
        },
        {
            icon: Mail,
            title: "Still need help?",
            description:
                "Can't find what you're looking for? Send us an email directly and we'll get back to you.",
            action: "email",
        },
    ];

    const faqs = [
        {
            question: "What is JAREX ENTERPRISES?",
            answer:
                "JAREX ENTERPRISES is a digital-focused company and technology brand that creates modern websites, digital products and practical web solutions for real-world needs.",
        },
        {
            question: "Can I work with JAREX on a project?",
            answer:
                "Yes. If you have a website, e-commerce platform, business website or another digital project in mind, you can contact JAREX through the Contact page and share your requirements.",
        },
        {
            question: "How can I contact JAREX?",
            answer:
                "You can use the Contact page to send a project inquiry, or use the direct email option on this Help Center to contact JAREX by email.",
        },
        {
            question: "Do I need an account to contact JAREX?",
            answer:
                "No. You can contact JAREX through the public Contact page without creating an account.",
        },
        {
            question: "What can I do from my profile?",
            answer:
                "Your profile allows you to view your account information and manage your signed-in account. Administrative features are available only to authorized administrators.",
        },
        {
            question: "Where can I see JAREX projects?",
            answer:
                "You can explore the selected work displayed on the JAREX website or visit the Projects page to view available projects and their detailed case studies.",
        },
        {
            question: "How do I report a problem with the website?",
            answer:
                "If something isn't working correctly, you can contact JAREX through the Contact page or send a direct email. Include a short description of the problem so it can be investigated more easily.",
        },
        {
            question: "How is my information handled?",
            answer:
                "JAREX takes reasonable measures to protect information submitted through the website. For more information, please review the Privacy Policy.",
        },
    ];

    const handleHelpClick = (action) => {
        if (action === "faq") {
            document
                .getElementById("faq")
                ?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                });
        }

        if (action === "email") {
            window.location.href =
                `mailto:${COMPANY_EMAIL}?subject=JAREX%20ENTERPRISES%20Inquiry`;
        }
    };

    return (
        <main className="min-h-screen bg-[#050706] text-[#F3F5F3]">
            {/* Hero */}
            <section className="relative overflow-hidden border-b border-white/[0.08] px-5 pb-24 pt-36 md:px-8 md:pb-32 md:pt-44 lg:px-10">
                <div className="pointer-events-none absolute -right-40 top-20 h-96 w-96 rounded-full bg-[#19C37D]/[0.05] blur-3xl" />

                <div className="relative mx-auto max-w-[1500px]">
                    <div className="mb-12 flex items-center gap-3">
                        <span className="h-px w-8 bg-[#19C37D]" />

                        <span className="text-xs uppercase tracking-[0.3em] text-[#19C37D]">
                            Support / Help Center
                        </span>
                    </div>

                    <div className="grid gap-12 lg:grid-cols-[1.4fr_0.6fr] lg:items-end">
                        <div>
                            <h1 className="max-w-5xl text-5xl font-medium leading-[0.9] tracking-[-0.06em] md:text-7xl lg:text-[7rem]">
                                How can we
                                <br />
                                <span className="text-[#52615A]">
                                    help?
                                </span>
                            </h1>
                        </div>

                        <p className="max-w-md text-sm leading-7 text-[#707C75] lg:pb-2">
                            Find answers, explore common questions or get
                            directly in touch with JAREX ENTERPRISES.
                        </p>
                    </div>
                </div>
            </section>

            {/* Help Cards */}
            <section className="px-5 py-24 md:px-8 md:py-32 lg:px-10">
                <div className="mx-auto max-w-[1500px]">
                    <div className="mb-12">
                        <p className="text-xs uppercase tracking-[0.3em] text-[#19C37D]">
                            Support options
                        </p>
                    </div>

                    <div className="grid gap-px overflow-hidden border border-white/[0.08] bg-white/[0.08] md:grid-cols-2">
                        {helpItems.map((item) => {
                            const Icon = item.icon;

                            if (
                                item.action === "contact" ||
                                item.action === "profile"
                            ) {
                                return (
                                    <Link
                                        key={item.title}
                                        to={
                                            item.action === "contact"
                                                ? "/contact"
                                                : "/profile"
                                        }
                                        className="group bg-[#080D0A] p-8 transition-colors duration-300 hover:bg-[#0B100D] md:p-10 lg:p-12"
                                    >
                                        <div className="mb-12 flex items-start justify-between">
                                            <div className="flex h-12 w-12 items-center justify-center border border-[#1B2922] text-[#19C37D] transition-all duration-300 group-hover:border-[#19C37D]">
                                                <Icon
                                                    size={20}
                                                    strokeWidth={1.6}
                                                />
                                            </div>

                                            <ArrowUpRight
                                                size={20}
                                                strokeWidth={1.5}
                                                className="text-[#3F4B44] transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#19C37D]"
                                            />
                                        </div>

                                        <h2 className="text-2xl font-medium tracking-[-0.04em] text-[#E9EEE9] md:text-3xl">
                                            {item.title}
                                        </h2>

                                        <p className="mt-5 max-w-xl text-sm leading-7 text-[#737F78]">
                                            {item.description}
                                        </p>
                                    </Link>
                                );
                            }

                            return (
                                <button
                                    key={item.title}
                                    type="button"
                                    onClick={() =>
                                        handleHelpClick(item.action)
                                    }
                                    className="group bg-[#080D0A] p-8 text-left transition-colors duration-300 hover:bg-[#0B100D] md:p-10 lg:p-12"
                                >
                                    <div className="mb-12 flex items-start justify-between">
                                        <div className="flex h-12 w-12 items-center justify-center border border-[#1B2922] text-[#19C37D] transition-all duration-300 group-hover:border-[#19C37D]">
                                            <Icon
                                                size={20}
                                                strokeWidth={1.6}
                                            />
                                        </div>

                                        <ArrowUpRight
                                            size={20}
                                            strokeWidth={1.5}
                                            className="text-[#3F4B44] transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#19C37D]"
                                        />
                                    </div>

                                    <h2 className="text-2xl font-medium tracking-[-0.04em] text-[#E9EEE9] md:text-3xl">
                                        {item.title}
                                    </h2>

                                    <p className="mt-5 max-w-xl text-sm leading-7 text-[#737F78]">
                                        {item.description}
                                    </p>
                                </button>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section
                id="faq"
                className="scroll-mt-24 border-t border-white/[0.08] px-5 py-24 md:px-8 md:py-32 lg:px-10"
            >
                <div className="mx-auto max-w-[1100px]">
                    <div className="mb-16">
                        <div className="mb-5 flex items-center gap-3">
                            <span className="h-px w-8 bg-[#19C37D]" />

                            <span className="text-xs uppercase tracking-[0.3em] text-[#19C37D]">
                                FAQ
                            </span>
                        </div>

                        <h2 className="text-4xl font-medium leading-[0.95] tracking-[-0.05em] md:text-6xl">
                            Frequently asked
                            <br />
                            <span className="text-[#52615A]">
                                questions.
                            </span>
                        </h2>
                    </div>

                    <div className="border-t border-white/[0.08]">
                        {faqs.map((faq, index) => {
                            const isOpen = openFaq === index;

                            return (
                                <div
                                    key={faq.question}
                                    className="border-b border-white/[0.08]"
                                >
                                    <button
                                        type="button"
                                        onClick={() =>
                                            setOpenFaq(
                                                isOpen ? null : index
                                            )
                                        }
                                        className="flex w-full items-center justify-between gap-8 py-7 text-left"
                                    >
                                        <div className="flex items-start gap-5">
                                            <span className="pt-1 text-xs text-[#19C37D]">
                                                {String(index + 1).padStart(
                                                    2,
                                                    "0"
                                                )}
                                            </span>

                                            <span className="text-base font-medium text-[#E9EEE9] md:text-lg">
                                                {faq.question}
                                            </span>
                                        </div>

                                        <ChevronDown
                                            size={19}
                                            strokeWidth={1.5}
                                            className={`shrink-0 text-[#59655E] transition-transform duration-300 ${isOpen
                                                ? "rotate-180 text-[#19C37D]"
                                                : ""
                                                }`}
                                        />
                                    </button>

                                    <div
                                        className={`grid transition-all duration-300 ${isOpen
                                            ? "grid-rows-[1fr] pb-7"
                                            : "grid-rows-[0fr]"
                                            }`}
                                    >
                                        <div className="overflow-hidden">
                                            <p className="pl-10 text-sm leading-7 text-[#737F78] md:pl-[3.25rem] md:text-base">
                                                {faq.answer}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Contact CTA */}
            <section className="border-t border-white/[0.08] px-5 py-24 md:px-8 md:py-32 lg:px-10">
                <div className="mx-auto max-w-[1500px]">
                    <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
                        <div>
                            <p className="mb-5 text-xs uppercase tracking-[0.3em] text-[#19C37D]">
                                Still need help?
                            </p>

                            <h2 className="max-w-3xl text-4xl font-medium leading-[0.95] tracking-[-0.05em] md:text-6xl">
                                Let's talk about
                                <br />
                                <span className="text-[#52615A]">
                                    your project.
                                </span>
                            </h2>
                        </div>

                        <Link
                            to="/contact"
                            className="group flex w-fit items-center gap-4 border border-[#1B2922] px-6 py-4 text-sm text-[#C4CEC7] transition-all duration-300 hover:border-[#19C37D] hover:bg-[#19C37D] hover:text-[#03110A]"
                        >
                            Contact JAREX
                            <ArrowUpRight
                                size={17}
                                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                            />
                        </Link>
                    </div>
                </div>
            </section>

        </main>
    );
}

export default Help;