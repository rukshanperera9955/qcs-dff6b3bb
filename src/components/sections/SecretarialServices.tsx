import { memo, useState } from 'react';
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';
import { secretarialServices } from '@/utils/constants';

const SecretarialServices = memo(() => {
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <section id="secretarial" className="section-padding bg-secondary/30 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-1/4 right-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-56 h-56 bg-gold/5 rounded-full blur-3xl" />

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-4">
            <Icon icon="mdi:file-document-edit-outline" className="w-4 h-4" />
            Corporate Solutions
          </div>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Secretarial <span className="gradient-text">Services</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Complete corporate secretarial support from company formation to ongoing compliance and governance.
          </p>
        </motion.div>

        {/* Modern Grid Layout */}
        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          {/* Category Navigation - Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-4 flex"
          >
            <div className="backdrop-blur-xl bg-card/60 rounded-2xl border border-border/50 p-4 shadow-2xl shadow-primary/5 w-full flex flex-col hover:border-primary/40 hover:shadow-primary/10 transition-all duration-500">
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
                        ? 'bg-primary text-primary-foreground shadow-md'
                        : 'text-foreground hover:bg-secondary/80'
                    }`}
                  >
                    <div
                      className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors ${
                        activeCategory === index
                          ? 'bg-primary-foreground/20'
                          : 'bg-primary/10'
                      }`}
                    >
                      <Icon
                        icon={category.icon}
                        className={`w-5 h-5 ${
                          activeCategory === index ? 'text-primary-foreground' : 'text-primary'
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

          {/* Service Details - Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-8 flex flex-col"
          >
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="backdrop-blur-xl bg-card/60 rounded-2xl border border-border/50 overflow-hidden shadow-2xl shadow-primary/5 flex-1 flex flex-col hover:border-primary/40 hover:shadow-primary/10 transition-all duration-500"
            >
              {/* Header */}
              <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-transparent p-6 md:p-8 border-b border-border">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0">
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
                  {secretarialServices[activeCategory].items.map((item, itemIndex) => (
                    <motion.div
                      key={itemIndex}
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: itemIndex * 0.05, duration: 0.2 }}
                      className="group flex items-start gap-3 p-4 rounded-xl bg-secondary/50 hover:bg-secondary border border-transparent hover:border-border transition-all duration-200"
                    >
                      <div className="w-6 h-6 rounded-full bg-teal/20 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-teal/30 transition-colors">
                        <Icon
                          icon="mdi:check"
                          className="w-3.5 h-3.5 text-teal"
                        />
                      </div>
                      <span className="text-foreground text-sm font-medium leading-relaxed">
                        {item.name}
                      </span>
                    </motion.div>
                  ))}
                </div>

                {/* CTA */}
                <div className="mt-8 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
                  <p className="text-muted-foreground text-sm text-center sm:text-left">
                    Need help with {secretarialServices[activeCategory].title.toLowerCase()}?
                  </p>
                  <button
                    onClick={() => {
                      const element = document.querySelector('#contact');
                      if (element) {
                        const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - 80;
                        window.scrollTo({ top: offsetTop, behavior: 'smooth' });
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
                className="backdrop-blur-xl bg-card/60 rounded-xl border border-border/50 p-4 text-center shadow-lg shadow-primary/5 hover:border-primary/40 hover:shadow-primary/10 transition-all duration-500"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-2">
                  <Icon icon="mdi:domain" className="w-5 h-5 text-primary" />
                </div>
                <p className="text-2xl font-bold text-foreground">500+</p>
                <p className="text-xs text-muted-foreground">Companies Formed</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.3 }}
                className="backdrop-blur-xl bg-card/60 rounded-xl border border-border/50 p-4 text-center shadow-lg shadow-gold/5 hover:border-gold/40 hover:shadow-gold/10 transition-all duration-500"
              >
                <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center mx-auto mb-2">
                  <Icon icon="mdi:clock-check-outline" className="w-5 h-5 text-gold" />
                </div>
                <p className="text-2xl font-bold text-foreground">15+</p>
                <p className="text-xs text-muted-foreground">Years Experience</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.3 }}
                className="backdrop-blur-xl bg-card/60 rounded-xl border border-border/50 p-4 text-center shadow-lg shadow-teal/5 hover:border-teal/40 hover:shadow-teal/10 transition-all duration-500"
              >
                <div className="w-10 h-10 rounded-lg bg-teal/10 flex items-center justify-center mx-auto mb-2">
                  <Icon icon="mdi:star-outline" className="w-5 h-5 text-teal" />
                </div>
                <p className="text-2xl font-bold text-foreground">100%</p>
                <p className="text-xs text-muted-foreground">Client Satisfaction</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
});

SecretarialServices.displayName = 'SecretarialServices';

export default SecretarialServices;