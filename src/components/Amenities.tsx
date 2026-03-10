import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { 
  Sparkles, 
  TreePine, 
  Flame,
  Wifi,
  Coffee,
  BedDouble,
  Utensils,
  Droplets
} from "lucide-react";

const amenities = [
  {
    icon: Droplets,
    title: "Private Jacuzzi",
    description: "Your own outdoor jacuzzi, surrounded by nature. Perfect for evenings under the stars.",
  },
  {
    icon: BedDouble,
    title: "King-Size Bed",
    description: "Sink into premium bedding with panoramic forest views from your sleeping sanctuary.",
  },
  {
    icon: Flame,
    title: "Fire Pit & BBQ",
    description: "Outdoor fire pit and BBQ for intimate evenings in the forest.",
  },
  {
    icon: TreePine,
    title: "Private Forest Setting",
    description: "Completely secluded in nature — no neighbours, no noise, just you and the forest.",
  },
  {
    icon: Sparkles,
    title: "Stargazing Windows",
    description: "Floor-to-ceiling windows and a glass roof for unforgettable starlit nights.",
  },
  {
    icon: Coffee,
    title: "Fully Equipped",
    description: "Nespresso, premium toiletries, fluffy robes and everything you need for total comfort.",
  },
  {
    icon: Wifi,
    title: "High-Speed WiFi",
    description: "Stay connected when you want — or simply switch off and embrace the silence.",
  },
  {
    icon: Utensils,
    title: "Fully Equipped Kitchen",
    description: "Everything you need to cook your own meals in complete comfort.",
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
