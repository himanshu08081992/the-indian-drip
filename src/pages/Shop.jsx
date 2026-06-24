import { useState } from "react";
import products from "../data/products";
import { Link } from "react-router-dom";

function Shop() {
  const [search, setSearch] = useState("");
  const [selectedCollection, setSelectedCollection] = useState("all");

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCollection =
      selectedCollection === "all" || product.collection === selectedCollection;

    return matchesSearch && matchesCollection;
  });

  return (
    <section className="bg-[#F5EFE6]  min-h-screen py-8">
      <div className="max-w-[1400px] mx-auto px-6">
        {/* Heading */}

        <h1 className="text-6xl font-semibold mb-6">Shop</h1>

        {/* Search */}

        <input
          type="text"
          placeholder="Search Products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
         className="
w-full
h-14

px-5

bg-white

rounded-full

border
border-gray-300

outline-none

focus:border-[#7A0C0C]

mb-6
"
        />

        {/* Filters */}

        <div className="flex gap-3 mb-6 overflow-x-auto pb-2 hide-scrollbar">
          {["all", "roots", "peaks", "streets", "legacy"].map((item) => (
            <button
              key={item}
              onClick={() => setSelectedCollection(item)}
              className={`
    whitespace-nowrap
    px-5
    py-2
    rounded-full
    text-sm
    border
    duration-300

    ${
      selectedCollection === item
        ? "bg-[#7A0C0C] text-white border-[#7A0C0C]"
        : "bg-white"
    }
  `}
            >
              {item.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Product Count */}

        <p className="mb-6 text-gray-600">
          {filteredProducts.length} Products Found
        </p>

        {/* Products */}

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredProducts.map((product) => (
            <Link
              key={product.id}
              to={`/product/${product.id}`}
              className="group"
            >
              <div className="overflow-hidden rounded-3xl">
                <img
                  src={product.image}
                  alt={product.name}
                  className="
                    w-full
                    h-[350px]
                    object-cover

                    group-hover:scale-105
                    duration-500
                  "
                />
              </div>

              <h3 className="mt-4 font-semibold">{product.name}</h3>

              <p className="text-[#7A0C0C] font-bold mt-2">₹{product.price}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Shop;
