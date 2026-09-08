import { Link } from "react-router-dom";

const about1 = "/TID.png";
const about2 = "/bharat.png";

function AboutBrand() {
  return (
    <section className="py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">

          {/* LEFT CONTENT */}
      <div className="w-full lg:w-1/2">

  <p className="font-['Mukta'] text-[#7A0C0C] mb-3 text-lg">
    हमारी कहानी
  </p>

  <h2 className="text-4xl md:text-5xl font-semibold leading-tight">
    WHY THE INDIAN DRIP?
  </h2>

  <p className="font-['Mukta'] mt-3 text-xl text-gray-600">
    अपनी जड़ों से, अपने अंदाज़ तक।
  </p>

  <p className="mt-8 text-gray-700 leading-8">
    We are not just a clothing brand.
    
    <br />
    <br />

    The Indian Drip is inspired by India’s mountains,
    streets, heritage and the stories that shape us.

    <br />
    <br />

    हर collection भारत की एक अलग कहानी को
    modern streetwear के अंदाज़ में पेश करता है।

    <br />
    <br />

    Built in India.
    <br />
    Designed for the streets.
  </p>

  <Link to="/ourstory">
    <button className="mt-8 border border-[#7A0C0C] text-[#7A0C0C] px-7 sm:px-8 py-3.5 sm:py-4 rounded-xl hover:bg-[#7A0C0C] hover:text-white duration-300">
      OUR STORY
    </button>
  </Link>

</div>

          {/* RIGHT IMAGES */}
          <div className="w-full lg:w-1/2">

            <div className="grid grid-cols-2 gap-4 md:gap-6 items-start">

              {/* IMAGE 1 */}
              <img
                src={about1}
                alt="The Indian Drip streetwear"
                className="
                  w-full
                  h-[300px]
                  sm:h-[380px]
                  md:h-[450px]
                  lg:h-[500px]
                  object-cover
                  rounded-[24px]
                "
              />

              {/* IMAGE 2 */}
              <img
                src={about2}
                alt="The Indian Drip collection"
                className="
                  w-full
                  h-[260px]
                  sm:h-[330px]
                  md:h-[400px]
                  lg:h-[450px]
                  object-cover
                  rounded-[24px]
                  mt-10
                  md:mt-14
                  lg:mt-20
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