const express = require('express');
const {
    getApplications,
    createOrUpdateLayout,
    updateLayout,
    deleteLayout,
  } = require('../controllers/ApplicationsControllers');

const router = express.Router();

router.get('/', getApplications);
router.post('/create', createOrUpdateLayout);
router.put('/update-status/:id', updateLayout);
router.delete('/delete/:id', deleteLayout);

module.exports = router;