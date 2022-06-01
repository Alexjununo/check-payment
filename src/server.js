/* eslint-disable no-console */
const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();
const port = 8080;

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(port, (err) => {
  if (!err) {
    console.log('🚀 ~ file: server.js ~ Running in port: ', port);
  } else {
    console.log('🚀 ~ file: server.js ~ line 13 ~ err', err);
  }
});
