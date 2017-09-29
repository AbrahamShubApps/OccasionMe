const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.get('/', (req, res) => {
  res.json({testing: 'successfully tested again'});
})

app.listen(3000, () => {
  console.log('listening on port 3000');
})
