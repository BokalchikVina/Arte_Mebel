/**
 * @fileoverview Portfolio Section - Project Gallery
 * @version 2.0.0
 */

'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ProjectCard } from '@/components/molecules/ProjectCard';
import { Button } from '@/components/atoms/Button';
import { MOCK_PROJECTS } from '@/lib/mockData';
import type { Project, ProjectCategory } from '@/types';

const CATEGORIES = [
  { id: 'all', name: 'Все проекты', icon: '✨' },
  { id: 'living-room', name: 'Гостиные', icon: '🛋️' },
  { id: 'bedroom', name: 'Спальни', icon: '🛏️' },
  { id: 'kitchen', name: 'Кухни', icon: '🍳' },
  { id: 'office', name: 'Кабинеты', icon: '💼' },
  { id: 'commercial', name: 'Коммерческие', icon: '🏢' },
];

export const PortfolioSection = () => {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory | 'all'>('all');
  const [showAll, setShowAll] = useState(false);

  const filteredProjects =
    selectedCategory === 'all'
      ? MOCK_PROJECTS
      : MOCK_PROJECTS.filter((p) => p.category === selectedCategory);

  const displayedProjects = showAll ? filteredProjects : filteredProjects.slice(0, 3);

  const handleProjectClick = (project: Project) => {
    // Yandex Metrika goal
    if (typeof window !== 'undefined' && (window as any).ym) {
      (window as any).ym(12345678, 'reachGoal', 'project_view');
    }
    // TODO: Open modal with project details
    console.log('Project clicked:', project);
  };

  return (
    <section id="portfolio" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-block glass-strong rounded-full px-6 py-2 mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <span className="text-white/90 font-medium">📂 Наши работы</span>
          </motion.div>

          <h2 className="text-5xl sm:text-6xl font-bold text-white mb-6"
              style={{ textShadow: '0 4px 30px rgba(0, 0, 0, 0.3)' }}>
            Портфолио проектов
          </h2>

          <div className="glass-strong rounded-3xl px-8 py-4 inline-block">
            <p className="text-xl text-white/90">
              Реализованные интерьеры для жилых и коммерческих пространств
            </p>
          </div>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          className="flex flex-wrap gap-3 justify-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {CATEGORIES.map((category) => (
            <motion.button
              key={category.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(category.id as ProjectCategory | 'all')}
              className={`
                px-6 py-3 rounded-2xl font-medium transition-all duration-300
                ${selectedCategory === category.id
                  ? 'glass-strong text-white border-2 border-white/40'
                  : 'glass text-white/80 border border-white/20 hover:glass-strong'
                }
              `}
            >
              <span className="mr-2">{category.icon}</span>
              {category.name}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
          layout
        >
          {displayedProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              onProjectClick={handleProjectClick}
            />
          ))}
        </motion.div>

        {/* Show More Button */}
        {filteredProjects.length > 3 && (
          <motion.div
            className="text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <Button
              variant="glass"
              size="lg"
              onClick={() => setShowAll(!showAll)}
              className="glass-strong text-white border-2 border-white/30 hover:scale-105"
            >
              {showAll ? 'Показать меньше' : `Показать ещё ${filteredProjects.length - 3} проектов`}
            </Button>
          </motion.div>
        )}

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <motion.div
            className="text-center py-20 glass-strong rounded-3xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-white mb-2">
              Проектов не найдено
            </h3>
            <p className="text-white/80">
              Попробуйте выбрать другую категорию
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
};
