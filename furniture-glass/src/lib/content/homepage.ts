export const heroMetrics = [
  {
    value: "48 ч",
    label: "до первых 3D-кадров",
  },
  {
    value: "7 pod",
    label: "микросервисов в цепочке",
  },
  {
    value: "0,2 мм",
    label: "точность подгонки",
  },
];

export const showcaseScenes = [
  {
    id: "living",
    title: "Жилая сцена",
    description: "Облака подсветки реагируют на свайпы, а фактуры раскрываются слоями стекла.",
    badge: "Ambient Living",
    gradient:
      "from-[#f8fbff]/70 via-[#eef3ff]/60 to-[#f4f7ff]/40 dark:from-[#0c1224]/80 dark:via-[#111a33]/60 dark:to-[#0c111f]/80",
  },
  {
    id: "kitchen",
    title: "Кухня-лаборатория",
    description: "Surface ProMotion 120 Гц передаётся в плавность открытия фасадов.",
    badge: "Chef Studio",
    gradient:
      "from-[#fdf6ee]/70 via-[#fbe8d5]/60 to-[#fdf4e7]/40 dark:from-[#22140a]/80 dark:via-[#2a1b10]/60 dark:to-[#1a1008]/80",
  },
  {
    id: "office",
    title: "Кабинет-капсула",
    description: "Акустические панели поглощают шум, а стекло скрывает кабели.",
    badge: "Focus Pod",
    gradient:
      "from-[#f4f9f0]/70 via-[#e0f5e0]/60 to-[#f2fbf3]/40 dark:from-[#07160b]/80 dark:via-[#0d2814]/60 dark:to-[#061208]/80",
  },
];

export const processTimeline = [
  {
    title: "Импортируйте свою реальность",
    description:
      "Мы подтянем фото из iPhone, заметки, LiDAR-сканы и даже measurements из Measure App.",
    status: "live",
  },
  {
    title: "Генерируйте мудборды и сметы",
    description:
      "Miro, Numbers, PDF — всё синхронизируется. Удобно согласовывать с архитекторами и семьёй.",
    status: "next",
  },
  {
    title: "Производство без пауз",
    description:
      "Каждый pod отвечает за свой сервис: материалы, фурнитура, логистика, монтаж.",
    status: "ready",
  },
] as const;

export const testimonials = [
  {
    name: "Анна · продюсер",
    context: "iMessage • Москва-Сити",
    quote:
      "Импортировала заметку из iPhone — через три дня уже листала свою гардеробную в AR. Никакого «скиньте ТЗ», просто продолжение чата.",
  },
  {
    name: "Егор · основатель геймстудии",
    context: "Telegram • Санкт-Петербург",
    quote:
      "Вся команда подключилась через общий Flow: архитектор, бухгалтер и монтажники. Удобно, что статус видно как в Yandex Tracker.",
  },
];

export const yandexStack = [
  {
    title: "Yandex Metrika 2.0",
    description: "Отслеживание свайпов, tap, шеринга мудбордов. Готовые цели и ecommerce-ивенты.",
    icon: "analytics",
  },
  {
    title: "Yandex Direct",
    description: "Фиды мебели обновляются автоматически, объявления запускаются сразу после публикации.",
    icon: "ads",
  },
  {
    title: "Yandex Maps + ID",
    description: "Лид может авторизоваться через Yandex ID и получить маршрут доставки в один тап.",
    icon: "maps",
  },
];

export const ecosystemPods = [
  {
    title: "Core-lib Materials",
    description: "Каталог плит, шпона и стекла с API для конструкторов.",
  },
  {
    title: "FinOps Pod",
    description: "Автоматические сметы, привязка к Yandex Pay и рассрочка.",
  },
  {
    title: "Event Broker",
    description: "NATS/RabbitMQ события, idempotency keys и реплики в CRM.",
  },
];
