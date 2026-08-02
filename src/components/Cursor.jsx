import { useEffect, useRef } from "react";

export default function Cursor() {
  // const dotRef = useRef(null);
  const followerRef = useRef(null);

  useEffect(() => {
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;

    let posX = mouseX;
    let posY = mouseY;

    const moveMouse = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      // dot instantly follows
      // dotRef.current.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
    };

    window.addEventListener("mousemove", moveMouse);

    const animate = () => {
      // spring effect
      posX += (mouseX - posX) * 0.15;
      posY += (mouseY - posY) * 0.15;

      followerRef.current.style.transform = `translate(${posX}px, ${posY}px)`;

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("mousemove", moveMouse);
    };
  }, []);

  return (
    <>
      

      <div
        ref={followerRef}
        className="fixed top-0 left-0 w-5 h-5 rounded-full border-2 border-red-700  pointer-events-none z-[999998] -translate-x-1/2 -translate-y-1/2"
      />
    </>
  );
}