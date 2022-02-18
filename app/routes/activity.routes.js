const express = require('express')

const router = express.Router();

const controller =require('../controllers/activity.controller.js');

router.get('/activityList', controller.getActivityList)

router.post('/activityHistory', controller.getActivityHistory)

router.post('/updateActivity', controller.updateActivity)
module.exports = router;



