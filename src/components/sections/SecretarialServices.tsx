import { memo, useState, useRef } from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { secretarialServices } from "@/utils/constants";

const SecretarialServices = memo(() => {
  const [activeCategory, setActiveCategory] = useState(0);
  const tabsContainerRef = useRef<HTMLDivElement>(null);

  const handleTabClick = (index: number) => {
    setActiveCategory(index);
    // Scroll the active tab into view on mobile
    if (tabsContainerRef.current) {
      const tabElements = tabsContainerRef.current.querySelectorAll("button");
      const activeTab = tabElements[index];
      if (activeTab) {
        activeTab.scrollIntoView({
          behavior: "smooth",
          inline: "center",
          block: "nearest",
        });
      }
    }
  };

  return (
    <section
      id="secretarial"
      className="section-padding bg-glass relative overflow-hidden"
    >
      {/* Background Decorations */}
      <div className="absolute top-1/4 right-0 w-72 h-72 bg-primary-fade rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-56 h-56 bg-gold-fade rounded-full blur-3xl" />

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-soft rounded-full text-primary text-sm font-medium mb-4">
            <Icon icon="mdi:file-document-edit-outline" className="w-4 h-4" />
            Corporate Solutions
          </div>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Secretarial <span className="gradient-text">Services</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Complete corporate secretarial support from company formation to
            ongoing compliance and governance.
          </p>
        </motion.div>

        {/* Mobile Horizontal Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="lg:hidden mb-6"
        >
          <div
            ref={tabsContainerRef}
            className="flex overflow-x-auto gap-2 p-2 bg-secondary-medium rounded-2xl scrollbar-hide"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {secretarialServices.map((category, index) => (
              <button
                key={index}
                onClick={() => handleTabClick(index)}
                className={`relative px-4 py-3 rounded-xl font-medium text-sm transition-all duration-300 flex items-center gap-2 flex-shrink-0 whitespace-nowrap ${
                  activeCategory === index
                    ? "text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {activeCategory === index && (
                  <motion.div
                    layoutId="activeSecretarialTabBg"
                    className="absolute inset-0 bg-primary rounded-xl shadow-md"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                  />
                )}
                <Icon icon={category.icon} className="w-5 h-5 relative z-10" />
                <span className="relative z-10">{category.title}</span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Desktop Grid Layout */}
        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          {/* Category Navigation - Left Side (Desktop Only) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="hidden lg:flex lg:col-span-4"
          >
            <div className="bg-glass-card rounded-2xl border border-glass p-4 shadow-2xl shadow-glow-primary-sm w-full flex flex-col hover:border-primary-medium hover:shadow-glow-primary-md transition-all duration-500">
              <h3 className="font-heading font-semibold text-foreground px-3 py-2 mb-2">
                Service Categories
              </h3>
              <nav className="space-y-1 flex-1">
                {secretarialServices.map((category, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveCategory(index)}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-all duration-300 ${
                      activeCategory === index
                        ? "bg-primary text-primary-foreground shadow-md"
                        : "text-foreground hover:bg-secondary-heavy"
                    }`}
                  >
                    <div
                      className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors ${
                        activeCategory === index
                          ? "bg-primary-foreground/20"
                          : "bg-primary-soft"
                      }`}
                    >
                      <Icon
                        icon={category.icon}
                        className={`w-5 h-5 ${
                          activeCategory === index
                            ? "text-primary-foreground"
                            : "text-primary"
                        }`}
                      />
                    </div>
                    <span className="font-medium text-sm leading-tight">
                      {category.title}
                    </span>
                  </button>
                ))}
              </nav>
            </div>
          </motion.div>

          {/* Service Details - Right Side (Full width on mobile) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-8 col-span-full flex flex-col"
          >
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-glass-card rounded-2xl border border-glass overflow-hidden shadow-2xl shadow-glow-primary-sm flex-1 flex flex-col hover:border-primary-medium hover:shadow-glow-primary-md transition-all duration-500"
            >
              {/* Header */}
              <div className="bg-gradient-to-r from-primary-soft via-primary-fade to-transparent p-6 md:p-8 border-b border-border">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-xl bg-primary-subtle flex items-center justify-center flex-shrink-0">
                    <Icon
                      icon={secretarialServices[activeCategory].icon}
                      className="w-7 h-7 text-primary"
                    />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-foreground text-xl md:text-2xl mb-2">
                      {secretarialServices[activeCategory].title}
                    </h3>
                    <p className="text-muted-foreground">
                      {secretarialServices[activeCategory].description}
                    </p>
                  </div>
                </div>
              </div>

              {/* Services List */}
              <div className="p-6 md:p-8">
                <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">
                  What's Included
                </h4>
                <div className="grid sm:grid-cols-2 gap-3">
                  {secretarialServices[activeCategory].items.map(
                    (item, itemIndex) => (
                      <motion.div
                        key={itemIndex}
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: itemIndex * 0.05, duration: 0.2 }}
                        className="group flex items-start gap-3 p-4 rounded-xl bg-secondary-medium  hover:bg-secondary border border-transparent hover:border-border transition-all duration-200"
                      >
                        <div className="w-6 h-6 rounded-full bg-secondary-subtle flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-secondary-muted transition-colors">
                          <Icon
                            icon="mdi:check"
                            className="w-3.5 h-3.5 text-secondary"
                          />
                        </div>
                        <span className="text-foreground text-sm font-medium leading-relaxed">
                          {item.name}
                        </span>
                      </motion.div>
                    )
                  )}
                </div>

                {/* CTA */}
                <div className="mt-8 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
                  <p className="text-muted-foreground text-sm text-center sm:text-left">
                    Need help with{" "}
                    {secretarialServices[activeCategory].title.toLowerCase()}?
                  </p>
                  <button
                    onClick={() => {
                      const element = document.querySelector("#contact");
                      if (element) {
                        const offsetTop =
                          element.getBoundingClientRect().top +
                          window.pageYOffset -
                          80;
                        window.scrollTo({ top: offsetTop, behavior: "smooth" });
                      }
                    }}
                    className="btn-hero-primary text-sm"
                  >
                    <Icon icon="mdi:message-text-outline" className="w-4 h-4" />
                    Get a Quote
                  </button>
                </div>
              </div>
            </motion.div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4 mt-6">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1, duration: 0.3 }}
                className="bg-glass-card rounded-xl border border-glass p-4 text-center shadow-lg shadow-glow-primary-sm hover:border-primary-medium hover:shadow-glow-primary-md transition-all duration-500"
              >
                <div className="w-10 h-10 rounded-lg bg-primary-soft flex items-center justify-center mx-auto mb-2">
                  <Icon icon="mdi:domain" className="w-5 h-5 text-primary" />
                </div>
                <p className="text-2xl font-bold text-foreground">500+</p>
                <p className="text-xs text-muted-foreground">
                  Companies Formed
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.3 }}
                className="bg-glass-card rounded-xl border border-glass p-4 text-center shadow-lg shadow-glow-gold-sm hover:border-gold-medium hover:shadow-glow-gold-md transition-all duration-500"
              >
                <div className="w-10 h-10 rounded-lg bg-gold-soft flex items-center justify-center mx-auto mb-2">
                  <Icon
                    icon="mdi:clock-check-outline"
                    className="w-5 h-5 text-gold"
                  />
                </div>
                <p className="text-2xl font-bold text-foreground">15+</p>
                <p className="text-xs text-muted-foreground">
                  Years Experience
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.3 }}
                className="bg-glass-card rounded-xl border border-glass p-4 text-center shadow-lg shadow-glow-secondary-sm hover:border-secondary-medium hover:shadow-glow-secondary-md transition-all duration-500"
              >
                <div className="w-10 h-10 rounded-lg bg-secondary-soft flex items-center justify-center mx-auto mb-2">
                  <Icon
                    icon="mdi:star-outline"
                    className="w-5 h-5 text-secondary"
                  />
                </div>
                <p className="text-2xl font-bold text-foreground">100%</p>
                <p className="text-xs text-muted-foreground">
                  Client Satisfaction
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
});

SecretarialServices.displayName = "SecretarialServices";

export default SecretarialServices;
