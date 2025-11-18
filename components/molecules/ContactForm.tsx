/**
 * @fileoverview Contact Form Component (Atomic Design: Molecule)
 * @version 1.0.0
 */

'use client';

import { useState, FormEvent } from 'react';
import { motion } from 'framer-motion';
import { Input } from '@/components/atoms/Input';
import { Button } from '@/components/atoms/Button';
import { Card } from '@/components/atoms/Card';
import type { ContactForm as ContactFormType } from '@/types';

export const ContactForm = () => {
  const [formData, setFormData] = useState<ContactFormType>({
    name: '',
    phone: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // Yandex Metrika goal tracking
    if (typeof window !== 'undefined' && (window as any).ym) {
      (window as any).ym(12345678, 'reachGoal', 'contact_form_submit');
    }

    setIsSuccess(true);
    setIsSubmitting(false);

    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({ name: '', phone: '', email: '', message: '' });
      setIsSuccess(false);
    }, 3000);
  };

  if (isSuccess) {
    return (
      <Card variant="glass" padding="lg" className="text-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 200, damping: 15 }}
        >
          <div className="text-6xl mb-4">✅</div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">
            Спасибо за заявку!
          </h3>
          <p className="text-gray-600">
            Мы свяжемся с вами в ближайшее время
          </p>
        </motion.div>
      </Card>
    );
  }

  return (
    <Card variant="glass" padding="lg">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">
            Оставьте заявку
          </h3>
          <p className="text-gray-600">
            Мы свяжемся с вами в течение 15 минут
          </p>
        </div>

        <Input
          label="Имя"
          placeholder="Ваше имя"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
          leftIcon={
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                clipRule="evenodd"
              />
            </svg>
          }
        />

        <Input
          label="Телефон"
          type="tel"
          placeholder="+7 (999) 123-45-67"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          required
          leftIcon={
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
          }
        />

        <Input
          label="Email (необязательно)"
          type="email"
          placeholder="your@email.com"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          leftIcon={
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
          }
        />

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Сообщение
          </label>
          <textarea
            className="w-full ios-input min-h-[120px] resize-none"
            placeholder="Расскажите о ваших пожеланиях..."
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
            required
          />
        </div>

        <Button
          type="submit"
          variant="primary"
          size="lg"
          className="w-full"
          isLoading={isSubmitting}
        >
          {isSubmitting ? 'Отправка...' : 'Отправить заявку'}
        </Button>

        <p className="text-xs text-gray-500 text-center">
          Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
        </p>
      </form>
    </Card>
  );
};
