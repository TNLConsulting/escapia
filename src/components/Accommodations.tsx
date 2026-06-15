"use client";

import { Users, Wind, Droplet, Wifi, Coffee, Thermometer } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/lib/translations";

export function Accommodations() {
  const { language } = useLanguage();
  const t = translations[language];

  const iconMap: { [key: string]: any } = {
    "2 guests": Users,
    "Twin domes": Wind,
    "Rain shower": Droplet,
    "Regendouche": Droplet,
    "High-speed WiFi": Wifi,
    "Snelle wifi": Wifi,
    "Nespresso": Coffee,
    "Air conditioning": Thermometer,
    "Airco": Thermometer,
  };

  const specs = t.accommodations.specs.map((label) => ({
    label,
    icon: iconMap[label] || Users,
  }));

  return (
    <section id="accommodations" className="w-full py-20" style={{ background: "linear-gradient(to bottom, #0a1a0f, #000)" }}>
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-sm tracking-widest uppercase text-center mb-2" style={{ color: "#9d7e44" }}>
          {t.accommodations.title}
        </p>
        <h2 className="text-5xl font-serif font-light text-center mb-6" style={{ color: "#b8b8b8" }}>
          <span style={{ color: "#9d7e44" }}>{t.accommodations.description}</span>
        </h2>
        <p className="text-center max-w-3xl mx-auto mb-12" style={{ color: "#a8a8a8" }}>
          {t.accommodations.twinDomeDesc}
        </p>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left - Photo */}
          <div className="rounded-lg overflow-hidden h-96">
            <img src="/dome-exterior.jpg" alt="Twin dome exterior" className="w-full h-full object-cover object-center rounded-lg" style={{ objectPosition: "center 70%" }} />
          </div>

          {/* Right - Content */}
          <div>
            <h3 className="text-4xl font-serif font-light mb-6 tracking-wide" style={{ color: "#b8b8b8", letterSpacing: "0.05em" }}>
              {t.accommodations.twinDomeTitle}
            </h3>
            <p className="text-base mb-8 font-light" style={{ color: "#a8a8a8", lineHeight: "1.9", letterSpacing: "0.01em" }}>
              {t.accommodations.extraDesc[0]}
            </p>

            {/* Icons Grid */}
            <div className="grid grid-cols-3 gap-6 mb-8">
              {specs.map((spec, i) => {
                const Icon = spec.icon;
                return (
                  <div key={i} className="text-center">
                    <div className="mb-3 flex justify-center">
                      <Icon size={28} style={{ color: "#9d7e44" }} />
                    </div>
                    <p className="text-xs" style={{ color: "#a8a8a8" }}>{spec.label}</p>
                  </div>
                );
              })}
            </div>

            <a
              href="#hero"
              className="inline-block px-8 py-3 rounded-lg font-medium text-center transition-all"
              style={{
                backgroundColor: "#9d7e44",
                color: "#1a1a1a",
              }}
            >
              {t.accommodations.cta.checkAvailability}
            </a>
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
              {t.accommodations.description}
            </h3>
            <p className="text-base mb-8 font-light" style={{ color: "#a8a8a8", lineHeight: "1.9", letterSpacing: "0.01em" }}>
              {t.accommodations.extraDesc.slice(1).join(" ")}
            </p>

            {/* Bullet Points */}
            <ul className="space-y-3 mb-8">
              {t.accommodations.features.map((item: string, i: number) => (
                <li key={i} className="flex items-start gap-4 text-sm" style={{ color: "#a8a8a8" }}>
                  <span style={{ color: "#9d7e44", marginTop: "4px" }}>●</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <a
              href="#hero"
              className="inline-block px-8 py-3 rounded-lg font-medium text-center transition-all"
              style={{
                backgroundColor: "#9d7e44",
                color: "#1a1a1a",
              }}
            >
              {t.accommodations.cta.reserveEscape}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
