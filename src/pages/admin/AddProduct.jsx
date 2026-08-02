import { useNavigate } from "react-router-dom";
import ProductForm from "../../components/admin/ProductForm";
import { addProduct } from "../../services/productService";

function AddProduct() {
  const navigate = useNavigate();

  const handleSave = async (data) => {
    try {
      await addProduct(data);

      alert("Product Added Successfully ✅");

      navigate("/admin/products");
    } catch (error) {
      console.error(error);
      alert("Something went wrong!");
    }
  };

  return (
    <section className="w-full">
      <div className="w-full max-w-7xl mx-auto">
        <div className="mb-6 lg:mb-8">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800">
            Add Product
          </h1>

          <p className="mt-2 text-sm sm:text-base text-gray-500">
            Create a new product for your store.
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-lg border p-4 sm:p-6 md:p-8 lg:p-10">
          <ProductForm onSave={handleSave} />
        </div>
      </div>
    </section>
  );
}

export default AddProduct;