const User = require('../controllers/models/LoginPaswordModels');

// Add user
exports.addUser = async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = new User({ username, password });
    await user.save();
    res.status(201).json({ message: 'Пользователь успешно добавлен' });
  } catch (error) {
    res.status(500).json({ message: 'Ошибка при добавлении пользователя', error });
  }
};

// Delete user
exports.deleteUser = async (req, res) => {
  const { username } = req.params;
  try {
    const user = await User.findOneAndDelete({ username });
    if (!user) {
      return res.status(404).json({ message: 'Пользователь не найден' });
    }
    res.status(200).json({ message: 'Пользователь удалён' });
  } catch (error) {
    res.status(500).json({ message: 'Ошибка при удалении пользователя', error });
  }
};

// Update password
exports.updatePassword = async (req, res) => {
  const { username, newPassword } = req.body;
  try {
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(404).json({ message: 'Пользователь не найден' });
    }
    user.password = newPassword;
    await user.save();
    res.status(200).json({ message: 'Пароль успешно обновлён' });
  } catch (error) {
    res.status(500).json({ message: 'Ошибка при обновлении пароля', error });
  }
};

// Login user
exports.login = async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(404).json({ message: 'Неверное имя пользователя' });
    }

    const isMatch = await user.matchPassword(password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Неверный пароль.' });
    }

    res.status(200).json({ message: 'Авторизация успешна.' });
  } catch (error) {
    res.status(500).json({ message: 'Ошибка сервера.', error });
  }
};

// Get all users
exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find({}, 'username password');
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: 'Ошибка при получении пользователей', error });
  }
};
