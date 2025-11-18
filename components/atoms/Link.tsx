/**
 * @fileoverview Animated Link Component
 * @version 2.0.0
 */

'use client';

import NextLink from 'next/link';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

export interface LinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'button' | 'nav';
}

/**
 * Animated Link with smooth transitions
 */
export const Link = ({ href, children, className, variant = 'default' }: LinkProps) => {
  const variants = {
    default: 'hover:text-[var(--color-primary)] transition-colors',
    button: 'px-8 py-4 rounded-2xl glass-strong hover:glass-pink border border-white/10 hover:border-[var(--color-primary)]/30 transition-all',
    nav: 'text-white/80 hover:text-white transition-colors',
  };

  return (
    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
      <NextLink href={href} className={cn(variants[variant], className)}>
        {children}
      </NextLink>
    </motion.div>
  );
};
