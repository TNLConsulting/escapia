import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Users, Maximize, Bath, Wifi, Coffee, Wind } from "lucide-react";
import { Button } from "@/components/ui/button";
import domeExterior from "@/assets/render-autumn.jpg";
import domeTwin from "@/assets/render-night.jpg";

const amenityIcons = [
  { icon: Users, label: "2 Guests" },
  { icon: Maximize, label: "Twin Domes" },
  { icon: Bath, label: "Rain Shower" },
  { icon: Wifi, label: "High-Speed WiFi" },
  { icon: Coffee, label: "Nespresso" },
  { icon: Wind, label: "Climate Control" },
];

const Accommodations = () => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);

  return (
    <section
      id="accommodations"
      ref={containerRef}
      className="py-32 bg-background relative overflow-hidden"
    >
      <div ref={ref} className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <p className="text-sm tracking-[0.3em] uppercase text-primary mb-4">
            Your Sanctuary
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
            The <span className="italic text-primary">Dome</span>
          </h2>
          <p className="text-lg text-muted-foreground font-light">
            Two connected domes create one intimate sanctuary — a living space and sleeping 
            retreat linked by a wooden corridor, designed exclusively for two.
          </p>
        </motion.div>

        {/* Featured Image - Exterior */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid lg:grid-cols-2 gap-12 items-center mb-24"
        >
          {/* Image */}
          <div className="relative overflow-hidden rounded-lg aspect-[4/3]">
            <motion.img
              style={{ y: imageY }}
              src={domeExterior}
              alt="Escapia - Twin dome exterior nestled in forest"
              className="w-full h-[115%] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
          </div>

          {/* Content */}
          <div className="space-y-6">
            <h3 className="font-serif text-3xl md:text-4xl text-foreground">
              Two Domes, One Experience
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Wake up in a cocoon of glass and moss. Our unique twin-dome structure 
              offers the perfect balance of openness and intimacy — a spacious living 
              dome flows into a cozy sleeping sanctuary, all wrapped in the embrace 
              of the ancient forest.
            </p>

            {/* Amenities */}
            <div className="grid grid-cols-3 gap-4 py-6 border-y border-border/50">
              {amenityIcons.map((item) => (
                <div key={item.label} className="flex flex-col items-center gap-2 text-center">
                  <item.icon className="w-5 h-5 text-primary" />
                  <span className="text-xs text-muted-foreground">{item.label}</span>
                </div>
              ))}
            </div>

            <Button variant="glow" size="lg" asChild>
              <a href="#booking">Check Availability</a>
            </Button>
          </div>
        </motion.div>

        {/* Interior View */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          {/* Content - Reversed order on large screens */}
          <div className="space-y-6 lg:order-2">
            <h3 className="font-serif text-3xl md:text-4xl text-foreground">
              Where Forest Meets Comfort
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Every detail has been crafted for your escape. A king-size bed faces 
              panoramic windows that frame the forest canopy. The rain shower brings 
              nature inside, while the living dome offers a space to unwind, sip 
              morning coffee, and simply breathe.
            </p>

            <div className="space-y-4 py-6 border-y border-border/50">
              <div className="flex items-center gap-4">
                <span className="w-2 h-2 rounded-full bg-primary" />
                <span className="text-muted-foreground text-sm">Private wooden terrace overlooking the forest</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="w-2 h-2 rounded-full bg-primary" />
                <span className="text-muted-foreground text-sm">Floor-to-ceiling windows with forest views</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="w-2 h-2 rounded-full bg-primary" />
                <span className="text-muted-foreground text-sm">Living moss roof that breathes with nature</span>
              </div>
            </div>

            <Button variant="glow" size="lg" asChild>
              <a href="#booking">Reserve Your Escape</a>
            </Button>
          </div>

          {/* Image */}
          <div className="relative overflow-hidden rounded-lg aspect-[4/3] lg:order-1">
            <motion.img
              style={{ y: imageY }}
              src={domeTwin}
              alt="Escapia - Interior view of connected domes"
              className="w-full h-[115%] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Accommodations;