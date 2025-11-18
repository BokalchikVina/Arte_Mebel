import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

const resources = {
  ru: {
    translation: {
      nav: {
        studio: 'Студия',
        catalog: 'Каталог',
        cases: 'Кейсы',
        analytics: 'Аналитика',
      },
      hero: {
        badge: 'Tailor-made / IoS28 Glass',
        title: 'Мебель, которая продолжает опыт iPhone',
        description:
          'Бесшовный пользовательский путь: начинаем вдохновение в приложении, завершаем заказ на сайте. Тот же визуальный язык, те же плавные анимации, та же точность к деталям.',
        ctaPrimary: 'Запустить конфигуратор',
        ctaSecondary: 'Синхронизация с дизайнером',
        metricLead: '7д. до первых лидов',
        metricRetention: '82% retention',
      },
      configurator: {
        title: 'Интеллектуальный конфигуратор',
        description:
          'Сценарии под мобильный first-screen, нейросети подбирают материалы, а Event-Sourcing фиксирует каждое изменение. Заказ всегда воспроизводим.',
        optionsTitle: 'Популярные сценарии',
      },
      testimonials: {
        title: 'Голоса клиентов',
        subtitle: 'Промышленный UX и маркетинг связаны в одной шине данных',
      },
      cta: {
        title: 'Синхронизируем запуск с рекламой и аналитикой',
        description:
          'Yandex Direct, Metrica, AppMetrica — всё подключено и готово к масштабированию. Одно касание — и кампании обновляются во всех каналах.',
        primary: 'Забронировать слот',
        secondary: 'Получить медиаплан',
      },
      footer: {
        rights: '© 2025 Atelier Continuum. Все права защищены.',
        privacy: 'Политика данных',
        contracts: 'Публичная оферта',
      },
    },
  },
  en: {
    translation: {
      nav: {
        studio: 'Studio',
        catalog: 'Catalog',
        cases: 'Cases',
        analytics: 'Analytics',
      },
      hero: {
        badge: 'Tailor-made / IoS28 Glass',
        title: 'Furniture that extends your iPhone experience',
        description:
          'A seamless journey: spark inspiration in the app, finish the order on the site. Same visual language, familiar motions, uncompromised craft.',
        ctaPrimary: 'Launch configurator',
        ctaSecondary: 'Sync with designer',
        metricLead: '7d to first leads',
        metricRetention: '82% retention',
      },
      configurator: {
        title: 'Intelligent configurator',
        description:
          'Crafted for a mobile-first viewport. AI suggests materials while Event-Sourcing captures each tweak. Every order is replayable.',
        optionsTitle: 'Popular scripts',
      },
      testimonials: {
        title: 'Client voices',
        subtitle: 'Unified UX + marketing telemetry on one bus',
      },
      cta: {
        title: 'Launch-ready with analytics & ads',
        description:
          'Yandex Direct, Metrica, AppMetrica are wired and scalable. One tap keeps every campaign current.',
        primary: 'Book slot',
        secondary: 'Request media plan',
      },
      footer: {
        rights: '© 2025 Atelier Continuum. All rights reserved.',
        privacy: 'Data policy',
        contracts: 'Public offer',
      },
    },
  },
}

i18n.use(initReactI18next).init({
  resources,
  lng: 'ru',
  fallbackLng: 'ru',
  interpolation: {
    escapeValue: false,
  },
})

export default i18n
