/**
 * @fileoverview Application constants and configuration
 * @version 1.0.0
 */

export const SITE_CONFIG = {
  name: 'Мебель на Заказ',
  title: 'Мебель на Заказ — Индивидуальное производство мебели',
  description: 'Изготовление мебели на заказ по индивидуальным размерам. Современный дизайн, качественные материалы, быстрая доставка.',
  url: 'https://furniture-store.ru',
  ogImage: '/og-image.jpg',
  phone: '+7 (999) 123-45-67',
  email: 'info@furniture-store.ru',
  address: 'Москва, ул. Примерная, д. 1',
  workingHours: 'Пн-Пт: 9:00-20:00, Сб-Вс: 10:00-18:00',
};

export const YANDEX_METRIKA_ID = 12345678; // Замените на ваш ID

export const SOCIAL_LINKS = {
  vk: 'https://vk.com/yourpage',
  telegram: 'https://t.me/yourpage',
  whatsapp: 'https://wa.me/79991234567',
};

export const NAVIGATION_ITEMS = [
  { label: 'Главная', href: '/' },
  { label: 'Каталог', href: '#catalog' },
  { label: 'О нас', href: '#about' },
  { label: 'Контакты', href: '#contacts' },
];

export const PRODUCT_CATEGORIES = [
  { id: 'sofas', name: 'Диваны', icon: '🛋️' },
  { id: 'chairs', name: 'Стулья', icon: '🪑' },
  { id: 'tables', name: 'Столы', icon: '🪑' },
  { id: 'beds', name: 'Кровати', icon: '🛏️' },
  { id: 'wardrobes', name: 'Шкафы', icon: '🚪' },
  { id: 'kitchen', name: 'Кухни', icon: '🍳' },
  { id: 'office', name: 'Офисная', icon: '💼' },
  { id: 'custom', name: 'Под заказ', icon: '✨' },
];
