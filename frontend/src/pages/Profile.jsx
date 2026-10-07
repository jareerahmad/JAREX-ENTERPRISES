import {
    CalendarDays,
    CheckCircle2,
    LogOut,
    Mail,
    ShieldCheck,
    User,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

import { useAuth } from "../context/AuthContext";
import Reveal from "../components/Reveal";

function Profile() {
    const navigate = useNavigate();
    const { user, logout } = useAuth();

    if (!user) {
        return null;
    }

    const handleLogout = () => {
        logout();
        navigate("/");
    };

    return (
        <main className="min-h-screen bg-[#050706] px-5 pb-24 pt-32 text-[#F3F5F3] md:px-8 md:pt-36 lg:px-10">
            <div className="mx-auto max-w-[1100px]">

                {/* Header */}
                <Reveal delay={0.05}>
                    <div className="mt-10 max-w-3xl">
                        <p className="text-xs font-medium uppercase tracking-[0.3em] text-[#19C37D]">
                            Account
                        </p>

                        <h1 className="mt-4 text-5xl font-semibold leading-[0.95] tracking-[-0.055em] md:text-7xl">
                            Your profile.
                        </h1>

                        <p className="mt-6 max-w-xl text-sm leading-7 text-[#89938D] md:text-base">
                            Manage your JAREX account information and view the details
                            associated with your account.
                        </p>
                    </div>
                </Reveal>

                {/* Profile card */}
                <Reveal delay={0.1}>
                    <section className="mt-12 overflow-hidden border border-white/[0.08] bg-[#0B100D]">

                        {/* Profile header */}
                        <div className="relative border-b border-white/[0.08] px-6 py-8 md:px-10 md:py-10">

                            {/* Background glow */}
                            <div className="pointer-events-none absolute -right-20 -top-32 h-72 w-72 rounded-full bg-[#19C37D]/[0.05] blur-[100px]" />

                            <div className="relative flex flex-col gap-7 sm:flex-row sm:items-center sm:justify-between">

                                <div className="flex items-center gap-5">

                                    {/* Avatar */}
                                    <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border border-[#19C37D]/30 bg-[#19C37D]/10 text-[#19C37D] shadow-[0_0_35px_rgba(25,195,125,0.08)] md:h-20 md:w-20">
                                        <User
                                            size={28}
                                            strokeWidth={1.5}
                                        />
                                    </div>

                                    <div>
                                        <p className="text-[10px] font-medium uppercase tracking-[0.25em] text-[#4F5B54]">
                                            Signed in as
                                        </p>

                                        <h2 className="mt-1 text-2xl font-semibold tracking-[-0.04em] md:text-3xl">
                                            {user.name}
                                        </h2>

                                        <p className="mt-1 text-sm text-[#68746D]">
                                            {user.email}
                                        </p>
                                    </div>

                                </div>

                                {/* Active status */}
                                <div className="flex items-center gap-2 self-start border border-[#19C37D]/20 bg-[#19C37D]/[0.06] px-3 py-2 sm:self-auto">
                                    <span className="h-1.5 w-1.5 rounded-full bg-[#19C37D] shadow-[0_0_10px_rgba(25,195,125,0.8)]" />

                                    <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-[#8EDDBA]">
                                        Account active
                                    </span>
                                </div>

                            </div>
                        </div>

                        {/* Account information */}
                        <div className="px-6 py-8 md:px-10 md:py-10">

                            <div className="mb-7">
                                <p className="text-xs font-medium uppercase tracking-[0.25em] text-[#19C37D]">
                                    Account information
                                </p>

                                <p className="mt-2 text-sm text-[#68746D]">
                                    Basic information connected to your JAREX account.
                                </p>
                            </div>

                            <div className="grid gap-4 md:grid-cols-2">

                                {/* Name */}
                                <div className="border border-white/[0.07] bg-[#050706] p-5 transition-colors duration-300 hover:border-[#19C37D]/20">
                                    <div className="flex items-center gap-3">
                                        <div className="flex h-9 w-9 items-center justify-center border border-white/[0.08] bg-[#0B100D] text-[#19C37D]">
                                            <User size={16} strokeWidth={1.7} />
                                        </div>

                                        <div>
                                            <p className="text-[10px] uppercase tracking-[0.2em] text-[#4F5B54]">
                                                Account name
                                            </p>

                                            <p className="mt-1 text-sm font-medium text-[#D7DED9]">
                                                {user.name}
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Email */}
                                <div className="border border-white/[0.07] bg-[#050706] p-5 transition-colors duration-300 hover:border-[#19C37D]/20">
                                    <div className="flex items-center gap-3">
                                        <div className="flex h-9 w-9 items-center justify-center border border-white/[0.08] bg-[#0B100D] text-[#19C37D]">
                                            <Mail size={16} strokeWidth={1.7} />
                                        </div>

                                        <div className="min-w-0">
                                            <p className="text-[10px] uppercase tracking-[0.2em] text-[#4F5B54]">
                                                Email address
                                            </p>

                                            <p className="mt-1 truncate text-sm font-medium text-[#D7DED9]">
                                                {user.email}
                                            </p>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            {/* Account information note */}
                            <div className="mt-8 grid gap-4 border-t border-white/[0.08] pt-8 sm:grid-cols-3">

                                <div className="flex gap-3">
                                    <ShieldCheck
                                        size={18}
                                        strokeWidth={1.5}
                                        className="mt-0.5 shrink-0 text-[#19C37D]"
                                    />

                                    <div>
                                        <p className="text-sm font-medium text-[#C8D0CB]">
                                            Secure account
                                        </p>

                                        <p className="mt-1 text-xs leading-5 text-[#5F6B64]">
                                            Your account is connected to your JAREX profile.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex gap-3">
                                    <CheckCircle2
                                        size={18}
                                        strokeWidth={1.5}
                                        className="mt-0.5 shrink-0 text-[#19C37D]"
                                    />

                                    <div>
                                        <p className="text-sm font-medium text-[#C8D0CB]">
                                            Active status
                                        </p>

                                        <p className="mt-1 text-xs leading-5 text-[#5F6B64]">
                                            You are currently signed in to JAREX.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex gap-3">
                                    <CalendarDays
                                        size={18}
                                        strokeWidth={1.5}
                                        className="mt-0.5 shrink-0 text-[#19C37D]"
                                    />

                                    <div>
                                        <p className="text-sm font-medium text-[#C8D0CB]">
                                            Account access
                                        </p>

                                        <p className="mt-1 text-xs leading-5 text-[#5F6B64]">
                                            Your account gives you access to JAREX features.
                                        </p>
                                    </div>
                                </div>

                            </div>

                            {/* Logout */}
                            <div className="mt-10 flex flex-col gap-4 border-t border-white/[0.08] pt-8 sm:flex-row sm:items-center sm:justify-between">

                                <div>
                                    <p className="text-sm font-medium text-[#C8D0CB]">
                                        Sign out of your account
                                    </p>

                                    <p className="mt-1 text-xs text-[#5F6B64]">
                                        You can sign back in whenever you want.
                                    </p>
                                </div>

                                <button
                                    type="button"
                                    onClick={handleLogout}
                                    className="group inline-flex items-center justify-center gap-2 border border-red-400/20 px-5 py-3 text-sm font-medium text-[#B9AAA8] transition-all duration-300 hover:border-red-400/50 hover:bg-red-400/[0.06] hover:text-red-300"
                                >
                                    <LogOut
                                        size={16}
                                        strokeWidth={1.7}
                                        className="transition-transform duration-300 group-hover:-translate-x-0.5"
                                    />

                                    Logout
                                </button>

                            </div>

                        </div>
                    </section>
                </Reveal>

            </div>
        </main>
    );
}

export default Profile;