import { useEffect, useState } from "react";
import {
    Mail,
    MailOpen,
    Trash2,
    RefreshCw,
    X,
} from "lucide-react";

import { useAuth } from "../context/AuthContext";

const API_URL = import.meta.env.VITE_API_URL;

function AdminMessages() {
    const { token } = useAuth();

    const [messages, setMessages] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedMessage, setSelectedMessage] = useState(null);
    const [deleting, setDeleting] = useState(false);

    const fetchMessages = async () => {
        try {
            setLoading(true);

            const response = await fetch(`${API_URL}/messages`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || "Failed to fetch messages.");
            }

            setMessages(data.data || []);
        } catch (error) {
            console.error("Fetch messages error:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (token) {
            fetchMessages();
        }
    }, [token]);

    const handleToggleRead = async (message) => {
        try {
            const newStatus =
                message.status === "read" ? "unread" : "read";

            const response = await fetch(
                `${API_URL}/messages/${message._id}/status`,
                {
                    method: "PATCH",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                    body: JSON.stringify({
                        status: newStatus,
                    }),
                }
            );

            const data = await response.json();

            if (!response.ok) {
                throw new Error(
                    data.message || "Failed to update message."
                );
            }

            setMessages((currentMessages) =>
                currentMessages.map((item) =>
                    item._id === message._id
                        ? data.data
                        : item
                )
            );

            if (selectedMessage?._id === message._id) {
                setSelectedMessage(data.data);
            }
        } catch (error) {
            console.error("Update message error:", error);
        }
    };

    const handleDelete = async () => {
        if (!selectedMessage) return;

        try {
            setDeleting(true);

            const response = await fetch(
                `${API_URL}/messages/${selectedMessage._id}`,
                {
                    method: "DELETE",
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            const data = await response.json();

            if (!response.ok) {
                throw new Error(
                    data.message || "Failed to delete message."
                );
            }

            setMessages((currentMessages) =>
                currentMessages.filter(
                    (item) => item._id !== selectedMessage._id
                )
            );

            setSelectedMessage(null);
        } catch (error) {
            console.error("Delete message error:", error);
        } finally {
            setDeleting(false);
        }
    };

    const unreadCount = messages.filter(
        (message) => message.status === "unread"
    ).length;

    return (
        <div className="min-h-screen px-5 py-8 sm:px-8 lg:px-10">
            {/* Header */}
            <div className="mb-8 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
                <div>
                    <p className="mb-2 text-sm font-medium uppercase tracking-[0.18em] text-[#19C37D]">
                        Communication
                    </p>

                    <div className="flex flex-wrap items-center gap-3">
                        <h1 className="text-3xl font-semibold tracking-tight text-[#F3F5F3]">
                            Messages
                        </h1>

                        {unreadCount > 0 && (
                            <span className="rounded-full bg-[#19C37D]/10 px-3 py-1 text-xs font-medium text-[#19C37D]">
                                {unreadCount} unread
                            </span>
                        )}
                    </div>

                    <p className="mt-2 max-w-xl text-sm leading-6 text-[#89938D]">
                        View and manage messages submitted through the
                        JAREX ENTERPRISES contact form.
                    </p>
                </div>

                <button
                    type="button"
                    onClick={fetchMessages}
                    disabled={loading}
                    className="inline-flex items-center justify-center gap-2 rounded-lg border border-[#1B2922] bg-[#0B100D] px-4 py-2.5 text-sm text-[#89938D] transition-colors hover:border-[#19C37D]/30 hover:text-[#F3F5F3] disabled:cursor-not-allowed disabled:opacity-50"
                >
                    <RefreshCw
                        size={16}
                        className={loading ? "animate-spin" : ""}
                    />
                    Refresh
                </button>
            </div>

            {/* Messages */}
            <div className="overflow-hidden rounded-xl border border-[#1B2922] bg-[#0B100D]">
                {loading ? (
                    <div className="flex min-h-64 items-center justify-center">
                        <RefreshCw
                            size={24}
                            className="animate-spin text-[#19C37D]"
                        />
                    </div>
                ) : messages.length === 0 ? (
                    <div className="flex min-h-64 items-center justify-center px-6">
                        <div className="text-center">
                            <Mail
                                size={30}
                                strokeWidth={1.5}
                                className="mx-auto mb-3 text-[#19C37D]"
                            />

                            <p className="text-sm text-[#F3F5F3]">
                                No messages yet
                            </p>

                            <p className="mt-1 text-xs text-[#89938D]">
                                Contact form submissions will appear here.
                            </p>
                        </div>
                    </div>
                ) : (
                    <div className="divide-y divide-[#1B2922]">
                        {messages.map((message) => (
                            <div
                                key={message._id}
                                className={`group flex flex-col gap-4 px-5 py-5 transition-colors hover:bg-[#111813]/60 sm:flex-row sm:items-center sm:justify-between ${message.status === "unread"
                                    ? "bg-[#19C37D]/[0.025]"
                                    : ""
                                    }`}
                            >
                                <button
                                    type="button"
                                    onClick={() => setSelectedMessage(message)}
                                    className="min-w-0 flex-1 text-left"
                                >
                                    <div className="flex items-start gap-4">
                                        <div
                                            className={`mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${message.status === "unread"
                                                ? "bg-[#19C37D]/10 text-[#19C37D]"
                                                : "bg-[#111813] text-[#89938D]"
                                                }`}
                                        >
                                            {message.status === "unread" ? (
                                                <Mail size={18} />
                                            ) : (
                                                <MailOpen size={18} />
                                            )}
                                        </div>

                                        <div className="min-w-0">
                                            <div className="flex flex-wrap items-center gap-2">
                                                <p
                                                    className={`truncate text-sm ${message.status === "unread"
                                                        ? "font-semibold text-[#F3F5F3]"
                                                        : "font-medium text-[#CDD3CF]"
                                                        }`}
                                                >
                                                    {message.name}
                                                </p>

                                                <span className="text-xs text-[#89938D]">
                                                    {message.email}
                                                </span>
                                            </div>

                                            <p
                                                className={`mt-1 truncate text-sm ${message.status === "unread"
                                                    ? "text-[#F3F5F3]"
                                                    : "text-[#89938D]"
                                                    }`}
                                            >
                                                {message.subject}
                                            </p>

                                            <p className="mt-1 line-clamp-1 text-xs text-[#89938D]">
                                                {message.message}
                                            </p>
                                        </div>
                                    </div>
                                </button>

                                <div className="flex shrink-0 items-center gap-2 sm:ml-4">
                                    <button
                                        type="button"
                                        onClick={() => handleToggleRead(message)}
                                        className="rounded-lg border border-[#1B2922] px-3 py-2 text-xs text-[#89938D] transition-colors hover:border-[#19C37D]/30 hover:text-[#19C37D]"
                                    >
                                        {message.status === "read"
                                            ? "Mark unread"
                                            : "Mark read"}
                                    </button>

                                    <button
                                        type="button"
                                        onClick={() => setSelectedMessage(message)}
                                        className="rounded-lg border border-[#1B2922] px-3 py-2 text-xs text-[#89938D] transition-colors hover:border-[#19C37D]/30 hover:text-[#F3F5F3]"
                                    >
                                        View
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            {/* Message Modal */}
            {selectedMessage && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm">
                    <div className="max-h-[90vh] w-full max-w-2xl overflow-hidden rounded-2xl border border-[#1B2922] bg-[#0B100D] shadow-2xl">
                        {/* Modal Header */}
                        <div className="flex items-start justify-between border-b border-[#1B2922] px-6 py-5">
                            <div className="min-w-0 pr-5">
                                <p className="mb-1 text-xs uppercase tracking-[0.16em] text-[#19C37D]">
                                    Message
                                </p>

                                <h2 className="truncate text-xl font-semibold text-[#F3F5F3]">
                                    {selectedMessage.subject}
                                </h2>
                            </div>

                            <button
                                type="button"
                                onClick={() => setSelectedMessage(null)}
                                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-[#89938D] transition-colors hover:bg-[#111813] hover:text-[#F3F5F3]"
                                aria-label="Close message"
                            >
                                <X size={19} />
                            </button>
                        </div>

                        {/* Modal Content */}
                        <div className="max-h-[60vh] overflow-y-auto px-6 py-6">
                            <div className="grid gap-5 sm:grid-cols-2">
                                <div>
                                    <p className="text-xs uppercase tracking-[0.14em] text-[#89938D]">
                                        From
                                    </p>

                                    <p className="mt-2 text-sm text-[#F3F5F3]">
                                        {selectedMessage.name}
                                    </p>
                                </div>

                                <div>
                                    <p className="text-xs uppercase tracking-[0.14em] text-[#89938D]">
                                        Email
                                    </p>

                                    <p className="mt-2 break-all text-sm text-[#F3F5F3]">
                                        {selectedMessage.email}
                                    </p>
                                </div>
                            </div>

                            <div className="mt-6">
                                <p className="text-xs uppercase tracking-[0.14em] text-[#89938D]">
                                    Received
                                </p>

                                <p className="mt-2 text-sm text-[#F3F5F3]">
                                    {new Date(
                                        selectedMessage.createdAt
                                    ).toLocaleString()}
                                </p>
                            </div>

                            <div className="mt-6 border-t border-[#1B2922] pt-6">
                                <p className="mb-3 text-xs uppercase tracking-[0.14em] text-[#89938D]">
                                    Message
                                </p>

                                <p className="whitespace-pre-wrap text-sm leading-7 text-[#CDD3CF]">
                                    {selectedMessage.message}
                                </p>
                            </div>
                        </div>

                        {/* Modal Footer */}
                        <div className="flex flex-col-reverse gap-3 border-t border-[#1B2922] px-6 py-5 sm:flex-row sm:items-center sm:justify-between">
                            <button
                                type="button"
                                onClick={handleDelete}
                                disabled={deleting}
                                className="inline-flex items-center justify-center gap-2 rounded-lg border border-red-500/20 px-4 py-2.5 text-sm text-red-400 transition-colors hover:bg-red-500/10 disabled:cursor-not-allowed disabled:opacity-50"
                            >
                                <Trash2 size={16} />
                                {deleting ? "Deleting..." : "Delete message"}
                            </button>

                            <div className="flex gap-2">
                                <button
                                    type="button"
                                    onClick={() =>
                                        handleToggleRead(selectedMessage)
                                    }
                                    className="rounded-lg border border-[#1B2922] px-4 py-2.5 text-sm text-[#89938D] transition-colors hover:border-[#19C37D]/30 hover:text-[#19C37D]"
                                >
                                    {selectedMessage.status === "read"
                                        ? "Mark unread"
                                        : "Mark read"}
                                </button>

                                <button
                                    type="button"
                                    onClick={() => setSelectedMessage(null)}
                                    className="rounded-lg bg-[#19C37D] px-4 py-2.5 text-sm font-medium text-[#050706] transition-opacity hover:opacity-90"
                                >
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default AdminMessages;