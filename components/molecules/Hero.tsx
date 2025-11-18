/**
 * @fileoverview Hero Section - iOS 18 Glass Style
 * @version 2.0.0
 */

'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/atoms/Button';
import { smoothScrollTo } from '@/lib/utils';

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Pink Glow Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 right-20 w-96 h-96 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(255,107,157,0.3) 0%, transparent 70%)',
            filter: 'blur(80px)',
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-20 left-20 w-96 h-96 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(255,107,157,0.2) 0%, transparent 70%)',
            filter: 'blur(80px)',
          }}
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1,
          }}
        />
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="space-y-8"
        >
          {/* Main Title with Glass Background */}
          <motion.div
            className="inline-block glass-pink rounded-3xl px-8 py-4 mb-8 border border-[var(--color-primary)]/30"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <span className="text-lg text-[var(--color-primary)] font-medium">
              ✨ Индивидуальное производство мебели
            </span>
          </motion.div>

          <motion.h1
            className="text-6xl sm:text-7xl lg:text-8xl font-bold leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <span className="text-white">Мебель вашей</span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-light)]">
              мечты
            </span>
          </motion.h1>

          {/* Subtitle with Glass */}
          <motion.div
            className="glass rounded-3xl px-8 py-6 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <p className="text-xl sm:text-2xl text-white/95 font-light">
              От эскиза до воплощения — создаём уникальные интерьеры
              <br />
              премиум-класса по вашему проекту
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            <motion.a
              href="/portfolio"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                variant="primary"
                size="lg"
                className="bg-[var(--color-primary)] hover:bg-[var(--color-primary-light)] border-none text-white shadow-lg shadow-[var(--color-primary)]/30"
              >
                Смотреть портфолио
              </Button>
            </motion.a>
            
            <motion.a
              href="/contacts"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                variant="glass"
                size="lg"
                className="text-white border border-white/30 hover:border-[var(--color-primary)]/50 hover:glass-pink"
              >
                Заказать проект
              </Button>
            </motion.a>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="grid grid-cols-3 gap-4 max-w-3xl mx-auto pt-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
          >
            {[
              { value: '500+', label: 'Проектов' },
              { value: '12', label: 'Лет опыта' },
              { value: '98%', label: 'Довольных клиентов' },
            ].map((stat, i) => (
              <motion.div
                key={i}
                className="glass-strong rounded-3xl p-6 border border-white/10 hover:border-[var(--color-primary)]/30"
                whileHover={{ scale: 1.05, y: -10 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              >
                <motion.div 
                  className="text-4xl font-bold text-[var(--color-primary)] mb-2"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: 'spring', stiffness: 400 }}
                >
                  {stat.value}
                </motion.div>
                <div className="text-sm text-white/80">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 rounded-full glass-strong border border-[var(--color-primary)]/30 flex justify-center p-2">
          <motion.div
            className="w-1 h-3 bg-[var(--color-primary)] rounded-full"
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
};
