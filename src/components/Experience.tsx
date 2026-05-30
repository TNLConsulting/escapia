"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/lib/translations";
import { motion } from "framer-motion";

export function Experience() {
  const { language } = useLanguage();
  const t = translations[language];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section id="experience" className="w-full section-padding" style={{ backgroundColor: '#1a1a1a' }}>
      <div className="container-narrow">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-serif font-light text-center mb-16"
          style={{ color: '#d4a574' }}
        >
          {t.experience.title}
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {t.experience.cards.map((card, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="rounded-lg p-8 transition-all duration-300 hover:shadow-lg group"
              style={{
                backgroundColor: '#1a1a1a',
                border: '1px solid rgba(212, 165, 116, 0.2)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(212, 165, 116, 0.5)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(212, 165, 116, 0.2)';
              }}
            >
              <div 
                className="w-12 h-12 rounded-lg mb-6 flex items-center justify-center font-serif text-xl font-light group-hover:scale-110 transition-transform duration-300"
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
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
