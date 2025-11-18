/**
 * @fileoverview Animated Background with Particles
 * @version 2.0.0
 */

'use client';

import { motion } from 'framer-motion';

export const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Animated Mesh Gradient */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(circle at 20% 30%, rgba(255, 107, 157, 0.15) 0%, transparent 50%),
            radial-gradient(circle at 80% 70%, rgba(255, 107, 157, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 50% 50%, rgba(255, 107, 157, 0.08) 0%, transparent 50%)
          `,
        }}
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 90, 0],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Floating Particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute rounded-full"
          style={{
            width: `${Math.random() * 6 + 2}px`,
            height: `${Math.random() * 6 + 2}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            background: `rgba(255, 107, 157, ${Math.random() * 0.3 + 0.1})`,
            filter: 'blur(1px)',
          }}
          animate={{
            y: [0, -100, 0],
            x: [0, Math.random() * 50 - 25, 0],
            opacity: [0.2, 0.8, 0.2],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: 'easeInOut',
          }}
        />
      ))}

      {/* Animated Lines */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={`line-${i}`}
          className="absolute h-px"
          style={{
            width: '200px',
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            background: `linear-gradient(90deg, transparent, rgba(255, 107, 157, 0.3), transparent)`,
          }}
          animate={{
            x: [-200, 2000],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: Math.random() * 15 + 10,
            repeat: Infinity,
            delay: i * 2,
            ease: 'linear',
          }}
        />
      ))}

      {/* Pulsing Circles */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={`circle-${i}`}
          className="absolute rounded-full border border-[var(--color-primary)]"
          style={{
            width: '300px',
            height: '300px',
            left: `${20 + i * 30}%`,
            top: `${30 + i * 20}%`,
            borderWidth: '1px',
          }}
          animate={{
            scale: [1, 2, 1],
            opacity: [0.2, 0, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            delay: i * 2,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
};
