"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/lib/translations";
import { ChevronDown } from "lucide-react";

export function Hero() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section
      id="hero"
      className="relative w-full h-screen flex items-center justify-center overflow-hidden pt-20"
      style={{
        backgroundImage: `linear-gradient(135deg, rgba(26, 26, 26, 0.7) 0%, rgba(26, 26, 26, 0.8) 100%), 
                         radial-gradient(ellipse at 50% 30%, rgba(212, 165, 116, 0.1) 0%, transparent 60%)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundColor: '#1a1a1a',
      }}
    >
      <div className="container-narrow text-center space-y-8">
        <h1
          className="text-5xl md:text-7xl font-serif font-light leading-tight"
          style={{ color: '#e8e8e8' }}
        >
          {t.hero.title}
        </h1>

        <p
          className="text-lg md:text-xl text-center max-w-2xl mx-auto font-light"
          style={{ color: '#a8a8a8' }}
        >
          {t.hero.subtitle}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="button-primary">
            {t.hero.cta.reserve}
          </button>
          <button className="button-secondary">
            {t.hero.cta.discover}
          </button>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <span className="text-xs tracking-widest uppercase text-muted-foreground" style={{ color: '#a8a8a8' }}>
          {t.hero.scroll}
        </span>
        <ChevronDown className="w-4 h-4 mx-auto mt-2 animate-bounce" style={{ color: '#d4a574' }} />
      </div>
    </section>
  );
}
