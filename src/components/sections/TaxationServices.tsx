import { memo, useState, useCallback, useMemo } from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import {
  taxationServicesIndividual,
  taxationServicesPartnership,
  taxationServicesCompany,
  taxationServicesOther,
} from "@/utils/constants";

const tabs = [
  {
    id: "individual",
    label: "Individual",
    icon: "mdi:account-outline",
    data: taxationServicesIndividual,
  },
  {
    id: "partnership",
    label: "Partnership",
    icon: "mdi:account-group-outline",
    data: taxationServicesPartnership,
  },
  {
    id: "company",
    label: "Company",
    icon: "mdi:domain",
    data: taxationServicesCompany,
  },
  {
    id: "other",
    label: "NGO & Others",
    icon: "mdi:charity",
    data: taxationServicesOther,
  },
];

const TaxationServices = memo(() => {
  const [activeTab, setActiveTab] = useState("individual");

  const handleTabChange = useCallback(
    (tabId: string) => setActiveTab(tabId),
    []
  );

  const activeData = useMemo(
    () => tabs.find((tab) => tab.id === activeTab)?.data || [],
    [activeTab]
  );

  return (
    <section
      id="taxation"
      className="section-padding relative bg-glass overflow-hidden"
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
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gold-soft rounded-full text-gold text-sm font-medium mb-4">
            <Icon icon="mdi:calculator-variant-outline" className="w-4 h-4" />
            Tax Compliance
          </div>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Taxation <span className="gradient-text">Services</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Expert tax advisory and compliance services tailored for
            individuals, partnerships, companies, and organizations.
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="max-w-5xl mx-auto">
          {/* Tab Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="flex flex-wrap justify-center gap-2 mb-8 p-2 bg-background rounded-2xl"
          >
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => handleTabChange(tab.id)}
                className={`relative px-4 py-3 rounded-xl font-medium text-sm transition-all duration-300 flex items-center gap-2 ${
                  activeTab === tab.id
                    ? "text-gold-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="activeTabBg"
                    className="absolute inset-0 bg-gold rounded-xl shadow-md"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                  />
                )}
                <Icon icon={tab.icon} className="w-5 h-5 relative z-10" />
                <span className="relative z-10 hidden sm:inline">
                  {tab.label}
                </span>
              </button>
            ))}
          </motion.div>

          {/* Tab Content */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="bg-card/40 rounded-2xl border border-glass p-6 md:p-8 shadow-2xl shadow-glow-gold-sm hover:border-gold-medium hover:shadow-glow-gold-md transition-all duration-500"
          >
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {activeData.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05, duration: 0.3 }}
                  className="group p-4 bg-background rounded-xl backdrop-blur-sm hover:bg-secondary-medium border border-glass-subtle hover:border-gold-strong hover:shadow-lg hover:shadow-glow-gold-md transition-all duration-500"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-gold-soft flex items-center justify-center flex-shrink-0 group-hover:bg-gold-subtle transition-colors">
                      <Icon
                        icon={service.icon || "mdi:file-document-outline"}
                        className="w-5 h-5 text-gold"
                      />
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground text-sm leading-snug group-hover:text-gold transition-colors">
                        {service.name}
                      </h4>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Info Note */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.4 }}
            className="mt-6 p-4 bg-gold-soft rounded-xl flex items-start gap-3"
          >
            <Icon
              icon="mdi:information-outline"
              className="w-5 h-5 text-gold flex-shrink-0 mt-0.5"
            />
            <p className="text-sm text-foreground">
              All taxation services include consultation, preparation, filing,
              and follow-up with the Inland Revenue Department of Sri Lanka.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
});

TaxationServices.displayName = "TaxationServices";

export default TaxationServices;
