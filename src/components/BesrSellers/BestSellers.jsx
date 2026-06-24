import { Link } from "react-router-dom";
import products from "../../data/products.js";

function BestSellers() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12">

        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-semibold">
            BEST SELLERS
          </h2>

          <p className="mt-4 text-gray-600">
            Featured pieces from The Indian Drip.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">

          {products.map((product) => (
            <Link
              key={product.id}
              to={`/product/${product.id}`}
              className="group block"
            >

              <div className="overflow-hidden rounded-[24px]">

                <img
                  src={product.image}
                  alt={product.name}
                  className="
                    w-full
                    h-[400px]
                    object-cover

                    group-hover:scale-105
                    transition-all
                    duration-500
                  "
                />

              </div>

              <div className="mt-4">

                <h3 className="font-medium text-lg">
                  {product.name}
                </h3>

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

export default BestSellers;