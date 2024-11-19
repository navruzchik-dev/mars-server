const express = require('express');
const { getLayouts, createLayout, updateLayout, deleteLayout } = require('../controllers/LayoutController');
const router = express.Router();

// Get all layouts
router.get('/', getLayouts);

// Create a new layout (through admin dashboard)
router.post('/create', createLayout);

// Update a layout by ID
router.put('/update/:id', updateLayout);

// Delete a layout by ID
router.delete('/delete/:id', deleteLayout);

module.exports = router;
