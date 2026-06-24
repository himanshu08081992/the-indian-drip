import { useState } from "react";
import { useParams } from "react-router-dom";
import products from "../data/products";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

function Product() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const product = products.find((item) => item.id === Number(id));

  const [selectedSize, setSelectedSize] = useState("M");
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-3xl font-semibold">Product Not Found</h1>
      </div>
    );
  }

  return (
    <section className="bg-[#F5EFE6] min-h-screen py-15">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* IMAGE */}

          <div>
            <img
              src={product.image}
              alt={product.name}
              className="
                w-full
                rounded-3xl
                object-cover
                shadow-lg
                h-[600px]
              "
            />
          </div>

          {/* DETAILS */}

          <div>
            <p className="uppercase tracking-[3px] text-[#7A0C0C]">
              {product.category}
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
                {["S", "M", "L", "XL"].map((size) => (
                  <button
                    key={size}
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
                          : "border-gray-300"
                      }
                    `}
                  >
                    {size}
                  </button>
                ))}
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
              onClick={() => {
                addToCart(product, selectedSize, quantity);

                navigate("/cart");
              }}
              className="
                mt-10

                bg-[#7A0C0C]
                text-white

                px-10
                py-4

                rounded-xl

                hover:bg-[#5f0909]

                transition-all
                duration-300
              "
            >
              ADD TO CART
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Product;
