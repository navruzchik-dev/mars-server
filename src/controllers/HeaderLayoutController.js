const express = require('express');
const Layout = require('../models/LayoutModels'); // Assuming Layout model is defined as in the previous step

const router = express.Router();

// GET method to fetch the header layout
router.get('/layout', async (req, res) => {
  try {
    const layout = await Layout.findOne({ layoutName: 'mars-header' });
    
    if (!layout) {
      return res.status(404).json({ message: 'Layout not found' });
    }

    res.status(200).json(layout);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// POST method to create or update the header layout
router.post('/layout', async (req, res) => {
  try {
    // Destructure data from request body
    const { layoutName, layoutObject } = req.body;

    // Check if layoutName already exists
    let layout = await Layout.findOne({ layoutName });

    if (layout) {
      layout.layoutObject = layoutObject;
      await layout.save();
      return res.status(200).json({ message: 'Layout updated successfully', layout });
    } else {
      layout = new Layout({ layoutName, layoutObject });
      await layout.save();
      return res.status(201).json({ message: 'Layout created successfully', layout });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
