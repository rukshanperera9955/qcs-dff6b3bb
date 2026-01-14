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
        transition: { delay: i * 0.15, duration: 0.5 },
      }),
    }),
    []
  );

  const getColorClasses = useCallback((color: string) => {
    switch (color) {
      case "primary":
        return {
          bg: "bg-primary-soft",
          text: "text-primary",
          border: "group-hover:border-primary-strong",
          shadow: "group-hover:shadow-glow-primary-lg",
          icon: "bg-primary",
        };
      case "gold":
        return {
          bg: "bg-gold-soft",
          text: "text-gold",
          border: "group-hover:border-gold-strong",
          shadow: "group-hover:shadow-glow-gold-lg",
          icon: "bg-gold",
        };
      case "indigo":
        return {
          bg: "bg-secondary-soft",
          text: "text-secondary",
          border: "group-hover:border-secondary-strong",
          shadow: "group-hover:shadow-glow-secondary-xl",
          icon: "bg-secondary",
        };
      default:
        return {
          bg: "bg-primary-soft",
          text: "text-primary",
          border: "group-hover:border-primary-strong",
          shadow: "group-hover:shadow-glow-primary-lg",
          icon: "bg-primary",
        };
    }
  }, []);

  return (
    <section
      id="services"
      className="section-padding bg-glass relative overflow-hidden"
    >
      {/* Optimized Background Decorations */}
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
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-soft rounded-full text-primary text-sm font-medium mb-4">
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
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
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
                  className={`w-full text-left h-full p-6 bg-card/40 rounded-2xl border border-glass ${colors.border} ${colors.shadow} transition-all duration-500 shadow-lg hover:shadow-2xl`}
                >
                  <div
                    className={`w-14 h-14 rounded-xl ${colors.icon} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon
                      icon={service.icon}
                      className="w-7 h-7 text-primary-foreground"
                    />
                  </div>

                  <h3 className="font-heading text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
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
          transition={{ delay: 0.4, duration: 0.5 }}
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
