import React from "react";
import Home_hero from "../home_hero/Home_hero";
import Home_about from "../home_about/Home_about";
import CTA from "../cta/CTA";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import Features from "../features/Features";
const Home = () => {
  return (
    <div>
      <Header />
      <Home_hero />
      <Home_about />
      <Features/>
      <CTA />
      <Footer />
    </div>
  );
};

export default Home;
