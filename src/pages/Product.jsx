import { useEffect, useState } from "react";
import { getProduct } from "../services/productService";
import { useParams } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import { Truck, RefreshCcw, ShieldCheck, BadgeCheck } from "lucide-react";
import { div } from "framer-motion/client";

function Product() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const [product, setProduct] = useState(null);

  const [selectedSize, setSelectedSize] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const data = await getProduct(id);
        setProduct(data);
        if (data?.sizes?.length) {
          setSelectedSize(data.sizes[0]);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchProduct();
  }, [id]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-3xl font-semibold">Product Not Found</h1>
      </div>
    );
  }

  return (
<div> 
    {/* // PRODuct section  */}
    <section className="  bg-[#F5EFE6] min-h-screen py-10">
      <div className="max-w-[1400px] mx-auto px-6 ">
        <div className="grid lg:grid-cols-[0.9fr_0.7fr] gap-20 items-start">
          {/* IMAGE */}

          <div className="flex gap-6 items-center-safe">
            {/* Vertical Thumbnails */}

            <div className="flex flex-col gap-4">
              {product.images?.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`
          overflow-hidden
          rounded-xl
          border-2
          transition-all
          duration-300

          ${
            selectedImage === index
              ? "border-[#7A0C0C]"
              : "border-transparent hover:border-gray-300"
          }
        `}
                >
                  <img
                    src={image  }
                    alt={`Preview ${index + 1}`}
                    className="w-20 h-20 object-cover"
                  />
                </button>
              ))}
            </div>

            {/* Main Image */}

            <div className="flex-1 overflow-hidden rounded-3xl bg-[#F8F5F1] shadow-lg">
              <img
                src={
                  product.images?.[selectedImage]
                    ? product.images[selectedImage]
                    : "/heroo.png"
                }
                alt={product.name}
                className="
        w-full
        h-[650px]
        object-cover
        transition-transform
        duration-500
        hover:scale-105
      "
              />
            </div>
          </div>

          {/* DETAILS */}

          <div className="sticky top-28 self-start">
            <p className="uppercase tracking-[3px] text-[#7A0C0C]">
              {product.collection}
            </p>

            <h1 className="text-3xl md:text-4xl font-semibold mt-4">
              {product.name}
            </h1>

            <p className="mt-6 text-3xl font-bold">₹{product.price}</p>

            <p className="mt-6 text-gray-600 leading-8">
              {product.description}
            </p>

            {/* SIZE */}

            <div className="mt-10">
              <h3 className="font-semibold mb-4">Select Size</h3>

              <div className="flex gap-4 flex-wrap">
                {product.sizes?.map((size) => {
                  const outOfStock = (product.stock?.[size] || 0) <= 0;

                  return (
                    <button
                      key={size}
                      disabled={outOfStock}
                      onClick={() => setSelectedSize(size)}
                      className={`

px-5
py-3
rounded-xl
border
transition-all

${
  selectedSize === size
    ? "bg-[#7A0C0C] text-white border-[#7A0C0C]"
    : outOfStock
      ? "bg-gray-200 text-gray-400 cursor-not-allowed"
      : "border-gray-300"
}

`}
                    >
                      {size}

                      {outOfStock && " (Out)"}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* QUANTITY */}

            <div className="mt-8">
              <h3 className="font-semibold mb-4">Quantity</h3>

              <div className="flex items-center gap-4">
                <button
                  onClick={() => quantity > 1 && setQuantity(quantity - 1)}
                  className="
                    w-10
                    h-10
                    border
                    rounded-lg
                    hover:bg-gray-100
                  "
                >
                  -
                </button>

                <span className="text-xl font-semibold">{quantity}</span>

                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="
                    w-10
                    h-10
                    border
                    rounded-lg
                    hover:bg-gray-100
                  "
                >
                  +
                </button>
              </div>
            </div>

            {/* ADD TO CART */}

            <button
              disabled={(product.stock?.[selectedSize] || 0) <= 0}
              onClick={() => {
                addToCart(product, selectedSize, quantity);
                navigate("/cart");
              }}
              className={`

mt-10

px-10
py-4

rounded-xl

transition-all
duration-300

${
  (product.stock?.[selectedSize] || 0) <= 0
    ? "bg-gray-400 cursor-not-allowed text-white"
    : "bg-[#7A0C0C] hover:bg-[#5f0909] text-white"
}

`}
            >
              ADD TO CART
            </button>
          </div>
        </div>
      </div>
    </section>

    {/* // detail section */}

    <section className="bg-[#FAF8F5] py-20">
  <div className="max-w-7xl mx-auto px-6">

    <h2 className="text-4xl font-semibold text-center mb-14">
      Why Choose The Indian Drip
    </h2>

    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">

      {/* Free Shipping */}
      <div className="bg-white rounded-2xl p-8 text-center border border-gray-200 hover:shadow-lg transition-all duration-300">
        <Truck
          size={38}
          className="mx-auto text-[#7A0C0C]"
          strokeWidth={1.8}
        />

        <h3 className="mt-5 text-lg font-semibold">
          Free Shipping
        </h3>

        <p className="mt-2 text-sm text-gray-500 leading-6">
          Free delivery on prepaid
          orders above ₹999.
        </p>
      </div>

      {/* Exchange */}
      <div className="bg-white rounded-2xl p-8 text-center border border-gray-200 hover:shadow-lg transition-all duration-300">
        <RefreshCcw
          size={38}
          className="mx-auto text-[#7A0C0C]"
          strokeWidth={1.8}
        />

        <h3 className="mt-5 text-lg font-semibold">
          Easy Exchange
        </h3>

        <p className="mt-2 text-sm text-gray-500 leading-6">
          Hassle-free 7 day
          size exchange.
        </p>
      </div>

      {/* Quality */}
      <div className="bg-white rounded-2xl p-8 text-center border border-gray-200 hover:shadow-lg transition-all duration-300">
        <ShieldCheck
          size={38}
          className="mx-auto text-[#7A0C0C]"
          strokeWidth={1.8}
        />

        <h3 className="mt-5 text-lg font-semibold">
          Premium Quality
        </h3>

        <p className="mt-2 text-sm text-gray-500 leading-6">
          Heavyweight cotton
          built to last.
        </p>
      </div>

      {/* Authentic */}
      <div className="bg-white rounded-2xl p-8 text-center border border-gray-200 hover:shadow-lg transition-all duration-300">
        <BadgeCheck
          size={38}
          className="mx-auto text-[#7A0C0C]"
          strokeWidth={1.8}
        />

        <h3 className="mt-5 text-lg font-semibold">
          Authentic Brand
        </h3>

        <p className="mt-2 text-sm text-gray-500 leading-6">
          Original designs inspired
          by Indian street culture.
        </p>
      </div>

    </div>

  </div>
</section>

</div>
  )

}

export default Product;
