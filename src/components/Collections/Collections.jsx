import thepeaks from "../../assets/images/cover/thepeaks.png";
import theroots from "../../assets/images/cover/theroots.png";
import thestreets from "../../assets/images/cover/thestreets.png";
import thelegacy from "../../assets/images/cover/thelegacy.png";

function Collections() {
  const collections = [
    {
      title: "THE PEAKS",
      desc: "Inspired by mountains and exploration.",
      image: thepeaks,
    },
    {
      title: "THE ROOTS",
      desc: "Inspired by India's heritage.",
      image:theroots,
    },
    {
      title: "THE STREETS",
      desc: "Inspired by urban culture.",
      image:thestreets,
    },
    {
      title: "THE LEGACY",
      desc: "Inspired by timeless Indian stories.",
      image:thelegacy,
    },
  ];

  return (
    <section className="bg-[#F5EFE6] py-24">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-semibold">
            DISCOVER THE DRIP
          </h2>

          <p className="mt-4 text-gray-600">
            Four expressions of Indian street culture.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {collections.map((item, index) => (
            <div
              key={index}
              className="
                group
                relative
                overflow-hidden
                rounded-[32px]
                cursor-pointer
              "
            >
              <img
                src={item.image}
                alt={item.title}
                className="
                  w-full
                  h-[450px]
bg-[#493d29]
                  object-cover

                  group-hover:scale-110

                  duration-700
                "
              />

              <div
                className="
                  absolute
                  inset-0

                  bg-gradient-to-t
                  from-black/80
                  via-black/20
                  to-transparent

                  flex
                  flex-col
                  justify-end

                  p-8
                "
              >
                <h3 className="text-white text-3xl font-semibold">
                  {item.title}
                </h3>

                <p className="text-gray-200 mt-2">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Collections;
