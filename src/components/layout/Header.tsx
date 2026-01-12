import { useState, useEffect, memo, useCallback } from "react";
import { Icon } from "@iconify/react";
import { motion, AnimatePresence } from "framer-motion";
import { useScrollSpy } from "@/hooks/useScrollSpy";
import { navLinks } from "@/utils/constants";
import { scrollToSection as scrollTo } from "@/utils/scrollUtils";
import ThemeToggle from "@/components/ui/theme-toggle";

const sectionIds = [
  "home",
  "services",
  "secretarial",
  "taxation",
  "accountancy",
  "contact",
];

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

  const scrollToSection = useCallback((href: string) => {
    scrollTo(href);
    setIsMobileMenuOpen(false);
  }, []);

  const isActive = useCallback(
    (href: string) => {
      const sectionId = href.replace("#", "");
      return activeSection === sectionId;
    },
    [activeSection]
  );

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "header-footer-background shadow-lg py-2"
            : "header-background-transparent backdrop-blur-sm py-4"
        }`}
      >
        <nav className="container-custom">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("#home");
              }}
              className="flex items-center gap-3 group"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="relative">
                <div className="w-11 h-11 rounded-xl bg-gold flex items-center justify-center shadow-md group-hover:shadow-lg transition-all duration-300">
                  <Icon
                    icon="mdi:domain"
                    className="w-6 h-6 text-gold-foreground"
                  />
                </div>
                <div className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-primary-foreground/20 blur-sm" />
              </div>
              <div className="hidden sm:block">
                <span className="font-heading font-bold text-lg header-footer-foreground leading-tight block">
                  Qualified
                </span>
                <span className="text-xs header-footer-foreground opacity-70">
                  Corporate Secretary
                </span>
              </div>
            </motion.a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center">
              <div className="flex items-center bg-white/10 rounded-full p-1.5 backdrop-blur-sm">
                {navLinks.map((link) => (
                  <button
                    key={link.name}
                    onClick={() => scrollToSection(link.href)}
                    className={`relative px-5 py-2 text-sm font-medium transition-all duration-300 rounded-full ${
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

            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center gap-3">
              <ThemeToggle />
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

            {/* Mobile Menu Button */}
            <div className="flex items-center gap-2 lg:hidden">
              <ThemeToggle />
              <motion.button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2.5 rounded-xl bg-white/10 header-footer-foreground hover:bg-white/20 transition-colors"
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

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40 lg:hidden"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="fixed top-0 right-0 h-full w-80 max-w-[85vw] header-footer-background shadow-2xl z-50 lg:hidden"
            >
              <div className="flex flex-col h-full">
                {/* Mobile Menu Header */}
                <div className="flex items-center justify-between p-6 border-b border-white/10">
                  <span className="font-heading font-bold text-lg header-footer-foreground">
                    Menu
                  </span>
                  <motion.button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-2 rounded-xl bg-white/10 header-footer-foreground"
                    whileTap={{ scale: 0.9 }}
                  >
                    <Icon icon="mdi:close" className="w-5 h-5" />
                  </motion.button>
                </div>

                {/* Mobile Menu Links */}
                <nav className="flex-1 p-6 overflow-y-auto">
                  <ul className="space-y-2">
                    {navLinks.map((link, index) => (
                      <motion.li
                        key={link.name}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <button
                          onClick={() => scrollToSection(link.href)}
                          className={`w-full flex items-center gap-3 px-4 py-3.5 rounded-xl text-left font-medium transition-all duration-300 ${
                            isActive(link.href)
                              ? "bg-gold text-gold-foreground shadow-md"
                              : "header-footer-foreground opacity-80 hover:bg-white/10 hover:opacity-100"
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
                <div className="p-6 border-t border-white/10">
                  <motion.button
                    onClick={() => scrollToSection("#contact")}
                    className="w-full flex items-center justify-center gap-2 px-5 py-3.5 bg-gold text-gold-foreground rounded-xl font-semibold shadow-md"
                    whileTap={{ scale: 0.95 }}
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
