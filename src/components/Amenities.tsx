import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { 
  UtensilsCrossed, 
  Sparkles, 
  TreePine, 
  Car, 
  Flame,
  Wine
} from "lucide-react";

const amenities = [
  {
    icon: UtensilsCrossed,
    title: "Gourmet Breakfast",
    description: "Organic, locally-sourced breakfast delivered to your dome each morning.",
  },
  {
    icon: Sparkles,
    title: "Wellness Rituals",
    description: "Book private forest bathing sessions and in-dome massage treatments.",
  },
  {
    icon: TreePine,
    title: "Forest Trails",
    description: "Private access to 5km of curated walking paths through ancient woodland.",
  },
  {
    icon: Flame,
    title: "Private Fire Pit",
    description: "Each dome features an outdoor fire pit for stargazing evenings.",
  },
  {
    icon: Wine,
    title: "Curated Minibar",
    description: "Belgian craft beers, local wines, and artisanal treats await.",
  },
  {
    icon: Car,
    title: "Concierge Service",
    description: "Airport transfers, restaurant reservations, and local experiences arranged.",
  },
];

const Amenities = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="amenities" className="py-32 bg-card relative overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-moss/10 via-transparent to-transparent" />
      </div>

      <div ref={ref} className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <p className="text-sm tracking-[0.3em] uppercase text-primary mb-4">
            Services & Amenities
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
            Every Detail, <span className="italic text-primary">Considered</span>
          </h2>
          <p className="text-lg text-muted-foreground font-light">
            From gourmet meals to private wellness experiences, every aspect of your 
            stay has been thoughtfully designed.
          </p>
        </motion.div>

        {/* Amenities Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {amenities.map((amenity, index) => (
            <motion.div
              key={amenity.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group flex gap-5 p-6 rounded-lg border border-border/30 bg-background/50 hover:bg-background hover:border-primary/20 transition-all duration-500"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                <amenity.icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-serif text-lg text-foreground mb-2">
                  {amenity.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {amenity.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Amenities;
