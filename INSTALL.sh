#!/bin/bash

# 🚀 Скрипт быстрой установки и запуска проекта
# Мебель на Заказ - iOS 18 Glass Style

echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "🪑  Мебель на Заказ - Установка"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""

# Проверка Node.js
echo "📦 Проверка Node.js..."
if ! command -v node &> /dev/null; then
    echo "❌ Node.js не установлен!"
    echo "Скачайте с https://nodejs.org"
    exit 1
fi

NODE_VERSION=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$NODE_VERSION" -lt 18 ]; then
    echo "⚠️  Требуется Node.js 18 или выше"
    echo "Текущая версия: $(node -v)"
    exit 1
fi

echo "✅ Node.js $(node -v)"
echo ""

# Установка зависимостей
echo "📦 Установка зависимостей..."
echo "Это может занять 1-2 минуты..."
echo ""

npm install

if [ $? -ne 0 ]; then
    echo "❌ Ошибка установки зависимостей"
    exit 1
fi

echo ""
echo "✅ Зависимости установлены!"
echo ""

# Создание .env.local если не существует
if [ ! -f ".env.local" ]; then
    echo "📝 Создание .env.local..."
    cp .env.example .env.local
    echo "✅ Создан .env.local (не забудьте настроить!)"
else
    echo "✅ .env.local уже существует"
fi

echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "✅  УСТАНОВКА ЗАВЕРШЕНА!"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo "🚀 Запустите проект командой:"
echo ""
echo "   npm run dev"
echo ""
echo "Затем откройте браузер на http://localhost:3000"
echo ""
echo "📚 Документация:"
echo "   • START_HERE.md - начните отсюда"
echo "   • QUICKSTART.md - быстрый старт"
echo "   • README.md - полное руководство"
echo ""
echo "⚙️  Не забудьте настроить:"
echo "   1. Контакты в lib/constants.ts"
echo "   2. Переменные в .env.local"
echo "   3. Товары в lib/mockData.ts"
echo ""
echo "Удачи! 🎉"
echo ""
