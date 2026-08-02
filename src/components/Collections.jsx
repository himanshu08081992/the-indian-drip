import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getCollections } from "../services/collectionService";


function Collections() {
  const [collections, setCollections] = useState([]);

  useEffect(() => {
    const fetchCollections = async () => {
      try {
        const data = await getCollections();

        setCollections(data.filter((item) => item.isActive && item.featured));
      } catch (error) {
        console.error(error);
      }
    };

    fetchCollections();
  }, []);

  // animation

  return (
    <section  className="   bg-[#F5EFE6] py-24">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">

  <div
  
    className="
      inline-block
      overflow-hidden
    "
  >
    <h2
      className="
        text-4xl
        md:text-5xl
        font-semibold
      "
    >
      OUR COLLECTIONS
    </h2>
  </div>

  <p className="mt-4 text-gray-600">
    Explore every chapter of The Indian Drip.
  </p>

</div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {collections.map((collection) => (
            <Link
              key={collection.id}
              to={`/collections/${collection.slug}`}
              className="
                 collection-card
      group
      relative
      overflow-hidden
      rounded-[32px]
      cursor-pointer
      block
      min-h-[420px]
    "
            >
              {/* imgage  */}
              <div
                className="
    relative
    w-full
    h-[420px]
    sm:h-[460px]
    lg:h-[500px]

    overflow-hidden

    rounded-[32px]

    bg-gradient-to-br
    from-[#e7dfd3]
    via-[#d9cfbf]
    to-[#cfc3b1]
  "
              >
                {/* Background Number */}

                <h1
                  className="
      absolute
      -right-8
      -top-8

      text-[180px]
      sm:text-[220px]

      font-black

      text-black/[0.04]

      leading-none
      select-none
    "
                >
                  0{collection.order}
                </h1>

                {/* Decorative Lines */}

                <div className="absolute left-10 top-0 h-full w-px bg-black/10"></div>

                <div className="absolute top-14 left-0 h-px w-full bg-black/10"></div>

                {/* Small Label */}

                <p
                  className="
      absolute
      top-10
      left-10

      uppercase

      tracking-[0.45em]

      text-xs

      text-black/50
    
    "
                >
                  THE INDIAN DRIP
                </p>

                {/* Huge Collection Name */}

                <h2
                  className="
      absolute

      left-10

      top-1/2

      -translate-y-1/2

      text-5xl
      sm:text-6xl
      lg:text-7xl

      font-black

      uppercase

      leading-none

      tracking-[0.08em]

      text-[#1d1d1d]
      
    "
                >
                  {collection.name}
                </h2>

                {/* Bottom Right */}

                <div
                  className="
      absolute

      bottom-10
      right-10

      text-right
    "
                >
                  <p
                    className="
        text-xs

        uppercase

        tracking-[0.4em]

        text-black/50
      "
                  >
                    Collection
                  </p>

                  <p
                    className="
        mt-2

        text-lg

        font-medium
      "
                  >
                    Explore →
                  </p>
                </div>
              </div>

              {/* overlay  */}
              <div className="m-6">
                <h3 className="text-3xl font-semibold">{collection.name}</h3>

                <p className="mt-3 text-gray-600 leading-relaxed">
                  {collection.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Collections;
