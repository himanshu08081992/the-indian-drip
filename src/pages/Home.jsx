import { useEffect, useState } from "react";
import Loader from "../components/Loader/Loader"
import Hero from "../components/Hero/Hero";
import Features from "../components/Features/Features";
import Collections from "../components/Collections/Collections";
import BestSellers from "../components/BesrSellers/BestSellers";
import AboutBrand from "../components/About/About";

function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);
  if (loading) {
    return <Loader/>;
  }
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
