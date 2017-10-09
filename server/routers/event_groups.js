const express = require('express');

const router = express.Router();
const eventGroupController = require('../controllers/event_groups');

router
  .get('/:id', eventGroupController.show)

module.exports = router;
