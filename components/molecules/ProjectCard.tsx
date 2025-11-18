/**
 * @fileoverview Project Card Component - Portfolio Style
 * @version 2.0.0
 */

'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Card } from '@/components/atoms/Card';
import { Badge } from '@/components/atoms/Badge';
import type { Project } from '@/types';

export interface ProjectCardProps {
  project: Project;
  onProjectClick?: (project: Project) => void;
}

/**
 * Project Card with iOS 18 Glass morphism
 * For portfolio display
 */
export const ProjectCard = ({
  project,
  onProjectClick,
}: ProjectCardProps) => {
  return (
    <Link href={`/projects/${project.id}`}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        whileHover={{ y: -10 }}
      >
        <Card
          variant="glass"
          padding="none"
          hoverable
          onClick={() => onProjectClick?.(project)}
          className="group relative overflow-hidden cursor-pointer noise-texture"
        >
        {/* Project Image with Parallax */}
        <div className="relative h-80 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent z-10" />
          <Image
            src={project.images[0] || '/placeholder.jpg'}
            alt={project.title}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          
          {/* Floating badges */}
          <div className="absolute top-4 right-4 flex flex-col gap-2 z-20">
            {project.featured && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.3, type: 'spring' }}
              >
                <Badge variant="primary" size="sm" className="glass-strong">
                  ⭐ Featured
                </Badge>
              </motion.div>
            )}
          </div>

          {/* Project Title Overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
            <motion.h3 
              className="text-2xl font-bold text-white mb-2"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              {project.title}
            </motion.h3>
            <p className="text-white/90 text-sm">
              {project.location} • {project.completedDate}
            </p>
          </div>
        </div>

        {/* Project Info */}
        <div className="p-6 space-y-4 glass-strong">
          <p className="text-gray-700 text-sm line-clamp-2">
            {project.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {project.tags.slice(0, 3).map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1 text-xs rounded-full glass-subtle text-gray-700 font-medium"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Duration */}
          <div className="flex items-center justify-between text-sm pt-2 border-t border-white/30">
            <span className="text-gray-600 font-medium">
              ⏱️ {project.duration}
            </span>
            <span className="text-ios-blue font-semibold group-hover:translate-x-2 transition-transform">
              Подробнее →
            </span>
          </div>
        </div>
      </Card>
      </motion.div>
    </Link>
  );
};
