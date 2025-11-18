# 🐳 Docker инструкция

Полное руководство по запуску проекта в Docker контейнере.

---

## 🚀 Быстрый старт

### Способ 1: Docker Compose (РЕКОМЕНДУЕТСЯ)

```bash
# Development режим
docker-compose up dev

# Production режим
docker-compose up prod

# В фоновом режиме
docker-compose up -d dev
```

Откройте браузер: **http://localhost:3000**

### Способ 2: Docker напрямую

```bash
# Development
docker build -f Dockerfile.dev -t furniture-store:dev .
docker run -p 3000:3000 furniture-store:dev

# Production
docker build -t furniture-store:prod .
docker run -p 3000:3000 furniture-store:prod
```

---

## 📦 Что включено

### Файлы Docker:

| Файл | Назначение |
|------|------------|
| **Dockerfile** | Production build (оптимизированный) |
| **Dockerfile.dev** | Development build |
| **docker-compose.yml** | Оркестрация контейнеров |
| **.dockerignore** | Исключения для Docker |
| **.env.docker** | Пример переменных окружения |

---

## 🛠️ Команды Docker Compose

### Запуск

```bash
# Development (с hot reload)
docker-compose up dev

# Production (оптимизированная сборка)
docker-compose up prod

# В фоновом режиме (detached mode)
docker-compose up -d dev
docker-compose up -d prod

# С пересборкой
docker-compose up --build dev
```

### Остановка

```bash
# Остановить контейнеры
docker-compose down

# Остановить и удалить volumes
docker-compose down -v

# Остановить конкретный сервис
docker-compose stop dev
```

### Просмотр логов

```bash
# Все логи
docker-compose logs

# Логи конкретного сервиса
docker-compose logs dev
docker-compose logs prod

# Следить за логами в реальном времени
docker-compose logs -f dev
```

### Выполнение команд внутри контейнера

```bash
# Войти в контейнер
docker-compose exec dev sh
docker-compose exec prod sh

# Выполнить команду
docker-compose exec dev npm run build
docker-compose exec dev npm run lint
```

---

## 🎯 Режимы работы

### Development режим

**Особенности:**
- Hot reload включен
- Source maps доступны
- Больший размер образа
- Быстрая разработка

**Запуск:**
```bash
docker-compose up dev
```

**Объем:**
- База: Node.js 18 Alpine (~180 MB)
- С зависимостями: ~500 MB

### Production режим

**Особенности:**
- Multi-stage build
- Минимальный размер
- Оптимизированная сборка
- Безопасность (non-root user)

**Запуск:**
```bash
docker-compose up prod
```

**Объем:**
- Финальный образ: ~150 MB
- Оптимизирован для production

---

## ⚙️ Конфигурация

### Переменные окружения

Создайте `.env.local`:

```bash
# Скопируйте пример
cp .env.docker .env.local

# Отредактируйте под себя
nano .env.local
```

**Важные переменные:**

```env
NEXT_PUBLIC_YANDEX_METRIKA_ID=12345678
NEXT_PUBLIC_PHONE=+79991234567
NEXT_PUBLIC_EMAIL=info@your-domain.ru
```

### Монтирование volumes (Development)

В `docker-compose.yml` настроены volumes:

```yaml
volumes:
  - .:/app              # Весь проект
  - /app/node_modules   # Исключаем node_modules
  - /app/.next          # Исключаем .next
```

Это обеспечивает hot reload при изменении файлов.

---

## 🔧 Настройка портов

По умолчанию используется порт `3000`.

### Изменить порт:

**В docker-compose.yml:**
```yaml
ports:
  - "8080:3000"  # Внешний:Внутренний
```

**В Docker команде:**
```bash
docker run -p 8080:3000 furniture-store:dev
```

Откройте: `http://localhost:8080`

---

## 🏗️ Сборка образов

### Development образ

```bash
# Сборка
docker build -f Dockerfile.dev -t furniture-store:dev .

# Запуск
docker run -p 3000:3000 -v $(pwd):/app furniture-store:dev
```

### Production образ

```bash
# Сборка
docker build -t furniture-store:prod .

# Запуск
docker run -p 3000:3000 furniture-store:prod

# С переменными окружения
docker run -p 3000:3000 \
  -e NEXT_PUBLIC_SITE_URL=https://your-domain.com \
  furniture-store:prod
```

---

## 📊 Оптимизация

### Multi-stage build

Production Dockerfile использует 3 stage:

1. **deps** - устанавливает зависимости
2. **builder** - собирает приложение
3. **runner** - финальный минимальный образ

