"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/lib/translations";
import { motion } from "framer-motion";
import { Mail, MapPin } from "lucide-react";

export function Footer() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <footer 
      className="py-16"
      style={{
        backgroundColor: '#1a1a1a',
        borderTop: '1px solid rgba(212, 165, 116, 0.2)',
      }}
    >
      <div className="container-narrow">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* About */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-serif font-light mb-4" style={{ color: '#d4a574' }}>
              Forêt Dôme
            </h3>
            <p className="leading-relaxed text-sm" style={{ color: '#a8a8a8' }}>
              {t.footer.about}
            </p>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-serif font-light mb-4" style={{ color: '#e8e8e8' }}>
              {t.footer.contact}
            </h4>
            <div className="space-y-3">
              <a
                href={`mailto:${t.footer.email}`}
                className="flex items-center gap-2 transition-colors duration-300 text-sm hover:opacity-80"
                style={{ color: '#a8a8a8' }}
              >
                <Mail className="w-4 h-4" />
                {t.footer.email}
              </a>
              <a
                href="https://maps.google.com/?q=Bosuilweg+19,+2275+Lille"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 transition-colors duration-300 text-sm hover:opacity-80"
                style={{ color: '#a8a8a8' }}
              >
                <MapPin className="w-4 h-4" />
                Bosuilweg 19, Lille
              </a>
            </div>
          </motion.div>

          {/* Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-serif font-light mb-4" style={{ color: '#e8e8e8' }}>
              Links
            </h4>
            <div className="space-y-2">
              <a
                href="#"
                className="block transition-colors duration-300 text-sm hover:opacity-80"
                style={{ color: '#a8a8a8' }}
              >
                {t.footer.links.privacy}
              </a>
              <a
                href="#"
                className="block transition-colors duration-300 text-sm hover:opacity-80"
                style={{ color: '#a8a8a8' }}
              >
                {t.footer.links.terms}
              </a>
              <a
                href="#"
                className="block transition-colors duration-300 text-sm hover:opacity-80"
                style={{ color: '#a8a8a8' }}
              >
                {t.footer.links.booking}
              </a>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="pt-8" style={{ borderTop: '1px solid rgba(212, 165, 116, 0.2)' }}>
          <p className="text-center text-sm" style={{ color: '#a8a8a8' }}>
            {t.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
