import { useEffect, useRef } from "react";
import Hls from "hls.js";
import { motion } from "motion/react";
import { fadeUp } from "./Navbar";

export function CTA() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const hlsUrl = "https://stream.mux.com/8wrHPCX2dC3msyYU9ObwqNdm00u3ViXvOSHUMRYSEe5Q.m3u8";

  useEffect(() => {
    if (videoRef.current) {
      if (Hls.isSupported()) {
        const hls = new Hls();
        hls.loadSource(hlsUrl);
        hls.attachMedia(videoRef.current);
      } else if (videoRef.current.canPlayType("application/vnd.apple.mpegurl")) {
        videoRef.current.src = hlsUrl;
      }
    }
  }, []);

  return (
    <section className="relative py-24 md:py-32 px-6 md:px-20 border-t border-border/30 overflow-hidden bg-background">
      {/* Background HLS Video */}
      <div className="absolute inset-0 z-0 opacity-50">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-background/45 z-[1]" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto">
        <motion.div {...fadeUp(0.1)} className="mb-8 md:mb-10">
          <div className="relative flex items-center justify-center w-8 h-8 md:w-10 md:h-10 border-2 border-foreground/60 rounded-sm mx-auto">
            <div className="w-4 h-4 md:w-5 md:h-5 border border-foreground/60 rounded-sm" />
          </div>
        </motion.div>

        <motion.h2
          {...fadeUp(0.2)}
          className="text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight mb-6 md:mb-8 font-sans"
        >
          Start Your <span className="serif-italic">Project</span>
        </motion.h2>

        <motion.p
          {...fadeUp(0.3)}
          className="text-base sm:text-lg md:text-base text-muted-foreground max-w-xl mb-10 md:mb-12 leading-relaxed font-body"
        >
          Let's build something exceptional together. Our team is ready to bring your vision to
          life with precision and craft.
        </motion.p>

        <motion.div {...fadeUp(0.4)} className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="w-full sm:w-auto bg-foreground text-background font-bold text-xs sm:text-sm tracking-widest px-10 py-4 rounded-lg transition-colors"
          >
            BOOK A CALL
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="w-full sm:w-auto liquid-glass font-bold text-xs sm:text-sm tracking-widest px-10 py-4 rounded-lg transition-colors border border-white/10"
          >
            VIEW PORTFOLIO
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
