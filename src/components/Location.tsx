"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/lib/translations";
import { motion } from "framer-motion";
import { MapPin, Train, Plane, Clock } from "lucide-react";

export function Location() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section id="location" className="w-full section-padding" style={{ backgroundColor: '#1a1a1a' }}>
      <div className="container-narrow">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-serif font-light text-center mb-16"
          style={{ color: '#d4a574' }}
        >
          {t.location.title}
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Address & Map */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div 
            className="rounded-lg p-8"
            style={{
              backgroundColor: '#1a1a1a',
              border: '1px solid rgba(212, 165, 116, 0.2)',
            }}
          >
              <div className="flex items-start gap-4 mb-6">
                <MapPin className="w-6 h-6 flex-shrink-0 mt-1" style={{ color: '#d4a574' }} />
                <div>
                  <h3 className="text-lg font-serif font-light mb-2" style={{ color: '#e8e8e8' }}>
                    Address
                  </h3>
                  <p style={{ color: '#a8a8a8' }}>{t.location.address}</p>
                </div>
              </div>
              <a
                href={`https://maps.google.com/?q=${encodeURIComponent(t.location.address)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-light hover:opacity-80 transition-opacity"
                style={{ color: '#d4a574' }}
              >
                Open in Google Maps →
              </a>
            </div>

            {/* Transportation */}
            <div className="space-y-4">
              <h3 className="text-2xl font-serif font-light" style={{ color: '#e8e8e8' }}>
                {t.location.transportation.title}
              </h3>

              <div 
                className="flex items-start gap-4 rounded-lg p-6"
                style={{
                  backgroundColor: '#1a1a1a',
                  border: '1px solid rgba(212, 165, 116, 0.2)',
                }}
              >
                <Train className="w-6 h-6 flex-shrink-0 mt-0.5" style={{ color: '#d4a574' }} />
                <p style={{ color: '#a8a8a8' }}>{t.location.transportation.train}</p>
              </div>

              <div 
                className="flex items-start gap-4 rounded-lg p-6"
                style={{
                  backgroundColor: '#1a1a1a',
                  border: '1px solid rgba(212, 165, 116, 0.2)',
                }}
              >
                <Plane className="w-6 h-6 flex-shrink-0 mt-0.5" style={{ color: '#d4a574' }} />
                <p style={{ color: '#a8a8a8' }}>{t.location.transportation.air}</p>
              </div>
            </div>
          </motion.div>

          {/* Check-in Times */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div 
              className="rounded-lg p-8"
              style={{
                backgroundColor: '#1a1a1a',
                border: '1px solid rgba(212, 165, 116, 0.2)',
              }}
            >
              <h3 className="text-2xl font-serif font-light mb-6" style={{ color: '#e8e8e8' }}>
                {t.location.checkInTimes.title}
              </h3>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <Clock className="w-6 h-6 flex-shrink-0 mt-1" style={{ color: '#d4a574' }} />
                  <div>
                    <p className="text-sm font-light" style={{ color: '#a8a8a8' }}>
                      Check-in
                    </p>
                    <p className="font-light" style={{ color: '#e8e8e8' }}>
                      {t.location.checkInTimes.checkIn}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Clock className="w-6 h-6 flex-shrink-0 mt-1" style={{ color: '#d4a574' }} />
                  <div>
                    <p className="text-sm font-light" style={{ color: '#a8a8a8' }}>
                      Check-out
                    </p>
                    <p className="font-light" style={{ color: '#e8e8e8' }}>
                      {t.location.checkInTimes.checkOut}
                    </p>
                  </div>
                </div>
              </div>

              <p className="text-sm leading-relaxed mt-6 pt-6" style={{
                color: '#a8a8a8',
                borderTop: '1px solid rgba(212, 165, 116, 0.2)',
              }}>
                {t.location.checkInTimes.earlyLate}
              </p>
            </div>

            {/* Map Placeholder */}
            <div 
              className="rounded-lg h-64 flex items-center justify-center"
              style={{
                background: 'linear-gradient(to bottom right, rgba(212, 165, 116, 0.1), rgba(139, 157, 111, 0.1))',
                border: '1px solid rgba(212, 165, 116, 0.2)',
              }}
            >
              <div className="text-center">
                <MapPin className="w-12 h-12 mx-auto mb-4" style={{ color: 'rgba(212, 165, 116, 0.3)' }} />
                <p className="text-sm" style={{ color: '#a8a8a8' }}>Bosuilweg 19</p>
                <p className="text-xs mt-2" style={{ color: '#a8a8a8' }}>2275 Lille, Belgium</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
