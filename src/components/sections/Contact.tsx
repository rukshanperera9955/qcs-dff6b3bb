import { memo, useState, useCallback } from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { companyInfo, mainServices } from "@/utils/constants";
import { toast } from "@/hooks/use-toast";
import {
  contactFormSchema,
  checkRateLimit,
  type ContactFormData,
} from "@/utils/security";

const contactMethods = [
  {
    icon: "mdi:email-outline",
    label: "Email Us",
    value: companyInfo.email,
    href: `mailto:${companyInfo.email}`,
    color: "gold",
  },
  {
    icon: "mdi:phone-outline",
    label: "Call Us",
    value: companyInfo.phone,
    href: `tel:${companyInfo.phone.split(" / ")[0].replace(/\s/g, "")}`,
    color: "gold",
  },
  {
    icon: "mdi:whatsapp",
    label: "WhatsApp",
    value: "Chat with us",
    href: `https://wa.me/94777611006`,
    color: "gold",
  },
];

const Contact = memo(() => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = useCallback(
    async (data: ContactFormData) => {
      if (!checkRateLimit("contact-form")) {
        toast({
          title: "Too Many Requests",
          description: "Please wait a moment before submitting again.",
          variant: "destructive",
        });
        return;
      }

      setIsSubmitting(true);

      await new Promise((resolve) => setTimeout(resolve, 1500));

      toast({
        title: "Message Sent!",
        description:
          "Thank you for contacting us. We will get back to you soon.",
      });

      reset();
      setIsSubmitting(false);
    },
    [reset]
  );

  return (
    <section
      id="contact"
      className="section-padding bg-glass relative overflow-hidden"
    >
      {/* Background Decorations - PRESERVED FROM ORIGINAL */}
      <div className="absolute inset-0 bg-gradient-to-br gradient-fade-primary via-transparent to-gold/5" />
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary-soft rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-72 h-72 bg-gold-soft rounded-full blur-3xl" />

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
            <Icon icon="mdi:message-text-outline" className="w-4 h-4" />
            Get In Touch
          </div>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Let's Start a <span className="gradient-text">Conversation</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Ready to streamline your corporate services? We're here to help you
            every step of the way.
          </p>
        </motion.div>

        {/* Quick Contact Methods */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="grid sm:grid-cols-3 gap-6 mb-12 max-w-5xl mx-auto"
        >
          {contactMethods.map((method, index) => (
            <motion.a
              key={method.label}
              href={method.href}
              target={method.label === "WhatsApp" ? "_blank" : undefined}
              rel={
                method.label === "WhatsApp" ? "noopener noreferrer" : undefined
              }
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group"
            >
              <div className="h-full bg-card/40 rounded-xl p-6 border border-glass shadow-lg shadow-glow-secondary-sm hover:shadow-2xl hover:border-secondary-strong hover:shadow-glow-secondary-lg transition-all duration-500">
                <div className="flex flex-col items-center text-center">
                  <div className="w-14 h-14 rounded-xl bg-gold-soft flex items-center justify-center mb-5 group-hover:bg-secondary-subtle group-hover:scale-110 transition-all duration-300">
                    <Icon icon={method.icon} className="w-7 h-7 text-gold" />
                  </div>
                  <h4 className="font-heading font-semibold text-foreground text-lg mb-2 group-hover:text-gold transition-colors">
                    {method.label}
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    {method.value}
                  </p>
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>

        {/* Main Contact Section */}
        <div className="grid lg:grid-cols-5 gap-6 lg:gap-8 items-stretch max-w-6xl mx-auto">
          {/* Left Side - Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2"
          >
            <div className="h-full bg-card/40 rounded-xl border border-glass p-6 md:p-8 shadow-lg shadow-glow-secondary-sm hover:shadow-2xl hover:border-secondary-medium hover:shadow-glow-secondary-md transition-all duration-500 flex flex-col">
              <h3 className="font-heading text-xl font-semibold text-foreground mb-6">
                Why Work With Us?
              </h3>
              <div className="space-y-4 flex-1">
                {[
                  {
                    icon: "mdi:shield-check-outline",
                    text: "Trusted by 500+ businesses across Sri Lanka",
                  },
                  {
                    icon: "mdi:clock-fast",
                    text: "Quick response within 24 hours",
                  },
                  {
                    icon: "mdi:account-group-outline",
                    text: "Expert team with 15+ years experience",
                  },
                  {
                    icon: "mdi:file-document-check-outline",
                    text: "Full compliance with local regulations",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-3 rounded-lg backdrop-blur-sm bg-background border border-glass-subtle hover:border-secondary-medium transition-all duration-300"
                  >
                    <Icon
                      icon={item.icon}
                      className="w-5 h-5 text-gold flex-shrink-0"
                    />
                    <span className="text-foreground text-sm">{item.text}</span>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div className="pt-6 border-t border-glass mt-6">
                <h4 className="font-heading font-semibold text-foreground text-base mb-4">
                  Follow Us
                </h4>
                <div className="flex gap-3">
                  {companyInfo.socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-11 h-11 rounded-xl bg-gold-soft flex items-center justify-center text-gold hover:bg-secondary-subtle hover:text-secondary hover:scale-110 transition-all duration-300"
                      aria-label={social.name}
                    >
                      <Icon icon={social.icon} className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-3"
          >
            <div className="h-full bg-card/40 rounded-xl border border-glass p-6 md:p-8 shadow-lg shadow-glow-secondary-sm hover:shadow-2xl hover:border-secondary-medium hover:shadow-glow-secondary-md transition-all duration-500 flex flex-col">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-14 h-14 rounded-xl bg-gold-soft flex items-center justify-center">
                  <Icon
                    icon="mdi:pencil-outline"
                    className="w-7 h-7 text-gold"
                  />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-foreground text-xl">
                    Send Us a Message
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    We'll get back to you within 24 hours
                  </p>
                </div>
              </div>

              <form
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-5 flex-1 flex flex-col"
              >
                <div className="grid sm:grid-cols-2 gap-5">
                  {/* Name */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Full Name
                    </label>
                    <div className="relative">
                      <Icon
                        icon="mdi:account-outline"
                        className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground"
                      />
                      <input
                        {...register("name")}
                        type="text"
                        id="name"
                        className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-secondary transition-all"
                        placeholder="John Doe"
                      />
                    </div>
                    {errors.name && (
                      <p className="mt-1.5 text-sm text-destructive flex items-center gap-1">
                        <Icon icon="mdi:alert-circle" className="w-4 h-4" />
                        {errors.name.message}
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Email Address
                    </label>
                    <div className="relative">
                      <Icon
                        icon="mdi:email-outline"
                        className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground"
                      />
                      <input
                        {...register("email")}
                        type="email"
                        id="email"
                        className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-secondary transition-all"
                        placeholder="john@example.com"
                      />
                    </div>
                    {errors.email && (
                      <p className="mt-1.5 text-sm text-destructive flex items-center gap-1">
                        <Icon icon="mdi:alert-circle" className="w-4 h-4" />
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  {/* Phone */}
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Phone Number
                    </label>
                    <div className="relative">
                      <Icon
                        icon="mdi:phone-outline"
                        className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground"
                      />
                      <input
                        {...register("phone")}
                        type="tel"
                        id="phone"
                        className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-secondary transition-all"
                        placeholder="+94 77 XXX XXXX"
                      />
                    </div>
                    {errors.phone && (
                      <p className="mt-1.5 text-sm text-destructive flex items-center gap-1">
                        <Icon icon="mdi:alert-circle" className="w-4 h-4" />
                        {errors.phone.message}
                      </p>
                    )}
                  </div>

                  {/* Service */}
                  <div>
                    <label
                      htmlFor="service"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Service Interest
                    </label>
                    <div className="relative">
                      <Icon
                        icon="mdi:briefcase-outline"
                        className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground"
                      />
                      <select
                        {...register("service")}
                        id="service"
                        className="w-full pl-12 pr-10 py-3.5 rounded-xl border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-secondary transition-all appearance-none cursor-pointer"
                      >
                        <option value="">Select a service</option>
                        {mainServices.map((service) => (
                          <option key={service.id} value={service.id}>
                            {service.title}
                          </option>
                        ))}
                        <option value="other">Other</option>
                      </select>
                      <Icon
                        icon="mdi:chevron-down"
                        className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground pointer-events-none"
                      />
                    </div>
                    {errors.service && (
                      <p className="mt-1.5 text-sm text-destructive flex items-center gap-1">
                        <Icon icon="mdi:alert-circle" className="w-4 h-4" />
                        {errors.service.message}
                      </p>
                    )}
                  </div>
                </div>

                {/* Message */}
                <div className="flex-1 flex flex-col">
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Your Message
                  </label>
                  <textarea
                    {...register("message")}
                    id="message"
                    rows={4}
                    className="w-full px-4 py-3.5 rounded-xl border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-secondary transition-all resize-none flex-1 min-h-[120px]"
                    placeholder="Tell us about your requirements..."
                  />
                  {errors.message && (
                    <p className="mt-1.5 text-sm text-destructive flex items-center gap-1">
                      <Icon icon="mdi:alert-circle" className="w-4 h-4" />
                      {errors.message.message}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <div className="mt-auto pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full btn-hero-primary py-4 text-base disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <Icon
                          icon="mdi:loading"
                          className="w-5 h-5 animate-spin"
                        />
                        Sending Message...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Icon icon="mdi:arrow-right" className="w-5 h-5" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
});

Contact.displayName = "Contact";

export default Contact;
