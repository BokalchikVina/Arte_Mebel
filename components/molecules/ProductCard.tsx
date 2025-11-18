/**
 * @fileoverview Product Card Component (Atomic Design: Molecule)
 * @version 1.0.0
 */

'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Card } from '@/components/atoms/Card';
import { Button } from '@/components/atoms/Button';
import { Badge } from '@/components/atoms/Badge';
import { formatPrice } from '@/lib/utils';
import type { Product } from '@/types';

export interface ProductCardProps {
  product: Product;
  onProductClick?: (product: Product) => void;
  onOrderClick?: (product: Product) => void;
}

/**
 * Product Card with iOS-style glass morphism
 * Displays product information with smooth animations
 */
export const ProductCard = ({
  product,
  onProductClick,
  onOrderClick,
}: ProductCardProps) => {
  return (
    <Card
      variant="glass"
      padding="none"
      hoverable
      onClick={() => onProductClick?.(product)}
      className="group relative overflow-hidden"
    >
      {/* Product Image */}
      <div className="relative h-64 overflow-hidden">
        <Image
          src={product.images[0] || '/placeholder.jpg'}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-110 ios-transition"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        
        {/* Badges */}
        <div className="absolute top-4 right-4 flex flex-col gap-2">
          {!product.inStock && (
            <Badge variant="error" size="sm">
              Под заказ
            </Badge>
          )}
          {product.oldPrice && (
            <Badge variant="success" size="sm">
              Скидка
            </Badge>
          )}
        </div>
      </div>

      {/* Product Info */}
      <div className="p-6 space-y-4">
        <div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            {product.name}
          </h3>
          <p className="text-sm text-gray-600 line-clamp-2">
            {product.description}
          </p>
        </div>

        {/* Rating */}
        <div className="flex items-center gap-2">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <span
                key={i}
                className={`text-lg ${
                  i < Math.floor(product.rating)
                    ? 'text-yellow-400'
                    : 'text-gray-300'
                }`}
              >
                ★
              </span>
            ))}
          </div>
          <span className="text-sm text-gray-500">
            ({product.reviewsCount})
          </span>
        </div>

        {/* Price */}
        <div className="flex items-end gap-2">
          <span className="text-2xl font-bold text-gray-900">
            {formatPrice(product.price)}
          </span>
          {product.oldPrice && (
            <span className="text-lg text-gray-400 line-through">
              {formatPrice(product.oldPrice)}
            </span>
          )}
        </div>

        {/* Action Button */}
        <Button
          variant="primary"
          size="md"
          className="w-full"
          onClick={(e) => {
            e.stopPropagation();
            onOrderClick?.(product);
          }}
        >
          Заказать
        </Button>
      </div>
    </Card>
  );
};
