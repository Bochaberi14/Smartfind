import React from "react";
import SearchBar from "./SearchBar";
import estate1 from "../../assets/images/estate1.jpg";

export default function Hero() {
  return (
    <section
      id="hero"
      className="pt-24 min-h-screen relative flex flex-col justify-center items-center text-center text-white px-4"
      style={{
        backgroundImage: `url(${estate1})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Gradient Overlay with theme colors */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/40 via-indigo-600/40 to-black/40"></div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Find, Rent & Manage Properties — All in One Place
        </h1>

        <p className="text-lg md:text-2xl mb-8 max-w-2xl mx-auto text-white/90">
          SmartFind Properties helps tenants, landlords, and agencies discover,
          book, pay, and manage properties seamlessly.
        </p>

        <SearchBar />

        <div className="flex flex-wrap justify-center gap-4 mt-6">
          <button className="px-6 py-2 rounded-full bg-white text-blue-600 font-semibold hover:bg-gray-100 transition">
            Apartments
          </button>
          <button className="px-6 py-2 rounded-full bg-white text-blue-600 font-semibold hover:bg-gray-100 transition">
            Houses
          </button>
          <button className="px-6 py-2 rounded-full bg-white text-blue-600 font-semibold hover:bg-gray-100 transition">
            Land
          </button>
          <button className="px-6 py-2 rounded-full bg-white text-blue-600 font-semibold hover:bg-gray-100 transition">
            Commercial
          </button>
        </div>

        <div className="mt-10 rounded-2xl overflow-hidden shadow-lg w-full">
          <iframe
            title="Nairobi Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127443.20232765315!2d36.7073050750959!3d-1.2863899902618358!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10b3c6bdfd3f%3A0xa08e1f0e4c3f2b0!2sNairobi%2C%20Kenya!5e0!3m2!1sen!2ske!4v1700000000000!5m2!1sen!2ske"
            width="100%"
            height="350"
            className="border-0"
            allowFullScreen={true}
            loading="lazy"
          />
        </div>

        <div className="mt-6 bg-white bg-opacity-20 rounded-2xl p-6">
          <p className="text-white font-bold">
            ✨ AI-Powered Search (coming soon)
          </p>
          <p className="text-white/80 mt-2 font-semibold">
            Use SmartFind AI to match you with the perfect property in Kenya.
          </p>
        </div>
      </div>
    </section>
  );
}
