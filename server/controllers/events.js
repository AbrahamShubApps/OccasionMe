const sampleEvents = [
  {
    location: 'The Marriot Ballroom',
  },
  {
    location: 'Ritz Carlton'
  }
]

const all = (req, res) => {
  res.json({events: sampleEvents})
}
const show = (req, res) => {
  res.json(sampleEvents[req.params.id])
}

const eventsController = {
  all,
  show,
}

module.exports = eventsController;
