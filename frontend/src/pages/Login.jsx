import { ArrowLeft, ArrowRight, LockKeyhole, Mail } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { useAuth } from "../context/AuthContext";
import Reveal from "../components/Reveal";

function Login() {
    const navigate = useNavigate();
    const { login } = useAuth();

    const [form, setForm] = useState({
        email: "",
        password: "",
    });

    const [error, setError] = useState("");

    const handleChange = (event) => {
        const { name, value } = event.target;

        setForm((current) => ({
            ...current,
            [name]: value,
        }));

        setError("");
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const result = await login(form);

        if (!result.success) {
            setError(result.message);
            return;
        }

        navigate("/");
    };

    return (
        <main className="min-h-screen bg-[#050706] px-5 pb-20 pt-32 text-[#F3F5F3] md:px-8 md:pt-36 lg:px-10">
            <div className="mx-auto grid max-w-[1100px] gap-12 lg:grid-cols-[0.8fr_1fr] lg:items-center">

                {/* Intro */}
                <Reveal>
                    <div>

                        <p className="text-xs font-medium uppercase tracking-[0.3em] text-[#19C37D]">
                            Welcome back
                        </p>

                        <h1 className="mt-5 max-w-xl text-5xl font-semibold leading-[0.95] tracking-[-0.055em] md:text-6xl lg:text-7xl">
                            Sign in to your
                            <span className="block text-[#68746D]">
                                JAREX account.
                            </span>
                        </h1>

                        <p className="mt-6 max-w-md text-sm leading-7 text-[#89938D] md:text-base">
                            Access your profile and keep your JAREX experience connected
                            across the platform.
                        </p>
                    </div>
                </Reveal>

                {/* Form */}
                <Reveal delay={0.08}>
                    <div className="border border-white/[0.08] bg-[#0B100D] p-6 sm:p-8 md:p-10">

                        <div className="mb-8">
                            <h2 className="text-2xl font-semibold tracking-[-0.04em]">
                                Login
                            </h2>

                            <p className="mt-2 text-sm text-[#68746D]">
                                Enter your account details below.
                            </p>
                        </div>

                        {error && (
                            <div className="mb-6 border border-red-400/20 bg-red-400/[0.06] px-4 py-3 text-sm text-red-300">
                                {error}
                            </div>
                        )}

                        <form onSubmit={handleSubmit} className="space-y-5">

                            {/* Email */}
                            <div>
                                <label
                                    htmlFor="email"
                                    className="mb-2 block text-xs font-medium uppercase tracking-[0.18em] text-[#7E8983]"
                                >
                                    Email
                                </label>

                                <div className="relative">
                                    <Mail
                                        size={17}
                                        className="absolute left-4 top-1/2 -translate-y-1/2 text-[#4F5B54]"
                                    />

                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        required
                                        value={form.email}
                                        onChange={handleChange}
                                        placeholder="you@example.com"
                                        className="w-full border border-white/[0.08] bg-[#050706] px-11 py-3.5 text-sm text-[#F3F5F3] outline-none transition-all duration-300 placeholder:text-[#4F5B54] focus:border-[#19C37D]/50"
                                    />
                                </div>
                            </div>

                            {/* Password */}
                            <div>
                                <label
                                    htmlFor="password"
                                    className="mb-2 block text-xs font-medium uppercase tracking-[0.18em] text-[#7E8983]"
                                >
                                    Password
                                </label>

                                <div className="relative">
                                    <LockKeyhole
                                        size={17}
                                        className="absolute left-4 top-1/2 -translate-y-1/2 text-[#4F5B54]"
                                    />

                                    <input
                                        id="password"
                                        name="password"
                                        type="password"
                                        required
                                        value={form.password}
                                        onChange={handleChange}
                                        placeholder="••••••••"
                                        className="w-full border border-white/[0.08] bg-[#050706] px-11 py-3.5 text-sm text-[#F3F5F3] outline-none transition-all duration-300 placeholder:text-[#4F5B54] focus:border-[#19C37D]/50"
                                    />
                                </div>
                            </div>

                            <button
                                type="submit"
                                className="group flex w-full items-center justify-between bg-[#19C37D] px-5 py-4 text-sm font-semibold text-[#03110A] transition-all duration-300 hover:bg-[#42D998]"
                            >
                                <span>Sign in</span>

                                <ArrowRight
                                    size={18}
                                    className="transition-transform duration-300 group-hover:translate-x-1"
                                />
                            </button>
                        </form>

                        <div className="mt-8 border-t border-white/[0.08] pt-7 text-center">
                            <p className="text-sm text-[#68746D]">
                                Don't have an account?
                            </p>

                            <Link
                                to="/register"
                                className="mt-2 inline-block text-sm font-medium text-[#19C37D] transition-colors duration-300 hover:text-[#C9F7E1]"
                            >
                                Create an account
                            </Link>
                        </div>

                    </div>
                </Reveal>

            </div>
        </main>
    );
}

export default Login;