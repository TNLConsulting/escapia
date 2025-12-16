import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Leaf, Moon, Sparkles, TreePine } from "lucide-react";

const features = [
  {
    icon: TreePine,
    title: "Forest Immersion",
    description:
      "Nestled deep within an ancient forest, our domes offer complete immersion in nature without sacrificing comfort.",
  },
  {
    icon: Leaf,
    title: "Living Architecture",
    description:
      "Each dome is crowned with a living moss roof, blending seamlessly into the forest canopy around it.",
  },
  {
    icon: Moon,
    title: "Starlit Nights",
    description:
      "Floor-to-ceiling windows frame the forest by day and reveal starry skies by night.",
  },
  {
    icon: Sparkles,
    title: "Boutique Luxury",
    description:
      "Every detail has been carefully curated to create an exclusive sanctuary for discerning travelers.",
  },
];

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-32 bg-gradient-forest relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-moss/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-amber/5 rounded-full blur-3xl" />

      <div ref={ref} className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <p className="text-sm tracking-[0.3em] uppercase text-primary mb-4">
            The Experience
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-6 leading-tight">
            Where Wilderness Meets
            <br />
            <span className="italic text-primary">Refined Living</span>
          </h2>
          <p className="text-lg text-muted-foreground font-light leading-relaxed">
            Forêt Dôme is more than accommodation—it's a return to nature, 
            reimagined for those who seek both adventure and elegance.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group text-center p-8 rounded-lg bg-card/50 border border-border/50 hover:border-primary/30 hover:bg-card transition-all duration-500"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-serif text-xl text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
