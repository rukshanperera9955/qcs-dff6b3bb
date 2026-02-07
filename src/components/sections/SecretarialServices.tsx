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
      {/* Background Decorations - PRESERVED FROM ORIGINAL */}
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
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gold-soft rounded-full text-gold text-sm font-medium mb-4">
            <Icon icon="mdi:file-document-edit-outline" className="w-4 h-4" />
            Corporate Solutions
          </div>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
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
          transition={{ duration: 0.5 }}
          className="lg:hidden mb-6"
        >
          <div
            ref={tabsContainerRef}
            className="flex overflow-x-auto gap-2 p-2 bg-card/40 backdrop-blur-sm rounded-2xl border border-glass scrollbar-hide"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {secretarialServices.map((category, index) => (
              <button
                key={index}
                onClick={() => handleTabClick(index)}
                className={`relative px-6 py-3 rounded-xl font-medium text-sm transition-all duration-300 flex items-center gap-2 flex-shrink-0 whitespace-nowrap ${
                  activeCategory === index
                    ? "text-gold-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {activeCategory === index && (
                  <motion.div
                    layoutId="activeSecretarialTabBg"
                    className="absolute inset-0 bg-gold rounded-xl shadow-lg shadow-glow-gold-sm"
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
        <div className="grid lg:grid-cols-12 gap-6 items-stretch max-w-6xl mx-auto">
          {/* Category Navigation - Left Side (Desktop Only) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="hidden lg:flex lg:col-span-4"
          >
            <div className="bg-card/40 rounded-xl border border-glass p-6 shadow-lg shadow-glow-secondary-sm w-full flex flex-col hover:border-secondary-medium hover:shadow-glow-secondary-md transition-all duration-500">
              <h3 className="font-heading font-semibold text-foreground text-lg mb-5">
                Service Categories
              </h3>
              <nav className="space-y-2 flex-1">
                {secretarialServices.map((category, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveCategory(index)}
                    className={`group w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-all duration-300 ${
                      activeCategory === index
                        ? "bg-gold text-gold-foreground shadow-lg shadow-glow-gold-sm"
                        : "bg-background hover:bg-secondary-subtle"
                    }`}
                  >
                    <div
                      className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                        activeCategory === index
                          ? "bg-gold-foreground/20 scale-110"
                          : "bg-gold-soft group-hover:bg-secondary-subtle"
                      }`}
                    >
                      <Icon
                        icon={category.icon}
                        className={`w-5 h-5 ${
                          activeCategory === index
                            ? "text-gold-foreground"
                            : "text-gold"
                        }`}
                      />
                    </div>
                    <span className="font-heading font-medium text-sm leading-tight">
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
              transition={{ duration: 0.5 }}
              className="bg-card/40 rounded-xl border border-glass overflow-hidden shadow-lg shadow-glow-secondary-sm flex-1 flex flex-col hover:border-secondary-medium hover:shadow-glow-secondary-md transition-all duration-500"
            >
              {/* Header */}
              <div className="p-6 md:p-8 border-b border-glass">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-xl bg-gold-soft flex items-center justify-center flex-shrink-0">
                    <Icon
                      icon={secretarialServices[activeCategory].icon}
                      className="w-7 h-7 text-gold"
                    />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-foreground text-xl md:text-2xl mb-2">
                      {secretarialServices[activeCategory].title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {secretarialServices[activeCategory].description}
                    </p>
                  </div>
                </div>
              </div>

              {/* Services List */}
              <div className="p-6 md:p-8">
                <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-5">
                  What's Included
                </h4>
                <div className="grid sm:grid-cols-2 gap-3">
                  {secretarialServices[activeCategory].items.map(
                    (item, itemIndex) => (
                      <motion.div
                        key={itemIndex}
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: itemIndex * 0.05, duration: 0.3 }}
                        className="flex items-start gap-3 p-3 rounded-lg backdrop-blur-sm bg-background border border-glass-subtle hover:border-secondary-medium transition-all duration-300"
                      >
                        <Icon
                          icon="mdi:check-circle"
                          className="w-5 h-5 text-gold flex-shrink-0 mt-0.5"
                        />
                        <span className="text-foreground text-sm leading-relaxed">
                          {item.name}
                        </span>
                      </motion.div>
                    )
                  )}
                </div>

                {/* CTA */}
                <div className="mt-8 pt-6 border-t border-glass flex flex-col sm:flex-row items-center justify-between gap-4">
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
                transition={{ delay: 0.2, duration: 0.5 }}
                className="bg-card/40 rounded-xl border border-glass p-4 text-center shadow-lg shadow-glow-secondary-sm hover:border-secondary-medium hover:shadow-glow-secondary-md transition-all duration-500"
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
                transition={{ delay: 0.1, duration: 0.5 }}
                className="bg-card/40 rounded-xl border border-glass p-4 text-center shadow-lg shadow-glow-secondary-sm hover:border-secondary-medium hover:shadow-glow-secondary-md transition-all duration-500"
              >
                <div className="w-10 h-10 rounded-lg bg-gold-soft flex items-center justify-center mx-auto mb-2">
                  <Icon icon="mdi:domain" className="w-5 h-5 text-gold" />
                </div>
                <p className="text-1xl font-bold text-foreground">Many Of</p>
                <p className="text-xs text-muted-foreground">
                  Companies Formed
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="bg-card/40 rounded-xl border border-glass p-4 text-center shadow-lg shadow-glow-secondary-sm hover:border-secondary-medium hover:shadow-glow-secondary-md transition-all duration-500"
              >
                <div className="w-10 h-10 rounded-lg bg-gold-soft flex items-center justify-center mx-auto mb-2">
                  <Icon icon="mdi:star-outline" className="w-5 h-5 text-gold" />
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
