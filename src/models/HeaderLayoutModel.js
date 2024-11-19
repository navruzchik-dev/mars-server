const mongoose = require('mongoose');

const layoutObjectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  tags: { type: [String], required: true },
  buttonText: { type: String, required: true },
  image: { type: String, required: true },
  statistics: { type: String, required: true },
  phone: { type: String, required: true },
  workingHours: { type: String, required: true },
  languages: { type: [String], required: true },
});

const layoutSchema = new mongoose.Schema({
  layoutName: { type: String, required: true },
  layoutObject: { type: layoutObjectSchema, required: true },
});

const Layout = mongoose.model('Layout', layoutSchema);

module.exports = Layout;
