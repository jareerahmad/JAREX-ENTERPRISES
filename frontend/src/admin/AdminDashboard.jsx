import { useEffect, useState } from "react";
import {
    FolderKanban,
    MessageSquare,
    Activity,
    RefreshCw,
} from "lucide-react";

import { useAuth } from "../context/AuthContext";

const API_URL = "http://localhost:5000/api";

function AdminDashboard() {
    const { token } = useAuth();

    const [projects, setProjects] = useState([]);
    const [messages, setMessages] = useState([]);

    const [systemStatus, setSystemStatus] = useState("Checking");

    const [loading, setLoading] = useState(true);
    const [refreshing, setRefreshing] = useState(false);

    const fetchDashboardData = async (isRefresh = false) => {
        try {
            if (isRefresh) {
                setRefreshing(true);
            } else {
                setLoading(true);
            }

            /* --------------------------------
               Fetch Projects
            -------------------------------- */

            const projectsResponse = await fetch(
                `${API_URL}/projects`
            );

            const projectsData = await projectsResponse.json();

            if (!projectsResponse.ok) {
                throw new Error(
                    projectsData.message ||
                    "Failed to fetch projects."
                );
            }

            setProjects(projectsData.projects || []);

            /* --------------------------------
               Fetch Messages
            -------------------------------- */

            const messagesResponse = await fetch(
                `${API_URL}/messages`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            const messagesData = await messagesResponse.json();

            if (!messagesResponse.ok) {
                throw new Error(
                    messagesData.message ||
                    "Failed to fetch messages."
                );
            }

            setMessages(messagesData.data || []);
            
        } catch (error) {
            console.error(
                "Dashboard data error:",
                error
            );

            setSystemStatus("Offline");
        } finally {
            setLoading(false);
            setRefreshing(false);
        }
    };

    useEffect(() => {
        if (!token) return;

        fetchDashboardData();
    }, [token]);

    /* --------------------------------
       Dynamic Statistics
    -------------------------------- */

    const publishedProjects = projects.filter(
        (project) => project.published !== false
    );

    const unreadMessages = messages.filter(
        (message) => message.status === "unread"
    );

    const stats = [
        {
            title: "Projects",
            value: publishedProjects.length,
            description: "Published projects",
            icon: FolderKanban,
        },
        {
            title: "Messages",
            value: messages.length,
            description:
                unreadMessages.length === 1
                    ? "1 unread message"
                    : `${unreadMessages.length} unread messages`,
            icon: MessageSquare,
        },
    ];

    /* --------------------------------
       Recent Activity
    -------------------------------- */

    const activities = [
        ...projects.map((project) => ({
            id: `project-${project._id}`,
            type: "project",
            title: project.title,
            description: project.published
                ? "Project published"
                : "Project saved as draft",
            date: project.updatedAt || project.createdAt,
        })),

        ...messages.map((message) => ({
            id: `message-${message._id}`,
            type: "message",
            title: message.subject,
            description:
                message.status === "unread"
                    ? `New message from ${message.name}`
                    : `Message from ${message.name}`,
            date: message.updatedAt || message.createdAt,
        })),
    ]
        .filter((activity) => activity.date)
        .sort(
            (a, b) =>
                new Date(b.date) -
                new Date(a.date)
        )
        .slice(0, 6);

    const formatDate = (date) => {
        const activityDate = new Date(date);

        return activityDate.toLocaleDateString(
            "en-US",
            {
                month: "short",
                day: "numeric",
                year: "numeric",
            }
        );
    };

    return (
        <div className="min-h-screen px-8 py-8 lg:px-10">

            {/* Header */}
            <div className="mb-10 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">

                <div>
                    <p className="mb-2 text-sm font-medium uppercase tracking-[0.18em] text-[#19C37D]">
                        Overview
                    </p>

                    <h1 className="text-3xl font-semibold tracking-tight text-[#F3F5F3]">
                        Dashboard
                    </h1>

                    <p className="mt-2 max-w-xl text-sm leading-6 text-[#89938D]">
                        Manage the content and activity of
                        JAREX ENTERPRISES from one place.
                    </p>
                </div>

                {/* Refresh */}
                <button
                    type="button"
                    onClick={() => fetchDashboardData(true)}
                    disabled={refreshing}
                    className="flex w-fit items-center gap-2 rounded-lg border border-[#1B2922] bg-[#0B100D] px-4 py-2.5 text-xs uppercase tracking-[0.15em] text-[#89938D] transition-all duration-300 hover:border-[#19C37D]/40 hover:text-[#19C37D] disabled:cursor-not-allowed disabled:opacity-50"
                >
                    <RefreshCw
                        size={15}
                        className={
                            refreshing
                                ? "animate-spin"
                                : ""
                        }
                    />

                    {refreshing
                        ? "Refreshing"
                        : "Refresh"}
                </button>
            </div>

            {/* Statistics */}
            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">

                {stats.map((stat) => {
                    const Icon = stat.icon;

                    return (
                        <div
                            key={stat.title}
                            className="group rounded-xl border border-[#1B2922] bg-[#0B100D] p-5 transition-all duration-300 hover:border-[#19C37D]/30"
                        >
                            <div className="mb-6 flex items-center justify-between">

                                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#19C37D]/10 text-[#19C37D]">
                                    <Icon
                                        size={19}
                                        strokeWidth={1.8}
                                    />
                                </div>

                                <span className="text-xs text-[#89938D]">
                                    JAREX
                                </span>
                            </div>

                            <p className="text-sm text-[#89938D]">
                                {stat.title}
                            </p>

                            <div className="mt-1 text-2xl font-semibold text-[#F3F5F3]">
                                {loading
                                    ? "—"
                                    : stat.value}
                            </div>

                            <p className="mt-2 text-xs text-[#89938D]">
                                {stat.description}
                            </p>
                        </div>
                    );
                })}

            </div>

            {/* Recent Activity */}
            <section className="mt-8 rounded-xl border border-[#1B2922] bg-[#0B100D]">

                <div className="border-b border-[#1B2922] px-6 py-5">

                    <h2 className="text-base font-medium text-[#F3F5F3]">
                        Recent Activity
                    </h2>

                    <p className="mt-1 text-sm text-[#89938D]">
                        Recent projects and contact activity.
                    </p>

                </div>

                {loading ? (
                    <div className="flex min-h-48 items-center justify-center px-6">
                        <div className="text-center">
                            <Activity
                                size={28}
                                strokeWidth={1.5}
                                className="mx-auto mb-3 animate-pulse text-[#19C37D]"
                            />

                            <p className="text-sm text-[#89938D]">
                                Loading activity...
                            </p>
                        </div>
                    </div>
                ) : activities.length === 0 ? (
                    <div className="flex min-h-48 items-center justify-center px-6">
                        <div className="text-center">

                            <Activity
                                size={28}
                                strokeWidth={1.5}
                                className="mx-auto mb-3 text-[#19C37D]"
                            />

                            <p className="text-sm text-[#89938D]">
                                No recent activity yet.
                            </p>

                        </div>
                    </div>
                ) : (
                    <div className="divide-y divide-[#1B2922]">

                        {activities.map((activity) => (
                            <div
                                key={activity.id}
                                className="flex items-center justify-between gap-5 px-6 py-4 transition-colors duration-200 hover:bg-[#111813]"
                            >

                                <div className="flex min-w-0 items-center gap-4">

                                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#19C37D]/10 text-[#19C37D]">

                                        {activity.type ===
                                            "project" ? (
                                            <FolderKanban
                                                size={16}
                                                strokeWidth={1.7}
                                            />
                                        ) : (
                                            <MessageSquare
                                                size={16}
                                                strokeWidth={1.7}
                                            />
                                        )}

                                    </div>

                                    <div className="min-w-0">

                                        <p className="truncate text-sm text-[#F3F5F3]">
                                            {activity.title}
                                        </p>

                                        <p className="mt-1 truncate text-xs text-[#66726B]">
                                            {
                                                activity.description
                                            }
                                        </p>

                                    </div>

                                </div>

                                <span className="shrink-0 text-xs text-[#66726B]">
                                    {formatDate(
                                        activity.date
                                    )}
                                </span>

                            </div>
                        ))}

                    </div>
                )}

            </section>
        </div>
    );
}

export default AdminDashboard;