**Преимущества:**
- Размер образа: ~150 MB (вместо ~500 MB)
- Быстрый старт контейнера
- Безопасность (non-root user)

### Кэширование layers

Docker кэширует каждый слой:

```dockerfile
# Сначала копируем только package.json
COPY package*.json ./
RUN npm ci

# Потом остальные файлы
COPY . .
RUN npm run build
```

При изменении кода пересобираются только нужные слои.

---

## 🔒 Безопасность

### Non-root user

Production образ запускается от пользователя `nextjs`:

```dockerfile
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs
USER nextjs
```

### .dockerignore

Исключаем чувствительные данные:

```
.env*.local
.git
node_modules
```

---

## 🌐 Деплой

### Docker Hub

```bash
# Логин
docker login

# Тег
docker tag furniture-store:prod username/furniture-store:latest

# Пуш
docker push username/furniture-store:latest
```

### На сервер

```bash
# На сервере
docker pull username/furniture-store:latest
docker run -d -p 80:3000 username/furniture-store:latest
```

### Docker Compose на сервере

```bash
# Скопируйте docker-compose.yml на сервер
scp docker-compose.yml user@server:/path/

# На сервере
docker-compose up -d prod
```

---

## 🐛 Отладка

### Просмотр логов

```bash
# Логи контейнера
docker-compose logs -f dev

# Логи Next.js
docker-compose exec dev npm run dev
```

### Войти в контейнер

```bash
# Bash/Sh shell
docker-compose exec dev sh

# Проверить файлы
ls -la /app

# Проверить процессы
ps aux
```

### Проверка переменных окружения

```bash
docker-compose exec dev env
```

### Проверка сети

```bash
# Список сетей
docker network ls

# Инспектирование сети
docker network inspect furniture-network
```

---

## 📈 Мониторинг

### Статистика контейнера

```bash
# Использование ресурсов
docker stats

# Конкретный контейнер
docker stats furniture-store-dev
```

### Размер образа

```bash
# Список образов
docker images

# Размер конкретного образа
docker image inspect furniture-store:prod | grep Size
```

---

## 🧹 Очистка

### Остановка и удаление

```bash
# Остановить все
docker-compose down

# Удалить volumes
docker-compose down -v

# Удалить образы
docker rmi furniture-store:dev
docker rmi furniture-store:prod
```

### Полная очистка Docker

```bash
# Удалить неиспользуемые контейнеры
docker container prune

# Удалить неиспользуемые образы
docker image prune -a

# Удалить все (осторожно!)
docker system prune -a --volumes
```

---

## 🎓 Примеры использования

### Локальная разработка

```bash
# Запустить dev сервер
docker-compose up dev

# В другом терминале
docker-compose exec dev npm run lint
docker-compose exec dev npm run type-check
```

### Production build локально

```bash
# Собрать и запустить
docker-compose up --build prod

# Проверить
curl http://localhost:3000
```

### CI/CD пайплайн

```yaml
# .github/workflows/docker.yml
- name: Build Docker image
  run: docker build -t furniture-store:prod .

- name: Run tests
  run: docker run furniture-store:prod npm test

- name: Push to registry
  run: docker push username/furniture-store:prod
```

---

## ❓ FAQ

### Порт 3000 уже занят?

```bash
# Используйте другой порт
docker-compose up dev -p 3001:3000
```

Или отредактируйте `docker-compose.yml`:
```yaml
ports:
  - "3001:3000"
```

### Hot reload не работает?

Проверьте volumes в `docker-compose.yml`:
```yaml
volumes:
  - .:/app
```

### Образ слишком большой?

Используйте production build:
```bash
docker-compose up prod
```

### Медленная сборка?

Docker кэширует слои. При первой сборке это нормально.

Для ускорения:
```bash
# Использовать build cache
docker-compose build --parallel
```

### Ошибки прав доступа?

```bash
# Пересоздать контейнер
docker-compose down -v
docker-compose up --build dev
```

---

## 📚 Полезные ссылки

- [Docker Documentation](https://docs.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)
- [Next.js Docker](https://nextjs.org/docs/deployment#docker-image)
- [Best Practices](https://docs.docker.com/develop/dev-best-practices/)

---

## 🎉 Готово!

Теперь проект запускается в Docker контейнере:

- ✅ Development с hot reload
- ✅ Production оптимизирован
- ✅ Легко деплоить
- ✅ Изолированная среда
- ✅ Одна команда для запуска

**Запускайте:**
```bash
docker-compose up dev
```

**И работайте!** 🚀

---

*Документация создана для проекта Мебель на Заказ*
