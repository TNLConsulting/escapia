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
    <section id="accommodations" className="w-full py-20" style={{ background: "linear-gradient(to bottom, #0a1a0f, #000)" }}>
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-sm tracking-widest uppercase text-center mb-2" style={{ color: "#c9a961" }}>Your Sanctuary</p>
        <h2 className="text-5xl font-serif font-light text-center mb-6" style={{ color: "#b8b8b8" }}>
          The <span style={{ color: "#c9a961" }}>Dome</span>
        </h2>
        <p className="text-center max-w-3xl mx-auto mb-12" style={{ color: "#a8a8a8" }}>
          Two connected domes create one intimate sanctuary — a living space and sleeping retreat<br />
          linked by a wooden corridor, designed exclusively for two.
        </p>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left - Photo */}
          <div className="rounded-lg overflow-hidden h-96">
            <img src="/dome-exterior.jpg" alt="Twin dome exterior" className="w-full h-full object-cover object-center rounded-lg" style={{ objectPosition: "center 70%" }} />
          </div>

          {/* Right - Content */}
          <div>
            <h3 className="text-4xl font-serif font-light mb-6 tracking-wide" style={{ color: "#b8b8b8", letterSpacing: "0.05em" }}>
              Two Domes, One Experience
            </h3>
            <p className="text-base mb-8 font-light" style={{ color: "#a8a8a8", lineHeight: "1.9", letterSpacing: "0.01em" }}>
              Wake up in a cocoon of glass and moss. Our unique twin-dome structure offers the perfect balance of openness and intimacy — a spacious living dome flows into a cozy sleeping sanctuary, all wrapped in the embrace of the ancient forest.
            </p>

            {/* Icons Grid */}
            <div className="grid grid-cols-3 gap-6 mb-8">
              {specs.map((spec, i) => {
                const Icon = spec.icon;
                return (
                  <div key={i} className="text-center">
                    <div className="mb-3 flex justify-center">
                      <Icon size={28} style={{ color: "#c9a961" }} />
                    </div>
                    <p className="text-xs" style={{ color: "#a8a8a8" }}>{spec.label}</p>
                  </div>
                );
              })}
            </div>

            <button
              className="px-8 py-3 rounded-lg font-medium transition-all"
              style={{
                backgroundColor: "#c9a961",
                color: "#1a1a1a",
              }}
            >
              Check Availability
            </button>
          </div>
        </div>

        {/* Where Forest Meets Comfort Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mt-20">
          {/* Left - Photo */}
          <div className="rounded-lg overflow-hidden h-80 order-2 md:order-1">
            <img src="/dome-exterior.jpg" alt="Forest meets comfort" className="w-full h-full object-cover rounded-lg" style={{ objectPosition: "center 70%" }} />
          </div>

          {/* Right - Content */}
          <div className="order-1 md:order-2">
            <h3 className="text-4xl font-serif font-light mb-6 tracking-wide" style={{ color: "#b8b8b8", letterSpacing: "0.05em" }}>
              Where Forest Meets Comfort
            </h3>
            <p className="text-base mb-8 font-light" style={{ color: "#a8a8a8", lineHeight: "1.9", letterSpacing: "0.01em" }}>
              Every detail has been crafted for your escape. A king-size bed faces panoramic windows that frame the forest canopy. The rain shower brings nature inside, while the living dome offers a space to unwind, sip morning coffee, and simply breathe.
            </p>

            {/* Bullet Points */}
            <ul className="space-y-3 mb-8">
              {[
                "Private wooden terrace overlooking the forest",
                "Floor-to-ceiling windows with forest views",
                "Living moss roof that breathes with nature"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4 text-sm" style={{ color: "#a8a8a8" }}>
                  <span style={{ color: "#c9a961", marginTop: "4px" }}>●</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <button
              className="px-8 py-3 rounded-lg font-medium transition-all"
              style={{
                backgroundColor: "#c9a961",
                color: "#1a1a1a",
              }}
            >
              Reserve Your Escape
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
