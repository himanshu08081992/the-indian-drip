import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const slides = [
   "/heroo1.png",
  "/desktophero.png",
  "/heroo.png",
 
];

function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 15 Center में Shirt Mella, no, center में ठीक था, वो साले bard maridge design, John Lickry no design Upr Richard, kissi company, look, uscaning shortly, char second time, shell battling geling tervalh, kit far do you fix point two second naught place00);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className=" relative min-h-screen overflow-hidden">

      {/* Automatic Background Carousel */}
      {slides.map((image, index) => (
        <img
          key={image}
          src={image}
          alt="The Indian Drip"
          className={`absolute inset-0 h-screen w-full object-cover object-center transition-opacity duration-1000 ${
            current === index ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/10 to-black/30" />

      {/* Content */}
      <div className="relative z-10 flex min-h-screen items-center justify-center">
        <div className="mx-auto flex w-full max-w-375 flex-col items-center px-5 text-center sm:px-8 lg:px-12">

          <p className="mb-5 text-xs uppercase tracking-[0.3em] text-white/80">
            Premium Indian Streetwear
          </p>

          <h1 className="font-black uppercase leading-none text-white tracking-[0.08em] text-[46px] sm:text-[58px] md:text-[72px] lg:text-[92px] xl:text-[104px] 2xl:text-[118px]">
            THE <span>इंडियन</span> DRIP
          </h1>

          <p className="mt-6 max-w-xl text-white/75 tracking-[0.18em] leading-7 text-[13px] sm:text-sm uppercase">
            ROOTED IN CULTURE • MADE FOR THE STREETS
          </p>

          <Link
            to="/shop"
            className="mt-12 border border-white bg-black/70 px-8 py-3.5 text-sm uppercase tracking-[0.28em] text-white transition-all duration-300 hover:bg-white hover:text-black sm:px-10 lg:px-12 lg:py-4"
          >
            Shop Collection
          </Link>

          {/* Carousel Indicators */}
          <div className="mt-8 flex items-center gap-3">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                aria-label={`Go to slide ${index + 1}`}
                className={`h-1 transition-all duration-500 ${
                  current === index
                    ? "w-10 bg-white"
                    : "w-4 bg-white/50"
                }`}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;