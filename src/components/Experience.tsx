"use client";

import { Trees, Building2, Moon, Sparkles } from "lucide-react";

export function Experience() {
  const cards = [
    { title: "Forest Immersion", desc: "Nestled deep within an ancient forest, our dome offers complete immersion in nature without sacrificing comfort.", Icon: Trees },
    { title: "Living Architecture", desc: "The dome is crowned with a living moss roof, blending seamlessly into the forest canopy around it.", Icon: Building2 },
    { title: "Starlit Nights", desc: "Floor-to-ceiling windows frame the forest by day and reveal starry skies by night.", Icon: Moon },
    { title: "Boutique Luxury", desc: "Every detail has been carefully curated to create an exclusive sanctuary for discerning travelers.", Icon: Sparkles }
  ];

  return (
    <section id="experience" className="w-full py-20" style={{ background: "linear-gradient(to bottom, #000, #0a1a0f)" }}>
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-xs tracking-widest uppercase text-center mb-3" style={{ color: "#f0c885" }}>The Experience</p>
        <h2 className="text-4xl md:text-5xl font-serif font-light text-center mb-3" style={{ color: "#b8b8b8" }}>
          Where Wilderness Meets
        </h2>
        <h2 className="text-4xl md:text-5xl font-serif font-light text-center mb-8" style={{ color: "#f0c885", fontStyle: "italic" }}>
          Refined Living
        </h2>
        <p className="text-center max-w-2xl mx-auto mb-16 text-sm" style={{ color: "#a8a8a8" }}>
          Forêt Dôme is more than accommodation—it's a return to nature, reimagined for those who seek both adventure and elegance.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {cards.map((card, i) => {
            const Icon = card.Icon;
            return (
              <div key={i} className="text-center" style={{ borderTop: "1px solid rgba(212, 165, 116, 0.2)", paddingTop: "24px" }}>
                <div 
                  className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6"
                  style={{ backgroundColor: "#f0c885" }}
                >
                  <Icon size={32} style={{ color: "#1a1a1a" }} />
                </div>
                <h3 className="text-base font-serif font-light mb-3" style={{ color: "#b8b8b8" }}>{card.title}</h3>
                <p className="text-xs" style={{ color: "#a8a8a8", lineHeight: "1.6" }}>{card.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
