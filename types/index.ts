/**
 * @fileoverview Type definitions for Furniture Store
 * @version 2.0.0
 */

export interface Project {
  id: string;
  title: string;
  description: string;
  category: ProjectCategory;
  images: string[];
  completedDate: string;
  duration: string;
  client?: string;
  location?: string;
  tags: string[];
  featured: boolean;
}

export type ProjectCategory = 
  | 'living-room'
  | 'bedroom'
  | 'kitchen'
  | 'office'
  | 'commercial'
  | 'custom';

export interface ContactForm {
  name: string;
  phone: string;
  email?: string;
  message: string;
  projectType?: string;
}

export interface YandexMetrikaConfig {
  id: number;
  clickmap: boolean;
  trackLinks: boolean;
  accurateTrackBounce: boolean;
  webvisor: boolean;
}

export interface GalleryImage {
  id: string;
  url: string;
  title: string;
  category: ProjectCategory;
  thumbnail?: string;
}
