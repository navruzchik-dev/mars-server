const express = require('express');
const router = express.Router();
const Layout = require('../controllers/models/LayoutModels');
const { validationResult } = require('express-validator');

// Получить все layouts
router.get('/', async (req, res) => {
  try {
    const layouts = await Layout.find();
    return res.status(200).json(layouts);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Ошибка сервера. Попробуйте позже.' });
  }
});

// Создать новый layout
router.post('/', async (req, res) => {
  // Проверка на наличие ошибок в теле запроса
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const { title, description } = req.body;
    const newLayout = new Layout({ title, description });

    await newLayout.save();
    return res.status(201).json(newLayout);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Ошибка сервера. Попробуйте позже.' });
  }
});

// Обновить layout
router.put('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    // Проверка существования layout
    const layout = await Layout.findById(id);
    if (!layout) {
      return res.status(404).json({ message: 'Layout не найден' });
    }

    const updatedLayout = await Layout.findByIdAndUpdate(id, req.body, { new: true });
    return res.status(200).json(updatedLayout);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Ошибка сервера. Попробуйте позже.' });
  }
});

// Удалить layout
router.delete('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    // Проверка существования layout
    const layout = await Layout.findById(id);
    if (!layout) {
      return res.status(404).json({ message: 'Layout не найден' });
    }

    await Layout.findByIdAndDelete(id);
    return res.status(200).json({ message: 'Layout успешно удален' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Ошибка сервера. Попробуйте позже.' });
  }
});

module.exports = router;
