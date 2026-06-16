import { memo } from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

const About = memo(() => {
  return (
    <section
      id="about"
      className="section-padding bg-background relative overflow-hidden"
    >
      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gold-soft rounded-full text-gold text-sm font-medium mb-4">
            <Icon icon="mdi:information-outline" className="w-4 h-4" />
            About QCS
          </div>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 leading-tight">
            Your Trusted <span className="gradient-text">Business Partner</span> in Sri Lanka
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column: Image / Visual */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-glow-secondary-md group aspect-[4/3] bg-card border border-glass">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent z-10 opacity-60 mix-blend-multiply transition-opacity duration-500 group-hover:opacity-40" />

              <img
                src="/about.png"
                alt="About QCS"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              <div className="absolute bottom-6 left-6 z-20 bg-card/95 backdrop-blur-md p-4 rounded-xl border border-glass shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg bg-gold-soft flex items-center justify-center">
                    <Icon
                      icon="mdi:shield-check"
                      className="w-6 h-6 text-gold"
                    />
                  </div>
                  <div>
                    <p className="font-heading font-bold text-foreground">
                      Trusted Partner
                    </p>
                    <p className="text-xs text-black">
                      In Business Growth
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* Decorative Elements */}
            <div className="absolute -top-6 -left-6 w-24 h-24 border-t-2 border-l-2 border-gold rounded-tl-3xl opacity-50" />
            <div className="absolute -bottom-6 -right-6 w-24 h-24 border-b-2 border-r-2 border-gold rounded-br-3xl opacity-50" />
          </motion.div>

          {/* Right Column: Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="space-y-5 text-black text-base md:text-lg">
              <p>
                <strong className="text-foreground font-semibold">
                  QCS (Qualified Corporate Services)
                </strong>{" "}
                is a professionally registered company secretarial and business
                support service provider in Sri Lanka. We specialize in
                corporate secretarial services, accounting, taxation, and
                advisory services for businesses of all sizes.
              </p>

              <p>
                Our mission is to simplify complex regulatory and financial
                processes, allowing our clients to focus on growing their
                businesses. We ensure that all statutory requirements are met
                accurately and on time.
              </p>

              <p>
                With a commitment to professionalism, confidentiality, and
                efficiency, we build long-term relationships by delivering
                tailored solutions that meet each client’s unique needs.
              </p>

              <div className="bg-card border border-glass rounded-xl p-5 mt-8 shadow-sm">
                <p className="text-foreground font-heading font-semibold italic flex items-start gap-3">
                  <Icon
                    icon="mdi:format-quote-open"
                    className="w-8 h-8 text-gold flex-shrink-0 opacity-50"
                  />
                  <span>
                    "At QCS, we don't just provide services — we become your
                    trusted business partner."
                  </span>
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
});

About.displayName = "About";

export default About;
