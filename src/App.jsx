import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import { useState } from "react";

import Loader from "./components/Loader";
import Cursor from "./components/Cursor";

import Home from "./pages/Home";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Contact from "./pages/Contact";
import Checkout from "./pages/Checkout";
import OrderSuccess from "./pages/OrderSuccess";
import OurStory from "./pages/OurStory";
import Shop from "./pages/Shop";

import CollectionsPage from "./pages/CollectionsPage";
import CollectionDetail from "./pages/CollectionDetail";
import NotFound from "./pages/NotFound";
import MainLayout from "./layouts/MainLayout";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminLayout from "./layouts/AdminLayout";
import AdminLogin from "./pages/admin/AdminLogin";
import ProtectedRoute from "./components/ProtectedRoute";
import AdminOrders from "./pages/admin/AdminOrders";
import AdminProducts from "./pages/admin/AdminProducts";
import AddProduct from "./pages/admin/AddProduct";
import EditProduct from "./pages/admin/EditProduct";

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/shop", element: <Shop /> },
      { path: "/collections", element: <CollectionsPage /> },
      { path: "/collections/:id", element: <CollectionDetail /> },
      { path: "/product/:id", element: <Product /> },
      { path: "/cart", element: <Cart /> },
      { path: "/login", element: <Login /> },
      { path: "/signup", element: <Signup /> },
      { path: "/checkout", element: <Checkout /> },
      { path: "/order-success", element: <OrderSuccess /> },
      { path: "/OurStory", element: <OurStory /> },
      { path: "/contact", element: <Contact /> },
    ],
  },

  {
    path: "/admin/login",
    element: <AdminLogin />,
  },

  {
    element: (
      <ProtectedRoute>
        <AdminLayout />
      </ProtectedRoute>
    ),
    children: [
      { path: "/admin", element: <AdminDashboard /> },
      { path: "/admin/products", element: <AdminProducts /> },
      { path: "/admin/orders", element: <AdminOrders /> },
      { path: "/admin/products/add", element: <AddProduct /> },
      { path: "/admin/products/edit/:id", element: <EditProduct /> },
    ],
  },

  {
    path: "*",
    element: <NotFound />,
  },
]);

function App() {
  const [loading, setLoading] = useState(
    () => !sessionStorage.getItem("loaderShown")
  );

  const handleLoaderFinish = () => {
    sessionStorage.setItem("loaderShown", "true");
    setLoading(false);
  };

  if (loading) {
    return <Loader onFinish={handleLoaderFinish} />;
  }

  return (
    <>
      <Cursor />
      <RouterProvider router={router} />
    </>
  );
}

export default App;