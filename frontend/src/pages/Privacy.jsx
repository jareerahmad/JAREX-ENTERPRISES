// import { ArrowLeft, ShieldCheck } from "lucide-react";
// import { Link } from "react-router-dom";

// function Privacy() {
//     return (
//         <main className="min-h-screen bg-[#050706] text-[#F3F5F3]">
//             {/* Header */}
//             <section className="border-b border-white/[0.08] px-5 pb-20 pt-36 md:px-8 md:pb-24 md:pt-44 lg:px-10">
//                 <div className="mx-auto max-w-[1100px]">
//                     <div className="mb-10 flex items-center gap-3">
//                         <span className="h-px w-8 bg-[#19C37D]" />

//                         <span className="text-xs uppercase tracking-[0.3em] text-[#19C37D]">
//                             Legal / Privacy
//                         </span>
//                     </div>

//                     <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
//                         <div>
//                             <h1 className="text-5xl font-medium leading-[0.9] tracking-[-0.06em] md:text-7xl">
//                                 Privacy
//                                 <br />
//                                 <span className="text-[#52615A]">
//                                     Policy.
//                                 </span>
//                             </h1>
//                         </div>

//                         <div className="flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-[#59655E]">
//                             <ShieldCheck
//                                 size={17}
//                                 className="text-[#19C37D]"
//                             />
//                             JAREX ENTERPRISES
//                         </div>
//                     </div>
//                 </div>
//             </section>

//             {/* Content */}
//             <section className="px-5 py-20 md:px-8 md:py-28 lg:px-10">
//                 <div className="mx-auto max-w-[1100px]">
//                     <div className="space-y-16">

//                         {/* Introduction */}
//                         <article>
//                             <p className="mb-5 text-xs uppercase tracking-[0.25em] text-[#19C37D]">
//                                 01 — Introduction
//                             </p>

//                             <p className="max-w-4xl text-sm leading-8 text-[#89938D] md:text-base">
//                                 JAREX ENTERPRISES respects your privacy and
//                                 is committed to protecting the information
//                                 you provide when using this website. This
//                                 policy explains what information may be
//                                 collected, how it is used and how it is
//                                 handled.
//                             </p>
//                         </article>

//                         {/* Information */}
//                         <article className="border-t border-white/[0.08] pt-10">
//                             <p className="mb-5 text-xs uppercase tracking-[0.25em] text-[#19C37D]">
//                                 02 — Information we collect
//                             </p>

//                             <p className="max-w-4xl text-sm leading-8 text-[#89938D] md:text-base">
//                                 When you create an account or contact JAREX
//                                 through this website, information such as
//                                 your name, email address and information
//                                 included in your message may be collected.
//                             </p>
//                         </article>

//                         {/* Use */}
//                         <article className="border-t border-white/[0.08] pt-10">
//                             <p className="mb-5 text-xs uppercase tracking-[0.25em] text-[#19C37D]">
//                                 03 — How information is used
//                             </p>

//                             <p className="max-w-4xl text-sm leading-8 text-[#89938D] md:text-base">
//                                 Information submitted through the website may
//                                 be used to respond to inquiries, provide
//                                 requested services, manage user accounts and
//                                 operate and improve the JAREX website.
//                             </p>
//                         </article>

//                         {/* Security */}
//                         <article className="border-t border-white/[0.08] pt-10">
//                             <p className="mb-5 text-xs uppercase tracking-[0.25em] text-[#19C37D]">
//                                 04 — Data security
//                             </p>

//                             <p className="max-w-4xl text-sm leading-8 text-[#89938D] md:text-base">
//                                 JAREX takes reasonable measures to protect
//                                 information handled through its systems.
//                                 However, no method of transmission or
//                                 electronic storage can be guaranteed to be
//                                 completely secure.
//                             </p>
//                         </article>

//                         {/* Accounts */}
//                         <article className="border-t border-white/[0.08] pt-10">
//                             <p className="mb-5 text-xs uppercase tracking-[0.25em] text-[#19C37D]">
//                                 05 — Accounts
//                             </p>

//                             <p className="max-w-4xl text-sm leading-8 text-[#89938D] md:text-base">
//                                 If you create an account on the website,
//                                 account information is stored to provide
//                                 authentication and account-related
//                                 functionality. Passwords are protected using
//                                 secure password hashing rather than being
//                                 stored as plain text.
//                             </p>
//                         </article>

//                         {/* Third Party */}
//                         <article className="border-t border-white/[0.08] pt-10">
//                             <p className="mb-5 text-xs uppercase tracking-[0.25em] text-[#19C37D]">
//                                 06 — Third-party services
//                             </p>

//                             <p className="max-w-4xl text-sm leading-8 text-[#89938D] md:text-base">
//                                 The website may rely on third-party
//                                 infrastructure and services to provide
//                                 hosting, database, authentication and other
//                                 technical functionality. Such services may
//                                 process information as required to operate
//                                 the website.
//                             </p>
//                         </article>

