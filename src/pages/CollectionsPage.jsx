import { Link } from "react-router-dom";

const collections = [
  {
    id: "roots",
    name: "The Roots",
    image:
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f",
  },

  {
    id: "peaks",
    name: "The Peaks",
    image:
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c",
  },

  {
    id: "streets",
    name: "The Streets",
    image:
      "https://images.unsplash.com/photo-1523398002811-999ca8dec234",
  },

  {
    id: "legacy",
    name: "The Legacy",
    image:
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf",
  },
];

function CollectionsPage() {
  return (
    <section className="bg-[#F5EFE6] min-h-screen py-10">
      <div className="max-w-[1400px] mx-auto px-6">

        <div className="text-center mb-14">

          <h1 className="text-5xl md:text-7xl font-semibold">
            COLLECTIONS
          </h1>

          <p className="mt-6 text-gray-600 max-w-xl mx-auto">
            Every collection tells a story inspired by
            India's roots, streets, mountains and legacy.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {collections.map((collection) => (
            <Link
              key={collection.id}
              to={`/collections/${collection.id}`}
              className="group"
            >
              <div className="overflow-hidden rounded-[28px]">

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

              </div>

              <h2
                className="
                  mt-4

                  text-2xl

                  font-semibold
                "
              >
                {collection.name}
              </h2>

            </Link>
          ))}

        </div>

      </div>
    </section>
  );
}

export default CollectionsPage;