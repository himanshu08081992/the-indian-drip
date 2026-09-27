import { useEffect, useState } from "react";
import { getProducts } from "../services/productService";
import { Link } from "react-router-dom";
function FeaturedProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts();

        const featured = data.filter((item) => item.featured);

        setProducts(featured);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <section className="bg-white py-24">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
        <div className="flex items-end justify-between mb-16">
          <div>
            <p className="uppercase tracking-[0.35em] text-xs text-gray-500 mb-3">
              Curated Selection
            </p>

            <h2 className="text-4xl md:text-5xl font-semibold">
              Featured Products
            </h2>

            <p className="mt-4 text-gray-600 max-w-md">
              Handpicked pieces that define The Indian Drip.
            </p>
          </div>

          <Link
            to="/shop"
            className="
      hidden
      md:flex

      items-center
      gap-2

      text-sm
      uppercase
      tracking-[0.25em]

      hover:gap-4

      duration-300
    "
          >
            View All →
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 min-h-[500px]">
          {products.map((product) => (
            <Link
              key={product.id}
              to={`/product/${product.productCode}`}
              className="group block"
            >
              <div
                className="
    relative
    overflow-hidden
    rounded-[28px]
    bg-[#F8F5F1]
  "
              >
                <img
                  src={
                    product.images?.[0]
                      ? product.images[1]
                      : "/placeholder-product.png"
                  }
                  alt={product.name}
                  className="
      w-full
      h-[420px]

      object-cover

      duration-700
      transition-transform

      group-hover:scale-105
    "
                />

                <div
                  className="
      absolute
      inset-0

      bg-black/0

      group-hover:bg-black/10

      duration-500
      transition-all
    "
                />

                <div
                  className="
      absolute

      bottom-5
      left-5
      right-5

      translate-y-10

      opacity-0

      group-hover:translate-y-0
      group-hover:opacity-100

      duration-500
    "
                >
                  <div
                    className="
        bg-white/90
        backdrop-blur-md

        rounded-full

        py-3

        text-center

        uppercase

        tracking-[0.25em]

        text-xs

        font-medium
      "
                  >
                    View Product
                  </div>
                </div>
              </div>

              <div className="mt-4">
                <h3 className="font-medium text-lg">{product.name}</h3>

                <p className="mt-2 text-[#7A0C0C] font-semibold">
                  ₹{product.price}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedProducts;
