"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/lib/translations";
import { motion } from "framer-motion";

export function Accommodations() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section id="accommodations" className="w-full section-padding" style={{ backgroundColor: '#1a1a1a' }}>
      <div className="container-narrow">
        <h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-serif font-light text-center mb-4"
          style={{ color: '#d4a574' }}
        >
          {t.accommodations.title}
        </h2>

        <p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center text-lg mb-16"
          style={{ color: '#d4a574' }}
        >
          {t.accommodations.description}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Description */}
          <div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-serif font-light" style={{ color: '#e8e8e8' }}>
              {t.accommodations.twinDomeTitle}
            </h3>
            <p className="leading-relaxed text-lg" style={{ color: '#a8a8a8' }}>
              {t.accommodations.twinDomeDesc}
            </p>

            {/* Specs */}
            <div className="space-y-3 pt-6" style={{ borderTop: '1px solid rgba(212, 165, 116, 0.2)' }}>
              {t.accommodations.specs.map((spec, index) => (
                <div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3"
                >
                  <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: '#d4a574' }} />
                  <span style={{ color: '#e8e8e8' }}>{spec}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Image Placeholder */}
          <div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative rounded-lg h-96 flex items-center justify-center"
            style={{
              background: 'linear-gradient(to bottom right, rgba(212, 165, 116, 0.1), rgba(139, 157, 111, 0.1))',
              border: '1px solid rgba(212, 165, 116, 0.2)',
            }}
          >
            <div className="text-center">
              <div className="text-5xl mb-4">🏕️</div>
              <p className="text-sm" style={{ color: '#a8a8a8' }}>Twin Forest Domes</p>
              <p className="text-xs mt-2" style={{ color: '#a8a8a8' }}>
                Bio-integrated sanctuary
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
