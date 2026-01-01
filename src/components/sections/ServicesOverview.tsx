import { memo } from 'react';
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';
import { mainServices } from '@/utils/constants';

const ServicesOverview = memo(() => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top: offsetTop, behavior: 'smooth' });
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.5 },
    }),
  };

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'primary':
        return {
          bg: 'bg-primary/10',
          text: 'text-primary',
          border: 'group-hover:border-primary/30',
          icon: 'bg-primary',
        };
      case 'gold':
        return {
          bg: 'bg-gold/10',
          text: 'text-gold',
          border: 'group-hover:border-gold/30',
          icon: 'bg-gold',
        };
      case 'teal':
        return {
          bg: 'bg-teal/10',
          text: 'text-teal',
          border: 'group-hover:border-teal/30',
          icon: 'bg-teal',
        };
      default:
        return {
          bg: 'bg-primary/10',
          text: 'text-primary',
          border: 'group-hover:border-primary/30',
          icon: 'bg-primary',
        };
    }
  };

  return (
    <section id="services" className="section-padding bg-background relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-teal/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-4">
            <Icon icon="mdi:briefcase-outline" className="w-4 h-4" />
            What We Offer
          </div>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Our Professional <span className="gradient-text">Services</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Comprehensive business solutions tailored for companies, partnerships, individuals, NGOs, and associations across Sri Lanka.
          </p>
        </motion.div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {mainServices.map((service, index) => {
            const colors = getColorClasses(service.color);
            
            return (
              <motion.div
                key={service.id}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={cardVariants}
                className="group"
              >
                <button
                  onClick={() => scrollToSection(`#${service.id}`)}
                  className={`w-full text-left card-service h-full border-2 border-transparent ${colors.border} transition-all duration-300`}
                >
                  <div className={`w-14 h-14 rounded-xl ${colors.icon} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon icon={service.icon} className="w-7 h-7 text-primary-foreground" />
                  </div>
                  
                  <h3 className="font-heading text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>
                  
                  <div className={`inline-flex items-center gap-2 text-sm font-medium ${colors.text}`}>
                    Learn More
                    <Icon icon="mdi:arrow-right" className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </button>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground mb-4">
            Need help choosing the right service?
          </p>
          <button
            onClick={() => scrollToSection('#contact')}
            className="btn-hero-primary"
          >
            <Icon icon="mdi:message-text-outline" className="w-5 h-5" />
            Get Free Consultation
          </button>
        </motion.div>
      </div>
    </section>
  );
});

ServicesOverview.displayName = 'ServicesOverview';

export default ServicesOverview;
