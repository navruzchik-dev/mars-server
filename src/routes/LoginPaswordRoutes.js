// routes/LoginPaswordRoutes.js

const express = require('express');
const router = express.Router();
const { 
  addUser,           // Функция для добавления пользователя
  deleteUser,        // Функция для удаления пользователя
  updatePassword,    // Функция для обновления пароля
  login,             // Функция для авторизации
  getAllUsers,       // Функция для получения всех пользователей (имя и пароль)
} = require('../controllers/LoginPaswordController'); // Убедитесь, что путь правильный

// Определение маршрутов
router.post('/add', addUser);           // Маршрут для добавления пользователя
router.delete('/delete/:username', deleteUser); // Маршрут для удаления пользователя по имени
router.put('/update', updatePassword);  // Маршрут для обновления пароля
router.post('/login', login);           // Маршрут для авторизации
router.get('/get', getAllUsers);        // Маршрут для получения всех пользователей (имена и пароли)

// Экспорт маршрутов
module.exports = router;
