/**
 * @fileoverview Catalog Section Component (Atomic Design: Organism)
 * @version 1.0.0
 */

'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ProductCard } from '@/components/molecules/ProductCard';
import { Button } from '@/components/atoms/Button';
import { PRODUCT_CATEGORIES } from '@/lib/constants';
import { MOCK_PRODUCTS } from '@/lib/mockData';
import type { Product, ProductCategory } from '@/types';

export const CatalogSection = () => {
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory | 'all'>('all');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const filteredProducts =
    selectedCategory === 'all'
      ? MOCK_PRODUCTS
      : MOCK_PRODUCTS.filter((p) => p.category === selectedCategory);

  const handleOrderClick = (product: Product) => {
    // Yandex Metrika goal
    if (typeof window !== 'undefined' && (window as any).ym) {
      (window as any).ym(12345678, 'reachGoal', 'product_order_click');
    }
    setSelectedProduct(product);
    // Scroll to contact form
    const contactsSection = document.getElementById('contacts');
    if (contactsSection) {
      contactsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="catalog" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Наш каталог
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Выберите категорию и найдите идеальную мебель для вашего дома
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          className="flex flex-wrap gap-3 justify-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Button
            variant={selectedCategory === 'all' ? 'primary' : 'glass'}
            size="md"
            onClick={() => setSelectedCategory('all')}
          >
            Все категории
          </Button>
          {PRODUCT_CATEGORIES.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? 'primary' : 'glass'}
              size="md"
              onClick={() => setSelectedCategory(category.id as ProductCategory)}
              leftIcon={<span className="text-lg">{category.icon}</span>}
            >
              {category.name}
            </Button>
          ))}
        </motion.div>

        {/* Products Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          layout
        >
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              layout
            >
              <ProductCard
                product={product}
                onOrderClick={handleOrderClick}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <motion.div
            className="text-center py-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Товары не найдены
            </h3>
            <p className="text-gray-600">
              Попробуйте выбрать другую категорию
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
};
