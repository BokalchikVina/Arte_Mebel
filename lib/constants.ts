/**
 * @fileoverview Application constants and configuration
 * @version 1.0.0
 */

export const SITE_CONFIG = {
  name: 'Arte Mebel',
  title: 'Arte Mebel — Индивидуальное производство мебели премиум-класса',
  description: 'Arte Mebel - искусство в каждой детали. Изготовление мебели на заказ по индивидуальным размерам. Современный дизайн, качественные материалы, быстрая доставка.',
  url: 'https://artemebel.ru',
  ogImage: '/og-image.jpg',
  phone: '8 982 926 82 42',
  email: 'arte72@yandex.ru',
  address: 'Тюмень, Россия',
  workingHours: 'Пн-Пт: 9:00-20:00, Сб-Вс: 10:00-18:00',
};

export const YANDEX_METRIKA_ID = 12345678; // Замените на ваш ID

export const SOCIAL_LINKS = {
  vk: 'https://vk.com/artemebel',
  telegram: 'https://t.me/artemebel',
  whatsapp: 'https://wa.me/79829268242',
};

export const NAVIGATION_ITEMS = [
  { label: 'Главная', href: '/' },
  { label: 'Портфолио', href: '/portfolio' },
  { label: 'О нас', href: '/about' },
  { label: 'Контакты', href: '/contacts' },
];

export const PROJECT_CATEGORIES = [
  { id: 'all', name: 'Все проекты', icon: '✨' },
  { id: 'living-room', name: 'Гостиные', icon: '🛋️' },
  { id: 'bedroom', name: 'Спальни', icon: '🛏️' },
  { id: 'kitchen', name: 'Кухни', icon: '🍳' },
  { id: 'office', name: 'Кабинеты', icon: '💼' },
  { id: 'commercial', name: 'Коммерческие', icon: '🏢' },
];
