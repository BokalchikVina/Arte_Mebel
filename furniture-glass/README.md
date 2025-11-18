# Atelier Continuum · IOS28 Glass Skeleton

Стартовый проект для посадочной страницы студии премиальной мебели. Сайт наследует визуал и плавность iOS 17/18 (glass morphism, мягкие bezier-анимации) и сразу готов к запуску рекламы в экосистеме Yandex.

## Технологии

- **Vite + React 19 + TypeScript** — изоморфная архитектура Atomic Design (atoms → molecules → organisms).
- **TailwindCSS 3.x** — быстрая вёрстка стеклянных компонентов с кастомными токенами `src/design/tokens.ts`.
- **Framer Motion** — нативные easing-кривые для «мягких» iOS-переходов.
- **i18next** — локализация по i18n-ключам, готовая к Federation.
- **Zod** — валидация входных пропсов и подготовка к core-lib контрактам.

## Скрипты

```bash
npm run dev     # локальный стенд
npm run build   # прод сборка (tsc + vite build)
npm run preview # предпросмотр прод-артефакта
npm run lint    # ESLint + type-aware правила
```

## Разделы страницы

1. `Hero` — Continuity-эффект, стеклянные карточки, CTA на конфигуратор.
2. `Configurator` — сценарии заказов, связь с core сервисами (AI, logistics, growth).
3. `Testimonials` — социальное доказательство с упором на сквозную аналитику.
4. `LaunchCTA` — блок про синхронизацию Direct, Metrica, AppMetrica и OpenTelemetry.

## Аналитика и маркетинг

- Инициализация `Yandex.Metrica` через `src/analytics/yandex.ts`.
- Плейсхолдеры для **Yandex RTB/Direct** в `index.html` (`div#yandex_rtb` + context script).
- Hook `pushYandexGoal` для отслеживания кликов по CTA/меню.
- Готовые `data-analytics-goal` атрибуты на кнопках для дальнейшей idempotent-шины.

## Интеграция в экосистему

- **API-first**: компоненты ожидают i18n-ключи, поэтому графQL Federation может подменять тексты без правок вёрстки.
- **Event-Sourcing**: сценарии конфигуратора описаны в `src/data/content.ts` и готовы к синхронизации с message broker (RabbitMQ/NATS) через idempotency keys.
- **Monitoring**: предусмотрена вставка OpenTelemetry метрик (см. `LaunchCTA` подпись) и экспорт в Prometheus.

## Тестирование (скелет)

- **Unit** (предложено):
  1. `GlassButton` — отрисовка по ключу, fallback варианта, прокидывание `data-analytics-goal`.
  2. `useAmbientMotion` — нормализация координат и очистка слушателей.
  3. `initYandexMetrica` — единственный вызов инициализации (+ проигрыш повторного вызова).
- **Integration**: e2e конфигуратор → CTA (проверить скролл, локализацию, записи целей).
- **E2E**: критический путь «Запустить конфигуратор» → отправка `reachGoal` → наличие RTB блока.

## Дальнейшие шаги

- Подключить реальный GraphQL-шлюз (federation) и core-lib SDK.
- Настроить EventBridge / RabbitMQ для idempotent-событий `Configurator`.
- Добавить Storybook stories для всех атомов/молекул и документацию по версиям.
- Включить OpenTelemetry browser SDK и прокинуть trace-id в Yandex goals.
