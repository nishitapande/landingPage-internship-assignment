import React from "react";
import MainFeatures from "./components/MainFeatures";
import Cta from "./components/Cta";
import Footer from "./components/Footer";
import KeyFeatures from "./components/KeyFeatures";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import ReviewsSection from "./components/Review";

const Home = () => {
  return (
    <div>
      <NavBar />
      <Hero />
      <MainFeatures />
      <ReviewsSection />
      <KeyFeatures />
      <Cta />
      <Footer />
    </div>
  );
};

export default Home;
