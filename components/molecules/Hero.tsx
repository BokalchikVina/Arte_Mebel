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
      {/* Animated Glass Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full glass-strong"
            style={{
              width: `${200 + i * 80}px`,
              height: `${200 + i * 80}px`,
              left: `${15 + i * 15}%`,
              top: `${10 + i * 12}%`,
            }}
            animate={{
              y: [0, -40, 0],
              x: [0, 30, 0],
              scale: [1, 1.15, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 10 + i * 2,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 0.5,
            }}
          />
        ))}
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
            className="inline-block glass-strong rounded-3xl px-8 py-4 mb-8"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <span className="text-lg text-white/90 font-medium">
              ✨ Индивидуальное производство мебели
            </span>
          </motion.div>

          <motion.h1
            className="text-6xl sm:text-7xl lg:text-8xl font-bold text-white leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            style={{
              textShadow: '0 4px 30px rgba(0, 0, 0, 0.3)',
            }}
          >
            Мебель вашей
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-200 to-purple-200">
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
            <Button
              variant="primary"
              size="lg"
              onClick={() => smoothScrollTo('portfolio')}
              className="glass-strong border-2 border-white/30 text-white hover:scale-105"
            >
              Смотреть портфолио
            </Button>
            
            <Button
              variant="glass"
              size="lg"
              onClick={() => smoothScrollTo('contacts')}
              className="text-white border-2 border-white/30 hover:glass-strong"
            >
              Заказать проект
            </Button>
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
                className="glass-strong rounded-3xl p-6"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <div className="text-4xl font-bold text-white mb-2">
                  {stat.value}
                </div>
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
        <div className="w-6 h-10 rounded-full glass-strong border-2 border-white/40 flex justify-center p-2">
          <motion.div
            className="w-1 h-3 bg-white/80 rounded-full"
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
};
