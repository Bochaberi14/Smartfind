import React from "react";

const steps = [
  {
    step: "01",
    title: "Search Smarter",
    description:
      "Use filters or map view to discover properties listed by verified landlords and trusted agencies across Kenya.",
    gradient: "from-blue-600 to-indigo-600",
  },
  {
    step: "02",
    title: "Connect & View",
    description:
      "Contact landlords or agents directly and schedule a viewing at your convenience.",
    gradient: "from-indigo-600 to-blue-600",
  },
  {
    step: "03",
    title: "Move In Confidently",
    description:
      "Choose a secure payment option or agree directly with the landlord — SmartFind helps you avoid scams.",
    gradient: "from-blue-600 to-indigo-600",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="py-12 bg-gray-300 overflow-x-hidden"
    >
      {/* Main content box */}
      <div className="mx-auto max-w-7xl bg-gray-200 rounded-3xl shadow-lg p-8 md:p-12">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            How SmartFind Works
          </h2>
          <p className="mt-4 text-gray-700 max-w-2xl mx-auto">
            Finding your next home or investment property is simple, secure, and transparent.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step, i) => (
            <div
              key={i}
              className={`relative p-8 rounded-2xl shadow-md hover:shadow-xl transition bg-gradient-to-br ${step.gradient} text-white`}
            >
              {/* Step badge */}
              <span className="absolute -top-4 left-8 bg-white text-gray-900 text-sm font-bold px-4 py-1 rounded-full shadow">
                {step.step}
              </span>

              <h3 className="text-xl font-semibold mt-6">
                {step.title}
              </h3>

              <p className="text-white/90 mt-3">
                {step.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
