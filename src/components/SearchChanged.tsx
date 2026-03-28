import { motion } from "motion/react";
import { fadeUp } from "./Navbar";

const platforms = [
  {
    name: "Brand Identity",
    description: "Crafting unique visual languages that resonate with your audience and stand the test of time.",
    icon: "https://picsum.photos/seed/brand-identity/400/400",
  },
  {
    name: "Product Design",
    description: "Building intuitive, user-centric digital products that solve real problems and delight users.",
    icon: "https://picsum.photos/seed/digital-product/400/400",
  },
  {
    name: "Creative Strategy",
    description: "Strategic thinking that aligns your business goals with creative execution for maximum impact.",
    icon: "https://picsum.photos/seed/creative-strategy/400/400",
  },
];

export function SearchChanged() {
  return (
    <section className="pt-32 md:pt-48 pb-20 px-6 md:px-20 text-center bg-background">
      <motion.h2
        {...fadeUp(0.1)}
        className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-medium tracking-[-2px] leading-[1.1] mb-12 font-sans"
      >
        Design has <span className="serif-italic">evolved.</span> <br /> Have you?
      </motion.h2>

      <motion.p
        {...fadeUp(0.2)}
        className="text-muted-foreground text-base sm:text-lg md:text-base max-w-xl mx-auto mb-20 md:mb-32 leading-relaxed font-body"
      >
        The era of generic templates is over. We're entering a world where authenticity,
        craftsmanship, and strategic design are the new standards for success.
      </motion.p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 md:gap-16 mb-24">
        {platforms.map((platform, i) => (
          <motion.div
            key={platform.name}
            {...fadeUp(0.3 + i * 0.1)}
            className="flex flex-col items-center group"
          >
            <div className="w-40 h-40 sm:w-48 sm:h-48 mb-6 sm:mb-10 flex items-center justify-center group-hover:scale-105 transition-all duration-500">
              <img
                src={platform.icon}
                alt={platform.name}
                className="w-full h-full object-cover rounded-2xl"
                referrerPolicy="no-referrer"
              />
            </div>
            <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 tracking-tight font-sans">{platform.name}</h3>
            <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed max-w-[280px] font-body">
              {platform.description}
            </p>
          </motion.div>
        ))}
      </div>

      <motion.p {...fadeUp(0.6)} className="text-muted-foreground text-[10px] sm:text-xs tracking-[2px] uppercase font-sans">
        If you don't define your brand, someone else will.
      </motion.p>
    </section>
  );
}
