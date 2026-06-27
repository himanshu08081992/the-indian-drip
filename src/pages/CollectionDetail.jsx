import { useParams, Link } from "react-router-dom";

import { useEffect, useState } from "react";
import { getProducts } from "../services/productService";
import { imageMap } from "../data/imageMap";
function CollectionDetail() {
  const { id } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts();
        setProducts(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProducts();
  }, []);

  const collectionProducts = products.filter(
    (product) => product.collection === id,
  );

  return (
    <section className="bg-[#F5EFE6] min-h-screen py-20">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-semibold uppercase">{id}</h1>

          <p className="mt-4 text-gray-600">
            Explore pieces from the {id} collection.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {collectionProducts.map((product) => (
            <Link
              key={product.id}
              to={`/product/${product.productCode}`}
              className="group"
            >
              <div className="overflow-hidden rounded-[24px]">
                <img
                  src={imageMap[product.images?.[0]?.trim()]}
                  alt={product.name}
                  className="
                    w-full
                    h-[400px]
                    object-cover
                    group-hover:scale-105
                    duration-500
                  "
                />
              </div>

              <h2 className="mt-4 font-semibold">{product.name}</h2>

              <p className="mt-2 text-[#7A0C0C]">₹{product.price}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CollectionDetail;
