const { Event, EventGroup } = require('../models');

const index = (req, res) => {
  console.log('events')
  return Event
    .all()
    .then(events => res.status(200).send(events))
    .catch(error => res.status(400).send(error));
};

const show = (req, res) => {
  Event
    .findById(req.params.eventId)
    .then(event => {
      if (event) {
        return res.status(200).send(event);
      } else {
        return res.status(404).send({ message: 'Event Not Found' });
      }
    })
    .catch(error => res.status(400).send(error));
};

const create = (req, res) => {
  console.log('creating event')
  if (!EventGroup.findById(req.params.eventGroupId)) return res.status(404).send({ message: 'Invalid Event Group' });
  return Event
    .create({
      type: req.body.type,
      locationName: req.body.locationName,
      address: req.body.address,
      city: req.body.city,
      state: req.body.state,
      zip: req.body.zip,
      locationName: req.body.locationName,
      eventGroupId: req.params.eventGroupId,
    })
    .then(event => res.status(201).send(event))
    .catch(error => res.status(400).send(error));
};

const eventsController = {
  index,
  show,
  create,
};

module.exports = eventsController;
