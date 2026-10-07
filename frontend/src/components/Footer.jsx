
import { Link } from "react-router-dom";
import { ArrowUpRight, Mail } from "lucide-react";
import jarexlogo from "../assets/jarex-logo.png";

const footerLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Our Services", path: "/services" },
    { name: "Contact Us", path: "/contact" },
    { name: "Our Work", path: "/projects" },
    { name: "Help center", path: "/help" }, 
    { name: "Privacy policy", path: "/privacy" },
    { name: "Login", path: "/login" }, 
];

function LinkedInIcon() {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-[17px] w-[17px]"
            aria-hidden="true"
        >
            <path d="M20.45 20.45h-3.56v-5.58c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.68H9.35V8.98h3.42v1.57h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.3ZM5.34 7.41a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM3.56 20.45h3.56V8.98H3.56v11.47ZM22.22 0H1.78C.8 0 0 .8 0 1.78v20.44C0 23.2.8 24 1.78 24h20.44c.98 0 1.78-.8 1.78-1.78V1.78C24 .8 23.2 0 22.22 0Z" />
        </svg>
    );
}

function GitHubIcon() {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-[18px] w-[18px]"
            aria-hidden="true"
        >
            <path d="M12 .3a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.42-4.04-1.42-.55-1.4-1.33-1.77-1.33-1.77-1.09-.75.08-.74.08-.74 1.2.08 1.84 1.23 1.84 1.23 1.07 1.83 2.8 1.3 3.49.99.11-.77.42-1.3.76-1.6-2.67-.3-5.47-1.34-5.47-5.93 0-1.31.47-2.38 1.23-3.22-.12-.3-.53-1.52.12-3.17 0 0 1-.32 3.3 1.23a11.5 11.5 0 0 1 6.01 0c2.3-1.55 3.3-1.23 3.3-1.23.65 1.65.24 2.87.12 3.17.76.84 1.23 1.91 1.23 3.22 0 4.6-2.8 5.62-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.69.82.58A12 12 0 0 0 12 .3Z" />
        </svg>
    );
}

function InstagramIcon() {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-[18px] w-[18px]"
            aria-hidden="true"
        >
            <rect x="3" y="3" width="18" height="18" rx="5" />
            <circle cx="12" cy="12" r="4" />
            <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
        </svg>
    );
}

function TikTokIcon() {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-[18px] w-[18px]"
            aria-hidden="true"
        >
            <path d="M16.65 3c.28 1.53 1.16 2.74 2.7 3.48.52.25 1.08.4 1.65.44v3.12a7.97 7.97 0 0 1-4.34-1.32v6.42c0 3.28-2.65 5.86-5.94 5.86A5.72 5.72 0 0 1 5 15.3c0-3.14 2.56-5.68 5.72-5.68.33 0 .66.03.98.08v3.2a2.62 2.62 0 0 0-.98-.19 2.59 2.59 0 1 0 2.59 2.59V3h3.34Z" />
        </svg>
    );
}

function YouTubeIcon() {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-[18px] w-[18px]"
            aria-hidden="true"
        >
            <path d="M23.5 6.2a3.02 3.02 0 0 0-2.13-2.14C19.5 3.55 12 3.55 12 3.55s-7.5 0-9.37.51A3.02 3.02 0 0 0 .5 6.2C0 8.07 0 12 0 12s0 3.93.5 5.8a3.02 3.02 0 0 0 2.13 2.14c1.87.51 9.37.51 9.37.51s7.5 0 9.37-.51a3.02 3.02 0 0 0 2.13-2.14c.5-1.87.5-5.8.5-5.8s0-3.93-.5-5.8ZM9.55 15.57V8.43L15.82 12l-6.27 3.57Z" />
        </svg>
    );
}

const socialLinks = [
    {
        name: "LinkedIn",
        href: "https://www.linkedin.com/in/jareer-ahmad-khan-93279b425/",
        icon: <LinkedInIcon />,
    },
    {
        name: "GitHub",
        href: "https://github.com/jareerahmad",
        icon: <GitHubIcon />,
    },
    {
        name: "Instagram",
        href: "https://www.instagram.com/jarex_enterprises?stkn=MWJxcmljcnRweGhqag%3D%3D&utm_source=qr",
        icon: <InstagramIcon />,
    },
    {
        name: "TikTok",
        href: "http://www.tiktok.com/@jarex_enterprises",
        icon: <TikTokIcon />,
    },
    {
        name: "YouTube",
        href: "https://www.youtube.com/@CodeWithJaree",
        icon: <YouTubeIcon />,
    },
    {
        name: "Email",
        href: "https://mail.google.com/mail/u/0/#inbox?compose=new",
        icon: <Mail size={17} strokeWidth={1.8} />,
    },
];

