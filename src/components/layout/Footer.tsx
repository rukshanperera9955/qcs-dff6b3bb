import { memo, useEffect, useCallback, useMemo } from "react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import { companyInfo, navLinks } from "@/utils/constants";
import { scrollToSection } from "@/utils/scrollUtils";

const Footer = memo(() => {
  useEffect(() => {
    // Optional: any other scroll handling if needed
  }, []);

  const handleScrollToSection = useCallback((href: string) => {
    scrollToSection(href);
  }, []);

  const quickLinks = useMemo(
    () => [
      { name: "Home", href: "#home" },
      { name: "About Services", href: "#services" },
      { name: "Contact Us", href: "#contact" },
    ],
    []
  );

  const currentYear = useMemo(() => new Date().getFullYear(), []);

  return (
    <footer className="header-footer-background header-footer-foreground relative">
      {/* Main Footer Content */}
      <div className="container-custom section-padding pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-11 h-11 rounded-xl bg-gold flex items-center justify-center shadow-md">
                <Icon
                  icon="mdi:domain"
                  className="w-6 h-6 text-gold-foreground"
                />
              </div>
              <div>
                <span className="font-heading font-bold text-lg block leading-tight header-footer-foreground">
                  Qualified
                </span>
                <span className="text-xs header-footer-foreground/70">
                  Corporate Secretary
                </span>
              </div>
            </div>
            <p className="header-footer-foreground/70 text-sm mb-4 leading-relaxed">
              Your trusted partner for corporate secretarial, taxation, and
              accounting services in Sri Lanka.
            </p>
            <div className="flex gap-3">
              {companyInfo.socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-primary-foreground/10 flex items-center justify-center header-footer-foreground/70 hover:bg-gold hover:text-gold-foreground transition-all duration-300"
                  aria-label={social.name}
                >
                  <Icon icon={social.icon} className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4 header-footer-foreground">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => handleScrollToSection(link.href)}
                    className="header-footer-foreground/70 hover:text-gold transition-colors text-sm flex items-center gap-2 group"
                  >
                    <Icon
                      icon="mdi:chevron-right"
                      className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                    />
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4 header-footer-foreground">
              Our Services
            </h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => handleScrollToSection(link.href)}
                    className="header-footer-foreground/70 hover:text-gold transition-colors text-sm flex items-center gap-2 group"
                  >
                    <Icon
                      icon="mdi:chevron-right"
                      className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                    />
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4 header-footer-foreground">
              Contact Us
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm header-footer-foreground/70">
                <Icon
                  icon="mdi:map-marker-outline"
                  className="w-5 h-5 text-gold flex-shrink-0 mt-0.5"
                />
                <span>{companyInfo.address}</span>
              </li>
              <li className="flex items-center gap-3 text-sm header-footer-foreground/70">
                <Icon
                  icon="mdi:phone-outline"
                  className="w-5 h-5 text-gold flex-shrink-0"
                />
                <span>{companyInfo.phone}</span>
              </li>
              <li className="flex items-center gap-3 text-sm header-footer-foreground/70">
                <Icon
                  icon="mdi:email-outline"
                  className="w-5 h-5 text-gold flex-shrink-0"
                />
                <span>{companyInfo.email}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container-custom py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm header-footer-foreground/60 text-center sm:text-left">
            © {currentYear} {companyInfo.name}. All rights reserved.
          </p>
          <p className="text-sm header-footer-foreground/60">
            Powered by aurin innovatech
          </p>
        </div>
      </div>


    </footer>
  );
});

Footer.displayName = "Footer";

export default Footer;
