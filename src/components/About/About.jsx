import { Link } from "react-router-dom";

const about1 =
  "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b";

const about2 =
  "https://images.unsplash.com/photo-1521572267360-ee0c2909d518";
function AboutBrand() {
  return (
    <section className="bg-[#F5EFE6] py-24">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12">

        <div className="flex flex-col lg:flex-row gap-16 items-center">

          {/* LEFT */}

          <div className="w-full lg:w-1/2">

            <p className="uppercase tracking-[4px] text-[#7A0C0C] mb-4">
              About Us
            </p>

            <h2 className="text-4xl md:text-5xl font-semibold leading-tight">
              WHY THE INDIAN DRIP?
            </h2>

            <p className="mt-8 text-gray-700 leading-8">
              We are not just a clothing brand.

              <br /><br />

              The Indian Drip is inspired by India’s mountains,
              streets, heritage and untold stories.

              <br /><br />

              Every collection reflects a different side of
              Indian culture while keeping a modern streetwear
              identity.

              <br /><br />

              Built in India. Designed for the streets.
            </p>

          <Link  to="/OurStory">
            <button
              className="
                mt-8

                border
                border-[#7A0C0C]

                text-[#7A0C0C]

                px-8
                py-4

                rounded-xl

                hover:bg-[#7A0C0C]
                hover:text-white

                duration-300
              "

               
            >
              OUR STORY
            </button>
          </Link>

          </div>

          {/* RIGHT */}

          <div className="w-full lg:w-1/2">

            <div className="grid grid-cols-2 gap-6">

              <img
                src={about1}
                alt=""
                className="
                  h-[500px]
                  w-full
                  object-cover
                  rounded-[24px]
                "
              />

              <img
                src={about2}
                alt=""
                className="
                  h-[500px]
                  w-full
                  object-cover
                  rounded-[24px]
                "
              />

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default AboutBrand;