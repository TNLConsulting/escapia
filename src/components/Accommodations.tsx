"use client";

import { Users, Wind, Droplet, Wifi, Coffee, Thermometer } from "lucide-react";

export function Accommodations() {
  const specs = [
    { icon: Users, label: "2 Guests" },
    { icon: Wind, label: "Twin Domes" },
    { icon: Droplet, label: "Rain Shower" },
    { icon: Wifi, label: "High-Speed WiFi" },
    { icon: Coffee, label: "Nespresso" },
    { icon: Thermometer, label: "Climate Control" }
  ];

  return (
    <section id="accommodations" className="w-full py-20" style={{ backgroundColor: "#1a1a1a" }}>
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-xs tracking-widest uppercase text-center mb-2" style={{ color: "#d4a574" }}>Your Sanctuary</p>
        <h2 className="text-5xl font-serif font-light text-center mb-6" style={{ color: "#e8e8e8" }}>
          The <span style={{ color: "#d4a574" }}>Dome</span>
        </h2>
        <p className="text-center max-w-3xl mx-auto mb-12" style={{ color: "#a8a8a8" }}>
          Two connected domes create one intimate sanctuary — a living space and sleeping retreat<br />
          linked by a wooden corridor, designed exclusively for two.
        </p>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left - Photo */}
          <div className="rounded-lg overflow-hidden">
            <img src="/dome-exterior.jpg" alt="Twin dome exterior" className="w-full h-auto rounded-lg" />
          </div>

          {/* Right - Content */}
          <div>
            <h3 className="text-3xl font-serif font-light mb-6" style={{ color: "#e8e8e8" }}>
              Two Domes, One Experience
            </h3>
            <p className="text-sm mb-8" style={{ color: "#a8a8a8", lineHeight: "1.8" }}>
              Wake up in a cocoon of glass and moss. Our unique twin-dome structure offers the perfect balance of openness and intimacy — a spacious living dome flows into a cozy sleeping sanctuary, all wrapped in the embrace of the ancient forest.
            </p>

            {/* Icons Grid */}
            <div className="grid grid-cols-3 gap-6 mb-8">
              {specs.map((spec, i) => {
                const Icon = spec.icon;
                return (
                  <div key={i} className="text-center">
                    <div className="mb-3 flex justify-center">
                      <Icon size={28} style={{ color: "#d4a574" }} />
                    </div>
                    <p className="text-xs" style={{ color: "#a8a8a8" }}>{spec.label}</p>
                  </div>
                );
              })}
            </div>

            <button
              className="px-8 py-3 rounded-lg font-medium border-2 transition-all"
              style={{
                borderColor: "#d4a574",
                color: "#d4a574",
              }}
            >
              Check Availability
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
