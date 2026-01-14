import { memo, useCallback, useMemo } from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { mainServices } from "@/utils/constants";
import { scrollToSection } from "@/utils/scrollUtils";

const ServicesOverview = memo(() => {
  const handleScrollToContact = useCallback(
    () => scrollToSection("#contact"),
    []
  );
  const handleScrollToSection = useCallback(
    (id: string) => scrollToSection(`#${id}`),
    []
  );

  const cardVariants = useMemo(
    () => ({
      hidden: { opacity: 0, y: 30 },
      visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.1, duration: 0.5 },
      }),
    }),
    []
  );

  const getColorClasses = useCallback((color: string) => {
    switch (color) {
      case "primary":
        return {
          bg: "bg-gold-soft",
          text: "text-gold",
          hoverText: "group-hover:text-gold",
        };
      case "gold":
        return {
          bg: "bg-gold-soft",
          text: "text-gold",
          hoverText: "group-hover:text-gold",
        };
      case "indigo":
        return {
          bg: "bg-gold-soft",
          text: "text-gold",
          hoverText: "group-hover:text-gold",
        };
      default:
        return {
          bg: "bg-gold-soft",
          text: "text-gold",
          hoverText: "group-hover:text-gold",
        };
    }
  }, []);

  return (
    <section
      id="services"
      className="section-padding bg-glass relative overflow-hidden"
    >
      {/* Optimized Background Decorations - PRESERVED FROM ORIGINAL */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Top Right: Vibrant Secondary (Blue/Cyan) Blob */}
        <div
          className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-secondary/20 rounded-full blur-[120px] animate-float"
          style={{ animationDuration: "15s" }}
        />

        {/* Middle Left: Primary (Purple/Blue) Blob */}
        <div
          className="absolute top-[20%] left-[-10%] w-[450px] h-[450px] bg-primary/20 rounded-full blur-[100px] animate-float-rotate"
          style={{ animationDuration: "20s" }}
        />

        {/* Bottom Right: Gold Accent Blob */}
        <div className="absolute bottom-[-5%] right-[10%] w-[400px] h-[400px] bg-gold/15 rounded-full blur-[110px] animate-pulse-slow" />

        {/* Subtle Grid Pattern to add texture under the glass */}
        <div className="absolute inset-0 opacity-[0.03] [background-image:linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] [background-size:40px_40px]" />
      </div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gold-soft rounded-full text-gold text-sm font-medium mb-4">
            <Icon icon="mdi:briefcase-outline" className="w-4 h-4" />
            What We Offer
          </div>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Our Professional <span className="gradient-text">Services</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Comprehensive business solutions tailored for companies,
            partnerships, individuals, NGOs, and associations across Sri Lanka.
          </p>
        </motion.div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {mainServices.map((service, index) => {
            const colors = getColorClasses(service.color);

            return (
              <motion.div
                key={service.id}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={cardVariants}
                className="group"
              >
                <button
                  onClick={() => handleScrollToSection(service.id)}
                  className="w-full text-left h-full bg-card/40 rounded-xl p-6 border border-glass shadow-lg shadow-glow-secondary-sm hover:shadow-2xl hover:border-secondary-strong hover:shadow-glow-secondary-lg transition-all duration-500"
                >
                  <div
                    className={`w-14 h-14 rounded-xl ${colors.bg} flex items-center justify-center mb-5 group-hover:bg-secondary-subtle group-hover:scale-110 transition-all duration-300`}
                  >
                    <Icon icon={service.icon} className="w-7 h-7 text-gold" />
                  </div>

                  <h3
                    className={`font-heading text-lg font-semibold text-foreground mb-2 ${colors.hoverText} transition-colors`}
                  >
                    {service.title}
                  </h3>

                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>

                  <div
                    className={`inline-flex items-center gap-2 text-sm font-medium ${colors.text}`}
                  >
                    Learn More
                    <Icon
                      icon="mdi:arrow-right"
                      className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                    />
                  </div>
                </button>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground mb-4">
            Need help choosing the right service?
          </p>
          <button onClick={handleScrollToContact} className="btn-hero-primary">
            <Icon icon="mdi:message-text-outline" className="w-5 h-5" />
            Get Free Consultation
          </button>
        </motion.div>
      </div>
    </section>
  );
});

ServicesOverview.displayName = "ServicesOverview";

export default ServicesOverview;
