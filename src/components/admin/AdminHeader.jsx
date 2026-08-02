import { FiMenu } from "react-icons/fi";
import { useLocation } from "react-router-dom";

function AdminHeader({ setSidebarOpen }) {
  const { pathname } = useLocation();

  const pageTitles = {
    "/admin": "Dashboard",
    "/admin/products": "Products",
    "/admin/products/add": "Add Product",
    "/admin/orders": "Orders",
  };

  let title = pageTitles[pathname];

  // Edit Product (/admin/products/edit/ABC123)
  if (pathname.startsWith("/admin/products/edit")) {
    title = "Edit Product";
  }

  return (
    <header className="sticky top-0 z-30 bg-white border-b border-gray-200">
      <div className="flex items-center justify-between px-3 sm:px-4 md:px-5 lg:px-6 xl:px-8 2xl:px-10 py-3 sm:py-4">
        <div className="flex items-center gap-3">
          <button
            onClick={() => setSidebarOpen(true)}
            className="lg:hidden flex items-center justify-center text-2xl text-gray-700"
          >
            <FiMenu />
          </button>

          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-3xl 2xl:text-4xl font-bold text-gray-800">
            {title}
          </h2>
        </div>

        <p className="hidden sm:block text-sm md:text-base text-gray-600 whitespace-nowrap">
          Welcome Admin 👋
        </p>
      </div>
    </header>
  );
}

export default AdminHeader;