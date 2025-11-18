/**
 * @fileoverview Admin Panel Types
 * @version 1.0.0
 */

export interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  images: string[];
  materials: string[];
  dimensions?: string;
  completionDate: string;
  duration?: string;
  client?: string;
  location?: string;
  tags: string[];
  featured: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface Order {
  id: string;
  userId: string;
  projectId?: string;
  title: string;
  description: string;
  status: 'consultation' | 'design' | 'production' | 'delivery' | 'completed' | 'cancelled';
  progress: number; // 0-100
  images: string[];
  materials: string[];
  dimensions?: string;
  estimatedCompletion?: string;
  notes?: string;
  createdAt: string;
  updatedAt: string;
  timeline: OrderTimeline[];
}

export interface OrderTimeline {
  status: Order['status'];
  date: string;
  note?: string;
}

export interface User {
  id: string;
  email: string;
  name: string;
  phone?: string;
  role: 'client' | 'admin';
  createdAt: string;
}

export interface SiteSettings {
  companyName: string;
  companyGroup: string;
  phone: string;
  email: string;
  address: string;
  workingHours: string;
  socialLinks: {
    vk: string;
    telegram: string;
    whatsapp: string;
  };
  heroImages: string[];
  aboutImages: string[];
}
