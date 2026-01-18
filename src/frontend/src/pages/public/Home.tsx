import React from "react";
import Navbar from "../../components/layout/Navbar";
import Hero from "../../components/landing/Hero";
import Features from "../../components/landing/Features";
import HowItWorks from "../../components/landing/HowItWorks";
import PropertyTypes from "../../components/landing/PropertyTypes";
import Pricing from "../../components/landing/Pricing";
import Footer from "../../components/landing/Footer";

export default function Home() {
  return (
    <div className="font-sans text-gray-800">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <PropertyTypes />
        <HowItWorks />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
}
