"use client";

import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/lib/translations";

export function Hero() {
  const { language, setLanguage } = useLanguage();
  const t = translations[language];

  return (
    <section
      id="hero"
      className="relative w-full h-screen bg-cover bg-center flex flex-col items-center justify-center"
      style={{
        backgroundImage: "linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('/dome-twin.jpg')",
        backgroundColor: "#1a1a1a",
      }}
    >
      {/* Navigation (Floating) */}
      <nav className="absolute top-0 left-0 right-0 w-full px-6 py-6 z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="font-serif text-2xl tracking-wider" style={{ color: "#d4a574" }}>
            Forêt Dôme
          </a>

          {/* Links */}
          <div className="hidden md:flex gap-8">
            <a href="#experience" className="text-sm tracking-widest uppercase hover:text-opacity-80" style={{ color: "#a8a8a8" }}>Experience</a>
            <a href="#accommodations" className="text-sm tracking-widest uppercase hover:text-opacity-80" style={{ color: "#a8a8a8" }}>The Dome</a>
            <a href="#amenities" className="text-sm tracking-widest uppercase hover:text-opacity-80" style={{ color: "#a8a8a8" }}>Amenities</a>
            <a href="#location" className="text-sm tracking-widest uppercase hover:text-opacity-80" style={{ color: "#a8a8a8" }}>Location</a>
          </div>

          {/* Language + CTA */}
          <div className="flex items-center gap-4">
            <div className="flex gap-1 text-xs tracking-widest">
              <button
                onClick={() => setLanguage("en")}
                className="px-2 py-1 transition-colors"
                style={{ color: language === "en" ? "#d4a574" : "#a8a8a8" }}
              >
                EN
              </button>
              <span style={{ color: "#a8a8a8" }}>|</span>
              <button
                onClick={() => setLanguage("nl")}
                className="px-2 py-1 transition-colors"
                style={{ color: language === "nl" ? "#d4a574" : "#a8a8a8" }}
              >
                NL
              </button>
            </div>
            <button
              className="hidden sm:block px-6 py-2 rounded-lg text-sm font-medium transition-all"
              style={{
                backgroundColor: "#d4a574",
                color: "#1a1a1a",
              }}
            >
              Book Your Escape
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="text-center max-w-3xl mx-auto px-6">
        {/* Label */}
        <p className="text-sm tracking-widest uppercase mb-6" style={{ color: "#d4a574" }}>
          A hideaway in nature
        </p>

        {/* Title */}
        <h1 className="font-serif text-6xl md:text-7xl font-light leading-tight mb-8" style={{ color: "#e8e8e8" }}>
          Disconnect to <span style={{ color: "#d4a574", fontStyle: "italic" }}>Reconnect</span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl mb-10" style={{ color: "#a8a8a8" }}>
          Escape to our exclusive dome sanctuary in Lille, Belgium — an intimate retreat for two, nestled deep in the forest.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            className="px-8 py-3 rounded-lg font-medium transition-all hover:scale-105"
            style={{
              backgroundColor: "#d4a574",
              color: "#1a1a1a",
            }}
          >
            Reserve Your Stay
          </button>
          <button
            className="px-8 py-3 rounded-lg font-medium transition-all border-2 hover:bg-opacity-10"
            style={{
              borderColor: "#d4a574",
              color: "#d4a574",
            }}
          >
            Discover More
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-center">
        <p className="text-xs tracking-widest uppercase mb-2" style={{ color: "#a8a8a8" }}>Scroll</p>
        <div className="animate-bounce" style={{ color: "#d4a574" }}>↓</div>
      </div>
    </section>
  );
}
