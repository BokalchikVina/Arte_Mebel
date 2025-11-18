import { z } from 'zod'

export const featureSchema = z.object({
  id: z.string(),
  title: z.string(),
  body: z.string(),
  badge: z.string(),
})

export type Feature = z.infer<typeof featureSchema>

export const features: Feature[] = [
  {
    id: 'ai',
    title: 'Нейро-сопровождение',
    body: 'Генерируем материалы из Taptic-gestures. AI подсказывает отделку под освещение квартиры.',
    badge: 'AI co-pilot',
  },
  {
    id: 'logistics',
    title: 'Доставка через Continuity',
    body: 'Статусы пушатся в iOS, веб и Telegram. Одни idempotency keys — ноль дублирующих заказов.',
    badge: 'Ops cloud',
  },
  {
    id: 'ads',
    title: 'Яндекс-сквозная аналитика',
    body: 'Direct + Медиасеть + AppMetrica объединены в общей схеме GraphQL Federation.',
    badge: 'Growth',
  },
]

export const scenarioSchema = z.object({
  id: z.string(),
  title: z.string(),
  meta: z.string(),
  accent: z.string(),
})

export type Scenario = z.infer<typeof scenarioSchema>

export const scenarios: Scenario[] = [
  {
    id: 'loft',
    title: 'Loft Living',
    meta: 'Матовая сталь · шпон ореха · свет MTone',
    accent: '01',
  },
  {
    id: 'zen',
    title: 'Zen Pod',
    meta: 'Нейлоновая ткань · берёза · подсветка iLight',
    accent: '02',
  },
  {
    id: 'lab',
    title: 'Lab Kitchen',
    meta: 'Технический камень · кварц · push2open',
    accent: '03',
  },
]

export const testimonialSchema = z.object({
  id: z.string(),
  quote: z.string(),
  author: z.string(),
  role: z.string(),
})

export type Testimonial = z.infer<typeof testimonialSchema>

export const testimonials: Testimonial[] = [
  {
    id: 'infl',
    quote:
      'Ощущение будто продолжаешь свайпать в телефоне. Клиенты не понимают, где закончился iOS и начался сайт.',
    author: 'Алина Резник',
    role: 'CMO / Hikari Loft',
  },
  {
    id: 'yandex',
    quote:
      'Сквозная метрика из коробки: Direct, Market и Master доставили 142% роста лидов за первую неделю.',
    author: 'Марк Коваленко',
    role: 'Performance lead / Yandex',
  },
]
