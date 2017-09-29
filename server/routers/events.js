const express = require('express');

const router = express.Router();
const eventsController = require('./events_controller');

router.get('/events', eventsController.all)

module.exports = router;
