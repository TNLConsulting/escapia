"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/lib/translations";

export function Hero() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section
      id="hero"
      className="relative w-full h-screen bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('/dome-twin.jpg')",
        backgroundColor: "#1a1a1a",
      }}
    >
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
