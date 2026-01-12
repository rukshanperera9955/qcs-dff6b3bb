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
      className="relative min-h-screen flex items-center overflow-hidden bg-primary"
    >
      {/* Geometric Pattern Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Dot pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle, hsl(var(--primary-foreground)) 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}
        />
        
        {/* Large geometric shapes */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] -translate-y-1/3 translate-x-1/3">
          <div className="w-full h-full border border-primary-foreground/5 rounded-full" />
        </div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] translate-y-1/3 -translate-x-1/3">
          <div className="w-full h-full border border-primary-foreground/5 rounded-full" />
        </div>
        
        {/* Accent lines */}
        <div className="absolute top-20 left-[10%] w-32 h-px bg-gold/30" />
        <div className="absolute top-32 left-[8%] w-20 h-px bg-gold/20" />
        <div className="absolute bottom-40 right-[10%] w-40 h-px bg-gold/20" />
      </div>

      <div className="container-custom relative z-10 py-20 md:py-28 px-4 md:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary-foreground/10 rounded-full text-primary-foreground text-sm font-medium mb-8 border border-primary-foreground/10"
            >
              <span className="w-2 h-2 rounded-full bg-gold" />
              Trusted Corporate Partner in Sri Lanka
            </motion.div>

            {/* Heading */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-[1.1] mb-6"
            >
              <span className="block">Corporate, Partnership</span>
              <span className="block mt-2">& Individual Services in</span>
              <span className="inline-block mt-2 text-gold">Sri Lanka</span>
            </motion.h1>

            {/* Description */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-lg md:text-xl text-primary-foreground/70 leading-relaxed mb-10 max-w-xl mx-auto lg:mx-0"
            >
              We offer corporate secretarial services, Accounting Services & Tax Services for Companies, Partnership, Individuals, NGO and Association in Sri Lanka.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <button
                onClick={() => scrollToSection('#services')}
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-gold text-gold-foreground font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-gold/25 hover:-translate-y-0.5"
              >
                <Icon icon="mdi:briefcase-outline" className="w-5 h-5" />
                Our Services
              </button>
              <button
                onClick={() => scrollToSection('#contact')}
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent text-primary-foreground font-semibold rounded-lg border-2 border-primary-foreground/20 transition-all duration-300 hover:border-primary-foreground/40 hover:bg-primary-foreground/5 hover:-translate-y-0.5"
              >
                <Icon icon="mdi:send" className="w-5 h-5" />
                Contact Us
              </button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="grid grid-cols-3 gap-4 md:gap-8 mt-14"
            >
              {[
                { value: '500+', label: 'Clients Served', icon: 'mdi:account-group' },
                { value: '15+', label: 'Years Experience', icon: 'mdi:calendar-check' },
                { value: '100%', label: 'Compliance Rate', icon: 'mdi:shield-check' },
              ].map((stat, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 + index * 0.1, duration: 0.4 }}
                  className="text-center lg:text-left"
                >
                  <div className="flex items-center justify-center lg:justify-start gap-2 mb-1">
                    <Icon icon={stat.icon} className="w-4 h-4 text-gold" />
                    <span className="font-heading text-2xl md:text-3xl font-bold text-primary-foreground">
                      {stat.value}
                    </span>
                  </div>
                  <div className="text-primary-foreground/50 text-xs md:text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: 30 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8, ease: 'easeOut' }}
            className="hidden lg:block"
          >
            <div className="relative">
              {/* Decorative frame */}
              <div className="absolute -inset-4 border border-primary-foreground/10 rounded-3xl" />
              <div className="absolute -inset-8 border border-primary-foreground/5 rounded-3xl" />
              
              {/* Main Image */}
              <div className="relative bg-primary-foreground/5 p-3 rounded-2xl">
                <img
                  src={heroIllustration}
                  alt="Business professionals collaborating in a modern office"
                  className="w-full h-auto rounded-xl"
                />
              </div>
              
              {/* Floating Cards */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-6 -right-6 bg-card p-4 rounded-xl shadow-xl"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                    <Icon icon="mdi:file-document-check" className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-card-foreground">Documents</div>
                    <div className="text-xs text-muted-foreground">Verified ✓</div>
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                className="absolute -bottom-4 -left-4 bg-card p-4 rounded-xl shadow-xl"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-gold flex items-center justify-center">
                    <Icon icon="mdi:calculator-variant" className="w-5 h-5 text-gold-foreground" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-card-foreground">Accounts</div>
                    <div className="text-xs text-muted-foreground">Up to date</div>
                  </div>
                </div>
              </motion.div>

              {/* Accent badge */}
              <motion.div
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute top-1/2 -right-8 -translate-y-1/2 bg-gold p-2.5 rounded-lg shadow-lg"
              >
                <Icon icon="mdi:check-decagram" className="w-5 h-5 text-gold-foreground" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.button
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          onClick={() => scrollToSection('#services')}
          className="group flex flex-col items-center gap-2 text-primary-foreground/50 hover:text-primary-foreground/80 transition-colors"
          aria-label="Scroll to services"
        >
          <span className="text-xs font-medium tracking-wider uppercase">Scroll</span>
          <Icon icon="mdi:chevron-down" className="w-5 h-5" />
        </motion.button>
      </motion.div>
    </section>
  );
});

Hero.displayName = 'Hero';

export default Hero;