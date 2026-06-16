import { memo, useCallback, useMemo } from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { scrollToSection } from "@/utils/scrollUtils";
import heroBg from "@/assets/pexels-towfiqu-barbhuiya-3440682-13466267.jpg";

const Hero = memo(() => {
  const handleScrollToServices = useCallback(
    () => scrollToSection("#services"),
    [],
  );

  const stats = useMemo(
    () => [
      { value: "100+", label: "Clients Served", icon: "mdi:account-group" },
      { value: "15+", label: "Years Experience", icon: "mdi:calendar-check" },
      { value: "100%", label: "Compliance Rate", icon: "mdi:shield-check" },
    ],
    [],
  );

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
    >
      {/* ── Background image ── */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover object-center"
        />
        {/* Subtle grid texture */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `linear-gradient(hsl(var(--grid-line)) 1px, transparent 1px),
              linear-gradient(90deg, hsl(var(--grid-line)) 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* ── Content ── */}
      <div className="container mx-auto px-6 lg:px-12 relative z-10 pt-28 pb-16">
        {/* Text block — centred on all screens with glassmorphic white background for legibility */}
        <div className="max-w-3xl mx-auto text-center p-8 md:p-12 ">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center gap-2 mb-6"
          >
            <div className="h-[1px] w-10 bg-primary" />
            <span className="text-primary text-xs font-black tracking-[0.4em] uppercase">
              Trusted Corporate Partner
            </span>
            <div className="h-[1px] w-10 bg-primary" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground leading-[1.1] mb-6"
          >
            Professional Corporate <br className="hidden md:block" />
            <span className="gradient-text">&amp; Financial Solutions</span>{" "}
            <br className="hidden md:block" />
            in Sri Lanka
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12 }}
            className="text-base md:text-lg text-black leading-relaxed mb-10 max-w-xl mx-auto "
          >
            We provide reliable company secretarial, accounting, and tax
            services to help your business stay compliant and grow with
            confidence.
          </motion.p>

          {/* Single CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <button
              onClick={handleScrollToServices}
              className="group relative overflow-hidden inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-bold rounded-full transition-all hover:bg-primary/90 active:scale-95 shadow-lg"
            >
              <span>Our Services</span>
              <Icon
                icon="mdi:arrow-right"
                className="w-4 h-4 group-hover:translate-x-1 transition-transform"
              />
            </button>
          </motion.div>
        </div>

        {/* ── Stats bar ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-8 lg:gap-16 mt-16 pt-8 border-t border-border/60"
        >
          {stats.map((stat, i) => (
            <div key={i} className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-3xl border border-white/30 p-2 shadow-black/5">
              <div className="w-11 h-11 rounded-xl bg-card border border-border flex items-center justify-center text-primary shadow-sm">
                <Icon icon={stat.icon} className="text-xl" />
              </div>
              <div>
                <div className="text-2xl font-bold text-foreground leading-none">
                  {stat.value}
                </div>
                <div className="text-xs text-black uppercase tracking-widest mt-1">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
});

Hero.displayName = "Hero";
export default Hero;