function Footer() {
    return (
        <footer className="relative overflow-hidden border-t border-white/[0.08] bg-[#050706] px-5 pb-7 pt-16 md:px-8 md:pb-8 md:pt-20 lg:px-10">

            {/* Background glow */}
            <div className="pointer-events-none absolute -right-40 -top-40 h-96 w-96 rounded-full bg-[#19C37D]/[0.035] blur-3xl" />

            <div className="relative mx-auto max-w-[1500px]">

                {/* Main Footer */}
                <div className="grid gap-14 lg:grid-cols-[1.2fr_0.8fr]">

                    {/* Brand */}
                    <div>
                        {/* Logo */}
                        <Link
                            to="/"
                            className="group flex items-center gap-3"
                        >
                            {/* J-E Logo Mark */}
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center md:h-11 md:w-11">
                                <img
                                    src={jarexlogo}
                                    alt="JAREX"
                                    className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-[1.04]"
                                />
                            </div>

                            {/* Brand Name */}
                            <div className="flex flex-col justify-center leading-none">
                                <span
                                    className={`font-[Sora] text-[18px] font-semibold tracking-[-0.04em] transition-colors duration-300 md:text-[20px] ${location.pathname === "/"
                                        ? "text-[#19C37D]"
                                        : "text-[#F3F5F3] group-hover:text-[#19C37D]"
                                        }`}
                                >
                                    JAREX
                                </span>

                                <span className="mt-1.5 font-[Sora] text-[7px] font-medium uppercase tracking-[0.32em] text-[#7E8983] md:text-[8px]">
                                    ENTERPRISES
                                </span>
                            </div>
                        </Link>

                        <p className="mt-6 max-w-md text-sm leading-7 text-[#68746D]">
                            Building modern digital products, business platforms,
                            and meaningful web experiences for ambitious ideas.
                        </p>

                        {/* Social Links */}
                        <div className="mt-7 flex flex-wrap items-center gap-2.5">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.name}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={social.name}
                                    className="group flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.015] text-[#68746D] transition-all duration-300 hover:-translate-y-1 hover:border-[#19C37D]/40 hover:bg-[#19C37D]/10 hover:text-[#19C37D] hover:shadow-[0_8px_25px_rgba(25,195,125,0.08)]"
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Navigation */}
                    <div className="lg:justify-self-end">
                        <p className="mb-5 text-[10px] font-medium uppercase tracking-[0.25em] text-[#4F5B54]">
                            Explore
                        </p>

                        <nav className="grid grid-cols-2 gap-x-16 gap-y-4 sm:grid-cols-3 lg:grid-cols-2">
                            {footerLinks.map((link) => (
                                <Link
                                    key={link.path}
                                    to={link.path}
                                    className="group flex items-center gap-1.5 text-sm text-[#78847D] transition-colors duration-300 hover:text-[#19C37D]"
                                >
                                    <span>{link.name}</span>

                                    <ArrowUpRight
                                        size={12}
                                        className="-translate-x-1 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100"
                                    />
                                </Link>
                            ))}
                        </nav>
                    </div>
                </div>


                {/* Bottom */}
                <div className="mt-8 flex flex-col gap-4 border-t border-white/[0.06] pt-6 sm:flex-row sm:items-center sm:justify-between">

                    <p className="text-[11px] text-[#4F5B54]">
                        © {new Date().getFullYear()} JAREX ENTERPRISES. All rights reserved.
                    </p>

                    <div className="flex items-center gap-5">
                        <span className="hidden text-[10px] uppercase tracking-[0.16em] text-[#3F4943] sm:inline">
                            Digital • Modern • Purposeful
                        </span>

                        <Link
                            to="/contact"
                            className="hidden group items-center gap-1.5 text-[11px] text-[#68746D] transition-colors duration-300 sm:flex hover:text-[#19C37D]"
                        >
                            Get in touch

                            <ArrowUpRight
                                size={12}
                                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                            />
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
