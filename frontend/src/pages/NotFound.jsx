import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

function NotFound() {
    return (
        <main className="relative flex min-h-screen items-center overflow-hidden bg-[#050706] px-5 text-[#F3F5F3] md:px-8 lg:px-10">
            <div className="pointer-events-none absolute right-[-15%] top-[-20%] h-[700px] w-[700px] rounded-full bg-[#19C37D]/[0.06] blur-[170px]" />

            <div className="relative z-10 mx-auto w-full max-w-[1500px]">
                <Link
                    to="/"
                    className="group mb-20 inline-flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-[#68746D] transition-colors duration-300 hover:text-[#19C37D]"
                >
                    <ArrowLeft
                        size={15}
                        strokeWidth={1.7}
                        className="transition-transform duration-300 group-hover:-translate-x-1"
                    />
                    Back to JAREX
                </Link>

                <div className="max-w-6xl">
                    <p className="mb-8 text-xs uppercase tracking-[0.3em] text-[#19C37D]">
                        404 — Page not found
                    </p>

                    <h1 className="text-[7rem] font-medium leading-[0.78] tracking-[-0.08em] text-[#F3F5F3] sm:text-[9rem] md:text-[13rem] lg:text-[16rem]">
                        404
                    </h1>

                    <div className="mt-10 max-w-xl">
                        <h2 className="text-3xl font-medium tracking-[-0.04em] text-[#DCE3DE] md:text-4xl">
                            This page doesn't exist.
                        </h2>

                        <p className="mt-5 text-sm leading-7 text-[#69756E] md:text-base">
                            The page you're looking for may have moved, been removed or
                            simply never existed.
                        </p>
                    </div>

                    <div className="mt-10">
                        <Link
                            to="/"
                            className="group inline-flex items-center gap-4 border border-[#19C37D]/40 bg-[#19C37D]/10 px-5 py-3.5 text-sm font-medium text-[#C9F7E1] transition-all duration-300 hover:border-[#19C37D] hover:bg-[#19C37D] hover:text-[#03110A]"
                        >
                            <span>Return home</span>

                            <ArrowUpRight
                                size={17}
                                strokeWidth={1.7}
                                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                            />
                        </Link>
                    </div>
                </div>

                <div className="absolute bottom-[-20vh] right-0 hidden text-[12rem] font-medium leading-none tracking-[-0.08em] text-white/[0.015] lg:block">
                    JAREX
                </div>
            </div>
        </main>
    );
}

export default NotFound;