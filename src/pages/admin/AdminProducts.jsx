import { useEffect, useState } from "react";
import { FiEdit2, FiTrash2 } from "react-icons/fi";
import {
  getAllProducts,
  deleteProduct,
  toggleProductStatus,
} from "../../services/productService";
import { Link } from "react-router-dom";

function AdminProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const data = await getAllProducts();
    setProducts(data);
  };

  const handleDelete = async (productCode) => {
    const confirmDelete = window.confirm("Delete this product?");

    if (!confirmDelete) return;

    try {
      await deleteProduct(productCode);

      fetchProducts();
    } catch (error) {
      console.error(error);

      alert("Delete Failed");
    }
  };

  const handleToggle = async (productCode, currentStatus) => {
    try {
      await toggleProductStatus(productCode, currentStatus);

      fetchProducts();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section className="w-full">
      <div
        className="
w-full
mx-auto

px-3
sm:px-4
md:px-5
lg:px-6
xl:px-8
2xl:px-10

py-3
sm:py-4
md:py-5
lg:py-6
xl:py-8
2xl:py-10
"
      >
        <div
          className="
flex
flex-col

sm:flex-col

md:flex-row
md:items-center
md:justify-between

lg:flex-row
lg:items-center
lg:justify-between

xl:flex-row
xl:items-center
xl:justify-between

2xl:flex-row
2xl:items-center
2xl:justify-between

gap-4
sm:gap-5
md:gap-6
lg:gap-6
xl:gap-8

mb-6
sm:mb-6
md:mb-7
lg:mb-8
xl:mb-10
"
        >
          {" "}
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-4xl 2xl:text-5xl font-bold">
            Products
          </h1>
          <Link
            to="/admin/products/add"
            className="w-full sm:w-auto bg-[#7A0C0C] hover:bg-[#5d0909] transition-all duration-300 text-white px-5 py-3 rounded-xl text-center shadow-md"
          >
            + Add Product
          </Link>
        </div>

        <div
          className="
hidden

xl:block

overflow-x-auto

rounded-2xl
border
bg-white
shadow-lg
"
        >
          {/* desktop  */}
          <table className="w-full table-auto text-sm">
            <thead className="bg-[#7A0C0C] text-white">
              <tr>
                <th className="py-4 px-4 text-left">Image</th>
                <th className="py-4 px-4 text-left">Code</th>
                <th className="py-4 px-4 text-left">Name</th>
                <th className="py-4 px-4 text-left">Collection</th>
                <th className="py-4 px-4 text-center">Price</th>
                <th className="py-4 px-4 text-center">Status</th>
                <th className="text-center">Edit</th>
                <th className="text-center">Delete</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr
                  key={product.id}
                  className="border-b hover:bg-gray-50 transition"
                >
                  <td className="px-4 py-4">
                    <img
                      src={product.images?.[0] || "/heroo.png"}
                      alt={product.name}
                      className="w-16 h-16 object-cover rounded-xl border"
                    />
                  </td>

                  <td className="px-4 py-4 font-medium">
                    {product.productCode}
                  </td>

                  <td className="px-4 py-4">{product.name}</td>
                  <td className="px-4 py-4 capitalize">{product.collection}</td>
                  <td className="px-4 py-4 text-center font-semibold">
                    ₹{product.price}
                  </td>
                  <td className="text-center">
                    <button
                      onClick={() =>
                        handleToggle(product.productCode, product.isActive)
                      }
                      className={`
      px-4
      py-2
      rounded-full
      text-white
      text-xs
      ${product.isActive ? "bg-green-600" : "bg-red-600"}

    `}
                    >
                      {product.isActive ? "ACTIVE" : "HIDDEN"}
                    </button>
                  </td>

                  <td className="text-center">
                    <Link
                      to={`/admin/products/edit/${product.productCode}`}
                      className="text-blue-600"
                    >
                      <FiEdit2 size={18} />
                    </Link>
                  </td>

                  <td className="text-center">
                    <button
                      onClick={() => handleDelete(product.productCode)}
                      className="text-red-600"
                    >
                      <FiTrash2 size={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* mobile  */}
        <div
          className="
grid

grid-cols-1

sm:grid-cols-1

md:grid-cols-2

lg:grid-cols-2

xl:hidden

gap-4
sm:gap-5
md:gap-6
lg:gap-6
"
        >
          {products.map((product) => (
            <div
              key={product.id}
              className="
bg-white

rounded-2xl

p-4
sm:p-5
md:p-6
lg:p-6
xl:p-5
2xl:p-6

border

shadow-md

hover:shadow-xl

transition-all
duration-300
"
            >
              <div className="flex items-start gap-4">
                <img
                  src={product.images?.[0] || "/heroo.png"}
                  alt={product.name}
                  className="w-20 h-20 rounded-xl object-cover border flex-shrink-0 "
                />

                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-lg truncate">
                    {product.name}
                  </h3>

                  <p className="text-sm text-gray-500 mt-1">
                    #{product.productCode}
                  </p>

                  <p className="mt-2 text-lg font-bold text-[#7A0C0C]">
                    ₹{product.price}
                  </p>

                  <p className="capitalize text-sm text-gray-500">
                    {product.collection}
                  </p>
                </div>
              </div>

              <div className="mt-5 pt-4 border-t flex items-center justify-between">
                <button
                  onClick={() =>
                    handleToggle(product.productCode, product.isActive)
                  }
                  className={`px-4 py-2 rounded-full text-xs font-semibold ${
                    product.isActive
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700 "
                  }`}
                >
                  {product.isActive ? "ACTIVE" : "HIDDEN"}
                </button>
                <div className="flex gap-4">
                  <Link to={`/admin/products/edit/${product.productCode}`}>
                    <FiEdit2 size={18} />
                  </Link>

                  <button onClick={() => handleDelete(product.productCode)}>
                    <FiTrash2 size={18} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AdminProducts;
