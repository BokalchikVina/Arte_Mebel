/**
 * @fileoverview About Section Component (Atomic Design: Organism)
 * @version 1.0.0
 */

'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/atoms/Card';

const features = [
  {
    icon: '🏭',
    title: 'Собственное производство',
    description: 'Контроль качества на каждом этапе изготовления мебели',
  },
  {
    icon: '🎨',
    title: 'Индивидуальный дизайн',
    description: 'Разработаем уникальный проект под ваши требования',
  },
  {
    icon: '⚡',
    title: 'Быстрые сроки',
    description: 'Изготовление и доставка от 14 рабочих дней',
  },
  {
    icon: '🛡️',
    title: 'Гарантия 5 лет',
    description: 'Уверенность в качестве и долговечности нашей мебели',
  },
  {
    icon: '🚚',
    title: 'Доставка и сборка',
    description: 'Бесплатная доставка и профессиональная сборка',
  },
  {
    icon: '💰',
    title: 'Выгодные цены',
    description: 'Работаем без посредников — экономия до 40%',
  },
];

const stats = [
  { value: '12+', label: 'лет на рынке' },
  { value: '5000+', label: 'довольных клиентов' },
  { value: '98%', label: 'рекомендуют нас' },
  { value: '24/7', label: 'поддержка' },
];

export const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-40 left-20 w-72 h-72 bg-pink-400/20 rounded-full blur-3xl" />
        <div className="absolute bottom-40 right-20 w-72 h-72 bg-cyan-400/20 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-block glass-strong rounded-full px-6 py-2 mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <span className="text-white/90 font-medium">💎 О компании</span>
          </motion.div>

          <h2 className="text-5xl sm:text-6xl font-bold text-white mb-6"
              style={{ textShadow: '0 4px 30px rgba(0, 0, 0, 0.3)' }}>
            Почему выбирают нас
          </h2>

          <div className="glass-strong rounded-3xl px-8 py-4 inline-block">
            <p className="text-xl text-white/90">
              Создаём мебель, которая служит десятилетиями
            </p>
          </div>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card variant="glass" padding="lg" hoverable className="glass-strong border-2 border-white/30">
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-white/80">{feature.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          className="glass-strong rounded-3xl p-8 md:p-12 border-2 border-white/30"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-white/80 text-sm md:text-base">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Process */}
        <motion.div
          className="mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="glass-strong rounded-full px-6 py-2 mb-8 inline-block">
            <h3 className="text-2xl font-bold text-white text-center">
              🔄 Как мы работаем
            </h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-12">
            {[
              { step: '01', title: 'Консультация', desc: 'Обсуждаем ваши пожелания', icon: '💬' },
              { step: '02', title: 'Дизайн-проект', desc: 'Создаём 3D визуализацию', icon: '📐' },
              { step: '03', title: 'Производство', desc: 'Изготавливаем мебель', icon: '🔨' },
              { step: '04', title: 'Установка', desc: 'Доставляем и монтируем', icon: '🚚' },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                whileHover={{ y: -10 }}
              >
                <Card variant="glass" padding="lg" className="h-full glass-strong border-2 border-white/30">
                  <div className="text-5xl mb-4">{item.icon}</div>
                  <div className="text-4xl font-bold text-white/40 mb-4">
                    {item.step}
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2">
                    {item.title}
                  </h4>
                  <p className="text-white/80">{item.desc}</p>
                </Card>
                
                {index < 3 && (
                  <motion.div 
                    className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-white/60 to-transparent"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.15 + 0.3 }}
                  />
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
