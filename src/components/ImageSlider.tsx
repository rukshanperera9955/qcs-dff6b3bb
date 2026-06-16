import { useState, useEffect, useCallback, memo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Icon } from "@iconify/react";

// Dynamically load all images in the src/assets/slider folder
const imageModules = import.meta.glob<{ default: string }>(
  "../assets/slider/*.{jpg,jpeg,png,webp,gif}",
  { eager: true }
);

const slides = Object.values(imageModules).map((module, index) => {
  const src = module.default;
  const captions = [
    "Expert Corporate Secretarial Solutions",
    "Trusted by Businesses Across Sri Lanka",
    "From Formation to Full Compliance",
  ];
  return {
    src,
    alt: `Slider Image ${index + 1}`,
    caption: captions[index] || "Reliable Business Support Services",
  };
});


const AUTOPLAY_DELAY = 4500;

const ImageSlider = memo(() => {
  if (slides.length === 0) {
    return null;
  }

  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const prev = useCallback(() => {
    setCurrent((c) => (c - 1 + slides.length) % slides.length);
  }, []);

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % slides.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(next, AUTOPLAY_DELAY);
    return () => clearInterval(timer);
  }, [isPaused, next]);

  return (
    <div
      className="relative w-full overflow-hidden bg-black"
      style={{ height: "clamp(220px, 45vw, 520px)" }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Slides */}
      <AnimatePresence initial={false} mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -60 }}
          transition={{ duration: 0.55, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <img
            src={slides[current].src}
            alt={slides[current].alt}
            className="w-full h-full object-cover"
          />
          {/* Dark gradient overlay for caption readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
        </motion.div>
      </AnimatePresence>

      {/* Caption */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`caption-${current}`}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="absolute bottom-8 left-0 right-0 text-center px-4"
        >
          <p className="text-white font-heading font-semibold text-lg md:text-2xl drop-shadow-lg">
            {slides[current].caption}
          </p>
        </motion.div>
      </AnimatePresence>

      {/* Prev / Next arrows */}
      <button
        onClick={prev}
        aria-label="Previous slide"
        className="absolute left-3 md:left-5 top-1/2 -translate-y-1/2 w-9 h-9 md:w-11 md:h-11 flex items-center justify-center rounded-full bg-black/40 hover:bg-black/60 text-white transition-all duration-200 backdrop-blur-sm"
      >
        <Icon icon="mdi:chevron-left" className="w-6 h-6" />
      </button>
      <button
        onClick={next}
        aria-label="Next slide"
        className="absolute right-3 md:right-5 top-1/2 -translate-y-1/2 w-9 h-9 md:w-11 md:h-11 flex items-center justify-center rounded-full bg-black/40 hover:bg-black/60 text-white transition-all duration-200 backdrop-blur-sm"
      >
        <Icon icon="mdi:chevron-right" className="w-6 h-6" />
      </button>

      {/* Dot indicators */}
      <div className="absolute bottom-3 left-0 right-0 flex items-center justify-center gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`transition-all duration-300 rounded-full ${
              i === current
                ? "w-6 h-2 bg-white"
                : "w-2 h-2 bg-white/50 hover:bg-white/80"
            }`}
          />
        ))}
      </div>

      {/* Progress bar */}
      {!isPaused && (
        <motion.div
          key={`progress-${current}`}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: AUTOPLAY_DELAY / 1000, ease: "linear" }}
          style={{ transformOrigin: "left" }}
          className="absolute bottom-0 left-0 right-0 h-0.5 bg-gold opacity-80"
        />
      )}
    </div>
  );
});

ImageSlider.displayName = "ImageSlider";

export default ImageSlider;
