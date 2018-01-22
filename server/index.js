if (process.env.NODE_ENV !== 'production') {
  require('dotenv').load();
}

// dependencies
const express = require('express');
const bodyParser = require('body-parser');

const routes = require('./routers');

const app = express();

app.use(express.static(`${__dirname}/../web_client/build`));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api', routes);
console.log('Environment vars: ', process.env);
app.listen(process.env.PORT || 3000, () => {
  console.log(`listening on port ${process.env.PORT || 3000}`);
});
