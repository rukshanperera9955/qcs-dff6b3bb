import { memo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Icon } from '@iconify/react';
import { secretarialServices } from '@/utils/constants';

const SecretarialServices = memo(() => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

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

        {/* Accordion */}
        <div className="max-w-4xl mx-auto space-y-4">
          {secretarialServices.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.4 }}
              className="bg-card rounded-xl border border-border overflow-hidden shadow-sm"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-secondary/50 transition-colors"
                aria-expanded={openIndex === index}
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon icon={category.icon} className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-foreground text-lg">
                      {category.title}
                    </h3>
                    <p className="text-muted-foreground text-sm hidden sm:block">
                      {category.description}
                    </p>
                  </div>
                </div>
                <Icon
                  icon="mdi:chevron-down"
                  className={`w-6 h-6 text-muted-foreground transition-transform duration-300 flex-shrink-0 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-5 pt-2">
                      <div className="border-t border-border pt-4">
                        <ul className="grid sm:grid-cols-2 gap-3">
                          {category.items.map((item, itemIndex) => (
                            <li
                              key={itemIndex}
                              className="flex items-start gap-3 p-3 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors"
                            >
                              <Icon
                                icon="mdi:check-circle"
                                className="w-5 h-5 text-teal flex-shrink-0 mt-0.5"
                              />
                              <span className="text-foreground text-sm">{item.name}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
});

SecretarialServices.displayName = 'SecretarialServices';

export default SecretarialServices;
