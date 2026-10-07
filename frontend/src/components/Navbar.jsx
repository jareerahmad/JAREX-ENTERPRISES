
import { useEffect, useState } from "react";
import {
    ArrowUpRight,
    ChevronDown,
    LogIn,
    LogOut,
    Menu,
    User,
    UserPlus,
    LayoutDashboard,
    X,
} from "lucide-react";
import {
    Link,
    useLocation,
    useNavigate,
} from "react-router-dom";

import { useAuth } from "../context/AuthContext";
import jarexlogo from "../assets/jarex-logo.png";

const navLinks = [
    { name: "Home", path: "/" },
    { name: "Work", path: "/projects" },
    { name: "Services", path: "/services" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
];

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [accountOpen, setAccountOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const location = useLocation();
    const navigate = useNavigate();

    const { user, logout } = useAuth();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 40);
        };

        handleScroll();

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    useEffect(() => {
        setMenuOpen(false);
        setAccountOpen(false);
    }, [location.pathname]);

    const closeMenu = () => {
        setMenuOpen(false);
    };

    const isActive = (path) => {
        if (path === "/") {
            return location.pathname === "/";
        }

        if (path === "/projects") {
            return (
                location.pathname === "/projects" ||
                location.pathname.startsWith("/projects/")
            );
        }

        return location.pathname === path;
    };

    const handleLogout = () => {
        logout();
        setAccountOpen(false);
        setMenuOpen(false);
        navigate("/");
    };

    return (
        <header className="fixed left-0 top-0 z-50 w-full">
            <div
                className={`mx-auto max-w-[1500px] px-5 transition-all duration-500 md:px-8 lg:px-10 ${scrolled ? "py-3" : "py-5"
                    }`}
            >
                <nav
                    className={`relative border transition-all duration-500 ${scrolled
                        ? "border-white/[0.1] bg-[#050706]/90 shadow-[0_10px_50px_rgba(0,0,0,0.25)] backdrop-blur-2xl"
                        : "border-white/[0.08] bg-[#050706]/60 backdrop-blur-xl"
                        }`}
                >
                    <div className="flex items-center justify-between px-5 py-4 md:px-7">

                        {/* Logo */}
                        <Link
                            to="/"
                            onClick={closeMenu}
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

                        {/* Desktop navigation */}
                        <nav className="hidden items-center gap-7 lg:flex">
                            {navLinks.map((link) => {
                                const active = isActive(link.path);

                                return (
                                    <Link
                                        key={link.path}
                                        to={link.path}
                                        className={`group relative py-2 text-sm transition-colors duration-300 ${active
                                            ? "text-[#F3F5F3]"
                                            : "text-[#9BA49F] hover:text-[#F3F5F3]"
                                            }`}
                                    >
                                        {link.name}

                                        <span
                                            className={`absolute bottom-0 left-0 h-px bg-[#19C37D] transition-all duration-300 ${active ? "w-full" : "w-0 group-hover:w-full"
                                                }`}
                                        />
                                    </Link>
                                );
                            })}
                        </nav>

                        {/* Desktop actions */}
                        <div className="hidden items-center gap-3 lg:flex">

                            {user ? (
                                /* Logged-in account */
                                <div
                                    className="relative"
                                    onMouseEnter={() => setIsDropdownOpen(true)}
                                    onMouseLeave={() => setIsDropdownOpen(false)}
                                >
                                    {/* User Button */}
                                    <button
                                        type="button"
                                        onClick={() => setIsDropdownOpen((prev) => !prev)}
                                        className="flex items-center gap-3"
                                    >
                                        <div className="flex h-9 w-9 items-center justify-center rounded-full border border-[#1B2922] bg-[#0B100D] text-[#19C37D]">
                                            <User size={16} strokeWidth={1.8} />
                                        </div>

                                        <div className="hidden text-left md:block">
                                            <p className="text-xs text-[#F3F5F3]">
                                                {user?.name}
                                            </p>

                                            <p className="text-[10px] uppercase tracking-[0.15em] text-[#66726B]">
                                                Account
                                            </p>
                                        </div>

                                        <ChevronDown
                                            size={15}
                                            className={`text-[#66726B] transition-transform duration-300 ${isDropdownOpen ? "rotate-180" : ""
                                                }`}
                                        />
                                    </button>

                                    {/* Dropdown */}
                                    {isDropdownOpen && (
                                        <div
                                            className="absolute right-0 top-full z-50  w-64 overflow-hidden rounded-xl border border-[#1B2922] bg-[#0B100D] shadow-2xl"
                                            onClick={(e) => e.stopPropagation()}
                                        >
                                            {/* Account Info */}
                                            <div className="border-b border-[#1B2922] px-5 py-4">
                                                <p className="text-xs uppercase tracking-[0.2em] text-[#19C37D]">
                                                    Signed in as
                                                </p>

                                                <p className="mt-2 truncate text-sm text-[#F3F5F3]">
                                                    {user?.name}
                                                </p>

                                                <p className="mt-1 truncate text-xs text-[#66726B]">
                                                    {user?.email}
                                                </p>
                                            </div>

                                            {/* My Profile */}
                                            <Link
                                                to="/profile"
                                                onClick={() => setIsDropdownOpen(false)}
                                                className="flex items-center gap-3 px-5 py-3 text-sm text-[#C4CEC7] transition-colors duration-200 hover:bg-[#111813] hover:text-[#19C37D]"
                                            >
                                                <User size={16} strokeWidth={1.7} />
                                                <span>My Profile</span>
                                            </Link>

                                            {/* Admin */}
                                            {user?.role === "admin" && (
                                                <Link
                                                    to="/admin"
                                                    onClick={() => setIsDropdownOpen(false)}
                                                    className="flex items-center gap-3 px-5 py-3 text-sm text-[#C4CEC7] transition-colors duration-200 hover:bg-[#111813] hover:text-[#19C37D]"
                                                >
                                                    <LayoutDashboard size={16} strokeWidth={1.7} />
                                                    <span>Admin Dashboard</span>
                                                </Link>
                                            )}

                                            {/* Logout */}
                                            <button
                                                type="button"
                                                onClick={() => {
                                                    setIsDropdownOpen(false);
                                                    logout();
                                                }}
                                                className="flex w-full items-center gap-3 border-t border-[#1B2922] px-5 py-3 text-left text-sm text-[#C4CEC7] transition-colors duration-200 hover:bg-[#111813] hover:text-red-400"
                                            >
                                                <LogOut size={16} strokeWidth={1.7} />
                                                <span>Logout</span>
                                            </button>
                                        </div>
                                    )}
                                </div>
                            ) : (
                                /* Logged-out account */
                                <div className="flex items-center gap-2">
                                    <Link
                                        to="/login"
                                        className="flex items-center gap-2 px-3 py-2.5 text-sm text-[#AAB5AE] transition-colors duration-300 hover:text-[#19C37D]"
                                    >
                                        <LogIn size={16} />
                                        Login
                                    </Link>

                                    <Link
                                        to="/register"
                                        className="flex items-center gap-2 border border-[#19C37D]/30 bg-[#19C37D]/10 px-4 py-2.5 text-sm font-medium text-[#C9F7E1] transition-all duration-300 hover:border-[#19C37D] hover:bg-[#19C37D] hover:text-[#03110A]"
                                    >
                                        <UserPlus size={16} />
                                        Register
                                    </Link>
                                </div>
                            )}

                            <Link
                                to="/contact"
                                className="group flex items-center gap-2 border border-[#19C37D]/40 bg-[#19C37D]/10 px-4 py-2.5 text-sm font-medium text-[#C9F7E1] transition-all duration-300 hover:border-[#19C37D] hover:bg-[#19C37D] hover:text-[#03110A]"
                            >
                                <span>Let's talk</span>

                                <ArrowUpRight
                                    size={16}
                                    strokeWidth={1.8}
                                    className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                                />
                            </Link>
                        </div>

                        {/* Mobile menu button */}
                        <button
                            type="button"
                            onClick={() => setMenuOpen((value) => !value)}
                            aria-label={menuOpen ? "Close menu" : "Open menu"}
                            className="flex h-10 w-10 items-center justify-center border border-white/[0.08] text-[#B9C3BD] transition-all duration-300 hover:border-[#19C37D] hover:text-[#19C37D] lg:hidden"
                        >
                            {menuOpen ? <X size={20} /> : <Menu size={20} />}
                        </button>
                    </div>

                    {/* Mobile menu */}
                    <div
                        className={`overflow-hidden border-t transition-all duration-500 lg:hidden ${menuOpen
                            ? "max-h-[800px] border-white/[0.08] opacity-100"
                            : "max-h-0 border-transparent opacity-0"
                            }`}
                    >
                        <div className="px-5 py-5">

                            {/* Navigation */}
                            <div className="flex flex-col">
                                {navLinks.map((link) => {
                                    const active = isActive(link.path);

                                    return (
                                        <Link
                                            key={link.path}
                                            to={link.path}
                                            onClick={closeMenu}
                                            className={`border-b border-white/[0.06] py-4 text-left text-lg transition-colors duration-300 ${active
                                                ? "text-[#19C37D]"
                                                : "text-[#B7C0BA] hover:text-[#19C37D]"
                                                }`}
                                        >
                                            {link.name}
                                        </Link>
                                    );
                                })}
                            </div>

                            {/* Mobile account section */}
                            <div className="mt-6 border border-white/[0.08] bg-[#0B100D]">

                                {user ? (
                                    <>
                                        <div className="border-b border-white/[0.08] px-4 py-4">
                                            <p className="text-[10px] uppercase tracking-[0.22em] text-[#4F5B54]">
                                                Signed in as
                                            </p>

                                            <p className="mt-1 truncate text-sm font-medium text-[#F3F5F3]">
                                                {user.name}
                                            </p>

                                            <p className="mt-0.5 truncate text-xs text-[#68746D]">
                                                {user.email}
                                            </p>
                                        </div>

                                        <Link
                                            to="/profile"
                                            onClick={closeMenu}
                                            className="flex items-center gap-3 border-b border-white/[0.06] px-4 py-4 text-sm text-[#AAB5AE] transition-colors duration-300 hover:text-[#19C37D]"
                                        >
                                            <User size={17} />
                                            My Profile
                                        </Link>

                                        {user.role === "admin" && (
                                            <Link
                                                to="/admin"
                                                onClick={() => setAccountOpen(false)}
                                                className="flex items-center gap-3 px-3 py-3 text-sm text-[#AAB5AE] transition-colors duration-300 hover:bg-white/[0.04] hover:text-[#19C37D]"
                                            >
                                                <LayoutDashboard size={16} />
                                                Admin Dashboard
                                            </Link>
                                        )}

                                        <button
                                            type="button"
                                            onClick={handleLogout}
                                            className="flex w-full items-center gap-3 px-4 py-4 text-left text-sm text-[#AAB5AE] transition-colors duration-300 hover:text-red-300"
                                        >
                                            <LogOut size={17} />
                                            Logout
                                        </button>
                                    </>
                                ) : (
                                    <>
                                        <div className="border-b border-white/[0.08] px-4 py-4">
                                            <p className="text-xs text-[#68746D]">
                                                Access your JAREX account
                                            </p>
                                        </div>

                                        <div className="grid grid-cols-2 gap-3 p-3">
                                            <Link
                                                to="/login"
                                                onClick={closeMenu}
                                                className="flex items-center justify-center gap-2 border border-white/[0.08] px-3 py-3 text-sm text-[#AAB5AE] transition-all duration-300 hover:border-[#19C37D]/40 hover:text-[#19C37D]"
                                            >
                                                <LogIn size={16} />
                                                Login
                                            </Link>

                                            <Link
                                                to="/register"
                                                onClick={closeMenu}
                                                className="flex items-center justify-center gap-2 bg-[#19C37D] px-3 py-3 text-sm font-medium text-[#03110A] transition-colors duration-300 hover:bg-[#42D998]"
                                            >
                                                <UserPlus size={16} />
                                                Register
                                            </Link>
                                        </div>
                                    </>
                                )}

                            </div>

                            {/* Contact */}
                            <Link
                                to="/contact"
                                onClick={closeMenu}
                                className="mt-5 flex items-center justify-between border border-[#19C37D]/30 bg-[#19C37D]/10 px-4 py-3 text-sm font-medium text-[#C9F7E1] transition-all duration-300 hover:border-[#19C37D] hover:bg-[#19C37D] hover:text-[#03110A]"
                            >
                                <span>Let's talk</span>

                                <ArrowUpRight size={17} />
                            </Link>

                        </div>
                    </div>
                </nav>
            </div>
        </header>
    );
}

export default Navbar;