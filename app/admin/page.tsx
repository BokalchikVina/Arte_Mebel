/**
 * @fileoverview Admin Dashboard
 * @version 1.0.0
 */

'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function AdminPage() {
  return (
    <div className="min-h-screen bg-[var(--color-bg)] page-enter">
      <div className="max-w-7xl mx-auto px-4 py-20">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-5xl font-bold text-white mb-4">
            Админ Панель
          </h1>
          <p className="text-white/60 text-xl">
            Управление контентом сайта Arte Mebel
          </p>
        </motion.div>

        {/* Dashboard Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Projects */}
          <Link href="/admin/projects">
            <motion.div
              className="glass-strong rounded-3xl p-8 cursor-pointer border border-white/10 hover:border-[var(--color-primary)]/50 noise-texture"
              whileHover={{ scale: 1.05, y: -10 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <div className="w-16 h-16 rounded-2xl bg-[var(--color-primary)] flex items-center justify-center mb-6 shadow-lg shadow-[var(--color-primary)]/30">
                <span className="text-3xl">📁</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2 relative z-10">
                Проекты
              </h3>
              <p className="text-white/60 relative z-10">
                Управление портфолио проектов
              </p>
            </motion.div>
          </Link>

          {/* Orders */}
          <Link href="/admin/orders">
            <motion.div
              className="glass-strong rounded-3xl p-8 cursor-pointer border border-white/10 hover:border-[var(--color-primary)]/50 noise-texture"
              whileHover={{ scale: 1.05, y: -10 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <div className="w-16 h-16 rounded-2xl bg-[var(--color-primary)] flex items-center justify-center mb-6 shadow-lg shadow-[var(--color-primary)]/30">
                <span className="text-3xl">📦</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2 relative z-10">
                Заказы
              </h3>
              <p className="text-white/60 relative z-10">
                Трекинг и управление заказами
              </p>
            </motion.div>
          </Link>

          {/* Settings */}
          <Link href="/admin/settings">
            <motion.div
              className="glass-strong rounded-3xl p-8 cursor-pointer border border-white/10 hover:border-[var(--color-primary)]/50 noise-texture"
              whileHover={{ scale: 1.05, y: -10 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <div className="w-16 h-16 rounded-2xl bg-[var(--color-primary)] flex items-center justify-center mb-6 shadow-lg shadow-[var(--color-primary)]/30">
                <span className="text-3xl">⚙️</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2 relative z-10">
                Настройки
              </h3>
              <p className="text-white/60 relative z-10">
                Соцсети, контакты, изображения
              </p>
            </motion.div>
          </Link>
        </div>

        {/* Quick Actions */}
        <motion.div
          className="mt-12 glass rounded-3xl p-8 noise-texture"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h2 className="text-2xl font-bold text-white mb-6 relative z-10">
            Быстрые действия
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link href="/admin/projects/new">
              <motion.button
                className="w-full px-6 py-4 rounded-2xl bg-[var(--color-primary)] text-white font-medium hover:bg-[var(--color-primary-light)] transition-colors shadow-lg shadow-[var(--color-primary)]/30"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                ➕ Добавить проект
              </motion.button>
            </Link>
            
            <Link href="/">
              <motion.button
                className="w-full px-6 py-4 rounded-2xl glass-strong border border-white/20 text-white font-medium hover:border-[var(--color-primary)]/50 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                🌐 Открыть сайт
              </motion.button>
            </Link>
            
            <Link href="/cabinet">
              <motion.button
                className="w-full px-6 py-4 rounded-2xl glass-strong border border-white/20 text-white font-medium hover:border-[var(--color-primary)]/50 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                👤 Личный кабинет
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
