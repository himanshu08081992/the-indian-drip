import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { loaderAnimation } from "../animations/loaderAnimation";

function Loader({ onFinish }) {
  const loaderRef = useRef(null);
  const logoRef = useRef(null);
  const titleRef = useRef(null);
  const progressBarRef = useRef(null);
  const progressFillRef = useRef(null);

  useGSAP(
    () => {
      const tl = loaderAnimation(
        {
          loader: loaderRef.current,
          logo: logoRef.current,
          title: titleRef.current,
          progressBar: progressBarRef.current,
          progressFill: progressFillRef.current,
        },
        onFinish
      );

      return () => tl.kill();
    },
    { scope: loaderRef }
  );

  return (
    <div
      ref={loaderRef}
      className="fixed inset-0 z-[99999] flex items-center justify-center bg-[#F5EFE6]"
    >
      <div className="w-full max-w-md px-8 flex flex-col items-center">

        {/* Logo */}
        <img
          ref={logoRef}
          src="/logo-loader.png"
          alt="The Indian Drip"
          draggable={false}
          className="w-64 md:w-80 select-none"
        />

        {/* Tagline */}
        <p
          ref={titleRef}
          className="mt-6 text-sm tracking-[8px] uppercase text-neutral-700"
        >
          Wear Your Story
        </p>

        {/* Progress Bar */}
        <div
          ref={progressBarRef}
          className="mt-12 w-full h-[3px] rounded-full bg-[#d8d1c7] overflow-hidden"
        >
          <div
            ref={progressFillRef}
            className="h-full w-0 bg-[#7A0C0C]"
          />
        </div>

        {/* Bottom Text */}
        <p className="mt-5 text-xs tracking-[5px] uppercase text-neutral-500">
          Crafting Your Experience...
        </p>

      </div>
    </div>
  );
}

export default Loader;