"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/lib/translations";

export function Hero() {
  const { language, setLanguage } = useLanguage();
  const t = translations[language];

  return (
    <section
      id="hero"
      className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{
        backgroundImage: "linear-gradient(rgba(0,0,0,0.35), rgba(0,0,0,0.45)), url('/dome-twin.jpg')",
        backgroundColor: "#000",
        backgroundSize: "110%",
        backgroundPosition: "center 85%",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Navigation (Fixed/Sticky) */}
      <nav className="fixed top-0 left-0 right-0 w-full px-6 py-6 z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <a href="#" className="font-serif text-2xl tracking-wider" style={{ color: "#9d7e44" }}>
            Forêt Dôme
          </a>

          <div className="hidden md:flex gap-8">
            <a href="#experience" className="text-sm tracking-widest uppercase" style={{ color: "#a8a8a8" }}>Experience</a>
            <a href="#accommodations" className="text-sm tracking-widest uppercase" style={{ color: "#a8a8a8" }}>The Dome</a>
            <a href="#amenities" className="text-sm tracking-widest uppercase" style={{ color: "#a8a8a8" }}>Amenities</a>
            <a href="#location" className="text-sm tracking-widest uppercase" style={{ color: "#a8a8a8" }}>Location</a>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex gap-1 text-xs tracking-widest">
              <button onClick={() => setLanguage("en")} style={{ color: language === "en" ? "#9d7e44" : "#a8a8a8" }}>EN</button>
              <span style={{ color: "#a8a8a8" }}>|</span>
              <button onClick={() => setLanguage("nl")} style={{ color: language === "nl" ? "#9d7e44" : "#a8a8a8" }}>NL</button>
            </div>
            <button className="hidden sm:block px-6 py-2 rounded-lg text-sm font-medium" style={{ backgroundColor: "#9d7e44", color: "#1a1a1a" }}>
              Book Your Escape
            </button>
          </div>
        </div>
      </nav>

      {/* Content */}
      <div className="text-center max-w-3xl mx-auto px-6">
        <p className="text-sm tracking-widest uppercase mb-6" style={{ color: "#9d7e44" }}>A hideaway in nature</p>
        <h1 className="font-serif text-6xl md:text-7xl font-light leading-tight mb-8" style={{ color: "#b8b8b8" }}>
          Disconnect to <span style={{ color: "#9d7e44", fontStyle: "italic" }}>Reconnect</span>
        </h1>
        <p className="text-lg md:text-xl mb-10" style={{ color: "#a8a8a8" }}>
          Escape to our exclusive dome sanctuary in Lille, Belgium — an intimate retreat for two, nestled deep in the forest.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-3 rounded-lg font-medium" style={{ backgroundColor: "#9d7e44", color: "#1a1a1a" }}>
            Reserve Your Stay
          </button>
          <button className="px-8 py-3 rounded-lg font-medium" style={{ backgroundColor: "#9d7e44", color: "#1a1a1a" }}>
            Discover More
          </button>
        </div>
      </div>

      {/* Scroll */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-center">
        <p className="text-xs tracking-widest uppercase mb-2" style={{ color: "#a8a8a8" }}>Scroll</p>
        <div className="animate-bounce" style={{ color: "#9d7e44" }}>↓</div>
      </div>
    </section>
  );
}
