// dependencies
const express = require('express');
const bodyParser = require('body-parser');

const eventsRouter = require('./routers/events');
const eventGroupsRouter = require('./routers/event_groups');

const app = express();

app.use(express.static(`${__dirname}/../web_app/dist`));

app.use('/api/events', eventsRouter);
app.use('/api/eventGroups', eventGroupsRouter);

app.listen(3000, () => {
  console.log('listening on port 3000');
})
