import React, { useState } from "react";

export default function SearchBar() {
  const [category, setCategory] = useState("");
  const [location, setLocation] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log({
      category,
      location,
      minPrice,
      maxPrice,
    });
  };

  return (
    <div className="w-full max-w-5xl mx-auto">
      {/* Main Search Bar */}
      <form
        onSubmit={handleSubmit}
        className="bg-white p-4 rounded-2xl shadow-lg flex flex-col md:flex-row gap-3"
      >
        {/* Category Dropdown */}
        <div className="flex-1">
          <label className="block text-left text-xs text-gray-600 mb-1">
            Category
          </label>

          <select
            aria-label="Category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <option value="" disabled>
              Select category
            </option>
            <option value="rent">Rent</option>
            <option value="sale">Buy</option>
          </select>
        </div>

        {/* Location Input */}
        <div className="flex-1">
          <label className="block text-left text-xs text-gray-600 mb-1">
            Location
          </label>
          <input
            aria-label="Location"
            type="text"
            placeholder="e.g. Westlands, Kilimani"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        {/* Min Price Input */}
        <div className="flex-1">
          <label className="block text-left text-xs text-gray-600 mb-1">
            Min Price
          </label>
          <input
            aria-label="Minimum Price"
            type="number"
            placeholder="Min Price"
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        {/* Max Price Input */}
        <div className="flex-1">
          <label className="block text-left text-xs text-gray-600 mb-1">
            Max Price
          </label>
          <input
            aria-label="Maximum Price"
            type="number"
            placeholder="Max Price"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        {/* Search Button */}
        <button
          type="submit"
          className="bg-primary text-white px-8 py-3 rounded-xl hover:bg-primary-dark transition font-semibold"
        >
          Search
        </button>
      </form>

      {/* AI Search (Coming Soon) */}
      <div className="mt-6 flex flex-col md:flex-row items-start md:items-center gap-3 text-base text-gray-700">
        <span className="text-primary font-semibold text-lg">
          ✨ Smart AI Search
        </span>
        <span className="italic text-black text-lg">
          “Find me a 2-bedroom apartment near Westlands under 60k”
        </span>
        <span className="ml-0 md:ml-2 text-xs bg-gray-100 px-2 py-1 rounded-full">
          Coming Soon
        </span>
      </div>
    </div>
  );
}
