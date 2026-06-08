"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/lib/translations";
import { useState } from "react";

export function Navigation() {
  const { language, setLanguage } = useLanguage();
  const t = translations[language];
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav 
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm border-b"
      style={{
        backgroundColor: 'rgba(26, 26, 26, 0.95)',
        borderColor: 'rgba(212, 165, 116, 0.2)',
      }}
    >
      <div className="container-narrow flex justify-between items-center h-20">
        {/* Logo */}
        <div className="flex-shrink-0">
          <h1 className="text-2xl font-serif font-light" style={{ color: '#9d7e44' }}>
            Forêt Dôme
          </h1>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <a
            href="#experience"
            className="transition-colors duration-300 hover:opacity-70"
            style={{ color: '#b8b8b8' }}
          >
            {t.nav.experience}
          </a>
          <a
            href="#accommodations"
            className="transition-colors duration-300 hover:opacity-70"
            style={{ color: '#b8b8b8' }}
          >
            {t.nav.dome}
          </a>
          <a
            href="#location"
            className="transition-colors duration-300 hover:opacity-70"
            style={{ color: '#b8b8b8' }}
          >
            {t.nav.location}
          </a>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-4">
          {/* Language Toggle */}
          <div 
            className="flex gap-2 rounded-lg p-1"
            style={{
              border: '1px solid rgba(212, 165, 116, 0.3)',
            }}
          >
            <button
              onClick={() => setLanguage("en")}
              className="px-3 py-1 text-sm font-medium transition-colors duration-300"
              style={{
                backgroundColor: language === "en" ? '#9d7e44' : 'transparent',
                color: language === "en" ? '#1a1a1a' : '#b8b8b8',
              }}
            >
              EN
            </button>
            <button
              onClick={() => setLanguage("nl")}
              className="px-3 py-1 text-sm font-medium transition-colors duration-300"
              style={{
                backgroundColor: language === "nl" ? '#9d7e44' : 'transparent',
                color: language === "nl" ? '#1a1a1a' : '#b8b8b8',
              }}
            >
              NL
            </button>
          </div>

          {/* Book Button */}
          <a href="#hero" className="button-primary hidden md:inline-block">
            {t.nav.book}
          </a>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden transition-colors"
            style={{ color: '#b8b8b8' }}
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div 
          className="md:hidden px-4 py-4 space-y-3"
          style={{
            backgroundColor: '#1a1a1a',
            borderBottom: '1px solid rgba(212, 165, 116, 0.2)',
          }}
        >
          <a
            href="#experience"
            className="block transition-colors"
            style={{ color: '#b8b8b8' }}
            onClick={() => setIsOpen(false)}
          >
            {t.nav.experience}
          </a>
          <a
            href="#accommodations"
            className="block transition-colors"
            style={{ color: '#b8b8b8' }}
            onClick={() => setIsOpen(false)}
          >
            {t.nav.dome}
          </a>
          <a
            href="#location"
            className="block transition-colors"
            style={{ color: '#b8b8b8' }}
            onClick={() => setIsOpen(false)}
          >
            {t.nav.location}
          </a>
          <a
            href="#hero"
            className="button-primary block text-center"
            onClick={() => setIsOpen(false)}
          >
            {t.nav.book}
          </a>
        </div>
      )}
    </nav>
  );
}
