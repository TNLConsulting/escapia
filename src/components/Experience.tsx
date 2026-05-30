"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/lib/translations";

export function Experience() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section id="experience" className="w-full section-padding" style={{ backgroundColor: '#1a1a1a' }}>
      <div className="container-narrow">
        <h2 className="text-4xl md:text-5xl font-serif font-light text-center mb-16" style={{ color: '#d4a574' }}>
          {t.experience.title}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {t.experience.cards.map((card, index) => (
            <div
              key={index}
              className="rounded-lg p-8 transition-all duration-300"
              style={{
                backgroundColor: '#1a1a1a',
                border: '1px solid rgba(212, 165, 116, 0.2)',
              }}
            >
              <div 
                className="w-12 h-12 rounded-lg mb-6 flex items-center justify-center font-serif text-xl font-light"
                style={{
                  background: 'linear-gradient(135deg, #d4a574 0%, #8b9d6f 100%)',
                  color: '#1a1a1a',
                }}
              >
                {index + 1}
              </div>
              <h3 className="text-xl font-serif font-light mb-4" style={{ color: '#e8e8e8' }}>
                {card.title}
              </h3>
              <p className="leading-relaxed" style={{ color: '#a8a8a8' }}>
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
