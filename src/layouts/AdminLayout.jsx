import { Outlet } from "react-router-dom";
import { useState } from "react";
import AdminSidebar from "../components/admin/AdminSidebar";
import AdminHeader from "../components/admin/AdminHeader";

function AdminLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#F8F8F8]">
      <AdminSidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />

      <div className="lg:ml-72 min-h-screen flex flex-col">
        <AdminHeader setSidebarOpen={setSidebarOpen} />

        <main className="flex-1 p-3 sm:p-4 md:p-5 lg:p-6 xl:p-8 2xl:p-10 overflow-x-hidden">
          <div className="w-full max-w-[1700px] mx-auto">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}

export default AdminLayout;