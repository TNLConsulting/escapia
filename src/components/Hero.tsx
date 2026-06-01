"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/lib/translations";

export function Hero() {
  const { language, setLanguage } = useLanguage();
  const t = translations[language];

  return (
    <section
      id="hero"
      className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden pt-20 md:pt-0"
      style={{
        backgroundImage: "linear-gradient(rgba(0,0,0,0.35), rgba(0,0,0,0.45)), url('/dome-twin.jpg')",
        backgroundColor: "#000",
        backgroundSize: "cover",
        backgroundPosition: "center 60%",
        backgroundAttachment: "auto",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Navigation (Fixed/Sticky) */}
      <nav className="fixed top-0 left-0 right-0 w-full px-3 md:px-6 py-4 md:py-6 z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <a href="#" className="font-serif text-2xl tracking-wider" style={{ color: "#9d7e44" }}>
            Forêt Dôme
          </a>

          <div className="hidden md:flex gap-8">
            <a href="#experience" className="text-sm tracking-widest uppercase" style={{ color: "#a8a8a8" }}>Experience</a>
            <a href="#accommodations" className="text-sm tracking-widest uppercase" style={{ color: "#a8a8a8" }}>The Dome</a>
            <a href="#amenities" className="text-sm tracking-widest uppercase" style={{ color: "#a8a8a8" }}>Amenities</a>
            <a href="#location" className="text-sm tracking-widest uppercase" style={{ color: "#a8a8a8" }}>Location</a>
          </div>

          <div className="flex items-center gap-4">
            <a href="#booking" className="px-4 py-2 md:px-6 md:py-2 rounded-lg text-xs md:text-sm font-medium text-center" style={{ backgroundColor: "#9d7e44", color: "#1a1a1a" }}>
              Book
            </a>
          </div>
        </div>
      </nav>

      {/* Content */}
      <div className="text-center max-w-3xl mx-auto px-6">
        <p className="text-xs md:text-sm tracking-widest uppercase mb-4 md:mb-6" style={{ color: "#9d7e44" }}>A hideaway in nature</p>
        <h1 className="font-serif text-4xl md:text-7xl font-light leading-tight mb-6 md:mb-8" style={{ color: "#b8b8b8" }}>
          Disconnect to <span style={{ color: "#9d7e44", fontStyle: "italic" }}>Reconnect</span>
        </h1>
        <p className="text-base md:text-xl mb-8 md:mb-10" style={{ color: "#a8a8a8" }}>
          Escape to our exclusive dome sanctuary in Lille, Belgium — an intimate retreat for two, nestled deep in the forest.
        </p>
        {/* 
          Lodgify Search Widget - replaces "Reserve Your Stay" and "Discover More" buttons
          Widget ID: lodgify-search-bar
          Website ID: 656411
          The widget will be initialized by the Lodgify script loaded in useLodgifyScript hook
        */}
        <div className="w-full flex justify-center">
          <div
            id="lodgify-search-bar"
            data-website-id="656411"
            data-language-code="en"
            data-checkout-page-url="https://checkout.lodgify.com/tom-schallenbergh/en/#/809815"
            data-dates-check-in-label="Check-in"
            data-dates-check-out-label="Check-out"
            data-guests-counter-label="Guests"
            data-guests-input-singular-label="{{NumberOfGuests}} guest"
            data-guests-input-plural-label="{{NumberOfGuests}} guests"
            data-location-input-label="Location"
            data-search-button-label="Search"
            data-dates-input-min-stay-tooltip-text='{"one":"Minimum {minStay} night","other":"Minimum {minStay} nights"}'
            data-guests-breakdown-label="Guests"
            data-adults-label='{"one":"adult","other":"adults"}'
            data-adults-description="Ages {minAge} or above"
            data-children-label='{"one":"child","other":"children"}'
            data-children-description="Ages {minAge}-{maxAge}"
            data-children-not-allowed-label="Not suitable for children"
            data-infants-label='{"one":"infant","other":"infants"}'
            data-infants-description="Under {maxAge}"
            data-infants-not-allowed-label="Not suitable for infants"
            data-pets-label='{"one":"pet","other":"pets"}'
            data-pets-not-allowed-label="Not allowed"
            data-done-label="Done"
            data-new-tab="true"
            data-version="stable"
            data-has-guests-breakdown
          />
        </div>
      </div>

      {/* Scroll */}
      <div className="absolute bottom-8 md:bottom-10 left-1/2 -translate-x-1/2 text-center">
        <p className="text-xs tracking-widest uppercase mb-2" style={{ color: "#a8a8a8" }}>Scroll</p>
        <div className="animate-bounce" style={{ color: "#9d7e44" }}>↓</div>
      </div>
    </section>
  );
}
