import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Calendar, Users, Mail, Phone, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const Booking = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    checkIn: "",
    checkOut: "",
    guests: "2",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Inquiry Received",
      description: "We'll contact you within 24 hours to confirm your reservation.",
    });
    setFormData({
      name: "",
      email: "",
      phone: "",
      checkIn: "",
      checkOut: "",
      guests: "2",
      message: "",
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="booking" className="py-32 bg-gradient-forest relative overflow-hidden">
      {/* Decorative glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-amber/5 rounded-full blur-[150px] pointer-events-none" />

      <div ref={ref} className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <p className="text-sm tracking-[0.3em] uppercase text-primary mb-4">
            Reservations
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
            Begin Your <span className="italic text-primary">Escape</span>
          </h2>
          <p className="text-lg text-muted-foreground font-light">
            Our twin-dome sanctuary accommodates 2 guests. Due to our exclusive nature, 
            we recommend booking at least 2 weeks in advance.
          </p>
        </motion.div>

        {/* Booking Form */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <form
            onSubmit={handleSubmit}
            className="glass p-8 md:p-12 rounded-lg space-y-8"
          >
            {/* Personal Info */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm tracking-wider uppercase text-muted-foreground">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-background/50 border border-border/50 rounded px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:border-primary/50 focus:outline-none transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm tracking-wider uppercase text-muted-foreground flex items-center gap-2">
                  <Mail className="w-4 h-4" /> Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-background/50 border border-border/50 rounded px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:border-primary/50 focus:outline-none transition-colors"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm tracking-wider uppercase text-muted-foreground flex items-center gap-2">
                  <Phone className="w-4 h-4" /> Phone
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full bg-background/50 border border-border/50 rounded px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:border-primary/50 focus:outline-none transition-colors"
                  placeholder="+32 XXX XXX XXX"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm tracking-wider uppercase text-muted-foreground flex items-center gap-2">
                  <Users className="w-4 h-4" /> Guests
                </label>
                <select
                  name="guests"
                  value={formData.guests}
                  onChange={handleChange}
                  className="w-full bg-background/50 border border-border/50 rounded px-4 py-3 text-foreground focus:border-primary/50 focus:outline-none transition-colors"
                >
                  <option value="1">1 Guest</option>
                  <option value="2">2 Guests</option>
                </select>
              </div>
            </div>

            {/* Dates */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm tracking-wider uppercase text-muted-foreground flex items-center gap-2">
                  <Calendar className="w-4 h-4" /> Check-in
                </label>
                <input
                  type="date"
                  name="checkIn"
                  value={formData.checkIn}
                  onChange={handleChange}
                  required
                  className="w-full bg-background/50 border border-border/50 rounded px-4 py-3 text-foreground focus:border-primary/50 focus:outline-none transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm tracking-wider uppercase text-muted-foreground flex items-center gap-2">
                  <Calendar className="w-4 h-4" /> Check-out
                </label>
                <input
                  type="date"
                  name="checkOut"
                  value={formData.checkOut}
                  onChange={handleChange}
                  required
                  className="w-full bg-background/50 border border-border/50 rounded px-4 py-3 text-foreground focus:border-primary/50 focus:outline-none transition-colors"
                />
              </div>
            </div>

            {/* Message */}
            <div className="space-y-2">
              <label className="text-sm tracking-wider uppercase text-muted-foreground flex items-center gap-2">
                <MessageSquare className="w-4 h-4" /> Special Requests
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full bg-background/50 border border-border/50 rounded px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:border-primary/50 focus:outline-none transition-colors resize-none"
                placeholder="Anniversary celebration, dietary requirements, early check-in..."
              />
            </div>

            <Button type="submit" variant="hero" size="xl" className="w-full">
              Request Reservation
            </Button>

            <p className="text-center text-xs text-muted-foreground">
              By submitting this form, you agree to our privacy policy. 
              A 50% deposit is required to confirm your booking.
            </p>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Booking;