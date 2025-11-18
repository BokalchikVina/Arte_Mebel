# 🚀 Руководство по деплою Arte Mebel

## 📋 Содержание
- [Быстрый старт](#быстрый-старт)
- [Vercel Deploy](#vercel-deploy)
- [Docker Deploy](#docker-deploy)
- [VPS Deploy](#vps-deploy)
- [Переменные окружения](#переменные-окружения)

---

## ⚡ Быстрый старт

### Локальный запуск

```bash
# Установка зависимостей
npm install

# Запуск dev сервера
npm run dev

# Откройте http://localhost:3000
```

### Админ панель
- URL: `http://localhost:3000/admin`
- Email: `admin@artemebel.ru`
- Password: `admin123` (поменяйте в production!)

### Личный кабинет
- URL: `http://localhost:3000/cabinet`

---

## 🔷 Vercel Deploy (Рекомендуется)

### Через Vercel CLI

```bash
# Установка Vercel CLI
npm i -g vercel

# Логин
vercel login

# Деплой
vercel

# Production деплой
vercel --prod
```

### Через GitHub

1. **Push в GitHub:**
   ```bash
   git push origin main
   ```

2. **Подключите репозиторий на Vercel:**
   - Откройте [vercel.com](https://vercel.com)
   - Import Project → GitHub
   - Выберите репозиторий `Arte_Mebel`
   - Deploy

3. **Настройте Environment Variables:**
   ```
   NEXTAUTH_SECRET=your-secret-key
   ADMIN_EMAIL=admin@artemebel.ru
   ADMIN_PASSWORD=your-secure-password
   ```

4. **Автоматический деплой:**
   - Каждый push в `main` → Production
   - Pull Requests → Preview deployments

---

## 🐳 Docker Deploy

### Development

```bash
docker-compose up dev
```

### Production

```bash
# Build
docker-compose build prod

# Run
docker-compose up prod

# В фоне
docker-compose up -d prod
```

### Docker Hub

```bash
# Build образа
docker build -t artemebel/website:latest .

# Push в Docker Hub
docker push artemebel/website:latest

# Pull и запуск на сервере
docker pull artemebel/website:latest
docker run -p 3000:3000 artemebel/website:latest
```

---

## 🖥️ VPS Deploy (Ubuntu/Debian)

### 1. Подготовка сервера

```bash
# Обновление системы
sudo apt update && sudo apt upgrade -y

# Установка Node.js 20
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt install -y nodejs

# Установка PM2
sudo npm install -g pm2

# Установка Nginx
sudo apt install -y nginx
```

### 2. Клонирование проекта

```bash
cd /var/www
git clone https://github.com/BokalchikVina/Arte_Mebel.git
cd Arte_Mebel

# Установка зависимостей
npm install

# Build
npm run build
```

### 3. Настройка PM2

```bash
# Создайте ecosystem.config.js
cat > ecosystem.config.js << 'EOF'
module.exports = {
  apps: [{
    name: 'artemebel',
    script: 'npm',
    args: 'start',
    cwd: '/var/www/Arte_Mebel',
    instances: 2,
    exec_mode: 'cluster',
    env: {
      NODE_ENV: 'production',
      PORT: 3000
    }
  }]
}
EOF

# Запуск
pm2 start ecosystem.config.js

# Автозапуск
pm2 startup
pm2 save
```

### 4. Настройка Nginx

```bash
# Создайте конфиг
sudo nano /etc/nginx/sites-available/artemebel

# Вставьте:
server {
    listen 80;
    server_name artemebel.ru www.artemebel.ru;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}

# Активируйте
sudo ln -s /etc/nginx/sites-available/artemebel /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx
```

### 5. SSL (Let's Encrypt)

```bash
# Установка Certbot
sudo apt install -y certbot python3-certbot-nginx

# Получение сертификата
sudo certbot --nginx -d artemebel.ru -d www.artemebel.ru

# Автообновление
sudo certbot renew --dry-run
```

---

## 🔐 Переменные окружения

### Production (.env.production)

```bash
# Database
DATABASE_URL="file:./lib/db.json"

# Auth
NEXTAUTH_URL="https://artemebel.ru"
NEXTAUTH_SECRET="generate-with-openssl-rand-base64-32"

# Admin
ADMIN_EMAIL="admin@artemebel.ru"
ADMIN_PASSWORD="strong-password-here"

# Yandex
YANDEX_METRIKA_ID="ваш-id"

# Node
NODE_ENV="production"
PORT="3000"
```

### Генерация секретных ключей

```bash
# NEXTAUTH_SECRET
openssl rand -base64 32

# Or
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

---

## 📦 Обновление на production

### Vercel
```bash
git push origin main  # Автоматический деплой
```

### VPS
```bash
cd /var/www/Arte_Mebel
git pull origin main
npm install
npm run build
pm2 restart artemebel
```

### Docker
```bash
docker-compose down
docker-compose build prod
docker-compose up -d prod
```

---

## 🔍 Мониторинг

### PM2
```bash
pm2 status      # Статус
pm2 logs        # Логи
pm2 monit       # Мониторинг
pm2 restart all # Перезапуск
```

### Docker
```bash
docker-compose logs -f      # Логи
docker stats                # Использование ресурсов
docker-compose restart prod # Перезапуск
```

---

## 🛠️ Troubleshooting

### Порт занят
```bash
# Найти процесс
sudo lsof -i :3000

# Убить процесс
kill -9 PID
```

### Ошибки сборки
```bash
# Очистка
rm -rf .next node_modules
npm install
npm run build
```

### Проблемы с правами
```bash
sudo chown -R $USER:$USER /var/www/Arte_Mebel
```

---

## 📞 Поддержка

- Email: arte72@yandex.ru
- Telegram: @artemebel
- GitHub: https://github.com/BokalchikVina/Arte_Mebel

---

**Created with ❤️ by Arte Mebel**
*Входит в состав группы компаний ARTE GROUP*
