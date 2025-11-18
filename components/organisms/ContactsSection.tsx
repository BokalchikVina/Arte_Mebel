/**
 * @fileoverview Contacts Section Component (Atomic Design: Organism)
 * @version 1.0.0
 */

'use client';

import { motion } from 'framer-motion';
import { ContactForm } from '@/components/molecules/ContactForm';
import { Card } from '@/components/atoms/Card';
import { SITE_CONFIG, SOCIAL_LINKS } from '@/lib/constants';

export const ContactsSection = () => {
  return (
    <section id="contacts" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Свяжитесь с нами
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Оставьте заявку, и мы перезвоним в течение 15 минут
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <ContactForm />
          </motion.div>

          {/* Contact Info */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Phone */}
            <Card variant="glass" padding="lg" hoverable>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-ios-blue rounded-2xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Телефон</h3>
                  <a
                    href={`tel:${SITE_CONFIG.phone}`}
                    className="text-ios-blue hover:underline text-lg"
                  >
                    {SITE_CONFIG.phone}
                  </a>
                  <p className="text-sm text-gray-600 mt-1">
                    {SITE_CONFIG.workingHours}
                  </p>
                </div>
              </div>
            </Card>

            {/* Email */}
            <Card variant="glass" padding="lg" hoverable>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-ios-blue rounded-2xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                  <a
                    href={`mailto:${SITE_CONFIG.email}`}
                    className="text-ios-blue hover:underline text-lg"
                  >
                    {SITE_CONFIG.email}
                  </a>
                </div>
              </div>
            </Card>

            {/* Address */}
            <Card variant="glass" padding="lg" hoverable>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-ios-blue rounded-2xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Адрес</h3>
                  <p className="text-gray-700 text-lg">{SITE_CONFIG.address}</p>
                </div>
              </div>
            </Card>

            {/* Social Links */}
            <Card variant="glass" padding="lg">
              <h3 className="font-semibold text-gray-900 mb-4">Мы в соцсетях</h3>
              <div className="flex gap-4">
                <motion.a
                  href={SOCIAL_LINKS.vk}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-[#0077FF] rounded-2xl flex items-center justify-center text-white text-xl ios-button"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  VK
                </motion.a>
                <motion.a
                  href={SOCIAL_LINKS.telegram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-[#0088cc] rounded-2xl flex items-center justify-center text-white text-xl ios-button"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  TG
                </motion.a>
                <motion.a
                  href={SOCIAL_LINKS.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-[#25D366] rounded-2xl flex items-center justify-center text-white text-xl ios-button"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  WA
                </motion.a>
              </div>
            </Card>

            {/* Yandex Map */}
            <Card variant="glass" padding="none" className="overflow-hidden h-64">
              <div
                id="yandex-map"
                className="w-full h-full"
                style={{
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                {/* Placeholder for Yandex Map */}
                <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                  <div className="text-center text-gray-600">
                    <svg
                      className="w-16 h-16 mx-auto mb-2 opacity-50"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <p>Yandex Maps</p>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
