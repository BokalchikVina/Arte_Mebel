/**
 * @fileoverview iOS-style Glass Card Component (Atomic Design: Atom)
 * @version 1.0.0
 */

'use client';

import { HTMLAttributes, forwardRef } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'glass' | 'solid' | 'outline';
  hoverable?: boolean;
  padding?: 'none' | 'sm' | 'md' | 'lg';
}

/**
 * iOS-inspired Card component with glass morphism
 * Used as a base for product cards, info blocks, etc.
 */
export const Card = forwardRef<HTMLDivElement, CardProps>(
  (
    {
      children,
      variant = 'glass',
      hoverable = false,
      padding = 'md',
      className,
      onClick,
      ...props
    },
    ref
  ) => {
    const baseStyles = cn(
      'rounded-3xl ios-transition',
      'overflow-hidden'
    );

    const variants = {
      glass: 'glass',
      solid: 'bg-white shadow-lg',
      outline: 'border-2 border-gray-200 bg-transparent',
    };

    const paddings = {
      none: '',
      sm: 'p-4',
      md: 'p-6',
      lg: 'p-8',
    };

    const hoverStyles = hoverable ? 'ios-card cursor-pointer' : '';

    return (
      <motion.div
        ref={ref}
        onClick={onClick}
        className={cn(
          baseStyles,
          variants[variant],
          paddings[padding],
          hoverStyles,
          className
        )}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        {children}
      </motion.div>
    );
  }
);

Card.displayName = 'Card';
