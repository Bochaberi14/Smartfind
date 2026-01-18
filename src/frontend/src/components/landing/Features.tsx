import { useState } from "react";

const features = [
  {
    title: "Smart Property Search",
    image: "/src/assets/images/estate2.jpg",
    description:
      "Filter by location, price, and property type — or use Smart AI Search to describe exactly what you’re looking for.",
    cta: "Explore Search",
  },
  {
    title: "Map-Based Discovery",
    image: "/src/assets/images/estate3.jpg",
    description:
      "Explore properties across Kenya using an interactive map with real-time listings and location insights.",
    cta: "Open Map",
  },
  {
    title: "Verified Listings",
    image: "/src/assets/images/estate4.jpg",
    description:
      "Properties are listed by verified landlords and trusted real estate agencies to reduce scams.",
    cta: "See Verified",
  },
  {
    title: "Built for Landlords & Agencies",
    image: "/src/assets/images/estate5.jpg",
    description:
      "Easily list, manage, and promote properties with tools designed for individuals and real estate companies.",
    cta: "Start Listing",
  },
];

export default function Features() {
  const [activeIndex, setActiveIndex] = useState(0);

  const prev = () =>
    setActiveIndex(activeIndex === 0 ? features.length - 1 : activeIndex - 1);

  const next = () =>
    setActiveIndex(activeIndex === features.length - 1 ? 0 : activeIndex + 1);

  const item = features[activeIndex];

  return (
    <section id="features" className="bg-gray-300 py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="relative bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl shadow-2xl p-4 sm:p-6 lg:p-8 mx-auto">
          
          {/* TITLE */}
          <h2 className="text-center text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-white">
            Why Choose SmartFind
          </h2>

          {/* SUBTITLE (Added) */}
          <p className="text-center text-white/80 max-w-2xl mx-auto mb-10">
            SmartFind combines intelligent search, trusted listings, and modern tools to make property discovery simpler and safer.
          </p>

          <div className="flex flex-col md:flex-row items-center gap-10 md:gap-12 relative">
            {/* IMAGE */}
            <div className="w-full md:w-1/2 flex justify-center">
              <div className="w-full max-w-xs sm:max-w-sm md:max-w-[320px] h-[360px] sm:h-[400px] rounded-xl overflow-hidden shadow-2xl bg-white/10">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* TEXT */}
            <div className="w-full md:w-1/2 max-w-xl text-center md:text-left">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-4 text-white">
                {item.title}
              </h3>
              <p className="text-base sm:text-lg leading-relaxed mb-6 text-white/80">
                {item.description}
              </p>
              <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:opacity-90 transition">
                {item.cta}
              </button>
            </div>

            {/* DESKTOP ARROWS */}
            <button
              onClick={prev}
              className="hidden md:flex items-center justify-center absolute left-4 lg:left-6 top-1/2 -translate-y-1/2 text-4xl text-white/70 hover:opacity-80 z-10"
            >
              ‹
            </button>

            <button
              onClick={next}
              className="hidden md:flex items-center justify-center absolute right-4 lg:right-6 top-1/2 -translate-y-1/2 text-4xl text-white/70 hover:opacity-80 z-10"
            >
              ›
            </button>
          </div>

          {/* MOBILE ARROWS */}
          <div className="flex md:hidden justify-between w-full mt-10 px-4">
            <button onClick={prev} className="text-3xl text-white/70">
              ‹
            </button>
            <button onClick={next} className="text-3xl text-white/70">
              ›
            </button>
          </div>

          {/* DOTS */}
          <div className="flex justify-center mt-12 sm:mt-16 space-x-4">
            {features.map((_, idx) => (
              <span
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`w-3 h-3 rounded-full cursor-pointer transition ${
                  idx === activeIndex ? "bg-white" : "bg-white/40"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
