"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/lib/translations";
import { motion } from "framer-motion";
import {
  Bed,
  Trees,
  Moon,
  Wind,
  Wifi,
  UtensilsCrossed,
} from "lucide-react";

export function Amenities() {
  const { language } = useLanguage();
  const t = translations[language];

  const icons = [Bed, Trees, Moon, Wind, Wifi, UtensilsCrossed];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="amenities" className="section-padding" style={{ backgroundColor: '#1a1a1a' }}>
      <div className="container-narrow">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-serif font-light text-center mb-16"
          style={{ color: '#d4a574' }}
        >
          {t.amenities.title}
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {t.amenities.items.map((item, index) => {
            const Icon = icons[index];
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="rounded-lg p-8 transition-all duration-300 group"
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
                  className="mb-4 inline-block p-3 rounded-lg group-hover:scale-110 transition-transform duration-300"
                  style={{
                    background: 'linear-gradient(to bottom right, rgba(212, 165, 116, 0.2), rgba(139, 157, 111, 0.2))',
                  }}
                >
                  <Icon className="w-6 h-6" style={{ color: '#d4a574' }} />
                </div>
                <h3 className="text-lg font-serif font-light mb-2" style={{ color: '#e8e8e8' }}>
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: '#a8a8a8' }}>
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
