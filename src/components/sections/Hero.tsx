import { memo, useCallback, useMemo } from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { scrollToSection } from "@/utils/scrollUtils";

const Hero = memo(() => {
  const handleScrollToServices = useCallback(
    () => scrollToSection("#services"),
    [],
  );
  const handleScrollToContact = useCallback(
    () => scrollToSection("#contact"),
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
      className="relative min-h-screen flex items-center bg-background/80 pt-20 overflow-hidden"
    >
      {/* --- HIGH-END GRAPHIC BACKGROUND --- */}
      <div className="absolute inset-0 z-0">
        {/* Animated Mesh Gradient - Swapped to Purple/Indigo */}
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary-soft rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-secondary-soft rounded-full blur-[120px]" />

        {/* Tech Grid */}
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: `linear-gradient(hsl(var(--grid-line)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--grid-line)) 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-stretch">
          {/* --- CONTENT COLUMN --- */}
          <div className="lg:col-span-5 text-center lg:text-left flex flex-col items-center lg:items-start py-6 lg:py-10">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center justify-center lg:justify-start gap-2 mb-6 w-full"
            >
              <div className="hidden lg:block h-[1px] w-12 bg-primary" />
              <span className="text-primary text-xs font-black tracking-[0.4em] uppercase">
                Trusted Corporate Partner
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground leading-[1.1] mb-6"
            >
              Professional Corporate <br className="hidden md:block" />
              <span className="gradient-text">& Financial Solutions</span>{" "}
              <br className="hidden md:block" />
              in Sri Lanka
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-base md:text-lg text-muted-foreground leading-relaxed mb-8 max-w-2xl border-l-0 lg:border-l-2 border-border pl-0 lg:pl-5 mx-auto lg:mx-0 px-4 lg:px-0"
            >
              We provide reliable company secretarial, accounting, and tax
              services to help your business stay compliant and grow with
              confidence.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-wrap justify-center lg:justify-start gap-5 mt-auto pt-8 w-full"
            >
              <button
                onClick={handleScrollToServices}
                className="group relative overflow-hidden px-8 py-4 bg-primary text-primary-foreground font-bold rounded-full transition-all hover:pr-12 hover:bg-primary/90 active:scale-95 shadow-lg shadow-glow-primary-lg"
              >
                <span className="relative z-10">Our Services</span>
                <Icon
                  icon="mdi:arrow-right"
                  className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all"
                />
              </button>

              <button
                onClick={handleScrollToContact}
                className="px-8 py-4 border border-border text-foreground font-bold rounded-full hover:bg-foreground/5 hover:border-primary-strong transition-all active:scale-95"
              >
                Contact Us
              </button>
            </motion.div>
          </div>

          {/* --- GRAPHIC COLUMN --- */}
          <div className="hidden lg:col-span-7 relative mt-10 lg:mt-0 lg:flex items-end justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative w-full lg:w-[115%] lg:-right-6 lg:scale-110 origin-bottom-right"
            >
              {/* Soft glow behind the image */}
              <div className="absolute inset-0 bg-primary/20 blur-[80px] rounded-full animate-pulse-slow" />

              <img
                src="/corporate.png"
                alt="Corporate Services"
                className="relative z-10 w-full h-auto object-contain drop-shadow-2xl hover:scale-[1.02] transition-transform duration-500"
              />
            </motion.div>
          </div>
        </div>

        {/* Horizontal Stats Bar */}
        <div className="flex flex-wrap justify-center lg:justify-start gap-8 lg:gap-12 py-8 mt-12 lg:mt-16 border-t border-border w-full">
          {stats.map((stat, i) => (
            <div key={i} className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-card border border-border flex items-center justify-center text-primary">
                <Icon icon={stat.icon} className="text-2xl" />
              </div>
              <div>
                <div className="text-2xl font-bold text-foreground leading-none">
                  {stat.value}
                </div>
                <div className="text-xs text-muted-foreground uppercase tracking-widest mt-1">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Background Typography Filler */}
      <div className="absolute -bottom-10 left-10 opacity-[0.03] select-none pointer-events-none">
        <h2 className="text-[12vw] font-black text-foreground leading-none italic uppercase">
          it is a new era
        </h2>
      </div>
    </section>
  );
});

Hero.displayName = "Hero";
export default Hero;
