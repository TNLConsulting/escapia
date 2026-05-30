"use client";

import { Bed, AlertTriangle, Sparkles, Coffee, Wifi, UtensilsCrossed } from "lucide-react";

export function Amenities() {
  const amenities = [
    { 
      icon: Bed, 
      title: "King-Size Bed", 
      desc: "Sink into premium bedding with panoramic forest views from your sleeping sanctuary." 
    },
    { 
      icon: AlertTriangle, 
      title: "Private Forest Setting", 
      desc: "Completely secluded in nature — no neighbours, no noise, just you and the forest." 
    },
    { 
      icon: Sparkles, 
      title: "Stargazing Windows", 
      desc: "Floor-to-ceiling windows and a glass roof for unforgettable starlit nights." 
    },
    { 
      icon: Coffee, 
      title: "Fully Equipped", 
      desc: "Nespresso, premium toiletries, fluffy robes and everything you need for total comfort." 
    },
    { 
      icon: Wifi, 
      title: "High-Speed WiFi", 
      desc: "Stay connected when you want — or simply switch off and embrace the silence." 
    },
    { 
      icon: UtensilsCrossed, 
      title: "Fully Equipped Kitchen", 
      desc: "Everything you need to cook your own meals in complete comfort." 
    },
  ];

  return (
    <section id="amenities" className="w-full py-20" style={{ backgroundColor: "#000" }}>
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-xs tracking-widest uppercase text-center mb-4" style={{ color: "#c9a961" }}>
          Services & Amenities
        </p>
        <h2 className="text-5xl font-serif font-light text-center mb-6" style={{ color: "#b8b8b8" }}>
          Every Detail, <span style={{ color: "#c9a961", fontStyle: "italic" }}>Considered</span>
        </h2>
        <p className="text-center max-w-3xl mx-auto mb-12" style={{ color: "#a8a8a8" }}>
          Thoughtfully curated details that elevate your escape — from your private sanctuary to every comfort designed for pure indulgence.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {amenities.map((item, i) => {
            const Icon = item.icon;
            return (
              <div key={i} className="rounded p-6" style={{ backgroundColor: "#0a0a0a", border: "1px solid rgba(201, 169, 97, 0.15)" }}>
                <div className="mb-4 w-10 h-10 rounded flex items-center justify-center" style={{ backgroundColor: "rgba(201, 169, 97, 0.2)" }}>
                  <Icon size={24} style={{ color: "#c9a961" }} />
                </div>
                <h3 className="text-lg font-serif font-light mb-3" style={{ color: "#b8b8b8" }}>
                  {item.title}
                </h3>
                <p className="text-sm" style={{ color: "#a8a8a8", lineHeight: "1.6" }}>
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
