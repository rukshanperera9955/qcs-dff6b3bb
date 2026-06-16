import { memo } from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { useNavigate, useLocation } from "react-router-dom";
import { accountancyServices } from "@/utils/constants";

const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.07, duration: 0.45 },
  }),
};

const AccountancyServices = memo(() => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleContactClick = () => {
    if (location.pathname !== "/") {
      navigate("/#contact");
    } else {
      const element = document.querySelector("#contact");
      if (element) {
        const offsetTop =
          element.getBoundingClientRect().top + window.pageYOffset - 80;
        window.scrollTo({ top: offsetTop, behavior: "smooth" });
      }
    }
  };

  return (
    <section
      id="accountancy"
      className="section-padding bg-background relative overflow-hidden"
    >
      <div className="container-custom relative z-10 max-w-5xl mx-auto">
        {/* Title only */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Accounting <span className="gradient-text">Services</span>
          </h2>
        </motion.div>

        {/* Services — 2-column responsive grid, plain text */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-12">
          {accountancyServices.map((service, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={sectionVariants}
            >
              <h3 className="font-heading font-semibold text-foreground text-xl mb-2">
                {service.name}
              </h3>
              <div className="w-10 h-0.5 bg-gold mb-3" />
              {service.description && (
                <p className="text-black text-sm leading-relaxed">
                  {service.description}
                </p>
              )}
            </motion.div>
          ))}
        </div>

        {/* Single bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-16 pt-10 border-t border-border text-center"
        >
          <p className="text-black mb-5 text-base">
            Need help with accounting or bookkeeping? Get in touch today.
          </p>
          <button
            onClick={handleContactClick}
            className="inline-flex items-center gap-2 px-8 py-3 bg-gold text-gold-foreground rounded-full font-semibold text-sm shadow-md hover:shadow-lg hover:brightness-105 transition-all duration-300"
          >
            <Icon icon="mdi:message-text-outline" className="w-4 h-4" />
            Get a Quote
          </button>
        </motion.div>
      </div>
    </section>
  );
});

AccountancyServices.displayName = "AccountancyServices";

export default AccountancyServices;
