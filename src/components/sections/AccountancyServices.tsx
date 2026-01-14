import { memo, useMemo } from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { accountancyServices } from "@/utils/constants";

const features = [
  "Accurate financial record keeping",
  "Compliance with SLFRS standards",
  "Timely reporting and submissions",
  "Experienced accounting professionals",
  "Cloud-based accounting solutions",
  "Regular financial health reviews",
];

const AccountancyServices = memo(() => {
  return (
    <section
      id="accountancy"
      className="section-padding bg-glass relative overflow-hidden"
    >
      {/* Background Decorations */}
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-secondary-fade rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 left-0 w-64 h-64 bg-primary-fade rounded-full blur-3xl" />

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary-soft rounded-full text-secondary text-sm font-medium mb-4">
            <Icon icon="mdi:chart-line" className="w-4 h-4" />
            Financial Management
          </div>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Accountancy <span className="text-secondary">Services</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Professional accounting and bookkeeping services to keep your
            financial records accurate and up-to-date.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {accountancyServices.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group"
            >
              <div className="h-full bg-glass-card rounded-xl p-6 border border-glass shadow-lg shadow-glow-secondary-sm hover:shadow-2xl hover:border-secondary-strong hover:shadow-glow-secondary-lg transition-all duration-500">
                <div className="w-14 h-14 rounded-xl bg-secondary-soft flex items-center justify-center mb-5 group-hover:bg-secondary-subtle group-hover:scale-110 transition-all duration-300">
                  <Icon
                    icon={service.icon || "mdi:book-open-outline"}
                    className="w-7 h-7 text-secondary"
                  />
                </div>

                <h3 className="font-heading font-semibold text-foreground text-lg mb-2 group-hover:text-secondary transition-colors">
                  {service.name}
                </h3>

                {service.description && (
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {service.description}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Features List */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mt-12 max-w-4xl mx-auto"
        >
          <div className="bg-glass-card rounded-2xl border border-glass p-6 md:p-8 shadow-2xl shadow-glow-secondary-sm hover:border-secondary-medium hover:shadow-glow-secondary-md transition-all duration-500">
            <h3 className="font-heading font-semibold text-foreground text-xl mb-6 text-center">
              Why Choose Our Accountancy Services?
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-3 rounded-lg backdrop-blur-sm bg-secondary-muted border border-glass-subtle hover:border-secondary-medium transition-all duration-300"
                >
                  <Icon
                    icon="mdi:check-circle"
                    className="w-5 h-5 text-secondary flex-shrink-0"
                  />
                  <span className="text-foreground text-sm">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
});

AccountancyServices.displayName = "AccountancyServices";

export default AccountancyServices;
