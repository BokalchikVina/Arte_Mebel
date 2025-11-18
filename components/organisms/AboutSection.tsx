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
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent to-white/50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Почему выбирают нас
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Мы создаём мебель, которая служит десятилетиями
          </p>
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
              <Card variant="glass" padding="lg" hoverable>
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          className="glass rounded-3xl p-8 md:p-12"
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
                <div className="text-4xl md:text-5xl font-bold text-ios-blue mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 text-sm md:text-base">
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
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Как мы работаем
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Консультация', desc: 'Обсуждаем ваши пожелания' },
              { step: '02', title: 'Замеры', desc: 'Выезжаем и делаем замеры' },
              { step: '03', title: 'Производство', desc: 'Изготавливаем мебель' },
              { step: '04', title: 'Доставка', desc: 'Привозим и собираем' },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="relative"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
              >
                <Card variant="glass" padding="lg" className="h-full">
                  <div className="text-5xl font-bold text-ios-blue/20 mb-4">
                    {item.step}
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">
                    {item.title}
                  </h4>
                  <p className="text-gray-600">{item.desc}</p>
                </Card>
                
                {index < 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-ios-blue to-transparent" />
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
