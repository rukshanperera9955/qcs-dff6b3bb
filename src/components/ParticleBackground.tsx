import { memo, useMemo } from 'react';
import { motion } from 'framer-motion';

interface Particle {
  id: number;
  icon: string;
  size: number;
  x: number;
  y: number;
  duration: number;
  delay: number;
  opacity: number;
}

const secretarialIcons = [
  // Documents
  'M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z',
  // Stamp
  'M12,3L2,12H5V20H19V12H22L12,3M12,8.75A2.25,2.25 0 0,1 14.25,11A2.25,2.25 0 0,1 12,13.25A2.25,2.25 0 0,1 9.75,11A2.25,2.25 0 0,1 12,8.75Z',
  // Pen
  'M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z',
  // Certificate
  'M4,3C2.89,3 2,3.89 2,5V15A2,2 0 0,0 4,17H12V22L15,19L18,22V17H20A2,2 0 0,0 22,15V5C22,3.89 21.1,3 20,3H4M12,5L15,7L18,5V8.5L21,10L18,11.5V15L15,13L12,15V11.5L9,10L12,8.5V5M4,5H9V7H4V5M4,9H7V11H4V9M4,13H9V15H4V13Z',
  // Calculator
  'M7,2H17A2,2 0 0,1 19,4V20A2,2 0 0,1 17,22H7A2,2 0 0,1 5,20V4A2,2 0 0,1 7,2M7,4V8H17V4H7M7,10V12H9V10H7M11,10V12H13V10H11M15,10V12H17V10H15M7,14V16H9V14H7M11,14V16H13V14H11M15,14V16H17V14H15M7,18V20H9V18H7M11,18V20H13V18H11M15,18V20H17V18H15Z',
  // Briefcase
  'M10,2H14A2,2 0 0,1 16,4V6H20A2,2 0 0,1 22,8V19A2,2 0 0,1 20,21H4C2.89,21 2,20.1 2,19V8C2,6.89 2.89,6 4,6H8V4C8,2.89 8.89,2 10,2M14,6V4H10V6H14Z',
  // Chart
  'M22,21H2V3H4V19H6V10H10V19H12V6H16V19H18V14H22V21Z',
  // Clipboard
  'M19,3H14.82C14.4,1.84 13.3,1 12,1C10.7,1 9.6,1.84 9.18,3H5A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3M12,3A1,1 0 0,1 13,4A1,1 0 0,1 12,5A1,1 0 0,1 11,4A1,1 0 0,1 12,3Z',
];

const ParticleBackground = memo(() => {
  const particles: Particle[] = useMemo(() => {
    return Array.from({ length: 35 }, (_, i) => ({
      id: i,
      icon: secretarialIcons[i % secretarialIcons.length],
      size: Math.random() * 24 + 16,
      x: Math.random() * 100,
      y: Math.random() * 100,
      duration: Math.random() * 20 + 30,
      delay: Math.random() * 10,
      opacity: Math.random() * 0.12 + 0.06,
    }));
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, 15, -15, 0],
            rotate: [0, 10, -10, 0],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: 'easeInOut',
          }}
        >
          <svg
            width={particle.size}
            height={particle.size}
            viewBox="0 0 24 24"
            className="text-primary"
            style={{ opacity: particle.opacity }}
          >
            <path
              fill="currentColor"
              d={particle.icon}
            />
          </svg>
        </motion.div>
      ))}
      
      {/* Floating geometric shapes */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={`shape-${i}`}
          className="absolute"
          style={{
            left: `${5 + i * 6.5}%`,
            top: `${Math.random() * 80 + 10}%`,
          }}
          animate={{
            y: [0, -30, 0],
            rotate: [0, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 25 + i * 3,
            repeat: Infinity,
            delay: i * 1.5,
            ease: 'linear',
          }}
        >
          <div
            className={`${
              i % 4 === 0 
                ? 'w-4 h-4 rounded-full bg-primary/10' 
                : i % 4 === 1 
                  ? 'w-5 h-5 rotate-45 bg-gold/10' 
                  : i % 4 === 2
                    ? 'w-3 h-8 bg-teal/10 rounded-full'
                    : 'w-6 h-6 rounded-lg bg-primary/8 rotate-12'
            }`}
          />
        </motion.div>
      ))}
      
      {/* Large floating circles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={`circle-${i}`}
          className="absolute rounded-full"
          style={{
            left: `${15 + i * 15}%`,
            top: `${20 + (i % 3) * 25}%`,
            width: `${80 + i * 20}px`,
            height: `${80 + i * 20}px`,
            background: i % 2 === 0 
              ? 'radial-gradient(circle, hsl(var(--primary) / 0.06) 0%, transparent 70%)' 
              : 'radial-gradient(circle, hsl(var(--gold) / 0.06) 0%, transparent 70%)',
          }}
          animate={{
            y: [0, -20, 0],
            x: [0, 10, -10, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20 + i * 5,
            repeat: Infinity,
            delay: i * 3,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
});

ParticleBackground.displayName = 'ParticleBackground';

export default ParticleBackground;
