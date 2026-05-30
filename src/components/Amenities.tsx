"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/lib/translations";
import { Wind, Bed, Trees, Wifi, Coffee, UtensilsCrossed } from "lucide-react";

const amenityIcons = [
  Bed,
  Trees,
  Wind,
  Coffee,
  Wifi,
  UtensilsCrossed,
];

export function Amenities() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section id="amenities" className="w-full section-padding" style={{ backgroundColor: '#1a1a1a' }}>
      <div className="container-narrow">
        <h2 className="text-4xl md:text-5xl font-serif font-light text-center mb-6" style={{ color: '#d4a574' }}>
          {t.amenities.title}
        </h2>

        <p className="text-center text-lg mb-16 max-w-3xl mx-auto" style={{ color: '#a8a8a8' }}>
          {t.amenities.subtitle}
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {t.amenities.items.map((item, index) => {
            const Icon = amenityIcons[index] || Wind;
            return (
              <div
                key={index}
                className="rounded-lg p-6 transition-all duration-300"
                style={{
                  backgroundColor: '#1a1a1a',
                  border: '1px solid rgba(212, 165, 116, 0.2)',
                }}
              >
                <div className="mb-4 inline-block p-3 rounded-lg" style={{ background: 'linear-gradient(to bottom right, rgba(212, 165, 116, 0.2), rgba(139, 157, 111, 0.2))' }}>
                  <Icon className="w-6 h-6" style={{ color: '#d4a574' }} />
                </div>
                <h3 className="text-lg font-serif font-light mb-2" style={{ color: '#e8e8e8' }}>
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: '#a8a8a8' }}>
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
