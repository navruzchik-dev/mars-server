const express = require('express');
const { getApplications } = require('../controllers/ApplicationsControllers');

const router = express.Router();

router.get('/', getApplications);

module.exports = router;
