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
import { useLanguage } from "@/contexts/LanguageContext";
import type { TranslationKey } from "@/lib/translations";

const amenityKeys: Array<{
  icon: React.ElementType;
  titleKey: TranslationKey;
  descKey: TranslationKey;
}> = [
  { icon: Droplets, titleKey: 'amenities.jacuzzi.title',    descKey: 'amenities.jacuzzi.desc' },
  { icon: BedDouble, titleKey: 'amenities.bed.title',       descKey: 'amenities.bed.desc' },
  { icon: Flame,    titleKey: 'amenities.fire.title',       descKey: 'amenities.fire.desc' },
  { icon: TreePine, titleKey: 'amenities.forest.title',     descKey: 'amenities.forest.desc' },
  { icon: Sparkles, titleKey: 'amenities.stargazing.title', descKey: 'amenities.stargazing.desc' },
  { icon: Coffee,   titleKey: 'amenities.equipped.title',   descKey: 'amenities.equipped.desc' },
  { icon: Wifi,     titleKey: 'amenities.wifi.title',       descKey: 'amenities.wifi.desc' },
  { icon: Utensils, titleKey: 'amenities.kitchen.title',    descKey: 'amenities.kitchen.desc' },
];

const Amenities = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useLanguage();

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
            {t('amenities.label')}
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
            {t('amenities.title')} <span className="italic text-primary">{t('amenities.title.italic')}</span>
          </h2>
          <p className="text-lg text-muted-foreground font-light">
            {t('amenities.subtitle')}
          </p>
        </motion.div>

        {/* Amenities Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {amenityKeys.map((amenity, index) => (
            <motion.div
              key={amenity.titleKey}
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
                  {t(amenity.titleKey)}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {t(amenity.descKey)}
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
