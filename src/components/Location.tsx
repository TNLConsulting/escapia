"use client";

import { MapPin, Train, Plane, Clock } from "lucide-react";

export function Location() {
  return (
    <section id="location" className="w-full py-20" style={{ backgroundColor: "#000" }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 gap-12 items-center">
          {/* Left - Info */}
          <div>
            <p className="text-xs tracking-widest uppercase mb-4" style={{ color: "#9d7e44" }}>
              Location
            </p>
            <h2 className="text-5xl font-serif font-light mb-8" style={{ color: "#b8b8b8" }}>
              Hidden in Plain <span style={{ color: "#9d7e44", fontStyle: "italic" }}>Sight</span>
            </h2>
            <p className="mb-12 leading-relaxed" style={{ color: "#a8a8a8", fontSize: "16px" }}>
              Escapia is nestled within the peaceful surroundings of Lille in Vlaams Gewest, offering the perfect balance of seclusion and accessibility. Just minutes from the city, yet worlds away from the everyday.
            </p>

            {/* Address */}
            <div className="flex gap-6 mb-8">
              <div className="mt-1">
                <MapPin size={24} style={{ color: "#9d7e44" }} />
              </div>
              <div>
                <h3 className="text-base font-serif font-light mb-2" style={{ color: "#b8b8b8" }}>
                  Address
                </h3>
                <p style={{ color: "#a8a8a8", fontSize: "15px" }}>
                  Bosuilweg 19, 2275 Lille<br />
                  Vlaams Gewest, Belgium
                </p>
              </div>
            </div>

            {/* By Train */}
            <div className="flex gap-6 mb-8">
              <div className="mt-1">
                <Train size={24} style={{ color: "#9d7e44" }} />
              </div>
              <div>
                <h3 className="text-base font-serif font-light mb-2" style={{ color: "#b8b8b8" }}>
                  By Train
                </h3>
                <p style={{ color: "#a8a8a8", fontSize: "15px" }}>
                  Antwerpen-Centraal station: 30 minutes by car<br />
                  Complimentary pickup available
                </p>
              </div>
            </div>

            {/* By Air */}
            <div className="flex gap-6 mb-8">
              <div className="mt-1">
                <Plane size={24} style={{ color: "#9d7e44" }} />
              </div>
              <div>
                <h3 className="text-base font-serif font-light mb-2" style={{ color: "#b8b8b8" }}>
                  By Air
                </h3>
                <p style={{ color: "#a8a8a8", fontSize: "15px" }}>
                  Antwerp Airport (ANR): 25 minutes<br />
                  Brussels Airport (BRU): 45 minutes
                </p>
              </div>
            </div>

            {/* Check-in Times */}
            <div className="flex gap-6">
              <div className="mt-1">
                <Clock size={24} style={{ color: "#9d7e44" }} />
              </div>
              <div>
                <h3 className="text-base font-serif font-light mb-2" style={{ color: "#b8b8b8" }}>
                  Check-in Times
                </h3>
                <p style={{ color: "#a8a8a8", fontSize: "15px" }}>
                  Check-in: 15:00 | Check-out: 11:00<br />
                  Early/late options available on request
                </p>
              </div>
            </div>
          </div>

          {/* Right - Map */}
          <div className="rounded-lg overflow-hidden h-96">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2512.123456789!2d4.566789!3d51.2345678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c3f1234567%3A0x1234567890abcdef!2sBosuilweg%2019%2C%202275%20Lille!5e0!3m2!1sen!2sbe!4v1234567890"
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
