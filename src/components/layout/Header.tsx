import { useState, useEffect, memo, useCallback } from "react";
import { Icon } from "@iconify/react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";
import { useScrollSpy } from "@/hooks/useScrollSpy";
import { navLinks } from "@/utils/constants";
import { scrollToSection as scrollTo } from "@/utils/scrollUtils";
import logo from "@/assets/logo.png";

const sectionIds = ["home", "services", "contact"];

const Header = memo(() => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const activeSection = useScrollSpy({
    sectionIds,
    offset: 150,
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = useCallback((href: string) => {
    if (href.startsWith("#")) {
      if (location.pathname !== "/") {
        navigate("/" + href);
      } else {
        scrollTo(href);
      }
    } else {
      navigate(href);
    }
    setIsMobileMenuOpen(false);
  }, [location.pathname, navigate]);

  const isActive = useCallback(
    (href: string) => {
      if (href.startsWith("/")) {
        return location.pathname === href;
      }
      if (location.pathname !== "/") {
        return false;
      }
      // "Home" represents the whole landing page, so keep it selected on "/"
      // regardless of scroll position. The other nav items are separate
      // routes, so once the scroll-spy moves past #home (into #services /
      // #contact) nothing would match and the highlight would vanish as you
      // scroll to the bottom.
      if (href === "#home") {
        return true;
      }
      const sectionId = href.replace("#", "");
      return activeSection === sectionId;
    },
    [activeSection, location.pathname]
  );

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${
          isScrolled
            ? "bg-background/40 backdrop-blur-lg border-border/20 shadow-md py-3"
            : "bg-white border-border/50 shadow-sm py-5"
        }`}
      >
        <nav className="w-full px-6 md:px-8 lg:px-12">
          <div className="flex items-center justify-between">
            {/* Logo Section - Consistent across all screens */}
            <motion.a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("#home");
              }}
              className="flex items-center gap-3 group shrink-0"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="relative flex items-center justify-center w-24 h-12 md:w-28 md:h-14 shrink-0">
                <img
                  src={logo}
                  alt="Qualified Corporate Secretaries"
                  className="absolute top-1/2 -translate-y-1/2 h-20 md:h-24 w-auto object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-bold text-base md:text-lg header-footer-foreground leading-tight block">
                  QUALIFIED
                </span>
                <span className="text-[10px] md:text-lg header-footer-foreground opacity-70 font-bold">
                  CORPORATE SECRETARIES
                </span>
              </div>
            </motion.a>

            {/* Desktop Navigation - Hidden on Mobile & Tablet (< 1024px) */}
            <div className="hidden lg:flex items-center flex-1 justify-end px-8">
              <div className="flex items-center bg-accent/50 rounded-full p-1.5 backdrop-blur-sm">
                {navLinks.map((link) => (
                  <button
                    key={link.name}
                    onClick={() => scrollToSection(link.href)}
                    className={`relative px-4 xl:px-5 py-2 text-sm font-medium transition-all duration-300 rounded-full ${
                      isActive(link.href)
                        ? "text-gold-foreground"
                        : "header-footer-foreground opacity-80 hover:opacity-100"
                    }`}
                  >
                    {isActive(link.href) && (
                      <motion.span
                        layoutId="navPill"
                        className="absolute inset-0 bg-gold rounded-full shadow-md"
                        transition={{
                          type: "spring",
                          bounce: 0.2,
                          duration: 0.6,
                        }}
                      />
                    )}
                    <span className="relative z-10">{link.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Actions - Desktop only */}
            <div className="hidden lg:flex items-center gap-3 shrink-0">
              <motion.button
                onClick={() => scrollToSection("#contact")}
                className="flex items-center gap-2 px-5 py-2.5 bg-gold text-gold-foreground rounded-full font-semibold text-sm shadow-md hover:shadow-lg transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon icon="mdi:phone-outline" className="w-4 h-4" />
                Contact
              </motion.button>
            </div>

            {/* Mobile/Tablet Menu Button - Visible on screens < 1024px */}
            <div className="flex items-center lg:hidden">
              <motion.button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2.5 rounded-xl bg-gold header-footer-foreground hover:bg-gold/80 transition-colors"
                aria-label="Toggle menu"
                whileTap={{ scale: 0.9 }}
              >
                <Icon
                  icon={isMobileMenuOpen ? "mdi:close" : "mdi:menu"}
                  className="w-6 h-6"
                />
              </motion.button>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile/Tablet Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-background/80 backdrop-blur-sm z-[60] lg:hidden"
            />

            {/* Sidebar Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="fixed top-0 right-0 h-full w-[280px] sm:w-[350px] header-footer-background shadow-2xl z-[70] lg:hidden border-l border-border/20"
            >
              <div className="flex flex-col h-full">
                {/* Mobile Menu Header */}
                <div className="flex items-center justify-between p-6 border-b border-border/10">
                  <span className="font-heading font-bold text-xl header-footer-foreground">
                    Navigation
                  </span>
                  <motion.button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-2 rounded-xl bg-gold header-footer-foreground"
                    whileTap={{ scale: 0.9 }}
                  >
                    <Icon icon="mdi:close" className="w-5 h-5" />
                  </motion.button>
                </div>

                {/* Mobile Menu Links */}
                <nav className="flex-1 p-6 overflow-y-auto">
                  <ul className="space-y-3">
                    {navLinks.map((link, index) => (
                      <motion.li
                        key={link.name}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                      >
                        <button
                          onClick={() => scrollToSection(link.href)}
                          className={`w-full flex items-center gap-4 px-4 py-4 rounded-xl text-left font-medium transition-all duration-300 ${
                            isActive(link.href)
                              ? "bg-gold text-gold-foreground shadow-md"
                              : "header-footer-foreground opacity-80 hover:bg-gold/50 hover:opacity-100"
                          }`}
                        >
                          <div
                            className={`w-2 h-2 rounded-full ${
                              isActive(link.href)
                                ? "bg-gold-foreground"
                                : "bg-gold"
                            }`}
                          />
                          {link.name}
                        </button>
                      </motion.li>
                    ))}
                  </ul>
                </nav>

                {/* Mobile Menu Footer */}
                <div className="p-6 border-t border-border/10">
                  <motion.button
                    onClick={() => scrollToSection("#contact")}
                    className="w-full flex items-center justify-center gap-2 px-5 py-4 bg-gold text-gold-foreground rounded-xl font-bold shadow-md"
                    whileTap={{ scale: 0.98 }}
                  >
                    <Icon icon="mdi:phone-outline" className="w-5 h-5" />
                    Contact Us
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
});

Header.displayName = "Header";

export default Header;
