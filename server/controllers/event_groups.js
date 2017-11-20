// const sampleEvent = {
//   id: 1,
//   hostName: "Hyme Cohen",
//   title: "Sarah and Avraham's wedding",
//   events: [
//     {
//       id: 312,
//       type: 'Chupah',
//       locationName: '770',
//       address: '770 Eastern Parkway',
//       city: 'Brooklyn',
//       state: 'NY',
//       zip: '11213',
//       coords: {
//         lat: 40.6690,
//         lng: -73.9429,
//       },
//     },
//     {
//       id: 345,
//       type: 'Reception',
//       locationName: 'RAZAG Ballroom',
//       address: '739 E New York Ave',
//       city: 'Brooklyn',
//       state: 'NY',
//       zip: '11203',
//       coords: {
//         lat: 40.6625,
//         lng: -73.9380,
//       },
//     },
//   ],
// }

// const sampleEvents = { 1: sampleEvent}

const { EventGroup, Event } = require('../models');

const withEvents = { 
  include: [{
    model: Event,
    as: 'events',
  }] 
}
const index = (req, res) => {
  return EventGroup
    .findAll(withEvents)
    .then(eventGroup => res.status(200).send(eventGroup))
    .catch(error => res.status(404).send(error))
};

const show = (req, res) => {
  return EventGroup
    .findById(req.params.eventGroupId, withEvents)
    .then(eventGroup => res.status(200).send(eventGroup))
    .catch(error => res.status(404).send(error))
};

const create = (req, res) => {
  return EventGroup.create({
      title: req.body.title,
      hostName: req.body.hostName,
    })
    .then(eventGroup => res.status(201).send(eventGroup))
    .catch(error => res.status(401).send(error))
};

module.exports = {
  index,
  show,
  create,
};
