import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Feature from "./components/Feature";
import WorkFlow from "./components/WorkFlow";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <Hero />
        <Feature />
        <WorkFlow />
        <Testimonials />
        <Footer />
      </div>
    </>
  );
};

export default App;
