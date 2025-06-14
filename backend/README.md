# AgroVision Backend

Бэкенд для платформы умного фермерства AgroVision.

## Установка

1. Установите зависимости:
```bash
npm install
```

2. Создайте файл .env на основе .env.example:
```bash
cp .env.example .env
```

3. Настройте переменные окружения в файле .env

## Запуск

Для разработки:
```bash
npm run dev
```

Для продакшена:
```bash
npm run build
npm start
```

## API Endpoints

### Аутентификация
- POST /api/auth/register - Регистрация
- POST /api/auth/login - Вход

### Продукты
- GET /api/products - Получить все продукты
- GET /api/products/:id - Получить продукт по ID
- POST /api/products - Создать продукт (требуется авторизация)
- PUT /api/products/:id - Обновить продукт (требуется авторизация)
- DELETE /api/products/:id - Удалить продукт (требуется авторизация)

## Технологии
- Node.js
- Express
- TypeScript
- MongoDB
- JWT для аутентификации 