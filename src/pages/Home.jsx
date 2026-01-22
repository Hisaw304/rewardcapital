import React from "react";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Ecosystem from "../components/Ecosystem";
import HowToStart from "../components/HowToStart";
import Markets from "../components/Markets";
import Review from "../components/Review";
import TokenMetrics from "../components/TokenMetrics";
import Team from "../components/Team";
import Faq from "../components/Faq";
import Roadmap from "../components/Roadmap";

const Home = () => {
  return (
    <div>
      <Hero />
      <Features />
      <Ecosystem />
      <HowToStart />
      <Markets />
      <Review />
      <TokenMetrics />
      <Team />
      <Faq />
      <Roadmap />
    </div>
  );
};

export default Home;
