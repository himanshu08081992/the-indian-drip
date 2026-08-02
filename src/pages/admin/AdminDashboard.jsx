import {
  FiBox,
  FiShoppingBag,
  FiDollarSign,
  FiAlertTriangle,
} from "react-icons/fi";

import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/firebase";
import { getAllProducts } from "../../services/productService";

function AdminDashboard() {
  const [dashboardData, setDashboardData] = useState({
    products: 0,
    orders: 0,
    revenue: 0,
    lowStock: 0,
  });

  const [loading, setLoading] = useState(true);
  const stats = [
    {
      title: "Total Products",
      value: loading ? "--" : dashboardData.products,
      icon: <FiBox size={28} />,
      color: "bg-blue-100 text-blue-600",
    },
    {
      title: "Total Orders",
      value: loading ? "--" : dashboardData.orders,
      icon: <FiShoppingBag size={28} />,
      color: "bg-green-100 text-green-600",
    },
    {
      title: "Revenue",
      value: loading ? "--" : `₹${dashboardData.revenue}`,
      icon: <FiDollarSign size={28} />,
      color: "bg-yellow-100 text-yellow-600",
    },
    {
      title: "Low Stock",
      value: loading ? "--" : dashboardData.lowStock,
      icon: <FiAlertTriangle size={28} />,
      color: "bg-red-100 text-red-600",
    },
  ];

  useEffect(() => {
    fetchDashboard();
  }, []);

  const fetchDashboard = async () => {
    try {
      const products = await getAllProducts();

      const orderSnapshot = await getDocs(collection(db, "orders"));

      const orders = orderSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      const revenue = orders.reduce(
        (total, order) => total + (order.total || 0),
        0,
      );

      const lowStock = products.filter((product) => {
        return (
          (product.stock?.M || 0) < 5 ||
          (product.stock?.L || 0) < 5 ||
          (product.stock?.XL || 0) < 5
        );
      }).length;

      setDashboardData({
        products: products.length,
        orders: orders.length,
        revenue,
        lowStock,
      });

      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold">Dashboard</h1>

          <p className="text-sm md:text-base text-gray-500 mt-1">
            Welcome back! Here's your store overview.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {stats.map((item) => (
          <div
            key={item.title}
            className="bg-white rounded-3xl border border-gray-200 p-5 sm:p-6 shadow-sm hover:shadow-lg transition-all duration-300"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">{item.title}</p>

                <h2 className="text-3xl font-bold mt-2">{item.value}</h2>
              </div>

              <div className={`p-4 rounded-2xl ${item.color}`}>{item.icon}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AdminDashboard;
