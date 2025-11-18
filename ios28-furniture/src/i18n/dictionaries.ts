import type { Locale, TranslationKey } from './keys'

type Dictionary = Record<TranslationKey, string>

const ruRu: Dictionary = {
  'navigation.hero': 'Главная сцена',
  'navigation.showcase': 'Шоурум',
  'navigation.process': 'Процесс',
  'navigation.contact': 'Контакты',
  'hero.headline': 'TailorGlass продолжает эстетику iOS 28',
  'hero.subheadline':
    'Стеклянные панели, алюминий и мягкие тени повторяют ощущения от iPhone. Начните проект на телефоне и продолжите на сайте без потерь.',
  'hero.primaryCta': 'Рассчитать проект',
  'hero.secondaryCta': 'Синхронизировать с iPhone',
  'hero.continuityHint':
    'Мы переносим цвета, хаптик и жесты из вашего телефона в интерьер.',
  'metrics.delivery': '14 дней до монтажа',
  'metrics.projects': '347 кастомных пространств',
  'metrics.rating': 'NPS 99%',
  'features.heading': 'Мультитач-магазин мебели',
  'features.caption':
    'Продолжение интерфейсов iOS 28: стекло, глубина, динамический свет и телеметрия.',
  'features.cards.madeToFit.title': '3D-скан за 6 минут',
  'features.cards.madeToFit.body':
    'Загружаем LiDAR или план квартиры, чистим шум и строим точные контуры до миллиметра.',
  'features.cards.continuity.title': 'Сценарий Continuity',
  'features.cards.continuity.body':
    'Жесты, освещение и шрифты совпадают с вашим iPhone, поэтому переход едва заметен.',
  'features.cards.materials.title': 'Аэрокосмические материалы',
  'features.cards.materials.body':
    'Анодированный алюминий, Gorilla Glass Residence и акустические панели класса ISO5.',
  'configurator.heading': 'Конфигуратор как на iPhone',
  'configurator.caption':
    'Начните в приложении — продолжите здесь. Состояние и корзина синхронизируются через ядро.',
  'configurator.steps.scan.title': 'Скан',
  'configurator.steps.scan.description':
    'Прикрепите LiDAR/чертёж — мы нормализуем файл, выставим уровни и габариты.',
  'configurator.steps.configure.title': 'Конструктор',
  'configurator.steps.configure.description':
    'Перетаскивайте модули, световые сцены и материалы с откликом 120 fps.',
  'configurator.steps.deliver.title': 'Монтаж',
  'configurator.steps.deliver.description':
    'Доставка, сборка и калибровка цвета с трекингом в Яндекс.Логистике.',
  'showcase.heading': 'Сцены шоурума',
  'showcase.caption':
    'Видео-петли и параллакс делают ощущение стекла и света физически осязаемым.',
  'showcase.cards.halo.title': 'Halo Zero Gravity',
  'showcase.cards.halo.description':
    'Стекло с матовым градиентом и подсветка, реагирующая на жесты Continuity.',
  'showcase.cards.gravity.title': 'Gravity Workspace',
  'showcase.cards.gravity.description':
    'Рабочее место с силовым столом, акустическими панелями и скрытой вентиляцией.',
  'showcase.cards.lounge.title': 'Lounge Orbit',
  'showcase.cards.lounge.description':
    'Модульный диван с интегрированными зарядками MagSafe и адаптивным светом.',
  'testimonials.heading': 'Отзывы без купюр',
  'testimonials.caption':
    'Рейтинги подтверждены Яндекс.Метрикой и электронными актами.',
  'testimonials.cards.anna.quote':
    '«Мы начали макет в iPhone, и бригада выехала через 10 дней. Интерфейс и монтаж одинаково плавные.»',
  'testimonials.cards.anna.role': 'Анна, архитектор',
  'testimonials.cards.pavel.quote':
    '«TailorGlass повторил цвета дома и расписание света. Мебель ощущается как голограмма.»',
  'testimonials.cards.pavel.role': 'Павел, коллекционер винила',
  'process.heading': 'Процесс под телеметрию',
  'process.caption':
    'Каждый шаг фиксируется в core-lib, отправляется в брокер и виден в приложении.',
  'process.stages.brief.title': '01 · Brief',
  'process.stages.brief.description':
    'Подключаем Yandex ID, подтягиваем текущие проекты и собираем вводные.',
  'process.stages.twin.title': '02 · Digital Twin',
  'process.stages.twin.description':
    'Строим twin в GraphQL Federation, проверяем эргономику и электрику.',
  'process.stages.production.title': '03 · Production',
  'process.stages.production.description':
    'Режем алюминий, ламинируем стекло, ведём контроль влажности и цвета.',
  'process.stages.install.title': '04 · Install',
  'process.stages.install.description':
    'Монтаж с AR-подсказками, сдача проекта и запуск сценариев освещения.',
  'cta.heading': 'Готовы продолжить жест с iPhone?',
  'cta.caption':
    'Оставьте контакт и пожелания. Вернёмся за 15 минут с раскадровкой бюджета.',
  'cta.button': 'Забронировать слот',
  'footer.rights': '© 2025 TailorGlass. Все права защищены.',
  'footer.policy': 'Политика обработки данных',
  'footer.contacts.mail': 'hello@tailorglass.ru',
  'footer.contacts.phone': '+7 495 777-28-28',
  'ads.label': 'Рекомендации Яндекс.Директ',
}

export const dictionaries: Record<Locale, Dictionary> = {
  'ru-RU': ruRu,
}

export const defaultLocale: Locale = 'ru-RU'
