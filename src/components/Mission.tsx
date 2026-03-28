import { motion, useScroll, useTransform, MotionValue } from "motion/react";
import { useRef } from "react";

const paragraph1 = "We're building a studio where vision meets execution — where brands find voice, products find form, and every pixel becomes a testament to quality.";
const paragraph2 = "A studio where art, technology, and strategy flow together — with less clutter, less noise, and more impact for the brands we partner with.";

const highlightWords = ["vision", "meets", "execution"];

interface WordProps {
  children: string;
  progress: MotionValue<number>;
  range: [number, number];
  key?: number | string;
}

function Word({ children, progress, range }: WordProps) {
  const opacity = useTransform(progress, range, [0.15, 1]);
  const isHighlighted = highlightWords.includes(children.toLowerCase().replace(/[^\w]/g, ""));

  return (
    <motion.span
      style={{ opacity }}
      className={isHighlighted ? "text-foreground" : "text-[hsl(var(--hero-subtitle))]"}
    >
      {children}{" "}
    </motion.span>
  );
}

export function Mission() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const words1 = paragraph1.split(" ");
  const words2 = paragraph2.split(" ");
  const totalWords = words1.length + words2.length;

  return (
    <section ref={containerRef} className="relative min-h-[150vh] pt-0 pb-32 md:pb-44 bg-background">
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center px-8 md:px-20 overflow-hidden">
        {/* Background Video */}
        <div className="absolute inset-0 flex items-center justify-center z-0 opacity-40">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-[800px] h-[800px] object-cover rounded-full blur-md"
          >
            <source
              src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260325_132944_a0d124bb-eaa1-4082-aa30-2310efb42b4b.mp4"
              type="video/mp4"
            />
          </video>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-4xl text-center">
          <div className="text-2xl md:text-3xl lg:text-4xl font-medium tracking-[-1px] leading-tight mb-16 font-sans">
            {words1.map((word, i) => {
              const start = i / totalWords;
              const end = (i + 1) / totalWords;
              return (
                <Word key={i} progress={scrollYProgress} range={[start, end]}>
                  {word}
                </Word>
              );
            })}
          </div>

          <div className="text-xl md:text-2xl lg:text-3xl font-medium leading-relaxed">
            {words2.map((word, i) => {
              const idx = words1.length + i;
              const start = idx / totalWords;
              const end = (idx + 1) / totalWords;
              return (
                <Word key={i} progress={scrollYProgress} range={[start, end]}>
                  {word}
                </Word>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
