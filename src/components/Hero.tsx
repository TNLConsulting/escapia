"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/lib/translations";

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
      <div className="container-narrow text-center space-y-6">
        <p className="text-sm tracking-widest uppercase" style={{ color: '#d4a574' }}>
          {t.hero.label}
        </p>

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

        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <a href="#booking" className="button-primary text-center">
            {t.hero.cta.reserve}
          </a>
          <a href="#experience" className="button-secondary text-center">
            {t.hero.cta.discover}
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center">
        <span className="text-xs tracking-widest uppercase" style={{ color: '#a8a8a8' }}>
          {t.hero.scroll}
        </span>
        <svg className="w-4 h-4 mx-auto mt-2" style={{ color: '#d4a574' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
