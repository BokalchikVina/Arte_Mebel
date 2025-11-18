/**
 * @fileoverview Dynamic Project Page
 * @version 1.0.0
 */

'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { AnimatedBackground } from '@/components/organisms/AnimatedBackground';
import { Navigation } from '@/components/molecules/Navigation';
import { Footer } from '@/components/organisms/Footer';
import Link from 'next/link';
import { projectsApi } from '@/lib/api';
import type { Project } from '@/types/admin';

export default function ProjectPage({ params }: { params: { id: string } }) {
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(0);

  useEffect(() => {
    loadProject();
  }, [params.id]);

  const loadProject = async () => {
    try {
      const data = await projectsApi.getById(params.id);
      setProject(data);
    } catch (error) {
      console.error('Failed to load project:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[var(--color-bg)] flex items-center justify-center">
        <div className="text-white text-xl">Загрузка...</div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-screen bg-[var(--color-bg)] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Проект не найден</h1>
          <Link href="/portfolio">
            <button className="px-6 py-3 rounded-2xl bg-[var(--color-primary)] text-white">
              ← Вернуться к портфолио
            </button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[var(--color-bg)]">
      <AnimatedBackground />
      <Navigation />

      <div className="max-w-7xl mx-auto px-4 py-32">
        {/* Back Button */}
        <Link href="/portfolio">
          <motion.button
            className="mb-8 px-6 py-3 rounded-2xl glass-strong border border-white/20 text-white font-medium hover:border-[var(--color-primary)]/50"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            ← Назад к портфолио
          </motion.button>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Images */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
          >
            {/* Main Image */}
            <div className="relative h-[500px] rounded-3xl overflow-hidden mb-4">
              <img
                src={project.images[selectedImage] || project.images[0]}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Thumbnails */}
            {project.images.length > 1 && (
              <div className="grid grid-cols-4 gap-4">
                {project.images.map((image, index) => (
                  <motion.div
                    key={index}
                    className={`relative h-24 rounded-xl overflow-hidden cursor-pointer ${
                      selectedImage === index ? 'ring-2 ring-[var(--color-primary)]' : ''
                    }`}
                    onClick={() => setSelectedImage(index)}
                    whileHover={{ scale: 1.05 }}
                  >
                    <img src={image} alt={`${project.title} ${index + 1}`} className="w-full h-full object-cover" />
                  </motion.div>
                ))}
              </div>
            )}
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <div className="glass-strong rounded-3xl p-8 noise-texture">
              <h1 className="text-4xl font-bold text-white mb-4 relative z-10">
                {project.title}
              </h1>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-1 rounded-full glass text-white/80 text-sm relative z-10"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <p className="text-white/80 text-lg mb-8 leading-relaxed relative z-10">
                {project.description}
              </p>

              {/* Details */}
              <div className="space-y-4 mb-8">
                {project.materials && project.materials.length > 0 && (
                  <div>
                    <h3 className="text-[var(--color-primary)] font-semibold mb-2 relative z-10">
                      Материалы:
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {project.materials.map((material, i) => (
                        <span key={i} className="px-3 py-1 rounded-lg bg-white/5 text-white/70 text-sm relative z-10">
                          {material}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {project.dimensions && (
                  <div>
                    <h3 className="text-[var(--color-primary)] font-semibold mb-2 relative z-10">
                      Размеры:
                    </h3>
                    <p className="text-white/70 relative z-10">{project.dimensions}</p>
                  </div>
                )}

                {project.location && (
                  <div>
                    <h3 className="text-[var(--color-primary)] font-semibold mb-2 relative z-10">
                      Локация:
                    </h3>
                    <p className="text-white/70 relative z-10">{project.location}</p>
                  </div>
                )}

                {project.duration && (
                  <div>
                    <h3 className="text-[var(--color-primary)] font-semibold mb-2 relative z-10">
                      Срок изготовления:
                    </h3>
                    <p className="text-white/70 relative z-10">{project.duration}</p>
                  </div>
                )}
              </div>

              {/* CTA */}
              <Link href="/contacts">
                <motion.button
                  className="w-full px-8 py-4 rounded-2xl bg-[var(--color-primary)] text-white font-medium hover:bg-[var(--color-primary-light)] shadow-lg shadow-[var(--color-primary)]/30 relative z-10"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Заказать похожий проект
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
