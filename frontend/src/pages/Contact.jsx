import { ArrowLeft, ArrowUpRight, Mail, MapPin, Send } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import Swal from "sweetalert2";

function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        company: "",
        projectType: "",
        message: "",
    });

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormData((current) => ({
            ...current,
            [name]: value,
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch(
                `${import.meta.env.VITE_API_URL}/messages`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        name: formData.name,
                        email: formData.email,
                        subject: formData.projectType,
                        message: formData.company
                            ? `Company / Organization: ${formData.company}\n\n${formData.message}`
                            : formData.message,
                    }),
                }
            );

            const data = await response.json();

            if (!response.ok) {
                throw new Error(
                    data.message || "Failed to send your inquiry."
                );
            }

            setFormData({
                name: "",
                email: "",
                company: "",
                projectType: "",
                message: "",
            });

            Swal.fire({
                icon: "success",
                title: "Inquiry sent",
                text: "Thank you. Your inquiry has been received.",
                background: "#0B100D",
                color: "#F3F5F3",
                confirmButtonColor: "#19C37D",
                confirmButtonText: "Done",
            });
        } catch (error) {
            console.error("Contact form error:", error);

            Swal.fire({
                icon: "error",
                title: "Something went wrong",
                text: error.message,
                background: "#0B100D",
                color: "#F3F5F3",
                confirmButtonColor: "#19C37D",
                confirmButtonText: "Try again",
            });
        }
    };

    return (
        <main className="min-h-screen bg-[#050706] text-[#F3F5F3]">
            {/* Hero */}
            <section className="relative overflow-hidden px-5 pb-24 pt-32 md:px-8 md:pb-32 md:pt-40 lg:px-10">
                <div className="pointer-events-none absolute right-[-15%] top-[-10%] h-162.5 w-162.5 rounded-full bg-[#19C37D]/[0.07] blur-[160px]" />

                <div className="relative z-10 mx-auto max-w-375">

                    <div className="grid gap-12 lg:grid-cols-[1.5fr_0.65fr] lg:items-end">
                        <div>
                            <div className="mb-8 flex items-center gap-3">
                                <span className="h-px w-8 bg-[#19C37D]" />

                                <span className="text-xs uppercase tracking-[0.3em] text-[#19C37D]">
                                    Contact
                                </span>
                            </div>

                            <h1 className="max-w-6xl text-6xl font-medium leading-[0.84] tracking-[-0.07em] md:text-8xl lg:text-[10rem]">
                                Let's build
                                <br />
                                <span className="text-[#19C37D]">something real.</span>
                            </h1>
                        </div>

                        <div>
                            <p className="max-w-md text-base leading-8 text-[#7F8B84]">
                                Have an idea, business requirement or digital project in mind?
                                Tell us what you're working on and let's start the
                                conversation.
                            </p>

                            <div className="mt-8 flex items-center gap-3">
                                <span className="h-1.5 w-1.5 rounded-full bg-[#19C37D] shadow-[0_0_12px_rgba(25,195,125,0.7)]" />

                                <span className="text-[10px] uppercase tracking-[0.3em] text-[#52615A]">
                                    Start a conversation
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Area */}
            <section className="border-y border-white/8 bg-[#080D0A] px-5 py-24 md:px-8 md:py-32 lg:px-10">
                <div className="mx-auto grid max-w-375 gap-16 lg:grid-cols-[0.65fr_1.5fr] lg:gap-24">
                    {/* Information */}
                    <div>
                        <span className="text-xs uppercase tracking-[0.3em] text-[#19C37D]">
                            01 — Get in touch
                        </span>

                        <h2 className="mt-8 max-w-md text-4xl font-medium leading-[1.02] tracking-[-0.055em] text-[#E8ECE9] md:text-5xl">
                            Tell us what you're{" "}
                            <span className="text-[#19C37D]">building.</span>
                        </h2>

                        <p className="mt-7 max-w-md text-sm leading-7 text-[#69756E]">
                            Whether you need a business website, e-commerce platform,
                            full-stack application or something completely custom, share
                            your idea and we'll take it from there.
                        </p>

                        <div className="mt-12 space-y-5">
                            <a
                                href="https://mail.google.com/mail/u/0/#inbox?compose=new"
                                className="group flex items-center gap-4"
                            >
                                <span className="flex h-11 w-11 items-center justify-center border border-white/8 text-[#19C37D] transition-all duration-300 group-hover:border-[#19C37D] group-hover:bg-[#19C37D] group-hover:text-[#03110A]">
                                    <Mail size={17} strokeWidth={1.7} />
                                </span>

                                <div>
                                    <p className="text-[10px] uppercase tracking-[0.2em] text-[#4F5B54]">
                                        Email
                                    </p>

                                    <p className="mt-1 text-sm text-[#B9C3BD] transition-colors duration-300 group-hover:text-[#19C37D]">
                                        jarexenterprises@gmail.com
                                    </p>
                                </div>
                            </a>

                            <div className="flex items-center gap-4">
                                <span className="flex h-11 w-11 items-center justify-center border border-white/8 text-[#19C37D]">
                                    <MapPin size={17} strokeWidth={1.7} />
                                </span>

                                <div>
                                    <p className="text-[10px] uppercase tracking-[0.2em] text-[#4F5B54]">
                                        Based in
                                    </p>

                                    <p className="mt-1 text-sm text-[#B9C3BD]">
                                        Pakistan
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Form */}
                    <div className="border border-white/8 bg-[#050706]">
                        <form onSubmit={handleSubmit} className="p-6 md:p-10 lg:p-14">
                            <div className="grid gap-8 md:grid-cols-2">
                                <div>
                                    <label
                                        htmlFor="name"
                                        className="text-[10px] uppercase tracking-[0.2em] text-[#66736B]"
                                    >
                                        Your name
                                    </label>

                                    <input
                                        id="name"
                                        name="name"
                                        type="text"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        placeholder="John Doe"
                                        className="mt-3 w-full border-b border-white/12 bg-transparent pb-4 text-sm text-[#E8ECE9] outline-none placeholder:text-[#3F4944] transition-colors duration-300 focus:border-[#19C37D]"
                                    />
                                </div>

                                <div>
                                    <label
                                        htmlFor="email"
                                        className="text-[10px] uppercase tracking-[0.2em] text-[#66736B]"
                                    >
                                        Email address
                                    </label>

                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        placeholder="john@example.com"
                                        className="mt-3 w-full border-b border-white/12 bg-transparent pb-4 text-sm text-[#E8ECE9] outline-none placeholder:text-[#3F4944] transition-colors duration-300 focus:border-[#19C37D]"
                                    />
                                </div>

                                <div>
                                    <label
                                        htmlFor="company"
                                        className="text-[10px] uppercase tracking-[0.2em] text-[#66736B]"
                                    >
                                        Company / organization
                                    </label>

                                    <input
                                        id="company"
                                        name="company"
                                        type="text"
                                        value={formData.company}
                                        onChange={handleChange}
                                        placeholder="Your company"
                                        className="mt-3 w-full border-b border-white/12 bg-transparent pb-4 text-sm text-[#E8ECE9] outline-none placeholder:text-[#3F4944] transition-colors duration-300 focus:border-[#19C37D]"
                                    />
                                </div>

                                <div>
                                    <label
                                        htmlFor="projectType"
                                        className="text-[10px] uppercase tracking-[0.2em] text-[#66736B]"
                                    >
                                        Project type
                                    </label>

                                    <select
                                        id="projectType"
                                        name="projectType"
                                        value={formData.projectType}
                                        onChange={handleChange}
                                        required
                                        className="mt-3 w-full border-b border-white/12 bg-[#050706] pb-4 text-sm text-[#E8ECE9] outline-none transition-colors duration-300 focus:border-[#19C37D]"
                                    >
                                        <option value="" disabled>
                                            Select a project type
                                        </option>

                                        <option value="Business Website">
                                            Business Website
                                        </option>

                                        <option value="E-Commerce">
                                            E-Commerce Platform
                                        </option>

                                        <option value="Full-Stack Application">
                                            Full-Stack Application
                                        </option>

                                        <option value="Digital Platform">
                                            Digital Platform
                                        </option>

                                        <option value="Custom Project">
                                            Custom Project
                                        </option>

                                        <option value="Other">
                                            Other
                                        </option>
                                    </select>
                                </div>
                            </div>

                            <div className="mt-10">
                                <label
                                    htmlFor="message"
                                    className="text-[10px] uppercase tracking-[0.2em] text-[#66736B]"
                                >
                                    Tell us about the project
                                </label>

                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows={6}
                                    placeholder="Tell us about your idea, goals, requirements or anything else that would help us understand the project."
                                    className="mt-3 w-full resize-none border-b border-white/12 bg-transparent pb-4 text-sm leading-7 text-[#E8ECE9] outline-none placeholder:text-[#3F4944] transition-colors duration-300 focus:border-[#19C37D]"
                                />
                            </div>

                            <div className="mt-10 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                                <p className="max-w-sm text-xs leading-6 text-[#4F5B54]">
                                    Your inquiry will be securely sent to the JAREX
                                    ENTERPRISES team.
                                </p>

                                <button
                                    type="submit"
                                    className="group flex shrink-0 items-center justify-center gap-3 border border-[#19C37D]/40 bg-[#19C37D]/10 px-6 py-3.5 text-sm font-medium text-[#C9F7E1] transition-all duration-300 hover:border-[#19C37D] hover:bg-[#19C37D] hover:text-[#03110A]"
                                >
                                    <span>Send inquiry</span>

                                    <Send
                                        size={16}
                                        strokeWidth={1.7}
                                        className="transition-transform duration-300 group-hover:translate-x-1"
                                    />
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>

            {/* Closing CTA */}
            <section className="relative overflow-hidden px-5 py-28 md:px-8 md:py-40 lg:px-10">
                <div className="pointer-events-none absolute -bottom-75 left-1/2 h-162.5 w-212.5 -translate-x-1/2 rounded-full bg-[#19C37D]/8 blur-[180px]" />

                <div className="relative z-10 mx-auto max-w-375">
                    <p className="mb-8 text-xs uppercase tracking-[0.3em] text-[#66736B]">
                        JAREX ENTERPRISES
                    </p>

                    <h2 className="max-w-6xl text-5xl font-medium leading-[0.9] tracking-[-0.065em] text-[#F3F5F3] md:text-7xl lg:text-[8rem]">
                        Good ideas
                        <br />
                        deserve to{" "}
                        <span className="text-[#19C37D]">exist.</span>
                    </h2>

                    <div className="mt-16 border-t border-white/8 pt-7">
                        <Link
                            to="/projects"
                            className="group flex w-fit items-center gap-4 text-sm text-[#C4CEC7]"
                        >
                            <span className="transition-colors duration-300 group-hover:text-[#19C37D]">
                                Explore our work
                            </span>

                            <span className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 transition-all duration-300 group-hover:border-[#19C37D] group-hover:bg-[#19C37D] group-hover:text-[#03110A]">
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

export default Contact;