#!/bin/bash

# 🐳 Скрипт быстрого запуска Docker контейнера
# Мебель на Заказ - iOS 18 Glass Style

echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "🐳  Мебель на Заказ - Docker"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""

# Проверка Docker
if ! command -v docker &> /dev/null; then
    echo "❌ Docker не установлен!"
    echo "Скачайте с https://docker.com"
    exit 1
fi

echo "✅ Docker установлен"
echo ""

# Меню выбора
echo "Выберите режим запуска:"
echo ""
echo "1) Development (с hot reload)"
echo "2) Production (оптимизированная сборка)"
echo "3) Остановить контейнеры"
echo "4) Удалить контейнеры и образы"
echo ""
read -p "Ваш выбор (1-4): " choice

case $choice in
    1)
        echo ""
        echo "🚀 Запуск Development режима..."
        echo ""
        docker-compose up dev
        ;;
    2)
        echo ""
        echo "🚀 Запуск Production режима..."
        echo ""
        docker-compose up --build prod
        ;;
    3)
        echo ""
        echo "🛑 Остановка контейнеров..."
        docker-compose down
        echo "✅ Контейнеры остановлены"
        ;;
    4)
        echo ""
        echo "🗑️  Удаление контейнеров и образов..."
        docker-compose down -v
        docker rmi furniture-store:dev furniture-store:prod 2>/dev/null
        echo "✅ Очистка завершена"
        ;;
    *)
        echo "❌ Неверный выбор"
        exit 1
        ;;
esac

echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "Сайт доступен на: http://localhost:3000"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
