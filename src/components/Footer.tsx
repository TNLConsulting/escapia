import { Instagram, Facebook, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-20 bg-card border-t border-border/30">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="md:col-span-2 space-y-4">
            <a href="#" className="font-serif text-3xl tracking-wider text-primary">
              Escapia
            </a>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-sm">
              Disconnect to reconnect. An exclusive twin-dome hideaway in nature, 
              designed for two, nestled deep in the Belgian forest near Lille.
            </p>
            {/* Social Links */}
            <div className="flex gap-4 pt-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-border/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-border/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg text-foreground mb-6">Explore</h4>
            <nav className="space-y-3">
              <a
                href="#experience"
                className="block text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                The Experience
              </a>
              <a
                href="#accommodations"
                className="block text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                The Dome
              </a>
              <a
                href="#amenities"
                className="block text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Amenities
              </a>
              <a
                href="#location"
                className="block text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Location
              </a>
              <a
                href="#booking"
                className="block text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Reservations
              </a>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-lg text-foreground mb-6">Contact</h4>
            <div className="space-y-4">
              <a
                href="mailto:hello@escapia.be"
                className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="w-4 h-4" />
                hello@escapia.be
              </a>
              <a
                href="tel:+32123456789"
                className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Phone className="w-4 h-4" />
                +32 123 456 789
              </a>
              <p className="text-sm text-muted-foreground">
                Forêt de Phalempin
                <br />
                59133 Phalempin, Belgium
              </p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-border/30 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Escapia. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a
              href="#"
              className="text-xs text-muted-foreground hover:text-primary transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-xs text-muted-foreground hover:text-primary transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;