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
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-slate-900 via-primary to-teal-900"
    >
      {/* Animated Mesh Gradient Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_80%_20%,rgba(234,179,8,0.15),transparent_50%)]" />
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_20%_80%,rgba(20,184,166,0.2),transparent_50%)]" />
      </div>

      {/* Floating Geometric Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 50, repeat: Infinity, ease: 'linear' }}
          className="absolute -top-20 -right-20 w-96 h-96 border border-primary-foreground/10 rounded-full"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
          className="absolute -bottom-32 -left-32 w-[500px] h-[500px] border border-gold/10 rounded-full"
        />
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/4 right-1/4 w-64 h-64 bg-gradient-to-br from-gold/10 to-transparent rounded-full blur-3xl"
        />
      </div>

      {/* Glass Morphism Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-[10%] w-20 h-20 bg-primary-foreground/5 backdrop-blur-sm rounded-2xl rotate-12 border border-primary-foreground/10" />
        <div className="absolute top-[40%] left-[5%] w-16 h-16 bg-gold/10 backdrop-blur-sm rounded-xl -rotate-12 border border-gold/20" />
        <div className="absolute bottom-32 right-[15%] w-24 h-24 bg-teal-500/10 backdrop-blur-sm rounded-3xl rotate-45 border border-teal-500/20" />
      </div>

      <div className="container-custom relative z-10 py-20 md:py-28">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
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
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary-foreground/10 backdrop-blur-md rounded-full text-primary-foreground text-sm font-medium mb-8 border border-primary-foreground/20 shadow-lg shadow-black/10"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-gold"></span>
              </span>
              Trusted Corporate Partner in Sri Lanka
            </motion.div>

            {/* Heading */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="font-heading text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-primary-foreground leading-[1.1] mb-8"
            >
              <span className="block">Corporate, Partnership</span>
              <span className="block mt-2">& Individual Services in</span>
              <span className="relative inline-block mt-2">
                <span className="relative z-10 bg-gradient-to-r from-gold via-yellow-400 to-gold bg-clip-text text-transparent">
                  Sri Lanka
                </span>
                <motion.span
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                  className="absolute bottom-2 left-0 h-3 bg-gold/20 -z-0 rounded-full"
                />
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed mb-10 max-w-xl mx-auto lg:mx-0"
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
                className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary-foreground text-primary font-semibold rounded-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-primary-foreground/25 hover:-translate-y-0.5"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                <Icon icon="mdi:briefcase-outline" className="w-5 h-5" />
                Our Services
              </button>
              <button
                onClick={() => scrollToSection('#contact')}
                className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent text-primary-foreground font-semibold rounded-xl border-2 border-gold/50 overflow-hidden transition-all duration-300 hover:border-gold hover:bg-gold/10 hover:-translate-y-0.5"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-gold/0 via-gold/20 to-gold/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <Icon icon="mdi:send" className="w-5 h-5 text-gold" />
                <span className="relative">Contact Us</span>
              </button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="grid grid-cols-3 gap-6 mt-14"
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
                  className="relative group"
                >
                  <div className="absolute inset-0 bg-primary-foreground/5 backdrop-blur-sm rounded-2xl border border-primary-foreground/10 group-hover:border-gold/30 transition-colors duration-300" />
                  <div className="relative p-4 text-center lg:text-left">
                    <Icon icon={stat.icon} className="w-5 h-5 text-gold mb-2 mx-auto lg:mx-0" />
                    <div className="font-heading text-2xl md:text-3xl font-bold bg-gradient-to-r from-gold to-yellow-400 bg-clip-text text-transparent">
                      {stat.value}
                    </div>
                    <div className="text-primary-foreground/70 text-sm mt-1">{stat.label}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8, ease: 'easeOut' }}
            className="hidden lg:block"
          >
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-gold/30 via-primary/20 to-teal-500/30 rounded-[2rem] blur-2xl opacity-60" />
              
              {/* Main Image Container */}
              <div className="relative bg-gradient-to-br from-primary-foreground/10 to-transparent p-2 rounded-[2rem] backdrop-blur-sm border border-primary-foreground/20">
                <img
                  src={heroIllustration}
                  alt="Business professionals collaborating in a modern office"
                  className="relative z-10 w-full h-auto rounded-[1.5rem] shadow-2xl"
                />
              </div>
              
              {/* Floating Cards */}
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-8 -right-8 backdrop-blur-xl bg-primary-foreground/95 p-5 rounded-2xl shadow-2xl border border-primary-foreground/50"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center">
                    <Icon icon="mdi:file-document-check" className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-foreground">Documents</div>
                    <div className="text-xs text-muted-foreground">Verified ✓</div>
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                className="absolute -bottom-6 -left-6 backdrop-blur-xl bg-primary-foreground/95 p-5 rounded-2xl shadow-2xl border border-primary-foreground/50"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gold to-yellow-500 flex items-center justify-center">
                    <Icon icon="mdi:calculator-variant" className="w-6 h-6 text-foreground" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-foreground">Accounts</div>
                    <div className="text-xs text-muted-foreground">Up to date</div>
                  </div>
                </div>
              </motion.div>

              {/* Additional Floating Element */}
              <motion.div
                animate={{ x: [0, 8, 0], y: [0, -8, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute top-1/2 -right-12 backdrop-blur-xl bg-teal-500/90 p-3 rounded-xl shadow-xl"
              >
                <Icon icon="mdi:check-decagram" className="w-6 h-6 text-primary-foreground" />
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
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          onClick={() => scrollToSection('#services')}
          className="group flex flex-col items-center gap-2 text-primary-foreground/70 hover:text-primary-foreground transition-colors"
          aria-label="Scroll to services"
        >
          <span className="text-sm font-medium tracking-wide">Scroll Down</span>
          <div className="w-6 h-10 rounded-full border-2 border-primary-foreground/30 flex justify-center pt-2 group-hover:border-primary-foreground/50 transition-colors">
            <motion.div
              animate={{ y: [0, 12, 0], opacity: [1, 0, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1.5 h-1.5 rounded-full bg-gold"
            />
          </div>
        </motion.button>
      </motion.div>
    </section>
  );
});

Hero.displayName = 'Hero';

export default Hero;
