import { NavLink, useNavigate } from "react-router-dom";
import { FiBox, FiClipboard, FiHome, FiLogOut } from "react-icons/fi";
import { logoutAdmin } from "../../services/authService";

function AdminSidebar({ sidebarOpen, setSidebarOpen }) {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logoutAdmin();
      navigate("/admin/login", { replace: true });
    } catch (err) {
      console.log(err);
    }
  };

  const linkClass = ({ isActive }) =>
    `flex items-center gap-3 rounded-xl px-4 py-3 font-medium transition ${
      isActive
        ? "bg-[#7A0C0C] text-white"
        : "text-gray-700 hover:bg-gray-100"
    }`;

  return (
    <>
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <aside
        className={`fixed top-0 left-0 z-50 h-screen w-72 bg-white border-r border-gray-200 flex flex-col transition-transform duration-300 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0`}
      >
        <div className="px-6 py-5 ">
          <h1 className="text-xl font-bold">
            THE <span className="text-[#7A0C0C]">INDIAN</span> DRIP
          </h1>

          <p className="text-sm text-gray-500 mt-1">
            Admin Panel
          </p>
        </div>

        <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
          <NavLink
            to="/admin"
            className={linkClass}
            onClick={() => setSidebarOpen(false)}
          >
            <FiHome />
            Dashboard
          </NavLink>

          <NavLink
            to="/admin/products"
            className={linkClass}
            onClick={() => setSidebarOpen(false)}
          >
            <FiBox />
            Products
          </NavLink>

          <NavLink
            to="/admin/orders"
            className={linkClass}
            onClick={() => setSidebarOpen(false)}
          >
            <FiClipboard />
            Orders
          </NavLink>
        </nav>

        <div className=" p-4">
          <button
            onClick={handleLogout}
            className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-red-600 hover:bg-red-50"
          >
            <FiLogOut />
            Logout
          </button>
        </div>
      </aside>
    </>
  );
}

export default AdminSidebar;