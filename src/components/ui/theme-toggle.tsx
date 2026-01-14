import { memo, useCallback } from "react";
import { useTheme } from "next-themes";
import { Icon } from "@iconify/react";
import { motion, AnimatePresence } from "framer-motion";

const ThemeToggle = memo(() => {
  const { setTheme, resolvedTheme } = useTheme();

  const toggleTheme = useCallback(() => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  }, [resolvedTheme, setTheme]);

  return (
    <motion.button
      onClick={toggleTheme}
      className="relative p-2.5 rounded-xl bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors"
      aria-label={`Switch to ${
        resolvedTheme === "dark" ? "light" : "dark"
      } mode`}
      whileTap={{ scale: 0.9 }}
    >
      <AnimatePresence mode="wait" initial={false}>
        {resolvedTheme === "dark" ? (
          <motion.div
            key="sun"
            initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
            animate={{ rotate: 0, opacity: 1, scale: 1 }}
            exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.2 }}
          >
            <Icon
              icon="mdi:white-balance-sunny"
              className="w-5 h-5 text-gold"
            />
          </motion.div>
        ) : (
          <motion.div
            key="moon"
            initial={{ rotate: 90, opacity: 0, scale: 0.5 }}
            animate={{ rotate: 0, opacity: 1, scale: 1 }}
            exit={{ rotate: -90, opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.2 }}
          >
            <Icon
              icon="mdi:moon-waning-crescent"
              className="w-5 h-5 text-primary-foreground"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.button>
  );
});

ThemeToggle.displayName = "ThemeToggle";

export default ThemeToggle;
