import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background */}
      <img
        src="/heroo.png"
        alt="The Indian Drip"
        className="absolute inset-0 h-full w-full object-cover

md:object-center
lg:object-center
object-[65%_center] "
      />

      {/* Overlay */}
      <div
        className="absolute inset-0 bg-gradient-to- from-black/70 via-black/20 to-black/10"
      />

      {/* Content */}
      <div className="relative z-10 flex min-h-screen items-center justify-center">
        <div className="mx-auto flex w-full max-w-375 flex-col items-center px-5 sm:px-8 lg:px-12 text-center">
          {/* Small Heading */}
          <p
            className="
              mb-5
              text-xs
              uppercase
              tracking-[0.5em]
              text-white/80
            "
          >
            Premium Indian Streetwear
          </p>

          {/* Main Heading */}
          <h1
            className="
              font-black
              uppercase
              leading-none
              text-white
              tracking-[0.08em]

            text-[46px]
sm:text-[58px]
md:text-[72px]
lg:text-[92px]
xl:text-[104px]
2xl:text-[118px]
            "
          >
            THE INDIAN DRIP
          </h1>

          {/* Tagline */}
          <p
            className="
              mt-6
              max-w-xl
              text-white/75
             tracking-[0.18em]
leading-7
text-[13px]
sm:text-sm
              uppercase
              text-sm
            "
          >
            ROOTED IN CULTURE • MADE FOR THE STREETS
          </p>

          {/* Button */}
          <Link
            to="/shop"
            className="
              mt-12
              border
              border-white
              bg-black/70
             px-8 sm:px-10 lg:px-12

py-3.5 lg:py-4
             
              text-sm
              uppercase
              tracking-[0.28em]
              text-white
              transition-all
              duration-300

              hover:bg-white
              hover:text-black
            "
          >
            Shop Collection
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Hero;
