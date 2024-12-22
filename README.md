# Teach Website

**Teach Website** — это веб-приложение, предназначенное для обучения программированию.

## Функциональность

- **Интерактивные уроки**: Пошаговые руководства по различным языкам программирования.
- **Практические задания**: Возможность закрепить знания на практике.
- **Трекер прогресса**: Отслеживание вашего обучения и достижений.

## Технологии

- **Frontend**: React, React-Bootstrap, TypeScript
- **Backend**: Node.js, Express
- **База данных**: MongoDB

## Установка

1. Клонируйте репозиторий:

   ```bash
   git clone https://github.com/RePadaZ/teach-website.git
   ```

2. Установите зависимости для фронтенда и бэкенда:

   ```bash
   cd teach-website/frontend
   pnpm install
   cd ./backend/
   pnpm install
   cd ./frontend/
   pnpm install
   ```

3. Создайте файл `.env` в директории `backend` и добавьте необходимые переменные окружения:

   ```
   PORT=5000
   MONGODB_URI=your_mongodb_uri
   ```

4. Запустите сервер и клиент:

   ```bash
   # В директории backend
   npm start

   # В другой вкладке терминала, в директории frontend
   npm start
   ```

## Вклад в проект

Мы приветствуем вклад сообщества! Пожалуйста, следуйте стандартному процессу fork & pull request. Убедитесь, что ваш код соответствует нашим стандартам и содержит необходимые тесты.

## Лицензия

Этот проект лицензирован под лицензией MIT.

## Контакты

Если у вас есть вопросы или предложения, пожалуйста, создайте issue в этом репозитории. 
