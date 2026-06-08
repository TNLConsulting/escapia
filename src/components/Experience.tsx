"use client";

import { Trees, Building2, Moon, Sparkles } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/lib/translations";

export function Experience() {
  const { language } = useLanguage();
  const t = translations[language];

  const cards = t.experience.cards.map((card) => {
    const iconMap: { [key: string]: any } = {
      "Forest Immersion": Trees,
      "Living Architecture": Building2,
      "Starlit Nights": Moon,
      "Boutique Luxury": Sparkles,
    };
    return { ...card, Icon: iconMap[card.title] };
  });

  return (
    <section id="experience" className="w-full py-20" style={{ background: "linear-gradient(to bottom, #000, #0a1a0f)" }}>
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-xs tracking-widest uppercase text-center mb-3" style={{ color: "#9d7e44" }}>
          {t.experience.title}
        </p>
        <h2 className="text-4xl md:text-5xl font-serif font-light text-center mb-3" style={{ color: "#b8b8b8" }}>
          {t.experience.subtitle.split(" ").slice(0, -1).join(" ")}
        </h2>
        <h2 className="text-4xl md:text-5xl font-serif font-light text-center mb-8" style={{ color: "#9d7e44", fontStyle: "italic" }}>
          {t.experience.subtitle.split(" ").pop()}
        </h2>
        <p className="text-center max-w-2xl mx-auto mb-16 text-sm" style={{ color: "#a8a8a8" }}>
          {t.experience.description}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {cards.map((card, i) => {
            const Icon = card.Icon;
            return (
              <div key={i} className="text-center" style={{ borderTop: "1px solid rgba(212, 165, 116, 0.2)", paddingTop: "24px" }}>
                <div 
                  className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6"
                  style={{ backgroundColor: "#9d7e44" }}
                >
                  <Icon size={32} style={{ color: "#1a1a1a" }} />
                </div>
                <h3 className="text-base font-serif font-light mb-3" style={{ color: "#b8b8b8" }}>{card.title}</h3>
                <p className="text-xs" style={{ color: "#a8a8a8", lineHeight: "1.6" }}>{card.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
