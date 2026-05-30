"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/lib/translations";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";

export function Hero() {
  const { language } = useLanguage();
  const t = translations[language];
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      className="relative w-full h-screen flex items-center justify-center overflow-hidden pt-20"
      style={{
        backgroundImage: `linear-gradient(135deg, rgba(26, 26, 26, 0.7) 0%, rgba(26, 26, 26, 0.8) 100%), 
                         radial-gradient(ellipse at 50% 30%, rgba(212, 165, 116, 0.1) 0%, transparent 60%)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Parallax Background */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          transform: `translateY(${scrollY * 0.5}px)`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-dark/50 to-dark" />
      </div>

      {/* Content */}
      <div className="container-narrow text-center space-y-8">
        <h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-5xl md:text-7xl font-serif font-light leading-tight"
          style={{ color: '#e8e8e8' }}
        >
          {t.hero.title}
        </h1>

        <p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-lg md:text-xl max-w-3xl mx-auto"
          style={{ color: '#a8a8a8' }}
        >
          {t.hero.subtitle}
        </p>

        <div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-col md:flex-row gap-4 justify-center pt-8"
        >
          <a href="#booking" className="button-primary">
            {t.hero.cta1}
          </a>
          <a href="#experience" className="button-secondary">
            {t.hero.cta2}
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="w-8 h-8" style={{ color: '#d4a574' }} />
        </div>
      </div>
    </section>
  );
}