//                         {/* Changes */}
//                         <article className="border-t border-white/[0.08] pt-10">
//                             <p className="mb-5 text-xs uppercase tracking-[0.25em] text-[#19C37D]">
//                                 07 — Policy updates
//                             </p>

//                             <p className="max-w-4xl text-sm leading-8 text-[#89938D] md:text-base">
//                                 This Privacy Policy may be updated when the
//                                 website, services or data practices change.
//                                 Any updated version will be published on this
//                                 page.
//                             </p>
//                         </article>

//                         {/* Contact */}
//                         <article className="border-t border-white/[0.08] pt-10">
//                             <p className="mb-5 text-xs uppercase tracking-[0.25em] text-[#19C37D]">
//                                 08 — Contact
//                             </p>

//                             <p className="max-w-4xl text-sm leading-8 text-[#89938D] md:text-base">
//                                 If you have questions about this Privacy
//                                 Policy or how information is handled, please
//                                 contact JAREX ENTERPRISES through the contact
//                                 page.
//                             </p>

//                             <Link
//                                 to="/contact"
//                                 className="mt-7 inline-flex items-center border border-[#1B2922] px-5 py-3 text-xs uppercase tracking-[0.2em] text-[#C4CEC7] transition-all duration-300 hover:border-[#19C37D] hover:bg-[#19C37D] hover:text-[#03110A]"
//                             >
//                                 Contact JAREX
//                             </Link>
//                         </article>
//                     </div>
//                 </div>
//             </section>

//             {/* Footer Back Link */}
//             <div className="border-t border-white/[0.08] px-5 py-7 md:px-8 lg:px-10">
//                 <div className="mx-auto max-w-[1100px]">
//                     <Link
//                         to="/"
//                         className="group flex w-fit items-center gap-3 text-xs uppercase tracking-[0.2em] text-[#59655E] transition-colors duration-300 hover:text-[#19C37D]"
//                     >
//                         <ArrowLeft
//                             size={15}
//                             className="transition-transform duration-300 group-hover:-translate-x-1"
//                         />
//                         Back to JAREX
//                     </Link>
//                 </div>
//             </div>
//         </main>
//     );
// }

// export default Privacy;






import {
    ArrowLeft,
    ArrowUpRight,
    CheckCircle2,
    ShieldCheck,
} from "lucide-react";
import { Link } from "react-router-dom";

