import heroImage from "../../assets/images/cover/hero.png";

function Hero() {
  return (
    <section
      className="bg-[#F5EFE6] relative overflow-hidden py-6
px-4
md:p-5"
    >
      {/* Background Pattern */}

      <div
        className="
        absolute
        inset-0
        opacity-[0.03]
        pointer-events-none
      "
      >
        <div
          className="
          absolute
          top-10
          left-10

          text-[300px]
          font-black
          text-[#7A0C0C]
        "
        >
          ✦
        </div>
      </div>

      <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
        <div
          className="
         flex
flex-col-reverse
md:flex-row

          items-center

        min-h-auto
md:min-h-[85vh]

          gap-10
      
        "
        >
          {/* LEFT SECTION */}

          <div
            className="
w-full
md:w-[35%]

flex
flex-col

items-center
text-center

md:items-start
md:text-left

px-6
sm:px-10
lg:px-16


"
          >
            <h1 className="leading-none">
              <span
                className="
                block
text-5xl
sm:text-6xl
md:text-7xl
lg:text-8xl

                font-light
                tracking-wide
              "
              >
                THE
              </span>

              <span
                className="
                block

                text-[#7A0C0C]

            text-6xl
sm:text-7xl
md:text-8xl
lg:text-[120px]

                font-bold
              "
              >
                इंडियन
              </span>

              <span
                className="
                block
text-5xl
sm:text-6xl
md:text-7xl
lg:text-8xl

                font-light
                tracking-wide
              "
              >
                DRIP
              </span>
            </h1>

            <p
              className="
              mt-8

              text-lg
              md:text-xl

              text-gray-700

              max-w-md
            "
            >
              Rooted In India.
              <br />
              Built For The Streets.
            </p>

            <button
              className="
              mt-8

              bg-[#7A0C0C]
              text-white

             w-full
sm:w-auto

px-8
py-4

              rounded-xl

              hover:bg-[#5f0909]

              transition-all
              duration-300
            "
            >
              EXPLORE COLLECTION →
            </button>
          </div>

          {/* RIGHT SECTION */}

          <div
            className="
w-full
md:w-[65%]

flex
justify-end
mt-4
md:mt-0
"
          >
             <img
              src={heroImage}
              alt="The Indian Drip"
              className="
w-full



h-[300px]
sm:h-[450px]
md:h-[600px]

object-cover

rounded-[24px]
md:rounded-[32px]

shadow-xl
"
            />

            
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
