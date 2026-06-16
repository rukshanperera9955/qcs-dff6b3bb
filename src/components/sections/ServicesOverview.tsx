import { memo, useCallback } from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { useNavigate, useLocation } from "react-router-dom";
import { mainServices } from "@/utils/constants";
import { scrollToSection } from "@/utils/scrollUtils";

// Map service IDs to their standalone page routes
const serviceRoutes: Record<string, string> = {
  secretarial: "/secretarial",
  taxation: "/taxation",
  accountancy: "/accountancy",
  advisory: "/#contact",
};

const ServicesOverview = memo(() => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleScrollToContact = useCallback(
    () => scrollToSection("#contact"),
    []
  );

  const handleServiceClick = useCallback(
    (id: string) => {
      const route = serviceRoutes[id];
      if (!route) return;
      if (route.startsWith("/#")) {
        if (location.pathname !== "/") {
          navigate(route);
        } else {
          scrollToSection(route.replace("/", ""));
        }
      } else {
        navigate(route);
      }
    },
    [navigate, location.pathname]
  );

  return (
    <section
      id="services"
      className="section-padding bg-background relative"
    >
      <div className="container-custom relative z-10 max-w-5xl mx-auto">

        {/* ── Classic section header ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          {/* Top rule */}
          <div className="flex items-center gap-4 mb-6">
            <div className="flex-1 h-px bg-border" />
            <span className="text-xs font-semibold tracking-[0.3em] uppercase text-black">
              What We Offer
            </span>
            <div className="flex-1 h-px bg-border" />
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground text-center leading-tight">
            Our Professional{" "}
            <span className="gradient-text">Services</span>
          </h2>
        </motion.div>

        {/* ── Service list — classic ruled rows ── */}
        <div className="divide-y divide-border border-t border-border">
          {mainServices.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.4 }}
            >
              <button
                onClick={() => handleServiceClick(service.id)}
                className="group w-full text-left py-8 flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-10 hover:bg-accent/30 transition-colors duration-200 px-2 -mx-2 rounded-sm"
              >
                {/* Index number */}
                <span className="text-xs font-bold text-black/50 tracking-widest pt-1 w-6 flex-shrink-0 select-none">
                  {String(index + 1).padStart(2, "0")}
                </span>

                {/* Title + description */}
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2 group-hover:text-gold transition-colors duration-200">
                    {service.title}
                  </h3>
                  <p className="text-black text-sm md:text-base leading-relaxed max-w-2xl">
                    {service.description}
                  </p>
                </div>

                {/* Arrow CTA */}
                <div className="flex items-center gap-1.5 text-sm font-semibold text-gold flex-shrink-0 sm:pt-1.5">
                  <span className="hidden sm:inline">View</span>
                  <Icon
                    icon="mdi:arrow-right"
                    className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200"
                  />
                </div>
              </button>
            </motion.div>
          ))}
        </div>

        {/* ── Bottom CTA ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mt-14 flex flex-col sm:flex-row items-center justify-between gap-6 pt-8 border-t border-border"
        >
          <p className="text-black text-sm text-center sm:text-left">
            Not sure which service fits your needs?
          </p>
          <button
            onClick={handleScrollToContact}
            className="inline-flex items-center gap-2 px-7 py-3 bg-gold text-gold-foreground rounded-full font-semibold text-sm shadow-md hover:shadow-lg hover:brightness-105 transition-all duration-300 flex-shrink-0"
          >
            Get Free Consultation
            <Icon icon="mdi:arrow-right" className="w-4 h-4" />
          </button>
        </motion.div>
      </div>
    </section>
  );
});

ServicesOverview.displayName = "ServicesOverview";

export default ServicesOverview;
