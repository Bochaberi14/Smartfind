import React from "react";

const propertyTypes = [
  {
    title: "Apartments",
    img: "/src/assets/images/estate3.jpg",
    description: "Modern apartments for rent or sale",
    tag: "Most Popular",
  },
  {
    title: "Houses",
    img: "/src/assets/images/estate2.jpg",
    description: "Family homes across Kenya",
    tag: "For Families",
  },
  {
    title: "Land",
    img: "/src/assets/images/land1.jpg",
    description: "Plots and land for investment",
    tag: "Investment",
  },
  {
    title: "Commercial",
    img: "/src/assets/images/estate4.jpg",
    description: "Offices, shops & business spaces",
    tag: "Business",
  },
];

export default function PropertyTypes() {
  return (
    <section
      id="property-types"
      className="bg-gradient-to-r from-indigo-600 to-blue-500 py-2"
    >
      <div className="max-w-7xl mx-auto px-6 py-12 sm:py-16 lg:py-20">
        <div className="bg-gray-300 rounded-3xl shadow-lg p-6">

          {/* Section Header */}
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Explore Property Types
            </h2>
            <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
              Browse properties listed by verified landlords and trusted real estate agencies across Kenya.
            </p>
          </div>

          {/* Property Cards */}
          <div className="grid gap-8 md:grid-cols-4">
            {propertyTypes.map((p, i) => (
              <div
                key={i}
                className="group relative rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition cursor-pointer bg-gray-200"
              >
                {/* Image */}
                <img
                  src={p.img}
                  alt={p.title}
                  className="w-full h-56 object-cover group-hover:scale-105 transition duration-300"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

                {/* Tag */}
                <span className="absolute top-4 left-4 bg-white/90 text-gray-800 text-xs font-semibold px-3 py-1 rounded-full">
                  {p.tag}
                </span>

                {/* Content */}
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="text-xl font-semibold">{p.title}</h3>
                  <p className="text-sm opacity-90 mt-1">{p.description}</p>

                  <button className="mt-4 inline-block text-sm font-semibold text-primary bg-white px-4 py-2 rounded-lg hover:bg-gray-100 transition">
                    View Listings →
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
