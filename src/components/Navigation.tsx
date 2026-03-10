import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const { lang, setLang, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#experience", label: t('nav.experience') },
    { href: "#accommodations", label: t('nav.dome') },
    { href: "#amenities", label: t('nav.amenities') },
    { href: "#location", label: t('nav.location') },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled ? "glass py-4" : "bg-transparent py-6"
        }`}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="font-serif text-2xl md:text-3xl tracking-wider text-primary">
            Forêt Dôme
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm tracking-widest uppercase text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA Button + Language Toggle */}
          <div className="hidden md:flex items-center gap-4">
            {/* Language Toggle */}
            <div className="flex items-center gap-1">
              <button
                onClick={() => setLang('en')}
                className={`text-xs tracking-widest uppercase px-2 py-1 transition-colors duration-200 ${
                  lang === 'en'
                    ? 'text-primary font-semibold'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                EN
              </button>
              <span className="text-muted-foreground/40 text-xs">|</span>
              <button
                onClick={() => setLang('nl')}
                className={`text-xs tracking-widest uppercase px-2 py-1 transition-colors duration-200 ${
                  lang === 'nl'
                    ? 'text-primary font-semibold'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                NL
              </button>
            </div>
            <Button variant="hero" size="lg" asChild>
              <a href="#booking">{t('nav.book')}</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="md:hidden text-foreground p-2"
          >
            {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-background/98 backdrop-blur-xl pt-24 px-6 md:hidden"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="font-serif text-3xl text-foreground hover:text-primary transition-colors"
                >
                  {link.label}
                </motion.a>
              ))}
              {/* Mobile Language Toggle */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="flex items-center gap-2"
              >
                <button
                  onClick={() => setLang('en')}
                  className={`text-sm tracking-widest uppercase px-3 py-1 transition-colors duration-200 ${
                    lang === 'en'
                      ? 'text-primary font-semibold'
                      : 'text-muted-foreground'
                  }`}
                >
                  EN
                </button>
                <span className="text-muted-foreground/40">|</span>
                <button
                  onClick={() => setLang('nl')}
                  className={`text-sm tracking-widest uppercase px-3 py-1 transition-colors duration-200 ${
                    lang === 'nl'
                      ? 'text-primary font-semibold'
                      : 'text-muted-foreground'
                  }`}
                >
                  NL
                </button>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="pt-2"
              >
                <Button variant="hero" size="xl" className="w-full" asChild>
                  <a href="#booking" onClick={() => setIsMobileOpen(false)}>
                    {t('nav.book')}
                  </a>
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
