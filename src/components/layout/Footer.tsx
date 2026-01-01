import { memo, useState, useEffect } from 'react';
import { Icon } from '@iconify/react';
import { motion, AnimatePresence } from 'framer-motion';
import { companyInfo, serviceDropdownLinks } from '@/utils/constants';

const Footer = memo(() => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top: offsetTop, behavior: 'smooth' });
    }
  };

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Services', href: '#services' },
    { name: 'Contact Us', href: '#contact' },
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background relative">
      {/* Main Footer Content */}
      <div className="container-custom section-padding pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                <Icon icon="mdi:domain" className="w-6 h-6 text-primary-foreground" />
              </div>
              <span className="font-heading font-bold text-xl">
                Corporate<span className="text-gold">Services</span>
              </span>
            </div>
            <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
              Your trusted partner for corporate secretarial, taxation, and accountancy services in Sri Lanka.
            </p>
            <div className="flex gap-3">
              {companyInfo.socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-muted/20 flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  aria-label={social.name}
                >
                  <Icon icon={social.icon} className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-muted-foreground hover:text-gold transition-colors text-sm flex items-center gap-2"
                  >
                    <Icon icon="mdi:chevron-right" className="w-4 h-4" />
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Our Services</h3>
            <ul className="space-y-3">
              {serviceDropdownLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-muted-foreground hover:text-gold transition-colors text-sm flex items-center gap-2"
                  >
                    <Icon icon="mdi:chevron-right" className="w-4 h-4" />
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-muted-foreground">
                <Icon icon="mdi:map-marker-outline" className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                <span>{companyInfo.address}</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-muted-foreground">
                <Icon icon="mdi:phone-outline" className="w-5 h-5 text-gold flex-shrink-0" />
                <span>{companyInfo.phone}</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-muted-foreground">
                <Icon icon="mdi:email-outline" className="w-5 h-5 text-gold flex-shrink-0" />
                <span>{companyInfo.email}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="border-t border-muted/20">
        <div className="container-custom py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground text-center sm:text-left">
            © {currentYear} {companyInfo.name}. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Designed with <Icon icon="mdi:heart" className="w-4 h-4 inline text-destructive" /> in Sri Lanka
          </p>
        </div>
      </div>

      {/* Back to Top Button */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 w-12 h-12 rounded-full bg-primary text-primary-foreground shadow-lg hover:shadow-xl hover:bg-primary/90 transition-all duration-300 flex items-center justify-center z-50"
            aria-label="Back to top"
          >
            <Icon icon="mdi:chevron-up" className="w-6 h-6" />
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  );
});

Footer.displayName = 'Footer';

export default Footer;
