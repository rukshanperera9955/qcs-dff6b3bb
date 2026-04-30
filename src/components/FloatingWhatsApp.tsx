import { memo } from "react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

const FloatingWhatsApp = memo(() => {
  return (
    <motion.a
      href="https://wa.me/94777611006"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300"
      aria-label="Chat with us on WhatsApp"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
        delay: 0.5,
      }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <Icon icon="mdi:whatsapp" className="w-8 h-8" />
    </motion.a>
  );
});

FloatingWhatsApp.displayName = "FloatingWhatsApp";

export default FloatingWhatsApp;
