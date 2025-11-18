/**
 * @fileoverview Mock data - Portfolio Projects
 * @version 2.0.0
 */

import type { Project, GalleryImage } from '@/types';

export const MOCK_PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Современная гостиная в стиле минимализм',
    description: 'Полное оформление гостиной с индивидуальной мебелью. Шкаф-купе, TV-зона, диван и кресла по эскизам дизайнера.',
    category: 'living-room',
    images: [
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800',
      'https://images.unsplash.com/photo-1600210492493-0946911123ea?w=800',
    ],
    completedDate: 'Октябрь 2024',
    duration: '3 недели',
    client: 'Частный клиент',
    location: 'Москва, ЖК "Садовые кварталы"',
    tags: ['Минимализм', 'Встроенная мебель', 'Шпон дуба'],
    featured: true,
  },
  {
    id: '2',
    title: 'Спальня с гардеробной комнатой',
    description: 'Проект спальни с большой гардеробной системой. Кровать с мягким изголовьем, прикроватные тумбы и туалетный столик.',
    category: 'bedroom',
    images: [
      'https://images.unsplash.com/photo-1505693314120-0d443867891c?w=800',
      'https://images.unsplash.com/photo-1540518614846-7eded433c457?w=800',
    ],
    completedDate: 'Сентябрь 2024',
    duration: '4 недели',
    client: 'Семья Ивановых',
    location: 'Москва, Рублёвка',
    tags: ['Неоклассика', 'Натуральное дерево', 'Soft-close'],
    featured: true,
  },
  {
    id: '3',
    title: 'Кухня с островом и барной стойкой',
    description: 'Кухонный гарнитур премиум-класса с островом. Техника Miele, столешница из кварцевого агломерата.',
    category: 'kitchen',
    images: [
      'https://images.unsplash.com/photo-1556911220-bff31c812dba?w=800',
      'https://images.unsplash.com/photo-1556909212-d5b604d0c90d?w=800',
    ],
    completedDate: 'Август 2024',
    duration: '5 недель',
    client: 'Частный клиент',
    location: 'Подмосковье',
    tags: ['Модерн', 'Премиум', 'Встроенная техника'],
    featured: true,
  },
  {
    id: '4',
    title: 'Домашний офис с библиотекой',
    description: 'Рабочий кабинет со встроенными стеллажами под книги. Большой письменный стол из массива.',
    category: 'office',
    images: [
      'https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=800',
      'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=800',
    ],
    completedDate: 'Июль 2024',
    duration: '2 недели',
    location: 'Москва, Сити',
    tags: ['Классика', 'Массив', 'Библиотека'],
    featured: false,
  },
  {
    id: '5',
    title: 'Ресторан в эко-стиле',
    description: 'Комплексное оснащение ресторана. Столы, стулья, барная стойка, декоративные элементы.',
    category: 'commercial',
    images: [
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800',
      'https://images.unsplash.com/photo-1552566626-52f8b828add9?w=800',
    ],
    completedDate: 'Июнь 2024',
    duration: '6 недель',
    client: 'Ресторан "Seasons"',
    location: 'Санкт-Петербург',
    tags: ['Эко', 'HoReCa', 'Массив'],
    featured: true,
  },
  {
    id: '6',
    title: 'Детская комната с игровой зоной',
    description: 'Безопасная детская мебель по индивидуальному проекту. Кровать-чердак, игровая зона, системы хранения.',
    category: 'custom',
    images: [
      'https://images.unsplash.com/photo-1558882268-d3e8ccec44d6?w=800',
      'https://images.unsplash.com/photo-1598300188421-b9396dfa5a85?w=800',
    ],
    completedDate: 'Май 2024',
    duration: '3 недели',
    client: 'Семья Петровых',
    location: 'Москва',
    tags: ['Детская', 'Безопасность', 'Яркие цвета'],
    featured: false,
  },
];

export const GALLERY_IMAGES: GalleryImage[] = MOCK_PROJECTS.flatMap(project =>
  project.images.map((url, index) => ({
    id: `${project.id}-${index}`,
    url,
    title: project.title,
    category: project.category,
    thumbnail: url,
  }))
);
