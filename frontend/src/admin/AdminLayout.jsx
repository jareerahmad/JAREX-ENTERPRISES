import { useState } from "react";
import { Menu } from "lucide-react";
import { Outlet } from "react-router-dom";

import AdminSidebar from "./AdminSidebar";

function AdminLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#050706] text-[#F3F5F3]">
      <AdminSidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />

      {/* Main Content */}
      <main className="min-h-screen lg:pl-64">
        {/* Mobile Header */}
        <header className="sticky top-0 z-40 flex h-16 items-center border-b border-[#1B2922] bg-[#050706]/95 px-4 backdrop-blur lg:hidden">
          <button
            type="button"
            onClick={() => setSidebarOpen(true)}
            className="flex h-10 w-10 items-center justify-center rounded-lg text-[#89938D] transition-colors hover:bg-[#111813] hover:text-[#19C37D]"
            aria-label="Open admin menu"
          >
            <Menu size={22} />
          </button>

          <div className="ml-3">
            <p className="text-sm font-semibold">
              <span className="text-[#19C37D]">JAREX</span>{" "}
              ENTERPRISES
            </p>

            <p className="text-[9px] uppercase tracking-[0.18em] text-[#89938D]">
              Administration
            </p>
          </div>
        </header>

        <Outlet />
      </main>
    </div>
  );
}

export default AdminLayout;