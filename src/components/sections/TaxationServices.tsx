import { memo, useState } from 'react';
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';
import {
  taxationServicesIndividual,
  taxationServicesPartnership,
  taxationServicesCompany,
  taxationServicesOther,
} from '@/utils/constants';

const tabs = [
  { id: 'individual', label: 'Individual', icon: 'mdi:account-outline', data: taxationServicesIndividual },
  { id: 'partnership', label: 'Partnership', icon: 'mdi:account-group-outline', data: taxationServicesPartnership },
  { id: 'company', label: 'Company', icon: 'mdi:domain', data: taxationServicesCompany },
  { id: 'other', label: 'NGO & Others', icon: 'mdi:charity', data: taxationServicesOther },
];

const TaxationServices = memo(() => {
  const [activeTab, setActiveTab] = useState('individual');

  const activeData = tabs.find((tab) => tab.id === activeTab)?.data || [];

  return (
    <section id="taxation" className="section-padding bg-background relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-teal/5 rounded-full blur-3xl" />

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gold/10 rounded-full text-gold text-sm font-medium mb-4">
            <Icon icon="mdi:calculator-variant-outline" className="w-4 h-4" />
            Tax Compliance
          </div>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Taxation <span className="text-gold">Services</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Expert tax advisory and compliance services tailored for individuals, partnerships, companies, and organizations.
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
            className="flex flex-wrap justify-center gap-2 mb-8 p-2 bg-secondary/50 rounded-2xl"
          >
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative px-4 py-3 rounded-xl font-medium text-sm transition-all duration-300 flex items-center gap-2 ${
                  activeTab === tab.id
                    ? 'text-gold-foreground'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="activeTabBg"
                    className="absolute inset-0 bg-gold rounded-xl shadow-md"
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.5 }}
                  />
                )}
                <Icon icon={tab.icon} className="w-5 h-5 relative z-10" />
                <span className="relative z-10 hidden sm:inline">{tab.label}</span>
              </button>
            ))}
          </motion.div>

          {/* Tab Content */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="bg-card rounded-2xl border border-border p-6 md:p-8 shadow-sm"
          >
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {activeData.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05, duration: 0.3 }}
                  className="group p-4 rounded-xl bg-secondary/50 hover:bg-secondary border border-transparent hover:border-gold/20 transition-all duration-300"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center flex-shrink-0 group-hover:bg-gold/20 transition-colors">
                      <Icon
                        icon={service.icon || 'mdi:file-document-outline'}
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
            className="mt-6 p-4 bg-gold/10 rounded-xl flex items-start gap-3"
          >
            <Icon icon="mdi:information-outline" className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
            <p className="text-sm text-foreground">
              All taxation services include consultation, preparation, filing, and follow-up with the Inland Revenue Department of Sri Lanka.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
});

TaxationServices.displayName = 'TaxationServices';

export default TaxationServices;
