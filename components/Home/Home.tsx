import React from "react";
import Hero from "./Hero";
import Testimoni from "./Testimoni";
import About from "./About";
import Review from "./Review/Review";
import Harga from "./Harga";

const Home = () => {
  return (
    <div className="overflow-hidden">
      <Hero />
      <Testimoni />
      <About
        textOrder="lg:order-1"
        imageOrder="lg:order-2"
        linkText="Lebih lanjut"
        title="Harga terjangkau dan pelayanan maksimal"
      />
      <Review />
      <Harga />
    </div>
  );
};

export default Home;