function Privacy() {
    const sections = [
        {
            number: "01",
            title: "Information we collect",
            content:
                "When you create an account, submit a contact form or otherwise provide information through the website, we may collect information such as your name, email address and the information contained in your message.",
        },
        {
            number: "02",
            title: "How we use information",
            content:
                "Information may be used to respond to inquiries, communicate with you, provide requested services, manage accounts, maintain website functionality and improve the JAREX ENTERPRISES experience.",
        },
        {
            number: "03",
            title: "Account information",
            content:
                "If you create an account, information associated with that account is stored to provide authentication and account functionality. Passwords are protected using secure password hashing and are not stored as plain text.",
        },
        {
            number: "04",
            title: "Messages and inquiries",
            content:
                "Information submitted through the Contact page may be stored so that JAREX ENTERPRISES can review and respond to your inquiry. Access to administrative message information is restricted to authorized administrators.",
        },
        {
            number: "05",
            title: "Data security",
            content:
                "JAREX ENTERPRISES takes reasonable technical and organizational measures to protect information handled through its systems. However, no internet transmission or electronic storage system can be guaranteed to be completely secure.",
        },
        {
            number: "06",
            title: "Third-party infrastructure",
            content:
                "The website may use third-party infrastructure and services for hosting, database storage, authentication and other technical functionality. These providers may process information as necessary to provide their services.",
        },
        {
            number: "07",
            title: "Data retention",
            content:
                "Information may be retained for as long as reasonably necessary to provide website functionality, respond to inquiries, maintain account records or meet legitimate operational requirements.",
        },
        {
            number: "08",
            title: "Your choices",
            content:
                "You can choose not to provide optional information. If you have questions about information associated with your account or a message you have submitted, you can contact JAREX ENTERPRISES for assistance.",
        },
        {
            number: "09",
            title: "Policy updates",
            content:
                "This Privacy Policy may be updated when the website, services or data practices change. The latest version will be published on this page.",
        },
    ];

    return (
        <main className="min-h-screen bg-[#050706] text-[#F3F5F3]">
            {/* Hero */}
            <section className="relative overflow-hidden border-b border-white/[0.08] px-5 pb-24 pt-36 md:px-8 md:pb-32 md:pt-44 lg:px-10">
                <div className="pointer-events-none absolute -right-48 top-0 h-[500px] w-[500px] rounded-full bg-[#19C37D]/[0.045] blur-3xl" />

                <div className="relative mx-auto max-w-[1200px]">
                    <div className="mb-10 flex items-center gap-3">
                        <span className="h-px w-8 bg-[#19C37D]" />

                        <span className="text-xs uppercase tracking-[0.3em] text-[#19C37D]">
                            Legal / Privacy
                        </span>
                    </div>

                    <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
                        <div>
                            <h1 className="text-5xl font-medium leading-[0.9] tracking-[-0.06em] md:text-7xl lg:text-[6.5rem]">
                                Privacy
                                <br />
                                <span className="text-[#52615A]">
                                    Policy.
                                </span>
                            </h1>
                        </div>

                        <div className="max-w-xs">
                            <div className="mb-4 flex h-12 w-12 items-center justify-center border border-[#1B2922] text-[#19C37D]">
                                <ShieldCheck
                                    size={21}
                                    strokeWidth={1.5}
                                />
                            </div>

                            <p className="text-sm leading-7 text-[#707C75]">
                                We believe trust starts with being clear about
                                how information is handled.
                            </p>

                            <p className="mt-5 text-[10px] uppercase tracking-[0.2em] text-[#465149]">
                                Last updated · 2026
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Intro */}
            <section className="px-5 py-20 md:px-8 md:py-28 lg:px-10">
                <div className="mx-auto max-w-[1200px]">
                    <div className="grid gap-12 lg:grid-cols-[0.35fr_1fr]">
                        <div>
                            <p className="text-xs uppercase tracking-[0.3em] text-[#19C37D]">
                                Our commitment
                            </p>
                        </div>

                        <div>
                            <p className="max-w-4xl text-xl leading-9 tracking-[-0.02em] text-[#C4CEC7] md:text-2xl md:leading-10">
                                JAREX ENTERPRISES respects your privacy. This
                                policy explains what information may be
                                collected through this website, why it may be
                                used and how it is handled.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Policy Sections */}
            <section className="border-t border-white/[0.08] px-5 md:px-8 lg:px-10">
                <div className="mx-auto max-w-[1200px]">
                    {sections.map((section) => (
                        <article
                            key={section.number}
                            className="grid gap-8 border-b border-white/[0.08] py-12 md:grid-cols-[0.2fr_0.8fr] md:gap-12 md:py-16"
                        >
                            <div className="flex items-start gap-4">
                                <span className="text-xs tracking-[0.2em] text-[#19C37D]">
                                    {section.number}
                                </span>

                                <span className="h-px w-8 translate-y-2 bg-[#1B2922]" />
                            </div>

                            <div>
                                <h2 className="text-2xl font-medium tracking-[-0.04em] text-[#E9EEE9] md:text-3xl">
                                    {section.title}
                                </h2>

                                <p className="mt-5 max-w-3xl text-sm leading-8 text-[#737F78] md:text-base">
                                    {section.content}
                                </p>
                            </div>
                        </article>
                    ))}
                </div>
            </section>

            {/* Privacy Principles */}
            <section className="px-5 py-24 md:px-8 md:py-32 lg:px-10">
                <div className="mx-auto max-w-[1200px]">
                    <div className="border border-[#1B2922] bg-[#080D0A] p-8 md:p-12 lg:p-16">
                        <div className="grid gap-12 md:grid-cols-[0.7fr_1.3fr] md:items-center">
                            <div>
                                <p className="text-xs uppercase tracking-[0.3em] text-[#19C37D]">
                                    In practice
                                </p>

                                <h2 className="mt-5 text-3xl font-medium leading-[1] tracking-[-0.05em] text-[#F3F5F3] md:text-5xl">
                                    Privacy should be
                                    <br />
                                    <span className="text-[#52615A]">
                                        understandable.
                                    </span>
                                </h2>
                            </div>

                            <div className="space-y-5">
                                {[
                                    "We only ask for information that supports the website's functionality or communication.",
                                    "Account passwords are protected using secure hashing.",
                                    "Administrative information is restricted to authorized access.",
                                    "Questions about your information can be directed to JAREX.",
                                ].map((item) => (
                                    <div
                                        key={item}
                                        className="flex gap-4"
                                    >
                                        <CheckCircle2
                                            size={18}
                                            className="mt-1 shrink-0 text-[#19C37D]"
                                            strokeWidth={1.6}
                                        />

                                        <p className="text-sm leading-7 text-[#89938D]">
                                            {item}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact */}
            <section className="border-t border-white/[0.08] px-5 py-24 md:px-8 md:py-32 lg:px-10">
                <div className="mx-auto max-w-[1200px]">
                    <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
                        <div>
                            <p className="mb-5 text-xs uppercase tracking-[0.3em] text-[#19C37D]">
                                Questions about privacy?
                            </p>

                            <h2 className="max-w-3xl text-4xl font-medium leading-[0.95] tracking-[-0.05em] md:text-6xl">
                                We're here to
                                <br />
                                <span className="text-[#52615A]">
                                    help.
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

export default Privacy;