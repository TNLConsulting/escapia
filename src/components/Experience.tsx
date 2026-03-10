import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Leaf, Moon, Sparkles, TreePine } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import type { TranslationKey } from "@/lib/translations";

const featureKeys: Array<{
  icon: React.ElementType;
  titleKey: TranslationKey;
  descKey: TranslationKey;
}> = [
  { icon: TreePine, titleKey: 'experience.f1.title', descKey: 'experience.f1.desc' },
  { icon: Leaf,     titleKey: 'experience.f2.title', descKey: 'experience.f2.desc' },
  { icon: Moon,     titleKey: 'experience.f3.title', descKey: 'experience.f3.desc' },
  { icon: Sparkles, titleKey: 'experience.f4.title', descKey: 'experience.f4.desc' },
];

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useLanguage();

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
            {t('experience.label')}
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-6 leading-tight">
            {t('experience.title1')}
            <br />
            <span className="italic text-primary">{t('experience.title2')}</span>
          </h2>
          <p className="text-lg text-muted-foreground font-light leading-relaxed">
            {t('experience.desc')}
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featureKeys.map((feature, index) => (
            <motion.div
              key={feature.titleKey}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group text-center p-8 rounded-lg bg-card/50 border border-border/50 hover:border-primary/30 hover:bg-card transition-all duration-500"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-serif text-xl text-foreground mb-3">
                {t(feature.titleKey)}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {t(feature.descKey)}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
