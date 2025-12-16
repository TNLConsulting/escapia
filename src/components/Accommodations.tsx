import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Users, Maximize, Bath, Wifi, Coffee, Wind } from "lucide-react";
import { Button } from "@/components/ui/button";
import domeExterior from "@/assets/dome-exterior.jpg";
import domeTwin from "@/assets/dome-twin.jpg";

const amenityIcons = [
  { icon: Users, label: "2-4 Guests" },
  { icon: Maximize, label: "45m² Living" },
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
            Accommodations
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
            The <span className="italic text-primary">Domes</span>
          </h2>
          <p className="text-lg text-muted-foreground font-light">
            Each dome is a unique sanctuary, featuring living moss roofs that breathe 
            with the forest and panoramic windows that dissolve the boundary between 
            inside and out.
          </p>
        </motion.div>

        {/* Featured Dome - Solo */}
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
              alt="Solo Dome - Intimate forest retreat"
              className="w-full h-[115%] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6">
              <span className="px-4 py-2 bg-primary/90 text-primary-foreground text-sm font-medium tracking-wider uppercase rounded">
                From €295/night
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <h3 className="font-serif text-3xl md:text-4xl text-foreground">
              The Solo Dome
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Perfect for couples seeking an intimate escape. This single dome 
              features a king-size bed positioned to wake with the forest, a 
              rain shower with forest views, and a private wooden terrace 
              overlooking the ancient trees.
            </p>

            {/* Amenities */}
            <div className="grid grid-cols-3 gap-4 py-6 border-y border-border/50">
              {amenityIcons.slice(0, 6).map((item) => (
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

        {/* Featured Dome - Twin */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          {/* Content - Reversed order on large screens */}
          <div className="space-y-6 lg:order-2">
            <h3 className="font-serif text-3xl md:text-4xl text-foreground">
              The Twin Domes
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Two connected domes for families or friends traveling together. 
              A central wooden corridor links a spacious living dome with a 
              sleeping dome, offering the perfect balance of togetherness 
              and privacy amidst the autumn forest.
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

          {/* Image */}
          <div className="relative overflow-hidden rounded-lg aspect-[4/3] lg:order-1">
            <motion.img
              style={{ y: imageY }}
              src={domeTwin}
              alt="Twin Domes - Connected forest retreat"
              className="w-full h-[115%] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6">
              <span className="px-4 py-2 bg-primary/90 text-primary-foreground text-sm font-medium tracking-wider uppercase rounded">
                From €495/night
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Accommodations;
