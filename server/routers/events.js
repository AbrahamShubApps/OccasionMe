const express = require('express');

const router = express.Router();
const eventsController = require('../controllers/events');

router
  .get('', eventsController.all)
  .get('/:id', eventsController.show);

module.exports = router;
