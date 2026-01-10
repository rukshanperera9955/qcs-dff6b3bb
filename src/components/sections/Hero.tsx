import { memo } from 'react';
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';
import heroIllustration from '@/assets/hero-illustration.png';

const Hero = memo(() => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top: offsetTop, behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, hsl(217 91% 53%) 0%, hsl(173 81% 32%) 50%, hsl(217 91% 45%) 100%)',
      }}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-background/20 blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-gold/20 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-background/10 blur-3xl" />
      </div>

      {/* Grid Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }}
      />

      <div className="container-custom relative z-10 py-24 md:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.4 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-background/10 backdrop-blur-sm rounded-full text-primary-foreground text-sm font-medium mb-6"
            >
              <Icon icon="mdi:shield-check" className="w-4 h-4" />
              Trusted Corporate Partner in Sri Lanka
            </motion.div>

            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6">
              Corporate, Partnership & Individual Services in{' '}
              <span className="text-gold">Sri Lanka</span>
            </h1>

            <p className="text-lg md:text-xl text-primary-foreground/90 leading-relaxed mb-8 max-w-2xl mx-auto lg:mx-0">
              We offer corporate secretarial services, Accounting Services & Tax Services for Companies, Partnership, Individuals, NGO and Association in Sri Lanka.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <button
                onClick={() => scrollToSection('#services')}
                className="btn-hero bg-background text-primary hover:bg-background/90"
              >
                <Icon icon="mdi:briefcase-outline" className="w-5 h-5" />
                Our Services
              </button>
              <button
                onClick={() => scrollToSection('#contact')}
                className="btn-hero-gold"
              >
                <Icon icon="mdi:send" className="w-5 h-5" />
                Contact Us
              </button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.4 }}
              className="grid grid-cols-3 gap-4 mt-12 pt-8 border-t border-primary-foreground/20"
            >
              {[
                { value: '500+', label: 'Clients Served' },
                { value: '15+', label: 'Years Experience' },
                { value: '100%', label: 'Compliance Rate' },
              ].map((stat, index) => (
                <div key={index} className="text-center lg:text-left">
                  <div className="font-heading text-2xl md:text-3xl font-bold text-gold">{stat.value}</div>
                  <div className="text-primary-foreground/80 text-sm">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 30 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="hidden lg:block"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-gold/20 to-transparent rounded-3xl blur-2xl" />
              <img
                src={heroIllustration}
                alt="Business professionals collaborating in a modern office"
                className="relative z-10 w-full h-auto rounded-3xl shadow-2xl animate-float"
              />
              
              {/* Floating Elements */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-6 -right-6 backdrop-blur-xl bg-background/80 p-4 rounded-xl shadow-2xl shadow-primary/20 border border-background/50"
              >
                <Icon icon="mdi:file-document-check" className="w-8 h-8 text-primary" />
              </motion.div>
              
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                className="absolute -bottom-4 -left-4 backdrop-blur-xl bg-background/80 p-4 rounded-xl shadow-2xl shadow-gold/20 border border-background/50"
              >
                <Icon icon="mdi:calculator-variant" className="w-8 h-8 text-gold" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.4 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.button
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          onClick={() => scrollToSection('#services')}
          className="flex flex-col items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors"
          aria-label="Scroll to services"
        >
          <span className="text-sm font-medium">Scroll Down</span>
          <Icon icon="mdi:chevron-double-down" className="w-6 h-6" />
        </motion.button>
      </motion.div>
    </section>
  );
});

Hero.displayName = 'Hero';

export default Hero;
