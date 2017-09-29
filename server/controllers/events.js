const eventsController = {
  all: (req, res) => {
    return res.json({events: ['event 1', 'event 2', 'etc']})
  },
}

module.exports = eventsController;
