"use client";

import { MapPin, Train, Plane, Clock } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/lib/translations";

export function Location() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section id="location" className="w-full py-12 md:py-20" style={{ backgroundColor: "#000" }}>
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left - Info */}
          <div>
            <p className="text-xs tracking-widest uppercase mb-2 md:mb-4" style={{ color: "#9d7e44" }}>
              {t.location.title}
            </p>
            <h2 className="text-3xl md:text-5xl font-serif font-light mb-6 md:mb-8" style={{ color: "#b8b8b8" }}>
              {t.location.subtitle.split(" ").slice(0, -1).join(" ")} <span style={{ color: "#9d7e44", fontStyle: "italic" }}>{t.location.subtitle.split(" ").pop()}</span>
            </h2>
            <p className="mb-8 md:mb-12 leading-relaxed text-sm md:text-base" style={{ color: "#a8a8a8" }}>
              {t.location.description}
            </p>

            {/* Address */}
            <div className="flex gap-4 md:gap-6 mb-6 md:mb-8">
              <div className="mt-1 flex-shrink-0">
                <MapPin size={20} style={{ color: "#9d7e44" }} />
              </div>
              <div>
                <h3 className="text-sm md:text-base font-serif font-light mb-2" style={{ color: "#b8b8b8" }}>
                  Address
                </h3>
                <p style={{ color: "#a8a8a8", fontSize: "14px", whiteSpace: "pre-wrap" }}>
                  {t.location.address}
                </p>
              </div>
            </div>

            {/* By Train */}
            <div className="flex gap-4 md:gap-6 mb-6 md:mb-8">
              <div className="mt-1 flex-shrink-0">
                <Train size={20} style={{ color: "#9d7e44" }} />
              </div>
              <div>
                <h3 className="text-sm md:text-base font-serif font-light mb-2" style={{ color: "#b8b8b8" }}>
                  {t.location.transportation.title}
                </h3>
                <p style={{ color: "#a8a8a8", fontSize: "14px", whiteSpace: "pre-wrap" }}>
                  {t.location.transportation.train}
                </p>
              </div>
            </div>

            {/* By Air */}
            <div className="flex gap-4 md:gap-6 mb-6 md:mb-8">
              <div className="mt-1 flex-shrink-0">
                <Plane size={20} style={{ color: "#9d7e44" }} />
              </div>
              <div>
                <h3 className="text-sm md:text-base font-serif font-light mb-2" style={{ color: "#b8b8b8" }}>
                  By Air
                </h3>
                <p style={{ color: "#a8a8a8", fontSize: "14px", whiteSpace: "pre-wrap" }}>
                  {t.location.transportation.air}
                </p>
              </div>
            </div>

            {/* Check-in Times */}
            <div className="flex gap-4 md:gap-6">
              <div className="mt-1 flex-shrink-0">
                <Clock size={20} style={{ color: "#9d7e44" }} />
              </div>
              <div>
                <h3 className="text-sm md:text-base font-serif font-light mb-2" style={{ color: "#b8b8b8" }}>
                  {t.location.checkInTimes.title}
                </h3>
                <p style={{ color: "#a8a8a8", fontSize: "14px" }}>
                  {t.location.checkInTimes.checkIn} | {t.location.checkInTimes.checkOut}<br />
                  {t.location.checkInTimes.earlyLate}
                </p>
              </div>
            </div>
          </div>

          {/* Right - Google Map */}
          <div className="w-full h-96 md:h-full min-h-96 rounded-lg overflow-hidden">
            <iframe
              src={`https://maps.google.com/maps?q=Bosuilweg+19,+2275+Lille,+Belgium&t=&z=13&ie=UTF8&iwloc=&output=embed`}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
