const express = require('express');
const router = express.Router();

const controller = require('../controllers/assets.controller.js');

router.get('/assets', controller.getAllVehicles);
router.get('/assets/:organizationId', controller.getVehicles);

module.exports = router;
