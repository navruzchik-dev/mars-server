const express = require('express');
const cors = require('cors');
const connectDB = require('./config/database');
const ApplicationRoutes = require('./routes/ApplicationsRoutes');
const LayoutsRoutes = require("./routes/LayoutRoutes")
// const HeaderLayoutsRoutes = require("./routes/HeaderLayoutsRoutes")

const app = express();

// Подключаем CORS
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true,
}));

app.use(express.json());

connectDB();

app.use('/api/applications', ApplicationRoutes);
app.use('/api/layouts', LayoutsRoutes)
// app.use('/api/header-layouts', HeaderLayoutsRoutes)

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Сервер запущен на порту ${PORT}`);
});
