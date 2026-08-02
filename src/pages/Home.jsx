import { useEffect, useState } from "react";
import Loader from "../components/Loader"
import Hero from "../components/Hero";
import Features from "../components/Features/Features";
import Collections from "../components/Collections";
import BestSellers from "../components/FeaturedProducts";
import AboutBrand from "../components/About";

function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Collections />
      <BestSellers />
      <AboutBrand />
    </>
  );
}

export default Home;
