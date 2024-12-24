const express = require('express');
const cors = require('cors');
const connectDB = require('./config/database');
const ApplicationRoutes = require('./routes/ApplicationsRoutes');
const LoginPaswordRoutes = require('./routes/LoginPaswordRoutes');
const LayoutsRoutes = require('../src/routes/LayoutRoutes');
require('dotenv').config();

const app = express();

// Подключаем CORS
app.use(
  cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
  })
);

// Middleware для обработки JSON
app.use(express.json());

// Подключение базы данных
connectDB();

// Подключение маршрутов
app.use('/api/applications', ApplicationRoutes);
app.use('/api/login', LoginPaswordRoutes);
app.use('/api/layouts', LayoutsRoutes);

// Убедимся, что путь для Layout корректен
try {
  const LayoutsRoutes = require('./routes/LayoutsRoutes'); // Убедитесь, что файл действительно существует
  app.use('/api/layouts', LayoutsRoutes);
} catch (error) {
  console.error('Ошибка подключения LayoutsRoutes:', error.message);
}

// Запуск сервера
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Сервер запущен на порту ${PORT}`);
});
