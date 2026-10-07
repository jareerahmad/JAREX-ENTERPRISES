import {
    LayoutDashboard,
    FolderKanban,
    MessageSquare,
    UserRound,
    LogOut,
    ExternalLink,
    X,
} from "lucide-react";

import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const navigation = [
    {
        name: "Dashboard",
        path: "/admin",
        icon: LayoutDashboard,
    },
    {
        name: "Projects",
        path: "/admin/projects",
        icon: FolderKanban,
    },
    {
        name: "Messages",
        path: "/admin/messages",
        icon: MessageSquare,
    },
];

function AdminSidebar({ sidebarOpen, setSidebarOpen }) {
    const { user, logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        setSidebarOpen(false);
        logout();
        navigate("/login");
    };

    const handleNavigation = () => {
        setSidebarOpen(false);
    };

    return (
        <>
            {/* Mobile Overlay */}
            <div
                onClick={() => setSidebarOpen(false)}
                className={`fixed inset-0 z-40 bg-black/60 transition-opacity duration-300 lg:hidden ${sidebarOpen
                    ? "pointer-events-auto opacity-100"
                    : "pointer-events-none opacity-0"
                    }`}
            />

            {/* Sidebar */}
            <aside
                className={`fixed left-0 top-0 z-50 flex h-screen w-64 flex-col border-r border-[#1B2922] bg-[#0B100D] transition-transform duration-300 ease-in-out ${sidebarOpen
                    ? "translate-x-0"
                    : "-translate-x-full"
                    } lg:translate-x-0`}
            >
                {/* Logo */}
                <div className="flex h-20 items-center justify-between border-b border-[#1B2922] px-6">
                    <div>
                        <h1 className="text-xl font-semibold tracking-tight">
                            <span className="text-[#19C37D]">JAREX</span>{" "}
                            <span className="text-[#F3F5F3]">
                                ENTERPRISES
                            </span>
                        </h1>

                        <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-[#89938D]">
                            Administration
                        </p>
                    </div>

                    {/* Mobile Close */}
                    <button
                        type="button"
                        onClick={() => setSidebarOpen(false)}
                        className="flex h-9 w-9 items-center justify-center rounded-lg text-[#89938D] transition-colors hover:bg-[#111813] hover:text-[#F3F5F3] lg:hidden"
                        aria-label="Close admin menu"
                    >
                        <X size={20} />
                    </button>
                </div>

                {/* Navigation */}
                <nav className="flex-1 space-y-1 overflow-y-auto px-3 py-6">
                    {navigation.map((item) => {
                        const Icon = item.icon;

                        return (
                            <NavLink
                                key={item.path}
                                to={item.path}
                                end={item.path === "/admin"}
                                onClick={handleNavigation}
                                className={({ isActive }) =>
                                    `group flex items-center gap-3 rounded-lg px-4 py-3 text-sm transition-all duration-200 ${isActive
                                        ? "bg-[#19C37D]/10 text-[#19C37D]"
                                        : "text-[#89938D] hover:bg-[#111813] hover:text-[#F3F5F3]"
                                    }`
                                }
                            >
                                <Icon size={18} strokeWidth={1.8} />

                                <span>{item.name}</span>
                            </NavLink>
                        );
                    })}
                </nav>

                {/* Bottom Section */}
                <div className="border-t border-[#1B2922] p-3">
                    {/* Profile */}
                    <div className="mb-2 flex items-center gap-3 rounded-lg px-3 py-3">
                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#19C37D]/10 text-[#19C37D]">
                            <UserRound size={17} />
                        </div>

                        <div className="min-w-0">
                            <p className="truncate text-sm text-[#F3F5F3]">
                                {user?.name}
                            </p>

                            <p className="truncate text-xs text-[#89938D]">
                                Administrator
                            </p>
                        </div>
                    </div>

                    {/* View Website */}
                    <NavLink
                        to="/"
                        onClick={handleNavigation}
                        className="flex items-center gap-3 rounded-lg px-4 py-3 text-sm text-[#89938D] transition-colors hover:bg-[#111813] hover:text-[#F3F5F3]"
                    >
                        <ExternalLink size={18} strokeWidth={1.8} />
                        <span>View Website</span>
                    </NavLink>

                    {/* Logout */}
                    <button
                        type="button"
                        onClick={handleLogout}
                        className="flex w-full items-center gap-3 rounded-lg px-4 py-3 text-sm text-[#89938D] transition-colors hover:bg-red-500/10 hover:text-red-400"
                    >
                        <LogOut size={18} strokeWidth={1.8} />
                        <span>Logout</span>
                    </button>
                </div>
            </aside>
        </>
    );
}

export default AdminSidebar;