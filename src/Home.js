import React from "react";
import MainFeatures from "./components/MainFeatures";
import Cta from "./components/Cta";
import Footer from "./components/Footer";
import KeyFeatures from "./components/KeyFeatures";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Review from "./components/Review";
import Metrics from "./components/Metrics";
import Companies from "./components/Companies";

const Home = () => {
  return (
    <div>
      <NavBar />
      <Hero />
      <MainFeatures />
     
      <Companies />
      <Review />
      <KeyFeatures />
      <Cta />
      <Footer />
    </div>
  );
};

export default Home;
