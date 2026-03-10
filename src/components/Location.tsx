import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Train, Plane, Clock } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Location = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useLanguage();

  return (
    <section id="location" className="py-32 bg-background relative">
      <div ref={ref} className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <p className="text-sm tracking-[0.3em] uppercase text-primary mb-4">
                {t('location.label')}
              </p>
              <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-6">
                {t('location.title')} <span className="italic text-primary">{t('location.title.italic')}</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {t('location.desc')}
              </p>
            </div>

            {/* Travel Info */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-serif text-lg text-foreground mb-1">{t('location.address')}</h4>
                  <p className="text-sm text-muted-foreground">
                    Bosuilweg 19, 2275 Lille
                    <br />
                    Vlaams Gewest, Belgium
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Train className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-serif text-lg text-foreground mb-1">{t('location.train')}</h4>
                  <p className="text-sm text-muted-foreground" style={{ whiteSpace: 'pre-line' }}>
                    {t('location.train.desc')}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Plane className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-serif text-lg text-foreground mb-1">{t('location.air')}</h4>
                  <p className="text-sm text-muted-foreground" style={{ whiteSpace: 'pre-line' }}>
                    {t('location.air.desc')}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-serif text-lg text-foreground mb-1">{t('location.checkin')}</h4>
                  <p className="text-sm text-muted-foreground" style={{ whiteSpace: 'pre-line' }}>
                    {t('location.checkin.desc')}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Map placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-square rounded-lg overflow-hidden border border-border/30 bg-card">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2505.8!2d4.82!3d51.24!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c40e5c89c0e6ed%3A0x0!2sBosuilweg%2019%2C%202275%20Lille!5e0!3m2!1sen!2sbe!4v1702000000000!5m2!1sen!2sbe"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "invert(0.9) hue-rotate(180deg) saturate(0.3)" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Escapia Location"
              />
            </div>
            {/* Overlay with pin */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
              <div className="relative">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center animate-float">
                  <MapPin className="w-5 h-5 text-primary-foreground" />
                </div>
                <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-4 h-4 bg-primary/30 rounded-full blur-sm" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Location;
