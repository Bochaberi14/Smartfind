import React from "react";

const plans = [
  {
    title: "Tenants & Buyers",
    price: "Free",
    description: "Search, compare and contact landlords or agents",
    features: [
      "Unlimited property search",
      "Map-based browsing",
      "Contact landlords & agencies",
      "Save favorite listings",
    ],
    cta: "Start Searching",
    highlight: false,
    accent: "from-indigo-500 to-blue-500",
  },
  {
    title: "Landlords",
    price: "KES 1,500 / month",
    description: "For individual property owners",
    features: [
      "List up to 3 properties",
      "Receive verified tenant inquiries",
      "Basic listing analytics",
      "Priority customer support",
    ],
    cta: "List Your Property",
    highlight: true,
    accent: "from-blue-500 to-indigo-500",
  },
  {
    title: "Agencies",
    price: "KES 7,500 / month",
    description: "For real estate agencies & developers",
    features: [
      "Unlimited property listings",
      "Agency profile & branding",
      "Featured listings",
      "Advanced analytics dashboard",
      "API & AI tools (coming soon)",
    ],
    cta: "Become a Partner",
    highlight: false,
    accent: "from-indigo-500 to-blue-500",
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-12 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">

        {/* Container */}
        <div className="bg-gray-200 rounded-3xl p-10">
          
          {/* Header */}
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Simple, Transparent Pricing
            </h2>
            <p className="mt-2 text-gray-600 max-w-2xl mx-auto">
              SmartFind is free for tenants and buyers. Landlords and agencies
              choose plans that fit their scale.
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid gap-6 md:grid-cols-3">
            {plans.map((plan, i) => (
              <div
                key={i}
                className={`relative rounded-2xl p-8 bg-gray-300 shadow-md flex flex-col
                ${plan.highlight ? "ring-2 ring-indigo-500" : "hover:shadow-lg transition"}`}
              >
                {/* Accent strip */}
                <div
                  className={`absolute inset-x-0 top-0 h-1.5 rounded-t-2xl bg-gradient-to-r ${plan.accent}`}
                />

                {plan.highlight && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-500 to-indigo-500 text-white text-xs px-4 py-1 rounded-full shadow">
                    Most Popular
                  </span>
                )}

                <h3 className="text-xl font-semibold text-gray-900 mt-4">
                  {plan.title}
                </h3>

                <p className="text-gray-700 mt-2">
                  {plan.description}
                </p>

                <p className="text-3xl font-bold text-gray-900 mt-6">
                  {plan.price}
                </p>

                <ul className="mt-6 space-y-3 text-gray-700 flex-1">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-start gap-2">
                      <span className="text-indigo-600 font-bold">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`mt-8 py-3 rounded-xl font-semibold text-white
                  bg-gradient-to-r ${plan.accent} hover:opacity-90 transition`}
                >
                  {plan.cta}
                </button>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
