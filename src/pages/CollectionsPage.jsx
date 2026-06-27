import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { getCollections } from "../services/collectionService";

function CollectionsPage() {


  const [collections, setCollections] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCollections = async () => {
      try {
        const data = await getCollections();
        setCollections(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchCollections();
  }, []);

  if (loading) {
    return (
      <section className="bg-[#F5EFE6] min-h-screen flex items-center justify-center">
        <h2 className="text-2xl font-semibold">
          Loading Collections...
        </h2>
      </section>
    );
  }

  return (
    <section className="bg-[#F5EFE6] min-h-screen py-10">
      <div className="max-w-[1400px] mx-auto px-6">

        <div className="text-center mb-14">
          <h1 className="text-5xl md:text-7xl font-semibold">
            COLLECTIONS
          </h1>

          <p className="mt-6 text-gray-600 max-w-xl mx-auto">
            Explore every drop from The Indian Drip.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {collections.map((collection) => (
            <Link
              key={collection.id}
              to={`/collections/${collection.slug}`}
              className="group"
            >
              <div className="overflow-hidden rounded-[28px]">

                {collection.image ? (
                  <img
                    src={collection.image}
                    alt={collection.name}
                    className="
                      w-full
                      h-[420px]
                      object-cover
                      group-hover:scale-105
                      duration-500
                    "
                  />
                ) : (
                  <div
                    className="
                      w-full
                      h-[420px]
                      bg-gray-200
                      flex
                      items-center
                      justify-center
                      text-gray-500
                    "
                  >
                    Image Coming Soon
                  </div>
                )}

              </div>

              <h2 className="mt-4 text-2xl font-semibold">
                {collection.name}
              </h2>

              <p className="text-gray-600 mt-2 text-sm">
                {collection.description}
              </p>

            </Link>
          ))}

        </div>

      </div>
    </section>
  );
}

export default CollectionsPage;