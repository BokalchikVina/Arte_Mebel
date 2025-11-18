/**
 * @fileoverview Type definitions for Furniture Store
 * @version 1.0.0
 */

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  oldPrice?: number;
  category: ProductCategory;
  images: string[];
  materials: string[];
  dimensions: Dimensions;
  customizable: boolean;
  inStock: boolean;
  rating: number;
  reviewsCount: number;
}

export interface Dimensions {
  width: number;
  height: number;
  depth: number;
  unit: 'cm' | 'mm' | 'm';
}

export type ProductCategory = 
  | 'sofas'
  | 'chairs'
  | 'tables'
  | 'beds'
  | 'wardrobes'
  | 'kitchen'
  | 'office'
  | 'custom';

export interface ContactForm {
  name: string;
  phone: string;
  email?: string;
  message: string;
  productId?: string;
}

export interface YandexMetrikaConfig {
  id: number;
  clickmap: boolean;
  trackLinks: boolean;
  accurateTrackBounce: boolean;
  webvisor: boolean;
}
