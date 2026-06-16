import { memo } from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { useNavigate, useLocation } from "react-router-dom";
import { secretarialServices } from "@/utils/constants";

const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.07, duration: 0.45 },
  }),
};

const SecretarialServices = memo(() => {
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
      id="secretarial"
      className="section-padding bg-background relative overflow-hidden"
    >
      <div className="container-custom relative z-10 max-w-5xl mx-auto">
        {/* Section Title only */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Secretarial <span className="gradient-text">Services</span>
          </h2>
        </motion.div>

        {/* Categories — 2-column responsive grid, plain text */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-12">
          {secretarialServices.map((category, catIndex) => (
            <motion.div
              key={catIndex}
              custom={catIndex}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={sectionVariants}
            >
              {/* Title */}
              <h3 className="font-heading font-semibold text-foreground text-xl mb-2">
                {category.title}
              </h3>

              {/* Gold accent line */}
              <div className="w-10 h-0.5 bg-gold mb-3" />

              {/* Description */}
              <p className="text-black text-sm mb-4 leading-relaxed">
                {category.description}
              </p>

              {/* Checklist */}
              <ul className="space-y-2">
                {category.items.map((item, itemIndex) => (
                  <li
                    key={itemIndex}
                    className="flex items-start gap-2.5 text-sm text-foreground"
                  >
                    <Icon
                      icon="mdi:check"
                      className="w-4 h-4 text-gold flex-shrink-0 mt-0.5"
                    />
                    <span className="leading-relaxed">{item.name}</span>
                  </li>
                ))}
              </ul>
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
            Need help with any of our secretarial services? Get in touch today.
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

SecretarialServices.displayName = "SecretarialServices";

export default SecretarialServices;
