
import { ArrowUpRight, Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

function Contact() {
    return (
        <section
            id="contact"
            className="relative overflow-hidden bg-[#080D0A] px-5 py-28 md:px-8 md:py-40 lg:px-10"
        >
            {/* Ambient Glow */}
            <div className="pointer-events-none absolute bottom-[-280px] left-1/2 h-[600px] w-[800px] -translate-x-1/2 rounded-full bg-[#19C37D]/[0.08] blur-[170px]" />

            <div className="relative z-10 mx-auto max-w-[1500px]">

                {/* Header */}
                <div className="mb-20 flex items-start justify-between border-t border-white/[0.08] pt-5">
                    <div className="flex items-center gap-3">
                        <span className="h-px w-8 bg-[#19C37D]" />

                        <span className="text-xs uppercase tracking-[0.3em] text-[#19C37D]">
                            05 — Contact
                        </span>
                    </div>

                    <span className="hidden text-xs uppercase tracking-[0.25em] text-[#4F5B54] md:block">
                        Start a project
                    </span>
                </div>

                {/* Main CTA */}
                <div className="max-w-6xl">

                    <p className="mb-8 text-xs uppercase tracking-[0.3em] text-[#66736B] md:text-sm">
                        Have something worth building?
                    </p>

                    <h2 className="text-5xl font-medium leading-[0.88] tracking-[-0.065em] text-[#F3F5F3] md:text-7xl lg:text-[9rem]">
                        Let's make
                        <br />
                        <span className="text-[#19C37D]">it happen.</span>
                    </h2>

                </div>

                {/* Contact Details */}
                <div className="mt-24 border-t border-white/[0.08] pt-10">

                    <div className="grid gap-12 lg:grid-cols-[1fr_1fr_auto] lg:items-end">

                        {/* Email */}
                        <a
                            href="https://mail.google.com/mail/u/0/#inbox?compose=new"
                            className="group w-fit"
                        >
                            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full border border-white/[0.1] text-[#68746D] transition-all duration-500 group-hover:border-[#19C37D] group-hover:bg-[#19C37D] group-hover:text-[#03110A]">
                                <Mail size={17} strokeWidth={1.7} />
                            </div>

                            <p className="mb-2 text-[10px] uppercase tracking-[0.3em] text-[#52615A]">
                                Email
                            </p>

                            <p className="text-base text-[#C4CEC7] transition-colors duration-300 group-hover:text-[#19C37D] md:text-lg">
                                jarexenterprises@gmail.com
                            </p>
                        </a>

                        {/* Location */}
                        <div>
                            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full border border-white/[0.1] text-[#68746D]">
                                <MapPin size={17} strokeWidth={1.7} />
                            </div>

                            <p className="mb-2 text-[10px] uppercase tracking-[0.3em] text-[#52615A]">
                                Location
                            </p>

                            <p className="text-base text-[#C4CEC7] md:text-lg">
                                Pakistan
                            </p>
                        </div>

                        {/* CTA */}
                        <Link
                            to="/contact"
                            className="group flex w-fit items-center gap-4 text-base text-[#DCE5DF] lg:justify-self-end"
                        >
                            <span className="transition-colors duration-300 group-hover:text-[#19C37D]">
                                Start a conversation
                            </span>

                            <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[#19C37D] text-[#03110A] transition-all duration-500 group-hover:rotate-6 group-hover:shadow-[0_0_30px_rgba(25,195,125,0.25)]">
                                <ArrowUpRight
                                    size={20}
                                    strokeWidth={1.7}
                                    className="transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                                />
                            </span>
                        </Link>

                    </div>
                </div>

                {/* Closing Line */}
                <div className="mt-24 flex flex-col gap-4 border-t border-white/[0.08] pt-6 sm:flex-row sm:items-center sm:justify-between">
                    <span className="text-[10px] uppercase tracking-[0.3em] text-[#3F4B44]">
                        Open for meaningful projects
                    </span>

                    <div className="flex items-center gap-3">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#19C37D] shadow-[0_0_10px_rgba(25,195,125,0.7)]" />

                        <span className="text-[10px] uppercase tracking-[0.3em] text-[#52615A]">
                            JAREX ENTERPRISES
                        </span>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default Contact;
