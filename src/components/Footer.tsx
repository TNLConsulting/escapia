"use client";

import { Send, Heart } from "lucide-react";

export function Footer() {
  return (
    <footer style={{ backgroundColor: "#0a0a0a", borderTop: "1px solid rgba(157, 126, 68, 0.1)" }}>
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-16">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-16">
          {/* Left - Brand */}
          <div>
            <h3 className="text-xl md:text-2xl font-serif font-light mb-6" style={{ color: "#9d7e44" }}>
              Forêt Dôme
            </h3>
            <p className="text-xs md:text-sm mb-6 md:mb-8" style={{ color: "#666", lineHeight: "1.8" }}>
              Disconnect to reconnect. An exclusive dome hideaway in nature, designed for two, nestled deep in the Belgian forest in Lille.
            </p>
            <div className="flex gap-4">
              <a href="#" className="transition-colors hover:opacity-80" style={{ color: "#9d7e44" }}>
                <Send size={20} />
              </a>
              <a href="#" className="transition-colors hover:opacity-80" style={{ color: "#9d7e44" }}>
                <Heart size={20} />
              </a>
            </div>
          </div>

          {/* Middle - Explore */}
          <div>
            <h4 className="text-xs md:text-sm font-serif tracking-widest uppercase mb-4 md:mb-6" style={{ color: "#9d7e44" }}>
              Explore
            </h4>
            <nav className="space-y-2 md:space-y-3">
              <a href="#experience" className="block text-xs md:text-sm transition-colors hover:text-opacity-80" style={{ color: "#666" }}>
                The Experience
              </a>
              <a href="#accommodations" className="block text-xs md:text-sm transition-colors hover:text-opacity-80" style={{ color: "#666" }}>
                The Dome
              </a>
              <a href="#amenities" className="block text-xs md:text-sm transition-colors hover:text-opacity-80" style={{ color: "#666" }}>
                Amenities
              </a>
              <a href="#location" className="block text-xs md:text-sm transition-colors hover:text-opacity-80" style={{ color: "#666" }}>
                Location
              </a>
              <a href="#booking" className="block text-xs md:text-sm transition-colors hover:text-opacity-80" style={{ color: "#666" }}>
                Reservations
              </a>
            </nav>
          </div>

          {/* Right - Contact */}
          <div>
            <h4 className="text-xs md:text-sm font-serif tracking-widest uppercase mb-4 md:mb-6" style={{ color: "#9d7e44" }}>
              Contact
            </h4>
            <div className="space-y-1 md:space-y-2 text-xs md:text-sm" style={{ color: "#666" }}>
              <p>
                <a href="mailto:info@escapia.be" className="transition-colors hover:text-opacity-80">
                  📧 info@escapia.be
                </a>
              </p>
              <p>Bosuilweg 19</p>
              <p>2275 Lille, Belgium</p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div style={{ borderTop: "1px solid rgba(157, 126, 68, 0.1)", margin: "1.5rem 0", marginBottom: "1.5rem" }} />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-3 md:gap-4 text-xs" style={{ color: "#555" }}>
          <p className="text-xs">© 2026 Forêt Dôme. All rights reserved.</p>
          <div className="flex gap-4 md:gap-6 text-xs">
            <a href="#" className="transition-colors hover:text-opacity-80" style={{ color: "#555" }}>
              Privacy Policy
            </a>
            <a href="#" className="transition-colors hover:text-opacity-80" style={{ color: "#555" }}>
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
