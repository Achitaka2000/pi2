import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Feature from "./components/Feature";
import WorkFlow from "./components/WorkFlow";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Give from "./components/Give";
import Account from "./components/Account";
import { DonationsProvider } from "./contexts/DonationsContext";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const App = () => {
  return (
    <DonationsProvider>
      <Router>
        <Navbar />
        <div className="max-w-7xl mx-auto pt-20 px-6">
          <Routes>
            <Route path="/" exact element={<Main />} />
            <Route path="/notre-demarche" element={<NotreDemarche />} />
            <Route path="/donner" element={<Give />} />
            <Route path="/mon-compte" element={<Account />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </DonationsProvider>
  );
};

const NotreDemarche = () => {
  return (
    <>
      <Hero />
      <Feature />
      <WorkFlow />
      <Testimonials />
    </>
  );
};

export default App;
