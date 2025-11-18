/**
 * @fileoverview Client Cabinet - Order Tracker
 * @version 1.0.0
 */

'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { AnimatedBackground } from '@/components/organisms/AnimatedBackground';
import Link from 'next/link';

interface Order {
  id: string;
  title: string;
  status: string;
  progress: number;
  estimatedCompletion?: string;
  images: string[];
}

const STATUS_LABELS = {
  consultation: 'Консультация',
  design: 'Проектирование',
  production: 'Производство',
  delivery: 'Доставка',
  completed: 'Завершен',
  cancelled: 'Отменен',
};

const STATUS_COLORS = {
  consultation: 'bg-blue-500',
  design: 'bg-purple-500',
  production: 'bg-[var(--color-primary)]',
  delivery: 'bg-yellow-500',
  completed: 'bg-green-500',
  cancelled: 'bg-gray-500',
};

export default function CabinetPage() {
  const [orders, setOrders] = useState<Order[]>([]);

  // Mock data for demo
  useEffect(() => {
    setOrders([
      {
        id: '1',
        title: 'Кухонный гарнитур "Модерн"',
        status: 'production',
        progress: 65,
        estimatedCompletion: '2024-02-15',
        images: ['https://images.unsplash.com/photo-1556911220-bff31c812dba?w=400'],
      },
      {
        id: '2',
        title: 'Шкаф-купе в спальню',
        status: 'design',
        progress: 30,
        estimatedCompletion: '2024-03-01',
        images: ['https://images.unsplash.com/photo-1540518614846-7eded433c457?w=400'],
      },
    ]);
  }, []);

  return (
    <div className="min-h-screen bg-[var(--color-bg)] page-enter">
      <AnimatedBackground />
      
      <div className="max-w-7xl mx-auto px-4 py-32">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="inline-block glass-pink rounded-3xl px-8 py-4 mb-6 border border-[var(--color-primary)]/30">
            <span className="text-lg text-[var(--color-primary)] font-medium">
              🎯 Трекер изготовления мебели
            </span>
          </div>
          <h1 className="text-5xl font-bold text-white mb-4 drop-shadow-2xl">
            Личный кабинет
          </h1>
          <p className="text-white/60 text-xl">
            Следите за статусом изготовления вашей мебели в реальном времени
          </p>
        </motion.div>

        {/* Orders Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {orders.map((order, index) => (
            <motion.div
              key={order.id}
              className="glass-strong rounded-3xl p-8 border border-white/10 hover:border-[var(--color-primary)]/30 noise-texture"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              {/* Order Header */}
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2 relative z-10">
                    {order.title}
                  </h3>
                  <span className={`inline-block px-4 py-1 rounded-full text-sm font-medium text-white ${STATUS_COLORS[order.status as keyof typeof STATUS_COLORS]} relative z-10`}>
                    {STATUS_LABELS[order.status as keyof typeof STATUS_LABELS]}
                  </span>
                </div>
                <div className="text-right">
                  <p className="text-white/60 text-sm relative z-10">Заказ #{order.id}</p>
                  {order.estimatedCompletion && (
                    <p className="text-[var(--color-primary)] text-sm font-medium relative z-10">
                      До: {new Date(order.estimatedCompletion).toLocaleDateString('ru-RU')}
                    </p>
                  )}
                </div>
              </div>

              {/* Image */}
              {order.images[0] && (
                <div className="relative w-full h-48 rounded-2xl overflow-hidden mb-6">
                  <img
                    src={order.images[0]}
                    alt={order.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}

              {/* Progress Bar */}
              <div className="mb-6">
                <div className="flex justify-between mb-2">
                  <span className="text-white/80 text-sm relative z-10">Прогресс</span>
                  <span className="text-[var(--color-primary)] font-bold text-sm relative z-10">
                    {order.progress}%
                  </span>
                </div>
                <div className="h-3 bg-white/10 rounded-full overflow-hidden relative z-10">
                  <motion.div
                    className="h-full bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-light)] rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${order.progress}%` }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                  />
                </div>
              </div>

              {/* Action Button */}
              <Link href={`/cabinet/order/${order.id}`}>
                <motion.button
                  className="w-full px-6 py-3 rounded-2xl bg-[var(--color-primary)] text-white font-medium hover:bg-[var(--color-primary-light)] transition-colors shadow-lg shadow-[var(--color-primary)]/30 relative z-10"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Подробнее
                </motion.button>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Empty State */}
        {orders.length === 0 && (
          <motion.div
            className="glass rounded-3xl p-16 text-center noise-texture"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <div className="w-24 h-24 rounded-full bg-white/5 flex items-center justify-center mx-auto mb-6">
              <span className="text-6xl">📦</span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-3 relative z-10">
              У вас пока нет заказов
            </h3>
            <p className="text-white/60 mb-8 relative z-10">
              Оформите ваш первый заказ, чтобы начать отслеживать его статус
            </p>
            <Link href="/contacts">
              <motion.button
                className="px-8 py-4 rounded-2xl bg-[var(--color-primary)] text-white font-medium hover:bg-[var(--color-primary-light)] transition-colors shadow-lg shadow-[var(--color-primary)]/30 relative z-10"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Связаться с нами
              </motion.button>
            </Link>
          </motion.div>
        )}

        {/* Navigation */}
        <motion.div
          className="flex justify-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <Link href="/">
            <motion.button
              className="px-6 py-3 rounded-2xl glass-strong border border-white/20 text-white font-medium hover:border-[var(--color-primary)]/50 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              ← На главную
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
