import type { I18nKey } from "./keys";
import { i18nKeys } from "./keys";

const fallbackDictionary: Record<I18nKey, string> = {
  [i18nKeys.hero.eyebrow]: "IOS28 · Custom Furniture Ecosystem",
  [i18nKeys.hero.title]:
    "Продолжайте дизайн-путешествие с телефона на сайте — без потери ощущения iOS.",
  [i18nKeys.hero.subtitle]:
    "Мы превращаем скролл Pinterest и заметки в iCloud в реальную мебель, синхронизируя ваш вкус с производством и установкой под ключ.",
  [i18nKeys.hero.ctaPrimary]: "Запустить проект",
  [i18nKeys.hero.ctaSecondary]: "Получить мудборд",
  [i18nKeys.hero.trust]:
    "10 482 макета, импортированные из iPhone за последние 24 месяца",
  [i18nKeys.showcase.title]: "Плавные сцены как в iOS",
  [i18nKeys.showcase.subtitle]:
    "Слои стекла реагируют на свайпы — вы чувствуете себя внутри родного интерфейса.",
  [i18nKeys.configurator.title]: "Ритм производства под ваш сценарий",
  [i18nKeys.configurator.subtitle]:
    "Синхронизируйте чертежи, финансирование, доставки и монтаж через единый Flow.",
  [i18nKeys.testimonials.title]: "Отзывы без фильтров",
  [i18nKeys.testimonials.subtitle]:
    "Клиенты делятся живыми историями прямо из iMessage и Telegram-чатов.",
  [i18nKeys.yandex.title]: "Экосистема Яндекса в комплекте",
  [i18nKeys.yandex.subtitle]:
    "Маркетинг, аналитика и карты запускаются автоматически — ready для рекламы и продаж.",
};

export const t = (key: I18nKey, fallback?: string) =>
  fallbackDictionary[key] ?? fallback ?? key;
