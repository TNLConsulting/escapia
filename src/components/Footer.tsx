"use client";

import { Send, Heart } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/lib/translations";

export function Footer() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <footer style={{ backgroundColor: "#0a0a0a", borderTop: "1px solid rgba(157, 126, 68, 0.1)" }}>
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-16">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-16">
          {/* Left - Brand */}
          <div>
            <h3 className="text-xl md:text-2xl font-serif font-light mb-6" style={{ color: "#9d7e44" }}>
              Forêt Dôme
            </h3>
            <p className="text-xs md:text-sm mb-6 md:mb-8" style={{ color: "#666", lineHeight: "1.8" }}>
              {t.footer.tagline} {t.footer.about}
            </p>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/escapia.be/" target="_blank" rel="noopener noreferrer" className="transition-colors hover:opacity-80" style={{ color: "#9d7e44" }}>
                <Send size={20} />
              </a>
            </div>
          </div>

          {/* Middle - Explore */}
          <div>
            <h4 className="text-xs md:text-sm font-serif tracking-widest uppercase mb-4 md:mb-6" style={{ color: "#9d7e44" }}>
              Explore
            </h4>
            <nav className="space-y-2 md:space-y-3">
              <a href="#experience" className="block text-xs md:text-sm transition-colors hover:text-opacity-80" style={{ color: "#666" }}>
                {t.footer.links.experience}
              </a>
              <a href="#accommodations" className="block text-xs md:text-sm transition-colors hover:text-opacity-80" style={{ color: "#666" }}>
                {t.footer.links.dome}
              </a>
              <a href="#location" className="block text-xs md:text-sm transition-colors hover:text-opacity-80" style={{ color: "#666" }}>
                {t.footer.links.location}
              </a>
              <a href="#hero" className="block text-xs md:text-sm transition-colors hover:text-opacity-80" style={{ color: "#666" }}>
                {t.footer.links.reservations}
              </a>
            </nav>
          </div>

          {/* Right - Contact */}
          <div>
            <h4 className="text-xs md:text-sm font-serif tracking-widest uppercase mb-4 md:mb-6" style={{ color: "#9d7e44" }}>
              {t.footer.contact}
            </h4>
            <div className="space-y-1 md:space-y-2 text-xs md:text-sm" style={{ color: "#666" }}>
              <p>
                <a href={`mailto:${t.footer.email}`} className="transition-colors hover:text-opacity-80">
                  📧 {t.footer.email}
                </a>
              </p>
              <p>Bosuilweg 19</p>
              <p>2275 Lille, Belgium</p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div style={{ borderTop: "1px solid rgba(157, 126, 68, 0.1)", margin: "1.5rem 0", marginBottom: "1.5rem" }} />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-3 md:gap-4 text-xs" style={{ color: "#555" }}>
          <p className="text-xs">{t.footer.copyright}</p>
          <div className="flex gap-4 md:gap-6 text-xs">
            <a href="/privacy" className="transition-colors hover:text-opacity-80" style={{ color: "#555" }}>
              {t.footer.links.privacy}
            </a>
            <a href="/terms" className="transition-colors hover:text-opacity-80" style={{ color: "#555" }}>
              {t.footer.links.terms}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
