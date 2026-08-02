import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import ProductForm from "../../components/admin/ProductForm";

import { getProductByCode, updateProduct } from "../../services/productService";
function EditProduct() {
  const { id } = useParams();

  const navigate = useNavigate();

  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      const data = await getProductByCode(id);

      setProduct(data);
    };

    fetchProduct();
  }, [id]);

  const handleUpdate = async (data) => {
    await updateProduct(id, data);

    alert("Product Updated Successfully ✅");

    navigate("/admin/products");
  };
  return (
    <section className="min-h-screen p-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Edit Product</h1>

   {product && (

<ProductForm
  initialData={product}
  onSave={handleUpdate}
  isEdit={true}
/>

)}
      </div>
    </section>
  );
}

export default EditProduct;
