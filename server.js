/* eslint import/no-unresolved: 0 */

const express = require('express');

const app = express();

app.listen(5000, () => {
  console.log('App listening on port 5000');
});

app.get('/', (req, res) => {
  res.send('On Home');
});

app.get('/dash', (req, res) => {
  res.send('On Dashboard');
});

module.exports.app = app;
