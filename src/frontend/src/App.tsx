import React from "react";
import Navbar from "./components/layout/Navbar";
import Hero from "./components/landing/Hero";
import Features from "./components/landing/Features";
import PropertyTypes from "./components/landing/PropertyTypes";
import HowItWorks from "./components/landing/HowItWorks";
import Pricing from "./components/landing/Pricing";
import Footer from "./components/landing/Footer";

function App() {
  return (
    <div className="font-sans text-primary bg-surface">
      {/* Navbar */}
      <Navbar />

      {/* Landing Sections */}
      <main className="overflow-x-hidden">
        {/* Hero Section */}
        <section id="hero">
          <Hero />
        </section>

        {/* Features Section */}
        <section id="features" className="py-20">
          <Features />
        </section>

        {/* Property Types */}
        <section id="property-types" className="py-20 bg-gray-50">
          <PropertyTypes />
        </section>

        {/* How It Works */}
        <section id="how-it-works" className="py-20">
          <HowItWorks />
        </section>

        {/* Pricing */}
        <section id="pricing" className="py-20 bg-gray-50">
          <Pricing />
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
