const express = require('express');

const router = express.Router();
const eventGroupsController = require('../controllers/event_groups');
const eventsController = require('../controllers/events');

router
  .post('eventGroups/:eventGroupId/events', eventsController.create)
  .post('/eventGroups', eventGroupsController.create)
  .get('/working', (req, res) => {console.log('working');res.status(200).send({yes: "yup"})})
  .get('/eventGroups/:eventGroupId', eventGroupsController.show)
  .get('/eventGroups', eventGroupsController.index)
  .get('/events/:eventId', eventsController.show)
  .get('/events', eventsController.index)

module.exports = router;
