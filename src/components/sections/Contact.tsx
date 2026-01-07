import { memo, useState } from 'react';
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { companyInfo, mainServices } from '@/utils/constants';
import contactIllustration from '@/assets/contact-illustration.png';
import { toast } from '@/hooks/use-toast';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters').max(100),
  email: z.string().email('Please enter a valid email address').max(255),
  phone: z.string().min(6, 'Please enter a valid phone number').max(20),
  service: z.string().min(1, 'Please select a service'),
  message: z.string().min(10, 'Message must be at least 10 characters').max(1000),
});

type ContactFormData = z.infer<typeof contactSchema>;

const Contact = memo(() => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    console.log('Form submitted:', data);
    
    toast({
      title: 'Message Sent!',
      description: 'Thank you for contacting us. We will get back to you soon.',
    });
    
    reset();
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="section-padding bg-background relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-secondary/30 to-transparent" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-gold/5 rounded-full blur-3xl" />

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-4">
            <Icon icon="mdi:message-text-outline" className="w-4 h-4" />
            Get In Touch
          </div>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Contact <span className="gradient-text">Us</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Have questions about our services? Reach out to us and our team will be happy to assist you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-card rounded-2xl border border-border p-6 md:p-8 shadow-md">
              <h3 className="font-heading font-semibold text-foreground text-xl mb-6">
                Send Us a Message
              </h3>
              
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Full Name *
                  </label>
                  <div className="relative">
                    <Icon
                      icon="mdi:account-outline"
                      className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground"
                    />
                    <input
                      {...register('name')}
                      type="text"
                      id="name"
                      className="w-full pl-11 pr-4 py-3 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  {errors.name && (
                    <p className="mt-1 text-sm text-destructive">{errors.name.message}</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email Address *
                  </label>
                  <div className="relative">
                    <Icon
                      icon="mdi:email-outline"
                      className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground"
                    />
                    <input
                      {...register('email')}
                      type="email"
                      id="email"
                      className="w-full pl-11 pr-4 py-3 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                  {errors.email && (
                    <p className="mt-1 text-sm text-destructive">{errors.email.message}</p>
                  )}
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                    Phone Number *
                  </label>
                  <div className="relative">
                    <Icon
                      icon="mdi:phone-outline"
                      className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground"
                    />
                    <input
                      {...register('phone')}
                      type="tel"
                      id="phone"
                      className="w-full pl-11 pr-4 py-3 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                      placeholder="+94 77 XXX XXXX"
                    />
                  </div>
                  {errors.phone && (
                    <p className="mt-1 text-sm text-destructive">{errors.phone.message}</p>
                  )}
                </div>

                {/* Service */}
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-foreground mb-2">
                    Service Interest *
                  </label>
                  <div className="relative">
                    <Icon
                      icon="mdi:briefcase-outline"
                      className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground"
                    />
                    <select
                      {...register('service')}
                      id="service"
                      className="w-full pl-11 pr-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all appearance-none cursor-pointer"
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
                      className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground pointer-events-none"
                    />
                  </div>
                  {errors.service && (
                    <p className="mt-1 text-sm text-destructive">{errors.service.message}</p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message *
                  </label>
                  <textarea
                    {...register('message')}
                    id="message"
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all resize-none"
                    placeholder="Tell us about your requirements..."
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-destructive">{errors.message.message}</p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-hero-primary disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <Icon icon="mdi:loading" className="w-5 h-5 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Icon icon="mdi:send" className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            {/* Illustration */}
            <div className="hidden lg:block">
              <img
                src={contactIllustration}
                alt="Business professionals communicating"
                className="w-full max-w-md mx-auto rounded-2xl"
              />
            </div>

            {/* Contact Cards */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-4">
              {/* Address */}
              <div className="bg-card rounded-xl border border-border p-5 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon icon="mdi:map-marker-outline" className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Our Office</h4>
                    <p className="text-muted-foreground text-sm">{companyInfo.address}</p>
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div className="bg-card rounded-xl border border-border p-5 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center flex-shrink-0">
                    <Icon icon="mdi:phone-outline" className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Phone</h4>
                    <p className="text-muted-foreground text-sm">{companyInfo.phone}</p>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="bg-card rounded-xl border border-border p-5 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-teal/10 flex items-center justify-center flex-shrink-0">
                    <Icon icon="mdi:email-outline" className="w-6 h-6 text-teal" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Email</h4>
                    <p className="text-muted-foreground text-sm">{companyInfo.email}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-card rounded-xl border border-border p-6 shadow-sm">
              <h4 className="font-semibold text-foreground mb-4 text-center">Connect With Us</h4>
              <div className="flex justify-center gap-3">
                {companyInfo.socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                    aria-label={social.name}
                  >
                    <Icon icon={social.icon} className="w-6 h-6" />
                  </a>
                ))}
              </div>
            </div>

            {/* Sri Lanka Map Placeholder */}
            <div className="bg-card rounded-xl border border-border overflow-hidden shadow-sm">
              <div className="aspect-video bg-secondary/50 flex items-center justify-center relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-teal/5" />
                <div className="text-center p-6 relative z-10">
                  <Icon icon="mdi:map-marker-radius" className="w-16 h-16 text-primary/50 mx-auto mb-3" />
                <p className="text-muted-foreground text-sm">
                  Located in Mount Lavinia, Sri Lanka
                </p>
                <p className="text-muted-foreground text-xs mt-1">
                  Serving clients nationwide
                </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
});

Contact.displayName = 'Contact';

export default Contact;
