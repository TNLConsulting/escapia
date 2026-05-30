"use client";

export function Experience() {
  const cards = [
    { title: "Forest Immersion", desc: "Nestled deep within an ancient forest, our dome offers complete immersion in nature without sacrificing comfort.", icon: "🌲" },
    { title: "Living Architecture", desc: "The dome is crowned with a living moss roof, blending seamlessly into the forest canopy around it.", icon: "🏛️" },
    { title: "Starlit Nights", desc: "Floor-to-ceiling windows frame the forest by day and reveal starry skies by night.", icon: "✨" },
    { title: "Boutique Luxury", desc: "Every detail has been carefully curated to create an exclusive sanctuary for discerning travelers.", icon: "💎" }
  ];

  return (
    <section id="experience" className="w-full py-20" style={{ backgroundColor: "#1a1a1a" }}>
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-xs tracking-widest uppercase text-center mb-3" style={{ color: "#d4a574" }}>The Experience</p>
        <h2 className="text-4xl md:text-5xl font-serif font-light text-center mb-4" style={{ color: "#e8e8e8" }}>
          Where Wilderness Meets <br />
          <span style={{ color: "#d4a574" }}>Refined Living</span>
        </h2>
        <p className="text-center max-w-2xl mx-auto mb-12 text-sm" style={{ color: "#a8a8a8" }}>
          Forêt Dôme is more than accommodation—it's a return to nature, reimagined for those who seek both adventure and elegance.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {cards.map((card, i) => (
            <div key={i} className="p-6" style={{ backgroundColor: "#0a0a0a", border: "1px solid rgba(212, 165, 116, 0.2)", borderRadius: "8px" }}>
              <div className="text-2xl mb-4">{card.icon}</div>
              <h3 className="text-lg font-serif font-light mb-3" style={{ color: "#e8e8e8" }}>{card.title}</h3>
              <p className="text-sm" style={{ color: "#a8a8a8", lineHeight: "1.6" }}>{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
