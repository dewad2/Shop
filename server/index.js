const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const volleyball = require('volleyball');
const app = express();
module.exports = app;

app.use(volleyball);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, '..', 'client', 'public')));

app.use('/api', require('./api'));

app.get('/', (req, res, next) => {
  res.sendFile(path.join(__dirname, '..', 'client', 'public', 'index.html'));
});

app.use((req, res, next) => {
  const error = new Error('404 page not found');
  next(error);
});

app.use((err, req, res, next) => {
  console.error(err, typeof next);
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || 'Internal server error.');
});
