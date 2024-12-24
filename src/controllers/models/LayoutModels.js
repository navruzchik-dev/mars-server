const mongoose = require('mongoose');

const layoutSchema = new mongoose.Schema({
  title: {
    type: String, 
    required: true,
  },
  description: {
    type: String,
    required: true,
  }
});

module.exports = mongoose.model('Layout', layoutSchema);
