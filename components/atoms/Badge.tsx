/**
 * @fileoverview iOS-style Badge Component (Atomic Design: Atom)
 * @version 1.0.0
 */

'use client';

import { HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: 'primary' | 'success' | 'warning' | 'error' | 'glass';
  size?: 'sm' | 'md' | 'lg';
}

/**
 * iOS-inspired Badge component for labels and tags
 */
export const Badge = ({
  children,
  variant = 'primary',
  size = 'md',
  className,
  ...props
}: BadgeProps) => {
  const baseStyles = cn(
    'inline-flex items-center justify-center',
    'font-medium rounded-full',
    'ios-transition'
  );

  const variants = {
    primary: 'bg-ios-blue text-white',
    success: 'bg-green-500 text-white',
    warning: 'bg-yellow-500 text-white',
    error: 'bg-red-500 text-white',
    glass: 'glass text-gray-900',
  };

  const sizes = {
    sm: 'px-2 py-0.5 text-xs',
    md: 'px-3 py-1 text-sm',
    lg: 'px-4 py-1.5 text-base',
  };

  return (
    <span
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </span>
  );
};
