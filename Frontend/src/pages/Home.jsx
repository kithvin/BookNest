import React from "react";
import Hero from "../components/Hero";
import FeaturedDestinatination from "../components/FeaturedDestinatination";
import ExclusiveOffers from "../components/ExclusiveOffers";
import Testimonial from "../components/Testimonial";
import NewsLetter from "../components/NewsLetter";


const Home = () => {
  return (
    <>
      {/* Hero section component */}
      <Hero />

      {/* Featured Destinatination section component */}
      <FeaturedDestinatination />

      {/* Featured ExclusiveOffers section component */}
      <ExclusiveOffers />

    {/* Testimonial section component */}
      <Testimonial />
    
    {/* NewsLetter section component */}
    <NewsLetter />
    </>
  );
};

export default Home;
