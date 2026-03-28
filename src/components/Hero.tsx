import { motion } from "motion/react";
import { fadeUp } from "./Navbar";

export function Hero() {
  const avatars = [
    "https://picsum.photos/seed/avatar1/100/100",
    "https://picsum.photos/seed/avatar2/100/100",
    "https://picsum.photos/seed/avatar3/100/100",
  ];

  return (
    <section className="relative min-h-[120vh] flex flex-col items-center justify-center overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-60"
      >
        <source
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260325_120549_0cd82c36-56b3-4dd9-b190-069cfc3a623f.mp4"
          type="video/mp4"
        />
      </video>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-background to-transparent z-0" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 pt-32 md:pt-40 max-w-5xl">
        <motion.div {...fadeUp(0.1)} className="flex items-center gap-4 mb-8">
          <div className="flex -space-x-3">
            {avatars.map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`Avatar ${i + 1}`}
                className="w-8 h-8 rounded-full border-2 border-background object-cover"
                referrerPolicy="no-referrer"
              />
            ))}
          </div>
          <p className="text-muted-foreground text-xs sm:text-sm font-medium">
            150+ companies already trust us
          </p>
        </motion.div>

        <motion.h1
          {...fadeUp(0.2)}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium tracking-[-2px] leading-[1.1] mb-8 font-sans"
        >
          We Create <span className="serif-italic">Damn</span> Good Design
        </motion.h1>

        <motion.p
          {...fadeUp(0.3)}
          className="text-base sm:text-lg md:text-base text-[hsl(var(--hero-subtitle))] max-w-xl mb-12 leading-relaxed font-body"
        >
          A premium design agency dedicated to crafting exceptional visual identities, digital
          products, and brand experiences that move the needle.
        </motion.p>

        <motion.form
          {...fadeUp(0.4)}
          className="liquid-glass flex flex-col sm:flex-row items-center gap-2 p-2 rounded-2xl sm:rounded-full w-full max-w-lg"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="email"
            placeholder="Enter your work email"
            className="w-full sm:flex-1 bg-transparent border-none outline-none px-6 py-3 sm:py-0 text-sm placeholder:text-muted-foreground/50"
          />
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="w-full sm:w-auto bg-foreground text-background font-bold text-xs tracking-widest px-8 py-3.5 rounded-xl sm:rounded-full transition-colors"
          >
            GET A QUOTE
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
}
