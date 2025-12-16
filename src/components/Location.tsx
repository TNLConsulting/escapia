import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Train, Plane, Clock } from "lucide-react";

const Location = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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
                Location
              </p>
              <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-6">
                Hidden in Plain <span className="italic text-primary">Sight</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Forêt Dôme is nestled within the forests surrounding Lille, offering 
                the perfect balance of seclusion and accessibility. Just minutes from 
                the city, yet worlds away from the everyday.
              </p>
            </div>

            {/* Travel Info */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-serif text-lg text-foreground mb-1">Address</h4>
                  <p className="text-sm text-muted-foreground">
                    Forêt de Phalempin, 59133 Phalempin
                    <br />
                    Near Lille, Belgium
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Train className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-serif text-lg text-foreground mb-1">By Train</h4>
                  <p className="text-sm text-muted-foreground">
                    Lille-Flandres station: 20 minutes by car
                    <br />
                    Complimentary pickup available
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Plane className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-serif text-lg text-foreground mb-1">By Air</h4>
                  <p className="text-sm text-muted-foreground">
                    Lille Airport (LIL): 25 minutes
                    <br />
                    Brussels Airport (BRU): 1 hour 15 minutes
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-serif text-lg text-foreground mb-1">Check-in Times</h4>
                  <p className="text-sm text-muted-foreground">
                    Check-in: 15:00 | Check-out: 11:00
                    <br />
                    Early/late options available on request
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
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d40537.78731534!2d3.0!3d50.5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c2d5943be30001%3A0x40099ab2f4d5530!2sFor%C3%AAt%20de%20Phalempin!5e0!3m2!1sen!2sfr!4v1702000000000!5m2!1sen!2sfr"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "invert(0.9) hue-rotate(180deg) saturate(0.3)" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Forêt Dôme Location"
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
