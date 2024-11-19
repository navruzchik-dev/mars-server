const express = require('express');
const { getLayout, createOrUpdateLayout, updateLayout, deleteLayout, } = require('../controllers/HeaderLayoutController');
const router = express.Router();

// Get all layouts
router.get('/', getLayout);

// Create a new layout (through admin dashboard)
router.post('/create', createOrUpdateLayout);

// Update a layout by ID
router.put('/update/:id', updateLayout);

// Delete a layout by ID
router.delete('/delete/:id', deleteLayout);

module.exports = router;
