import { motion } from "motion/react";
import { fadeUp } from "./Navbar";

const features = [
  {
    title: "Visual Identity",
    description: "Building cohesive brand systems that communicate your values and mission clearly.",
  },
  {
    title: "UI/UX Design",
    description: "Designing seamless digital experiences that prioritize user needs and business goals.",
  },
  {
    title: "Motion Graphics",
    description: "Bringing your brand to life with dynamic animations and cinematic visual storytelling.",
  },
  {
    title: "Web Development",
    description: "Turning designs into high-performance, responsive websites that convert visitors.",
  },
];

export function Solution() {
  return (
    <section className="py-20 md:py-32 px-6 md:px-20 border-t border-border/30 bg-background">
      <motion.div {...fadeUp(0.1)} className="text-center mb-16 md:mb-24">
        <span className="text-[10px] sm:text-xs tracking-[3px] uppercase text-muted-foreground font-medium mb-4 sm:mb-6 block">
          SERVICES
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight mb-8 md:mb-12">
          The studio for <span className="serif-italic">exceptional</span> design
        </h2>
      </motion.div>

      <motion.div {...fadeUp(0.2)} className="mb-16 md:mb-24">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full aspect-[16/9] sm:aspect-[3/1] object-cover rounded-xl sm:rounded-2xl opacity-80"
        >
          <source
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260325_125119_8e5ae31c-0021-4396-bc08-f7aebeb877a2.mp4"
            type="video/mp4"
          />
        </video>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
        {features.map((feature, i) => (
          <motion.div key={feature.title} {...fadeUp(0.3 + i * 0.1)} className="flex flex-col">
            <h3 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3 tracking-tight font-sans">
              {feature.title}
            </h3>
            <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed font-body">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
