import { memo, useState } from 'react';
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { companyInfo, mainServices } from '@/utils/constants';
import { toast } from '@/hooks/use-toast';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters').max(100),
  email: z.string().email('Please enter a valid email address').max(255),
  phone: z.string().min(6, 'Please enter a valid phone number').max(20),
  service: z.string().min(1, 'Please select a service'),
  message: z.string().min(10, 'Message must be at least 10 characters').max(1000),
});

type ContactFormData = z.infer<typeof contactSchema>;

const contactMethods = [
  {
    icon: 'mdi:email-outline',
    label: 'Email Us',
    value: companyInfo.email,
    href: `mailto:${companyInfo.email}`,
    color: 'primary',
  },
  {
    icon: 'mdi:phone-outline',
    label: 'Call Us',
    value: companyInfo.phone,
    href: `tel:${companyInfo.phone.split(' / ')[0].replace(/\s/g, '')}`,
    color: 'gold',
  },
  {
    icon: 'mdi:whatsapp',
    label: 'WhatsApp',
    value: 'Chat with us',
    href: `https://wa.me/94777611006`,
    color: 'teal',
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
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-gold/5" />
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-72 h-72 bg-gold/10 rounded-full blur-3xl" />

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-4">
            <Icon icon="mdi:message-text-outline" className="w-4 h-4" />
            Get In Touch
          </div>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Let's Start a <span className="gradient-text">Conversation</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Ready to streamline your corporate services? We're here to help you every step of the way.
          </p>
        </motion.div>

        {/* Quick Contact Methods */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="grid sm:grid-cols-3 gap-4 mb-16"
        >
          {contactMethods.map((method, index) => (
            <a
              key={method.label}
              href={method.href}
              target={method.label === 'WhatsApp' ? '_blank' : undefined}
              rel={method.label === 'WhatsApp' ? 'noopener noreferrer' : undefined}
              className="group relative bg-card rounded-2xl border border-border p-6 hover:border-primary/50 hover:shadow-lg transition-all duration-300 overflow-hidden"
            >
              <div className={`absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                method.color === 'primary' ? 'from-primary/5 to-transparent' :
                method.color === 'gold' ? 'from-gold/5 to-transparent' :
                'from-teal/5 to-transparent'
              }`} />
              <div className="relative z-10 flex flex-col items-center text-center">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110 ${
                  method.color === 'primary' ? 'bg-primary/10' :
                  method.color === 'gold' ? 'bg-gold/10' :
                  'bg-teal/10'
                }`}>
                  <Icon 
                    icon={method.icon} 
                    className={`w-7 h-7 ${
                      method.color === 'primary' ? 'text-primary' :
                      method.color === 'gold' ? 'text-gold' :
                      'text-teal'
                    }`} 
                  />
                </div>
                <h4 className="font-semibold text-foreground mb-1">{method.label}</h4>
                <p className="text-muted-foreground text-sm">{method.value}</p>
              </div>
            </a>
          ))}
        </motion.div>

        {/* Main Contact Section */}
        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-stretch">
          {/* Left Side - Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2 flex flex-col"
          >
            <div className="bg-card rounded-3xl border border-border p-6 md:p-8 shadow-xl flex-1 flex flex-col">
              <h3 className="font-heading text-2xl font-bold text-foreground mb-6">
                Why Work With Us?
              </h3>
              <div className="space-y-4 flex-1">
                {[
                  { icon: 'mdi:shield-check-outline', text: 'Trusted by 500+ businesses across Sri Lanka' },
                  { icon: 'mdi:clock-fast', text: 'Quick response within 24 hours' },
                  { icon: 'mdi:account-group-outline', text: 'Expert team with 15+ years experience' },
                  { icon: 'mdi:file-document-check-outline', text: 'Full compliance with local regulations' },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon icon={item.icon} className="w-5 h-5 text-primary" />
                    </div>
                    <p className="text-muted-foreground">{item.text}</p>
                  </motion.div>
                ))}
              </div>

              {/* Social Links */}
              <div className="pt-6 border-t border-border mt-auto">
                <h4 className="font-semibold text-foreground mb-4">Follow Us</h4>
                <div className="flex gap-3">
                  {companyInfo.socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-11 h-11 rounded-xl bg-secondary flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
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
            className="lg:col-span-3 flex"
          >
            <div className="bg-card rounded-3xl border border-border p-6 md:p-8 shadow-xl flex-1 flex flex-col">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <Icon icon="mdi:pencil-outline" className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-foreground text-xl">
                    Send Us a Message
                  </h3>
                  <p className="text-muted-foreground text-sm">We'll get back to you within 24 hours</p>
                </div>
              </div>
              
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 flex-1 flex flex-col">
                <div className="grid sm:grid-cols-2 gap-5">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Full Name
                    </label>
                    <div className="relative">
                      <Icon
                        icon="mdi:account-outline"
                        className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground"
                      />
                      <input
                        {...register('name')}
                        type="text"
                        id="name"
                        className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
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
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email Address
                    </label>
                    <div className="relative">
                      <Icon
                        icon="mdi:email-outline"
                        className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground"
                      />
                      <input
                        {...register('email')}
                        type="email"
                        id="email"
                        className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
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
                    <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                      Phone Number
                    </label>
                    <div className="relative">
                      <Icon
                        icon="mdi:phone-outline"
                        className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground"
                      />
                      <input
                        {...register('phone')}
                        type="tel"
                        id="phone"
                        className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
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
                    <label htmlFor="service" className="block text-sm font-medium text-foreground mb-2">
                      Service Interest
                    </label>
                    <div className="relative">
                      <Icon
                        icon="mdi:briefcase-outline"
                        className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground"
                      />
                      <select
                        {...register('service')}
                        id="service"
                        className="w-full pl-12 pr-10 py-3.5 rounded-xl border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all appearance-none cursor-pointer"
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
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Your Message
                  </label>
                  <textarea
                    {...register('message')}
                    id="message"
                    rows={4}
                    className="w-full px-4 py-3.5 rounded-xl border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all resize-none flex-1 min-h-[120px]"
                    placeholder="Tell us about your requirements..."
                  />
                  {errors.message && (
                    <p className="mt-1.5 text-sm text-destructive flex items-center gap-1">
                      <Icon icon="mdi:alert-circle" className="w-4 h-4" />
                      {errors.message.message}
                    </p>
                  )}
                </div>

                {/* Submit Button - pushed to bottom */}
                <div className="mt-auto pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-hero-primary py-4 text-base disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <Icon icon="mdi:loading" className="w-5 h-5 animate-spin" />
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

Contact.displayName = 'Contact';

export default Contact;
