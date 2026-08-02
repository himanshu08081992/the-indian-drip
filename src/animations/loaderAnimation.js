import gsap from "gsap";

export const loaderAnimation = (refs, onFinish) => {
  const {
    loader,
    logo,
    title,
    progressBar,
    progressFill,
  } = refs;

  const tl = gsap.timeline({
    defaults: {
      ease: "power3.out",
    },
    onComplete: () => {
      if (onFinish) onFinish();
    },
  });

  // -----------------------------
  // Initial State
  // -----------------------------

  gsap.set(logo, {
    opacity: 0,
    scale: 0.85,
    filter: "blur(15px)",
  });

  gsap.set(title, {
    opacity: 0,
    y: 15,
  });

  gsap.set(progressBar, {
    opacity: 0,
    y: 15,
  });

  gsap.set(progressFill, {
    width: "0%",
  });

  // -----------------------------
  // Timeline
  // -----------------------------

  // Logo Reveal
  tl.to(logo, {
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    duration: 1,
  });

  // Small breathing effect
  tl.to(
    logo,
    {
      scale: 1.03,
      duration: 0.35,
      yoyo: true,
      repeat: 1,
    },
    "-=0.2"
  );

  // Tagline
  tl.to(
    title,
    {
      opacity: 1,
      y: 0,
      duration: 0.5,
    },
    "-=0.3"
  );

  // Progress Bar
  tl.to(
    progressBar,
    {
      opacity: 1,
      y: 0,
      duration: 0.4,
    },
    "-=0.2"
  );

  // Progress Fill
  tl.to(progressFill, {
    width: "100%",
    duration: 2,
    ease: "power2.inOut",
  });

  // Hold
  tl.to({}, { duration: 0.25 });

  // Loader Exit
  tl.to(loader, {
    opacity: 0,
    duration: 0.6,
    ease: "power2.inOut",
  });

  return tl;
};