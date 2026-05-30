"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/lib/translations";

export function Experience() {
  const { language } = useLanguage();
  const t = translations[language];

  const cards = [
    { title: "Forest Immersion", desc: "Nestled deep within an ancient forest, our dome offers complete immersion in nature without sacrificing comfort." },
    { title: "Living Architecture", desc: "The dome is crowned with a living moss roof, blending seamlessly into the forest canopy around it." },
    { title: "Starlit Nights", desc: "Floor-to-ceiling windows frame the forest by day and reveal starry skies by night." },
    { title: "Boutique Luxury", desc: "Every detail has been carefully curated to create an exclusive sanctuary for discerning travelers." }
  ];

  return (
    <section id="experience" className="w-full py-24" style={{ backgroundColor: "#1a1a1a" }}>
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-sm tracking-widest uppercase text-center mb-4" style={{ color: "#d4a574" }}>The Experience</p>
        <h2 className="text-5xl font-serif font-light text-center mb-6" style={{ color: "#e8e8e8" }}>
          Where Wilderness Meets <span style={{ color: "#d4a574" }}>Refined Living</span>
        </h2>
        <p className="text-center max-w-3xl mx-auto mb-16" style={{ color: "#a8a8a8" }}>
          Forêt Dôme is more than accommodation—it's a return to nature, reimagined for those who seek both adventure and elegance.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {cards.map((card, i) => (
            <div key={i} className="rounded-lg p-8" style={{ backgroundColor: "#0a0a0a", border: "1px solid rgba(212, 165, 116, 0.2)" }}>
              <div className="w-12 h-12 rounded-lg mb-6 flex items-center justify-center font-serif text-xl" style={{ background: "linear-gradient(135deg, #d4a574, #8b9d6f)", color: "#1a1a1a" }}>{i+1}</div>
              <h3 className="text-2xl font-serif font-light mb-4" style={{ color: "#e8e8e8" }}>{card.title}</h3>
              <p style={{ color: "#a8a8a8" }}>{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
