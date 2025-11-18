/**
 * @fileoverview Footer Component (Atomic Design: Organism)
 * @version 1.0.0
 */

'use client';

import { motion } from 'framer-motion';
import { SITE_CONFIG, NAVIGATION_ITEMS, SOCIAL_LINKS } from '@/lib/constants';
import { smoothScrollTo } from '@/lib/utils';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="glass-strong border-t border-white/40 mt-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-3xl">✨</span>
              <span className="text-xl font-bold text-white">
                {SITE_CONFIG.name}
              </span>
            </div>
            <p className="text-white/80 text-sm">
              Индивидуальное производство мебели премиум-класса с 2012 года
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold text-white mb-4">Навигация</h3>
            <ul className="space-y-2">
              {NAVIGATION_ITEMS.map((item) => (
                <li key={item.href}>
                  <button
                    onClick={() => {
                      if (item.href.startsWith('#')) {
                        smoothScrollTo(item.href.substring(1));
                      }
                    }}
                    className="text-white/80 hover:text-white ios-transition text-sm"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacts */}
          <div>
            <h3 className="font-semibold text-white mb-4">Контакты</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href={`tel:${SITE_CONFIG.phone}`}
                  className="text-white/80 hover:text-white ios-transition"
                >
                  {SITE_CONFIG.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="text-white/80 hover:text-white ios-transition"
                >
                  {SITE_CONFIG.email}
                </a>
              </li>
              <li className="text-white/80">{SITE_CONFIG.address}</li>
              <li className="text-white/70 text-xs mt-2">
                {SITE_CONFIG.workingHours}
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-semibold text-white mb-4">Соцсети</h3>
            <div className="flex gap-3">
              <motion.a
                href={SOCIAL_LINKS.vk}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#0077FF] rounded-xl flex items-center justify-center text-white ios-button"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                aria-label="VK"
              >
                VK
              </motion.a>
              <motion.a
                href={SOCIAL_LINKS.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#0088cc] rounded-xl flex items-center justify-center text-white ios-button"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Telegram"
              >
                TG
              </motion.a>
              <motion.a
                href={SOCIAL_LINKS.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#25D366] rounded-xl flex items-center justify-center text-white ios-button"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                aria-label="WhatsApp"
              >
                WA
              </motion.a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/30 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-white/80 mb-4">
            <p>© {currentYear} {SITE_CONFIG.name}. Все права защищены.</p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <button className="hover:text-white ios-transition">
                Политика конфиденциальности
              </button>
              <button className="hover:text-white ios-transition">
                Договор оферты
              </button>
            </div>
          </div>
          <p className="text-center text-white/40 text-xs">
            Входит в состав группы компаний{' '}
            <span className="text-[var(--color-primary)] font-semibold">ARTE GROUP</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
