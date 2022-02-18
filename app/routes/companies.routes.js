const express = require('express');
const router = express.Router();

const controller = require('../controllers/companies.controller.js');

router.get('/companies', controller.companies);

module.exports = router;
