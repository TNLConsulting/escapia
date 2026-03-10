import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Users, Maximize, Bath, Wifi, Coffee, Wind } from "lucide-react";
import { Button } from "@/components/ui/button";
import domeExterior from "@/assets/render-autumn.jpg";
import domeTwin from "@/assets/render-night.jpg";
import { useLanguage } from "@/contexts/LanguageContext";
import type { TranslationKey } from "@/lib/translations";

const amenityIconKeys: Array<{ icon: React.ElementType; labelKey: TranslationKey }> = [
  { icon: Users,    labelKey: 'accom.amenity.guests' },
  { icon: Maximize, labelKey: 'accom.amenity.twin' },
  { icon: Bath,     labelKey: 'accom.amenity.shower' },
  { icon: Wifi,     labelKey: 'accom.amenity.wifi' },
  { icon: Coffee,   labelKey: 'accom.amenity.nespresso' },
  { icon: Wind,     labelKey: 'accom.amenity.climate' },
];

const Accommodations = () => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useLanguage();

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
            {t('accom.label')}
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
            {t('accom.title')} <span className="italic text-primary">{t('accom.title.italic')}</span>
          </h2>
          <p className="text-lg text-muted-foreground font-light">
            {t('accom.subtitle')}
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
              className="w-full h-[115%] object-cover object-bottom"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
          </div>

          {/* Content */}
          <div className="space-y-6">
            <h3 className="font-serif text-3xl md:text-4xl text-foreground">
              {t('accom.h3.1')}
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              {t('accom.body.1')}
            </p>

            {/* Amenities */}
            <div className="grid grid-cols-3 gap-4 py-6 border-y border-border/50">
              {amenityIconKeys.map((item) => (
                <div key={item.labelKey} className="flex flex-col items-center gap-2 text-center">
                  <item.icon className="w-5 h-5 text-primary" />
                  <span className="text-xs text-muted-foreground">{t(item.labelKey)}</span>
                </div>
              ))}
            </div>

            <Button variant="glow" size="lg" asChild>
              <a href="#booking">{t('accom.check')}</a>
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
              {t('accom.h3.2')}
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              {t('accom.body.2')}
            </p>

            <div className="space-y-4 py-6 border-y border-border/50">
              <div className="flex items-center gap-4">
                <span className="w-2 h-2 rounded-full bg-primary" />
                <span className="text-muted-foreground text-sm">{t('accom.bullet.1')}</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="w-2 h-2 rounded-full bg-primary" />
                <span className="text-muted-foreground text-sm">{t('accom.bullet.2')}</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="w-2 h-2 rounded-full bg-primary" />
                <span className="text-muted-foreground text-sm">{t('accom.bullet.3')}</span>
              </div>
            </div>

            <Button variant="glow" size="lg" asChild>
              <a href="#booking">{t('accom.reserve')}</a>
            </Button>
          </div>

          {/* Image */}
          <div className="relative overflow-hidden rounded-lg aspect-[4/3] lg:order-1">
            <motion.img
              style={{ y: imageY }}
              src={domeTwin}
              alt="Escapia - Interior view of connected domes"
              className="w-full h-[115%] object-cover object-bottom"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Accommodations;
