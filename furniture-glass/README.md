## Atelier Flow · IOS28 Glass Furniture

Next.js + Tailwind v4 дизайн-система в стиле iOS 17/18 (IOS28 Glass). Скелет сайта передаёт ощущение Continuity: пользователь будто продолжает сценарий прямо из iPhone. Всё готово для подключения рекламы и аналитики на сервисах Яндекса.

### Быстрый старт

```bash
npm install
npm run dev
```

Откройте [http://localhost:3000](http://localhost:3000) и проверьте плавность анимаций 120 Гц.

### Переменные окружения

| Название | Назначение | Значение по умолчанию |
| --- | --- | --- |
| `NEXT_PUBLIC_YANDEX_METRIKA_ID` | ID счётчика Метрики | `93238128` |
| `NEXT_PUBLIC_YANDEX_DIRECT_ID` | Пиксель Direct / Ads | `YDEX-PIXEL-000` |

### Архитектура

- **Atomic Design** — компоненты разбиты на `atoms`, `molecules`, `organisms`, `layout`.
- **Zod Props Validation** — все публичные компоненты валидируют пропсы.
- **i18n keys** — ключи вынесены в `src/lib/i18n`, легко подключить любую локализацию.
- **Observability** — hook `usePrometheusBridge` шлёт события в `/api/telemetry` и Prometheus.
- **Yandex Suite** — скрипты Метрики/Direct и CTA на Maps встроены в Layout.

### Тесты и качество

```bash
npm run lint      # ESLint (Core Web Vitals profile)
npm run typecheck # npx tsc --noEmit (добавьте в CI)
```

Unit/e2e сценарии описаны в `docs/testing.md` (создайте по списку из ответа ИИ).

### Storybook-ready

Файлы в `stories/**` совместимы с Storybook 8+. Установите `@storybook/react-vite` и подключите каталог, чтобы получить живую документацию.

### Деплой и маркетинг

- **Hosting**: Vercel / Yandex Cloud (edge runtime для `/api/telemetry`).
- **Аналитика**: Метрика, Direct Pixel, готовые цели (scroll, CTA, hero_impression).
- **Performance**: стеклянные панели без тяжёлых картинок (pure CSS + framer-motion).

Готово для подключений: GraphQL Federation, Yandex API Gateway, event sourcing через RabbitMQ/NATS (см. секцию “Экосистема” на странице).
