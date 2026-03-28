import { motion, AnimatePresence } from "motion/react";
import { Instagram, Linkedin, Twitter, Menu, X } from "lucide-react";
import { cn } from "@/src/lib/utils";
import { useState } from "react";

export const fadeUp = (delay: number = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6, delay, ease: "easeOut" },
});

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navLinks = ["Work", "Services", "Process", "Contact"];

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-20 py-6 bg-transparent">
        <div className="flex items-center gap-3">
          <div className="relative flex items-center justify-center w-7 h-7 border-2 border-foreground/60 rounded-sm">
            <div className="w-3 h-3 border border-foreground/60 rounded-sm" />
          </div>
          <span className="text-xl font-bold tracking-tight font-sans">damndesign.com</span>
        </div>

        <div className="hidden md:flex items-center gap-4 text-sm font-medium font-sans">
          {navLinks.map((link, i) => (
            <div key={link} className="flex items-center gap-4">
              <a
                href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                {link}
              </a>
              {i < navLinks.length - 1 && <span className="text-muted-foreground/30">•</span>}
            </div>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <div className="hidden sm:flex items-center gap-3">
            {[Instagram, Linkedin, Twitter].map((Icon, i) => (
              <button
                key={i}
                className="liquid-glass flex items-center justify-center w-10 h-10 rounded-full hover:scale-110 transition-transform"
              >
                <Icon className="w-4 h-4" />
              </button>
            ))}
          </div>
          
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden liquid-glass flex items-center justify-center w-10 h-10 rounded-full z-50"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8 md:hidden"
          >
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}
                onClick={() => setIsOpen(false)}
                className="text-3xl font-medium hover:text-muted-foreground transition-colors font-sans"
              >
                {link}
              </a>
            ))}
            <div className="flex items-center gap-6 mt-8">
              {[Instagram, Linkedin, Twitter].map((Icon, i) => (
                <button
                  key={i}
                  className="liquid-glass flex items-center justify-center w-12 h-12 rounded-full"
                >
                  <Icon className="w-5 h-5" />
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
