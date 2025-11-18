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
  { label: 'Портфолио', href: '#portfolio' },
  { label: 'О нас', href: '#about' },
  { label: 'Контакты', href: '#contacts' },
];

export const PROJECT_CATEGORIES = [
  { id: 'all', name: 'Все проекты', icon: '✨' },
  { id: 'living-room', name: 'Гостиные', icon: '🛋️' },
  { id: 'bedroom', name: 'Спальни', icon: '🛏️' },
  { id: 'kitchen', name: 'Кухни', icon: '🍳' },
  { id: 'office', name: 'Кабинеты', icon: '💼' },
  { id: 'commercial', name: 'Коммерческие', icon: '🏢' },
];
