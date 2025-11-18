/**
 * @fileoverview Navigation Component (Atomic Design: Molecule)
 * @version 1.0.0
 */

'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/atoms/Button';
import { NAVIGATION_ITEMS, SITE_CONFIG } from '@/lib/constants';
import { smoothScrollTo } from '@/lib/utils';

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    if (href.startsWith('#')) {
      const elementId = href.substring(1);
      smoothScrollTo(elementId);
    }
    setIsMobileMenuOpen(false);
  };

  const isActive = (href: string) => {
    if (typeof window === 'undefined') return false;
    return window.location.pathname === href || 
           (href !== '/' && window.location.pathname.startsWith(href));
  };

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 ios-transition ${
          isScrolled ? 'glass-strong shadow-lg' : 'glass-subtle'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 100, damping: 20 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <motion.div
              className="flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="text-3xl">✨</span>
              <span className="text-xl font-bold text-white drop-shadow-lg">
                {SITE_CONFIG.name}
              </span>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {NAVIGATION_ITEMS.map((item, index) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  className={`font-medium ios-transition relative ${
                    isActive(item.href) 
                      ? 'text-[var(--color-primary)]' 
                      : 'text-white/80 hover:text-white'
                  }`}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.label}
                  {isActive(item.href) && (
                    <motion.div
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[var(--color-primary)]"
                      layoutId="activeNav"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </motion.a>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden md:block">
              <motion.a
                href="tel:+79829268242"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="primary"
                  size="md"
                  className="bg-[var(--color-primary)] hover:bg-[var(--color-primary-light)] border-none shadow-lg shadow-[var(--color-primary)]/30"
                >
                  📞 Позвонить
                </Button>
              </motion.a>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              className="md:hidden p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              whileTap={{ scale: 0.95 }}
            >
              <div className="w-6 h-5 flex flex-col justify-between">
                <motion.span
                  className="w-full h-0.5 bg-gray-900 rounded-full"
                  animate={isMobileMenuOpen ? { rotate: 45, y: 9 } : { rotate: 0, y: 0 }}
                />
                <motion.span
                  className="w-full h-0.5 bg-gray-900 rounded-full"
                  animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                />
                <motion.span
                  className="w-full h-0.5 bg-gray-900 rounded-full"
                  animate={isMobileMenuOpen ? { rotate: -45, y: -9 } : { rotate: 0, y: 0 }}
                />
              </div>
            </motion.button>
          </div>
        </div>
      </motion.nav>
      
      {/* Spacer for fixed nav */}
      <div className="h-24" />

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
              onClick={() => setIsMobileMenuOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            {/* Menu */}
            <motion.div
              className="absolute top-20 left-4 right-4 glass-strong rounded-3xl p-6 space-y-4"
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ type: 'spring', damping: 20 }}
            >
              {NAVIGATION_ITEMS.map((item) => (
                <motion.button
                  key={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className="block w-full text-left text-lg font-medium text-white p-4 rounded-2xl hover:glass-subtle ios-transition"
                  whileTap={{ scale: 0.95 }}
                >
                  {item.label}
                </motion.button>
              ))}
              <Button
                variant="primary"
                size="lg"
                className="w-full"
                onClick={() => handleNavClick('#contacts')}
              >
                Заказать звонок
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
