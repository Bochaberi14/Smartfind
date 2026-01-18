import React from "react";

export default function Footer() {
  return (
    <footer className="pt-24 bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid gap-10 md:grid-cols-4">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4">SmartFind</h3>
            <p className="text-sm text-white/80">
              SmartFind helps you discover trusted properties across Kenya —
              for rent, for sale, and investment.
            </p>
          </div>

          {/* Explore */}
          <div>
            <h4 className="font-semibold mb-4">Explore</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white/90">For Rent</a></li>
              <li><a href="#" className="hover:text-white/90">For Sale</a></li>
              <li><a href="#" className="hover:text-white/90">Map View</a></li>
              <li><a href="#" className="hover:text-white/90">Agencies</a></li>
            </ul>
          </div>

          {/* For Professionals */}
          <div>
            <h4 className="font-semibold mb-4">For Professionals</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white/90">Post a Property</a></li>
              <li><a href="#" className="hover:text-white/90">Pricing Plans</a></li>
              <li><a href="#" className="hover:text-white/90">Become a Partner</a></li>
              <li><a href="#" className="hover:text-white/90">Agency Dashboard</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white/90">About Us</a></li>
              <li><a href="#" className="hover:text-white/90">Contact</a></li>
              <li><a href="#" className="hover:text-white/90">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white/90">Privacy Policy</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/20 mt-12 pt-6 flex flex-col md:flex-row items-center justify-between text-sm text-white/70">
          <p>© 2026 SmartFind Properties. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Built for Kenya 🇰🇪</p>
        </div>
      </div>
    </footer>
  );
}
