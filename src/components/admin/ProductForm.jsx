import { useState, useEffect } from "react";
import { uploadImage } from "../../services/cloudinaryService";

function ProductForm({ initialData = null, onSave, isEdit = false }) {
  const defaultData = {
    productCode: "",
    name: "",
    slug: "",
    price: "",
    collection: "essentials",
    description: "",
    fabric: "",
    fit: "",
    gsm: "",
    featured: false,
    isActive: true,
    images: ["", ""],

    sizes: ["M", "L", "XL"],

    stock: {
      M: 10,
      L: 10,
      XL: 10,
    },

    displayOrder: 1,

    color: "",
  };
  const [formData, setFormData] = useState(initialData || defaultData);

  const [uploading, setUploading] = useState({
    front: false,
    back: false,
  });

  const handleImageUpload = async (file, index) => {
    if (!file) return;

    try {
      setUploading((prev) => ({
        ...prev,
        [index === 0 ? "front" : "back"]: true,
      }));

      const imageUrl = await uploadImage(file, "products");

      const updatedImages = [...formData.images];
      updatedImages[index] = imageUrl;

      setFormData((prev) => ({
        ...prev,
        images: updatedImages,
      }));
    } catch (error) {
      console.error(error);
      alert("Image upload failed!");
    } finally {
      setUploading((prev) => ({
        ...prev,
        [index === 0 ? "front" : "back"]: false,
      }));
    }
  };

  useEffect(() => {
    if (initialData) {
      setFormData(initialData);
    }
  }, [initialData]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async () => {
    try {
      if (onSave) {
        await onSave({
          ...formData,
          price: Number(formData.price),
          gsm: Number(formData.gsm),
        });
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="bg-white rounded-2xl p-8 shadow">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-5 lg:gap-6">
        <div>
          <label className="font-medium">Product Code</label>

          <input
            name="productCode"
            value={formData.productCode}
            onChange={handleChange}
            className="w-full mt-2 rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-[#7A0C0C] focus:ring-2 focus:ring-[#7A0C0C]/20"
          />
        </div>

        <div>
          <label className="font-medium">Product Name</label>

          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full mt-2 rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-[#7A0C0C] focus:ring-2 focus:ring-[#7A0C0C]/20"
          />
        </div>

        <div>
          <label className="font-medium">Slug</label>

          <input
            name="slug"
            value={formData.slug}
            onChange={handleChange}
            className="w-full mt-2 rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-[#7A0C0C] focus:ring-2 focus:ring-[#7A0C0C]/20"
          />
        </div>

        <div>
          <label className="font-medium">Price</label>

          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            className="w-full mt-2 rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-[#7A0C0C] focus:ring-2 focus:ring-[#7A0C0C]/20"
          />
        </div>

        <div>
          <label className="font-medium">Collection</label>

          <select
            name="collection"
            value={formData.collection}
            onChange={handleChange}
            className="w-full mt-2 rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-[#7A0C0C] focus:ring-2 focus:ring-[#7A0C0C]/20"
          >
            <option value="essentials">Essentials</option>
            <option value="minimal">Minimal</option>
            <option value="statement">Statement</option>
            <option value="together">Print on demand</option>
          </select>
        </div>

        <div>
          <label className="font-medium">Fabric</label>

          <input
            name="fabric"
            value={formData.fabric}
            onChange={handleChange}
            className="w-full mt-2 rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-[#7A0C0C] focus:ring-2 focus:ring-[#7A0C0C]/20"
          />
        </div>

        <div>
          <label className="font-medium">Fit</label>

          <input
            name="fit"
            value={formData.fit}
            onChange={handleChange}
            className="w-full mt-2 rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-[#7A0C0C] focus:ring-2 focus:ring-[#7A0C0C]/20"
          />
        </div>

        <div>
          <label className="font-medium">GSM</label>

          <input
            type="number"
            name="gsm"
            value={formData.gsm}
            onChange={handleChange}
            className="w-full mt-2 rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-[#7A0C0C] focus:ring-2 focus:ring-[#7A0C0C]/20"
          />
        </div>
      </div>

      <div className="mt-6">
        <label className="font-medium">Description</label>

        <textarea
          rows="5"
          name="description"
          value={formData.description}
          onChange={handleChange}
          className="w-full mt-2 rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-[#7A0C0C] focus:ring-2 focus:ring-[#7A0C0C]/20"
        />
      </div>

      {/* images  */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        <div className="mb-6">
          <label
            className=" mt-3 inline-flex items-center justify-center px-5 py-3 rounded-xl  bg-[#7A0C0C] 
             text-white  cursor-pointer hover:bg-[#5d0909] duration-300 "
          >
            {uploading.front ? "Uploading..." : "Upload Front Image"}

            <input
              type="file"
              accept="image/*"
              className="hidden"
              onChange={(e) => handleImageUpload(e.target.files[0], 0)}
            />
          </label>

          {formData.images[0] && (
            <img
              src={formData.images[0]}
              alt="Front Preview"
              className="mt-4 h-48 w-full max-w-[220px] rounded-xl border object-cover"
            />
          )}
        </div>

        <div className="mb-6">
          <label
            className=" mt-3 inline-flex items-center justify-center px-5 py-3 
            rounded-xl bg-[#7A0C0C] text-white cursor-pointer hover:bg-[#5d0909] duration-300 "
          >
            {uploading.back ? "Uploading..." : "Upload Back Image"}

            <input
              type="file"
              accept="image/*"
              className="hidden"
              onChange={(e) => handleImageUpload(e.target.files[0], 1)}
            />
          </label>

          {formData.images[1] && (
            <img
              src={formData.images[1]}
              alt="Back Preview"
              className="mt-4 h-48 w-full max-w-[220px] rounded-xl border object-cover"
            />
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mt-8">
        <div>
          <label>M Stock</label>

          <input
            type="number"
            value={formData.stock.M}
            onChange={(e) =>
              setFormData({
                ...formData,
                stock: {
                  ...formData.stock,
                  M: Number(e.target.value),
                },
              })
            }
            className="w-full mt-2 rounded-xl border border-gray-300 px-4 py-3 outline-none
             focus:border-[#7A0C0C] focus:ring-2 focus:ring-[#7A0C0C]/20"
          />
        </div>

        <div>
          <label>L Stock</label>

          <input
            type="number"
            value={formData.stock.L}
            onChange={(e) =>
              setFormData({
                ...formData,
                stock: {
                  ...formData.stock,
                  L: Number(e.target.value),
                },
              })
            }
            className="w-full mt-2 rounded-xl border border-gray-300 px-4 
            py-3 outline-none focus:border-[#7A0C0C] focus:ring-2 focus:ring-[#7A0C0C]/20"
          />
        </div>

        <div>
          <label>XL Stock</label>

          <input
            type="number"
            value={formData.stock.XL}
            onChange={(e) =>
              setFormData({
                ...formData,
                stock: {
                  ...formData.stock,
                  XL: Number(e.target.value),
                },
              })
            }
            className="w-full mt-2 rounded-xl border border-gray-300 px-4 
            py-3 outline-none focus:border-[#7A0C0C] focus:ring-2 focus:ring-[#7A0C0C]/20"
          />
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-5 mt-8">
        <label className="flex items-center gap-3">
          <input
            type="checkbox"
            name="featured"
            checked={formData.featured}
            onChange={handleChange}
          />
          Featured
        </label>

        <label className="flex items-center gap-3">
          <input
            type="checkbox"
            name="isActive"
            checked={formData.isActive}
            onChange={handleChange}
          />
          Active
        </label>
      </div>

      <button
        onClick={handleSubmit}
        className=" mt-8 bg-[#7A0C0C] text-white px-8 py-3 rounded-xl hover:bg-[#5d0909] duration-300 "
      >
        {isEdit ? "Update Product" : "Save Product"}
      </button>
    </div>
  );
}

export default ProductForm;
