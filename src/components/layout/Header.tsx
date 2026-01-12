import { useState, useEffect, memo, useCallback } from 'react';
import { Icon } from '@iconify/react';
import { motion, AnimatePresence } from 'framer-motion';
import { useScrollSpy } from '@/hooks/useScrollSpy';
import { navLinks } from '@/utils/constants';
import { scrollToSection as scrollTo } from '@/utils/scrollUtils';
import ThemeToggle from '@/components/ui/theme-toggle';

const sectionIds = ['home', 'services', 'secretarial', 'taxation', 'accountancy', 'contact'];

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

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = useCallback((href: string) => {
    scrollTo(href);
    setIsMobileMenuOpen(false);
  }, []);

  const isActive = useCallback((href: string) => {
    const sectionId = href.replace('#', '');
    return activeSection === sectionId;
  }, [activeSection]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass-effect shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <nav className="container-custom flex items-center justify-between">
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('#home');
          }}
          className="flex items-center gap-2 group"
        >
          <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow">
            <Icon icon="mdi:domain" className="w-6 h-6 text-primary-foreground" />
          </div>
          <div className="hidden sm:block">
            <span className="font-heading font-bold text-lg text-foreground leading-tight block">
              Qualified
            </span>
            <span className="text-xs text-muted-foreground">Corporate Secretary</span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <li key={link.name}>
              <button
                onClick={() => scrollToSection(link.href)}
                className={`font-medium transition-colors relative text-sm ${
                  isActive(link.href)
                    ? 'text-primary'
                    : 'text-foreground hover:text-primary'
                }`}
              >
                {link.name}
                {isActive(link.href) && (
                  <motion.span
                    layoutId="activeIndicator"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full"
                  />
                )}
              </button>
            </li>
          ))}
          <li>
            <button
              onClick={() => scrollToSection('#contact')}
              className="btn-hero-primary text-sm"
            >
              <Icon icon="mdi:phone-outline" className="w-4 h-4" />
              Contact
            </button>
          </li>
          <li>
            <ThemeToggle />
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
          aria-label="Toggle menu"
        >
          <Icon icon={isMobileMenuOpen ? 'mdi:close' : 'mdi:menu'} className="w-6 h-6" />
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden glass-effect border-t border-border"
          >
            <ul className="container-custom py-4 space-y-2">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className={`w-full py-2 text-left font-medium ${
                      isActive(link.href) ? 'text-primary' : 'text-foreground'
                    }`}
                  >
                    {link.name}
                  </button>
                </li>
              ))}
              <li className="pt-2 flex items-center gap-3">
                <button
                  onClick={() => scrollToSection('#contact')}
                  className="btn-hero-primary flex-1"
                >
                  <Icon icon="mdi:phone-outline" className="w-4 h-4" />
                  Contact
                </button>
                <ThemeToggle />
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
});

Header.displayName = 'Header';

export default Header;