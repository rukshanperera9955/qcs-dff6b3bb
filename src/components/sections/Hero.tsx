import { memo, useCallback, useMemo } from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { scrollToSection } from "@/utils/scrollUtils";

const Hero = memo(() => {
  const handleScrollToServices = useCallback(
    () => scrollToSection("#services"),
    []
  );
  const handleScrollToContact = useCallback(
    () => scrollToSection("#contact"),
    []
  );

  const stats = useMemo(
    () => [
      { value: "500+", label: "Clients Served", icon: "mdi:account-group" },
      { value: "15+", label: "Years Experience", icon: "mdi:calendar-check" },
      { value: "100%", label: "Compliance Rate", icon: "mdi:shield-check" },
    ],
    []
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
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* --- CONTENT COLUMN (7 Columns) --- */}
          <div className="lg:col-span-7 text-left">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-2 mb-6"
            >
              <div className="h-[1px] w-12 bg-primary" />
              <span className="text-primary text-xs font-black tracking-[0.4em] uppercase">
                Trusted Corporate Partner
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-extrabold text-foreground leading-[1.05] mb-8"
            >
              Corporate, Partnership <br />
              <span className="gradient-text">& Individual Services</span>{" "}
              <br />
              in Sri Lanka
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-10 max-w-2xl border-l-2 border-border pl-6"
            >
              We offer corporate secretarial services, Accounting Services & Tax
              Services for Companies, Partnership, Individuals, NGO and
              Association in Sri Lanka.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-wrap gap-5 mb-16"
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

            {/* Horizontal Stats Bar */}
            <div className="flex flex-wrap gap-12 py-8 border-t border-border">
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

          {/* --- GRAPHIC COLUMN (5 Columns) --- */}
          <div className="lg:col-span-5 relative">
            <div className="relative w-full aspect-square max-w-[500px] mx-auto">
              {/* Main Graphic Backdrop - Purple Glow */}
              <div className="absolute inset-0 gradient-glow-soft rounded-[40px] blur-3xl opacity-30 animate-pulse" />

              {/* THE "SECRETARIAL MATRIX" GRAPHIC */}
              <div className="relative z-10 w-full h-full flex items-center justify-center">
                {/* Floating UI Elements */}
                <motion.div
                  animate={{ y: [0, -15, 0] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute top-10 right-0 p-5 bg-glass-card border border-primary-soft rounded-3xl shadow-2xl z-20 w-52"
                >
                  <div className="h-2 w-12 bg-primary rounded-full mb-3" />
                  <div className="text-[10px] text-primary font-black uppercase mb-1">
                    Company Secretary
                  </div>
                  <div className="text-xs text-foreground">
                    Annual Returns Filed
                  </div>
                  <div className="mt-3 flex gap-1">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <div
                        key={i}
                        className="h-1 w-full bg-primary-subtle rounded-full"
                      />
                    ))}
                  </div>
                </motion.div>

                <motion.div
                  animate={{ y: [0, 15, 0] }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    delay: 0.5,
                    ease: "easeInOut",
                  }}
                  className="absolute bottom-10 left-0 p-5 bg-glass-card border border-secondary-soft rounded-3xl shadow-2xl z-20 w-52"
                >
                  <Icon
                    icon="mdi:calculator"
                    className="text-secondary text-3xl mb-2"
                  />
                  <div className="text-[10px] text-secondary font-black uppercase mb-1">
                    Tax Services
                  </div>
                  <div className="text-xs text-foreground">
                    Audit & Assessment
                  </div>
                  <div className="mt-3 h-8 flex items-end gap-1">
                    {[40, 70, 50, 90, 60].map((h, i) => (
                      <div
                        key={i}
                        className="w-full bg-secondary-medium rounded-t-sm"
                        style={{ height: `${h}%` }}
                      />
                    ))}
                  </div>
                </motion.div>

                {/* Central Interactive Shield - Purple Theme */}
                <div className="relative group cursor-pointer">
                  <div className="absolute inset-0 bg-primary blur-[60px] opacity-20 group-hover:opacity-40 transition-opacity" />
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="relative w-48 h-56 bg-card border-2 border-primary-strong rounded-[60px] flex flex-col items-center justify-center overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(var(--primary)/0.1),transparent)]" />
                    <Icon
                      icon="mdi:shield-key"
                      className="text-6xl text-primary mb-4 z-10"
                    />
                    <div className="text-foreground font-bold tracking-widest uppercase text-xs z-10">
                      Compliance
                    </div>
                    <div className="text-primary/50 font-mono text-[10px] mt-2 z-10">
                      SEC-SRI-LANKA-001
                    </div>
                  </motion.div>
                </div>

                {/* Rotating Data Orbitals */}
                <svg className="absolute w-[120%] h-[120%] pointer-events-none">
                  <circle
                    cx="50%"
                    cy="50%"
                    r="40%"
                    fill="none"
                    stroke="hsl(var(--primary)/0.5)"
                    strokeWidth="1"
                    strokeDasharray="10 20"
                    className="animate-[spin_40s_linear_infinite]"
                  />
                  <circle
                    cx="50%"
                    cy="50%"
                    r="45%"
                    fill="none"
                    stroke="hsl(var(--secondary)/0.5)"
                    strokeWidth="1"
                    strokeDasharray="5 15"
                    className="animate-[spin_30s_linear_infinite_reverse]"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Typography Filler */}
      <div className="absolute -bottom-10 left-10 opacity-[0.03] select-none pointer-events-none">
        <h2 className="text-[15vw] font-black text-foreground leading-none italic uppercase">
          Reliable
        </h2>
      </div>
    </section>
  );
});

Hero.displayName = "Hero";
export default Hero;
